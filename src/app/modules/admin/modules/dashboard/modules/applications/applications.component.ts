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
import { STATUS } from 'src/app/shared/constants';
import { CertificateService } from 'src/app/modules/main/components/get-sertificate/services/certificate.service';
import { map } from 'rxjs';
import { downloadFile } from 'src/app/modules/main/components/get-sertificate/get-sertificate.component';
import * as FileSaver from 'file-saver';
import { read, utils, writeFile } from 'xlsx';

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
   * @param cd
   */
  constructor(
    private $applications: ApplicationsService,
    private $regionAndDistrict: RegionsAndDistrictsService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private $certificate: CertificateService
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
      l_name: [editingData?.l_name, [Validators.required]],
      f_name: [editingData?.f_name, [Validators.required]],
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
      this.selectedRegion = data.region_id;
      this.filterDistrictsByRegion(this.selectedRegion);
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

  // exportExcel() {
  //   import('xlsx').then((xlsx) => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.data); // Sale Data
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //     const excelBuffer: any = xlsx.write(workbook, {
  //       bookType: 'xlsx',
  //       type: 'array',
  //     });
  //     this.saveAsExcelFile(excelBuffer, 'sales');
  //   });
  // }
  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   let EXCEL_TYPE =
  //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //   let EXCEL_EXTENSION = '.xlsx';
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE,
  //   });
  //   FileSaver.saveAs(
  //     data,
  //     fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
  //   );
  // }

  exportExcel() {
    const headers = [
      [
        'ID пользователя',
        'Имя',
        'Фамилия',
        'Организация',
        'Сфера деятельности',
        'Номер сертификата',
        'Статус заявки',
        'Номер телефона',
        'Район ID',
        'Район',
        'Регион ID',
        'Регион',
      ],
    ];

    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headers);
    utils.sheet_add_json(ws, this.data, {
      origin: 'A2',
      skipHeader: true,
    });
    utils.book_append_sheet(wb, ws, 'Arizalar');
    writeFile(wb, 'suvchilar-maktabi.xlsx')
  }
}
