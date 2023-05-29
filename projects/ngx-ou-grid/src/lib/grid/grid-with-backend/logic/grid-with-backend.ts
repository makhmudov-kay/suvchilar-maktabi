import { KeyValue } from '@angular/common';
import { ChangeDetectorRef, inject } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { GridQueryConstants } from '../../../config/grid-query-default.consants';
import { IGridAdmin } from '../../../crud/interfaces/i-grid';
import { GridService } from '../../../services/grid.service';
import { Column } from '../../models/column.interface';
import { Grid } from '../../models/grid';
import { GridModel } from '../../models/grid-model';
import { Language } from '../../../models/language.interface';

export abstract class GridWithBackend<TData = NzSafeAny>
  extends Grid<TData>
  implements IGridAdmin
{
  /**
   *
   */
  abstract makeColumnsForGrid?(): void;

  /**
   *
   * @param languages
   */
  abstract makeWidthConfig?(languages?: Language[] | undefined): void;

  /**
   *
   */
  override get DEFAULT_DATA(): GridModel<TData> {
    const data = [] as TData[];
    return {
      current_page: GridQueryConstants.DEFAULT_PAGE_INDEX,
      data,
      per_page: GridQueryConstants.PAGINATION_PAGE_SIZE,
      total: GridQueryConstants.PAGINATION_PAGE_SIZE,
    };
  }

  /**
   *
   */
  columns: Column[];

  /**
   *
   */
  nzWidthConfig: string[];

  /**
   *
   * @param $data
   * @param cd
   */
  constructor(protected override $data: GridService<TData>) {
    super($data);
    this.columns = [];
    this.nzWidthConfig = [];
    this.makeColumnsForGrid?.();
  }

  /**
   *
   * USE THIS METHOD AFTER THE QUERY CHANGED Method 'onQueryParamsChange' fetches data
   */
  override filterData() {
    this.setQueryFilter();
    if (this.query.pageIndex === GridQueryConstants.DEFAULT_PAGE_INDEX) {
      this.loadData();
      return;
    }
    // IF PAGE INDEX IS CHANGED, Method 'onQueryParamsChange' fetches data
    this.query.pageIndex = GridQueryConstants.DEFAULT_PAGE_INDEX;
    this.query = { ...this.query };
  }

  /**
   *
   * @param params
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || '';
    const sortOrder = (currentSort && currentSort.value) || '';
    this.query.pageIndex = pageIndex;
    this.query.pageSize = pageSize;
    this.query.sortField = sortField;
    this.query.sortOrder = sortOrder;
    this.setQueryFilter();

    this.loadData();
  }

  /**
   * *FOR COLUMN FILTER (grid with backend)
   * !TODO: REMOVE. USE FILTERS LIKE SIMPLE CRUD(which is used for front-side)
   * @returns
   */
  getFilterQueryFromGridHeader(): KeyValue<string, string[]>[] {
    const queryFilter: KeyValue<string, string[]>[] = [];
    this.columns?.forEach((column) => {
      if (column.filter) {
        const value = column.filter.value;
        queryFilter.push({
          key: column.field,
          value: [String(value !== null && value !== undefined ? value : '')],
        });
      }
    });

    return queryFilter;
  }
}
