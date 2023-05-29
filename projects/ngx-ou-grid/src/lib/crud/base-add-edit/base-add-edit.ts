import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { takeUntil, tap } from 'rxjs';
import { ICreateUpdate } from '../../services/interfaces/ICreateUpdate';
import { markAllAsDirty } from '../../utilits/utilits';
import { IBaseAddEdit } from './base-add-edit.interface';
import { NgDestroy } from '../../services/ng-destroy.service';
import { inject } from '@angular/core';

export class BaseAddEdit<TResponse, TBody, TEditingData = TResponse>
  implements IBaseAddEdit<TEditingData>
{
  /**
   *
   */
  errorMessage!: string;

  /**
   *
   */
  private _editingData?: TEditingData;
  public set editingData(v: TEditingData | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): TEditingData | undefined {
    return this._editingData;
  }

  /**
   *
   */
  form!: UntypedFormGroup;

  fb = inject(UntypedFormBuilder);
  $destroy = inject(NgDestroy);

  /**
   *
   * @param fb
   * @param $data
   * @param $destroy
   */
  constructor(protected $data: ICreateUpdate<TResponse, TBody>) {}

  /**
   *
   */
  protected init() {
    this.initForm(this.editingData);
  }

  /**
   *
   * @returns
   */
  public submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.getRequest();
    const id = (this.editingData as NzSafeAny)?.id;
    if (id) {
      this.edit(id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   * @returns
   */
  protected getRequest() {
    return this.form.getRawValue();
  }

  /**
   *
   */
  private add(request: TBody) {
    this.$data
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.doAfterSuccess();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: TBody) {
    this.$data
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.doAfterSuccess();
          } else {
            this.errorMessage = result.error.message;
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  protected doAfterSuccess() {
    this.refresh();
    this.close();
    this.initForm();
  }

  /**
   *
   * @param model
   */
  initForm(model?: TEditingData | undefined): void {
    throw new Error('Method not implemented.');
  }

  /**
   *
   */
  close(): void {
    throw new Error('Method not implemented.');
  }

  /**
   *
   */
  refresh(): void {
    throw new Error('Method not implemented.');
  }
}
