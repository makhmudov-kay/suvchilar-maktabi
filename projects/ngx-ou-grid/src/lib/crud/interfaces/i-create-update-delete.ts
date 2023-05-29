import { Type } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

export interface ICreateUpdateDelete<TResponse, TEditingData> {
  /**
   *
   */
  editingData?: TEditingData;

  /**
   *
   */
  addEditModal: Type<any>;

  /**
   *
   */
  modal?: NzModalRef;

  /**
   *
   */
  modalWidth: string;

  /**
   *
   */
  refresh(): void;

  /**
   *
   */
  getModalComponentParams(): Partial<any>;

  /**
   *
   * @param editingData
   */
  addEdit(editingData?: TEditingData | TResponse): void;

  /**
   *
   * @param editingData
   */
  createModal(editingData: TEditingData | undefined): void;

  /**
   *
   * @param id
   */
  delete(id: number): void;
}
