import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAddEdit, addPrefixToPhoneNumber } from 'ngx-ou-grid';
import { Manager } from '../models/mangers.response';
import { ManagerRequest } from '../models/manager.request';
import { UntypedFormControl, Validators } from '@angular/forms';
import { ManagersService } from '../services/managers.service';
import { Region } from 'src/app/modules/main/components/application-form/models/region-and-districts.response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-manager',
  templateUrl: './add-edit-manager.component.html',
  styleUrls: ['./add-edit-manager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditManagerComponent extends BaseAddEdit<
  Manager,
  ManagerRequest
> {
  /**
   *
   */
  @Input()
  regions$!: Observable<Region[]>;

  /**
   *
   * @param $data
   */
  constructor(protected override $data: ManagersService) {
    super($data);
  }

  /**
   *
   * @param control
   * @returns
   */
  private confirmationValidator = (
    control: UntypedFormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  /**
   *
   * @param model
   */
  override initForm(model?: Manager) {
    this.form = this.fb.group({
      f_name: [model?.f_name, [Validators.required]],
      l_name: [model?.l_name, [Validators.required]],
      login: [model?.login, [Validators.required]],
      phone: [model?.phone ? (model?.phone % 1000000000).toString() : '', [Validators.required]],
      region_id: [model?.region_id, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  /**
   *
   */
  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.form.controls['checkPassword'].updateValueAndValidity()
    );
  }

  /**
   *
   * @returns
   */
  override getRequest() {
    const request = this.form.getRawValue();
    addPrefixToPhoneNumber(request);
    return request;
  }
}
