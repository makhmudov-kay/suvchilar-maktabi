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

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersComponent implements OnInit {
  /**
   *
   */
  tableLoading = false;

  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  searchText = '';

  /**
   *
   */
  data$!: Observable<Manager[]>;

  /**
   *
   */
  form!: UntypedFormGroup;

  /**
   *
   */
  id!: number;

  /**
   *
   */
  modalTitle = 'add';

  /**
   *
   * @param $managers
   * @param cd
   */
  constructor(
    private $managers: ManagersService,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private getManagersList() {
    this.tableLoading = true;

    this.data$ = this.$managers.getManagersList().pipe(
      map((result) => {
        this.tableLoading = false;
        return result.data;
      })
    );
  }

  /**
   *
   * @param form
   */
  private markAllAsDirty(form: UntypedFormGroup) {
    Object.values(form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  /**
   *
   * @param editingData
   */
  private initForm(editingData?: Manager) {
    this.form = this.fb.group({
      f_name: [editingData?.f_name, [Validators.required]],
      l_name: [editingData?.l_name, [Validators.required]],
      login: [editingData?.login, [Validators.required]],
      phone: [editingData?.phone, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.getManagersList();
    this.initForm();
  }

  /**
   *
   * @param control
   * @returns
   */
  confirmationValidator = (
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
   */
  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.form.controls['checkPassword'].updateValueAndValidity()
    );
  }

  /**
   *
   */
  showModal(editingData?: Manager) {
    if (editingData) {
      this.modalTitle = 'edit';
      this.id = editingData.id;
      this.initForm(editingData);
    }
    this.isVisible = true;
    this.cd.markForCheck();
  }

  /**
   *
   * @returns
   */
  handleOk() {
    if (this.form.invalid) {
      this.markAllAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();

    if (this.id) {
      // EDIT
      return;
    }

    this.isVisible = false;
  }

  deleteManager(id: number) {
    console.log(id);
  }

  /**
   *
   */
  handleCancel() {
    this.isVisible = false;
  }
}
