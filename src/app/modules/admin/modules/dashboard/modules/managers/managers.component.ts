import { Constants } from '../../../../../../../../projects/ngx-ou-grid/src/lib/utilits/constants';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ManagersService } from './services/managers.service';
import { Manager } from './models/mangers.response';
import { Observable, map, tap } from 'rxjs';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { RegionsAndDistrictsService } from 'src/app/modules/main/components/application-form/services/regions-and-districts.service';
import { Region } from 'src/app/modules/main/components/application-form/models/region-and-districts.response';
import { BaseResponse, columnFactory } from 'ngx-ou-grid';
import { CRUD, Language } from 'projects/ngx-ou-grid/src/public-api';
import { ManagerRequest } from './models/manager.request';
import { AddEditManagerComponent } from './add-edit-manager/add-edit-manager.component';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersComponent
  extends CRUD<Manager, ManagerRequest>
  implements OnInit
{
  /**
   *
   */
  addEditModal = AddEditManagerComponent;

  /**
   *
   */
  regions$!: Observable<Region[]>;

  /**
   *
   * @param $managers
   * @param fb
   * @param cd
   * @param $regions
   */
  constructor(
    protected $managers: ManagersService,
    private fb: UntypedFormBuilder,
    private $regions: RegionsAndDistrictsService
  ) {
    super($managers);
    this.searchInputConfig.keys = ['f_name', 'l_name'];
  }

  /**
   *
   */
  private getRegions() {
    this.regions$ = this.$regions
      .getRegionAndDistricts()
      .pipe(map((result) => result.data));
  }

  /**
   *
   */
  ngOnInit() {
    super.onInit();
    this.getRegions();
  }

  /**
   *
   */
  override makeColumnsForGrid(): void {
    this.columns = [
      columnFactory({
        field: 'id',
        sortable: true,
        sortByLocalCompare: false,
        nzLeft: true,
      }),
      columnFactory({
        header: 'name',
        field: 'f_name',
        template: 'custom',
      }),
      columnFactory({
        field: 'phone',
      }),
      columnFactory({
        field: 'login',
      }),
    ];

    this.makeWidthConfig();
  }

  /**
   *
   */
  override makeWidthConfig(): void {
    this.nzWidthConfig = [
      '100px',
      '200px',
      '200px',
      '200px',
      '200px', // actions
    ];
  }

  /**
   *
   * @returns
   */
  override getModalComponentParams() {
    return {
      ...super.getModalComponentParams(),
      regions$: this.regions$,
    };
  }
}
