import {
  District,
  Region,
} from './../../../../../main/components/application-form/models/region-and-districts.response';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ApplicationsService } from './services/applications.service';
import { Application } from './models/application.response';
import { RegionsAndDistrictsService } from 'src/app/modules/main/components/application-form/services/regions-and-districts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STATUS } from 'src/app/shared/constants';
import { CertificateService } from 'src/app/modules/main/components/get-sertificate/services/certificate.service';
import { map } from 'rxjs';
import { downloadFile } from 'src/app/modules/main/components/get-sertificate/get-sertificate.component';
import { ExportAsExcellService } from './services/exportAsExcell.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

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
   *
   */
  searchText = '';

  /**
   */
  form!: FormGroup;

  /**
   *
   */
  regions!: Region[];

  /**
   *
   */
  districtFromRegion!: District[];

  /**
   *
   */
  id!: number;

  /**
   *
   */
  selectedRegion!: number;

  /**
   *
   */
  STATUS = STATUS;

  /**
   *
   */
  tableLoading = false;

  /**
   *
   * @param $applications
   * @param $regionAndDistrict
   * @param fb
   * @param cd
   * @param $certificate
   * @param $importAsExcel
   */
  constructor(
    private $applications: ApplicationsService,
    private $regionAndDistrict: RegionsAndDistrictsService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private $certificate: CertificateService,
    private $importAsExcel: ExportAsExcellService
  ) {}

  /**
   *
   */
  private getApplications() {
    this.tableLoading = true;
    this.$applications.getApplicationsList().subscribe((result) => {
      this.data = result.data;
      this.tableLoading = false;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private getDistricts() {
    this.$regionAndDistrict.getRegionAndDistricts().subscribe((result) => {
      this.regions = result.data;
      this.regions.forEach((region) => {
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
      phone: [editingData?.phone, [Validators.required]],
      full_name: [editingData?.full_name, [Validators.required]],
      farm_name: [editingData?.farm_name, [Validators.required]],
      district_id: [editingData?.district_id, [Validators.required]],
      farm_type: [editingData?.farm_type, [Validators.required]],
    });
  }

  /**
   *
   * @param regionId
   */
  private filterDistrictsByRegion(regionId: number) {
    const reg = this.regions.filter((el) => el.id === regionId);
    this.districtFromRegion = reg[0].districts;
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getApplications();
    this.editingData();
    this.getDistricts();
  }

  /**
   *
   * @param data
   */
  addEditData(data?: Application) {
    if (data) {
      this.editingData(data);
      this.id = data.id;
      if (data.region_id) {
        this.selectedRegion = data.region_id;
        this.filterDistrictsByRegion(this.selectedRegion);
      }
    }
    this.isVisible = true;
    this.cd.markForCheck();
  }

  /**
   *
   * @param data
   */
  approve(data: Application) {
    data.status = STATUS.STATUS_CERTIFICATE_GIVEN;
    this.$applications.edit(data).subscribe();
  }

  /**
   *
   * @param data
   * @returns
   */
  download(data: Application) {
    const request = {
      certificate_id: data.certificate_id,
    };
    return this.$certificate.getCertificate(request).pipe(
      map((blob: Blob) => {
        downloadFile(blob, data.certificate_id);
        this.cd.markForCheck();
        return data;
      })
    );
  }

  /**
   *
   */
  handleOk() {
    if (this.id) {
      const request = this.form.getRawValue();
      request.id = this.id;

      this.$applications.edit(request).subscribe((result) => {
        if (result.success) {
          this.isVisible = false;
          this.getApplications();
          this.cd.markForCheck();
        }
      });
    }
  }

  /**
   *
   */
  handleCancel() {
    this.isVisible = false;
    this.form.reset();
  }

  /**
   *
   * @param region
   */
  regionChange(regionId: number) {
    this.form.controls['district_id'].reset();
    this.filterDistrictsByRegion(regionId);
    this.cd.markForCheck();
  }

  /**
   *
   * @param type
   * @returns
   */
  detectFarmType = (type: number): string => {
    switch (type) {
      case 1:
        return 'Пахтачилик/ғаллачилик';

      case 2:
        return 'Боғдорчилик/Узумчилик';

      case 3:
        return 'Сабзавотлар/Илдиз сабзавотлари';

      case 4:
        return 'Сабзавотлар/ғаллачилик';

      default:
        return 'Бошқа';
    }
  };

  /**
   *
   * @param status
   * @returns
   */
  detectStatus = (status: number): string => {
    switch (status) {
      case 1:
        return 'Рўйхатдан ўтмоқда';
      case 2:
        return 'Сўровнома тўлдирилди';
      case 3:
        return 'Сертификат тайёр';
      case 4:
        return 'Блокланган';

      default:
        return '';
    }
  };

  /**
   *
   * @param status
   * @returns
   */
  detectPosition = (status: number): string => {
    switch (status) {
      case 1:
        return 'Хўжалик раҳбари';
      case 2:
        return 'Ишчи';
      case 3:
        return 'Сувчи';
      case 4:
        return 'Ирригатор';
      case 5:
        return 'Банк ходими';
      case 6:
        return 'Бошқа';

      default:
        return '';
    }
  };

  /**
   *
   */
  exportExcel() {
    const dataForExcel = this.data.map((el) => {
      const newData = {
        full_name: el.full_name,
        farm_name: el.farm_name,
        phone: el.phone,
        farm_type: this.detectFarmType(el.farm_type),
        position: this.detectPosition(el.position),
        region_name: el.region_name,
        district_name: el.district_name,
        device_type: el.device_type,
        created_at: new Date(el.created_at).toLocaleString(),
        status: this.detectStatus(el.status),
        certificate_id: el.certificate_id,
      };

      return newData;
    });

    const headers = [
      [
        'ФИО',
        'Организация',
        'Номер телефона',
        'Сфера деятельности',
        'Должность',
        'Район',
        'Регион',
        'Платформа регистрации',
        'Дата регистрации',
        'Статус сертификата',
        'Номер сертификата',
      ],
    ];

    this.$importAsExcel.exportAsExcell(dataForExcel, headers);
  }

  /**
   *
   * @param id
   */
  deleteApplication(id: number) {
    this.$applications.deleteApplication(id).subscribe(() => {
      this.getApplications();
      this.cd.markForCheck();
    });
  }
}
