import {
  ChangeDetectorRef,
  Type,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { takeUntil } from 'rxjs';
import { CRUDService } from '../services/crud.service';
import { ICreateUpdateDelete } from './interfaces/i-create-update-delete';
import { NgDestroy } from '../services/ng-destroy.service';

export abstract class CreateUpdateDelete<TResponse, TBody, TEditingData>
  implements ICreateUpdateDelete<TResponse, TEditingData>
{
  /**
   *
   */
  abstract refresh(): void;

  /**
   *
   */
  editingData?: TEditingData | undefined;

  /**
   *
   */
  abstract addEditModal: Type<any>;

  /**
   *
   */
  modal?: NzModalRef;

  /**
   *
   */
  modalWidth = '500px';

  /**
   *
   */
  $destroy = inject(NgDestroy);

  /**
   *
   */
  cd = inject(ChangeDetectorRef);

  /**
   *
   */
  $modal = inject(NzModalService);

  /**
   *
   */
  $translate = inject(TranslateService);

  /**
   *
   */
  viewContainerRef = inject(ViewContainerRef);

  /**
   *
   */
  constructor(protected $data: CRUDService<TResponse, TBody>) {}

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: TEditingData | TResponse) {
    this.editingData = editingData as unknown as TEditingData;
    this.createModal(this.editingData);
  }

  /**
   *
   * @param editingData
   */
  createModal(editingData: TEditingData | undefined) {
    this.modal = this.$modal.create({
      nzTitle: this.$translate.instant(
        (editingData as any)?.id ? 'edit' : 'add'
      ),
      nzFooter: [
        {
          label: this.$translate.instant('save'),
          type: 'primary',
          onClick: (componentInstance) => {
            componentInstance?.submit();
          },
        },
      ],
      nzWidth: this.modalWidth,
      nzContent: this.addEditModal,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        ...this.getModalComponentParams(),
      },
    });
  }

  /**
   *
   * @returns
   */
  getModalComponentParams(): Partial<any> {
    return {
      editingData: this.editingData,
      close: () => this.modal?.destroy(),
      refresh: () => this.refresh(),
    };
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$data
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.refresh();
        }
      });
  }
}
