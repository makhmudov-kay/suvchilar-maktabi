import {
  ChangeDetectorRef,
  Type,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { takeUntil } from 'rxjs';
import { ICreateUpdateDelete } from '../../../crud/interfaces/i-create-update-delete';
import { CRUDWithGridService } from '../../../services/crud-with-grid.service';
import { GridWithBackend } from './grid-with-backend';
import { NgDestroy } from '../../../services/ng-destroy.service';

export abstract class GridWithBackendWithCRUD<
    TData = NzSafeAny,
    TResponse = TData,
    TEditingData = TData
  >
  extends GridWithBackend<TData>
  implements ICreateUpdateDelete<TResponse, TEditingData>
{
  /**
   *
   */
  abstract addEditModal: Type<any>;

  /**
   *
   */
  editingData?: TEditingData | undefined;

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
  protected $destroy = inject(NgDestroy);

  /**
   *
   */
  protected $modal = inject(NzModalService);

  /**
   *
   */
  protected $translate = inject(TranslateService);

  /**
   *
   */
  protected viewContainerRef = inject(ViewContainerRef);

  /**
   *
   * @param $data
   * @param cd
   */
  constructor(protected override $data: CRUDWithGridService<TData>) {
    super($data);
  }

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

  /**
   *
   */
  refresh(): void {
    this.loadData();
  }
}
