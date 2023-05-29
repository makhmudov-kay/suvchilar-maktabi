import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { GridComponent } from '../grid.component';
import { GridModel } from '../models/grid-model';
import { GridQuery } from '../models/grid-query.interface';

@Component({
  selector: 'az-grid-with-backend',
  templateUrl: './grid-with-backend.component.html',
  styleUrls: ['./grid-with-backend.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridWithBackendComponent extends GridComponent {
  /**
   *
   */
  @Input()
  override data!: GridModel<NzSafeAny>;

  /**
   *
   */
  @Input()
  query!: GridQuery;

  /**
   *
   */
  @Input()
  selectable = false;

  /**
   *
   */
  @Output()
  onQueryParamsChange = new EventEmitter<NzTableQueryParams>();

  /**
   *
   */
  checkedAll = false;

  /**
   *
   */
  selectedItems: any[] = [];

  /**
   *
   */
  constructor() {
    super();
  }

  /**
   *
   * @param query
   */
  handleQueryParamsChange(query: NzTableQueryParams) {
    this.onQueryParamsChange.emit(query);
    this.selectedItems = [];
  }

  /**
   *
   */
  onAllChecked(checked: boolean, data: any[]) {
    data.forEach((item) => (item.checked = checked));
    if (checked) this.selectedItems = data;
    else this.selectedItems = [];
  }

  /**
   *
   */
  onItemChecked() {
    this.selectedItems = this.data.data.filter((item) => item.checked);
    this.checkedAll = this.selectedItems.length === this.data.data.length;
  }
}
