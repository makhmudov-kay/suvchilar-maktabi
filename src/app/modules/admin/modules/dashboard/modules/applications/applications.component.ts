import {
  District,
  Region,
} from './../../../../../main/components/application-form/models/region-and-districts.response';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ApplicationsService } from './services/applications.service';
import { Application } from './models/application.response';
import { RegionsAndDistrictsService } from 'src/app/modules/main/components/application-form/services/regions-and-districts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsComponent implements OnInit {
  /**
   */
  isVisible = false;

  /**
   */
  data!: Application[];

  /**
   */
  districts: District[] = [];

  /**
   */
  form!: FormGroup;

  /**
   *
   */
  region!: Region[];

  /**
   *
   */
  districtFromRegion!: District[];

  /**
   *
   */
  selectedRegion!: number;

  /**
   *
   * @param $applications
   * @param $regionAndDistrict
   * @param cd
   */
  constructor(
    private $applications: ApplicationsService,
    private $regionAndDistrict: RegionsAndDistrictsService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private getApplications() {
    this.$applications.getApplicationsList().subscribe((result) => {
      this.data = result.data;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private getDistricts() {
    this.$regionAndDistrict.getRegionAndDistricts().subscribe((result) => {
      const regions = result.data;
      regions.forEach((region) => {
        region.districts.forEach((el) => {
          this.districts.push(el);
        });
      });
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private editingData(editingData?: Application) {
    this.form = this.fb.group({
      phone: [editingData?.phone],
      l_name: [editingData?.l_name],
      f_name: [editingData?.f_name],
      farm_name: [editingData?.farm_name],
      district_id: [editingData?.district_id],
      farm_type: [editingData?.farm_type],
    });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getDistricts();
    this.getApplications();
    this.editingData();
  }

  /**
   *
   * @param districtId
   * @returns
   */
  filteredDistrict(districtId: number) {
    const district = this.districts.find((el) => el.id === districtId);

    this.cd.markForCheck();
    if (district) {
      return district.name;
    }
    return;
  }

  edit(data: Application) {
    this.isVisible = true;
    this.editingData(data);
    this.cd.markForCheck();
  }

  handleOk() {
    this.isVisible = false;
  }

  handleCancel() {
    this.isVisible = false;
  }

  /**
   *
   * @param region
   */
  regionChange(region: Region) {
    this.districtFromRegion = region.districts;
    this.cd.markForCheck();
  }
}
