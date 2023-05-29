import { HttpParams } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { map, Observable, tap } from 'rxjs';
import { GridQueryConstants } from '../config/grid-query-default.consants';
import { IUrl } from './interfaces/iurl';
import { IGridService } from './interfaces/igrid';
import { GridQuery } from '../grid/models/grid-query.interface';
import { GridModel } from '../grid/models/grid-model';
import { BaseResponse } from '../models/base-response.interface';
import { BaseService } from './base.service';

export abstract class GridService<TResponse = NzSafeAny>
  implements IGridService<TResponse>, IUrl
{
  /**
   *
   */
  abstract url: string;

  /**
   *
   */
  query!: GridQuery;

  /**
   *
   */
  DEFAULT_QUERY: GridQuery;

  /**
   *
   */
  public baseResponse: BaseResponse<GridModel<TResponse>>;

  /**
   *
   * @param $baseService
   */
  constructor(
    protected $baseService: BaseService,
    protected defaultQuery = GridQueryConstants.DEFAULT_GRID_QUERY
  ) {
    this.DEFAULT_QUERY = defaultQuery;
    this.baseResponse = new BaseResponse(GridQueryConstants.DEFAULT_DATA);
    this.initQuery();
  }

  /**
   *
   */
  initQuery(): void {
    this.query = structuredClone(this.DEFAULT_QUERY);
  }

  /**
   *
   * @param query
   * @returns
   */
  getGridData(
    query: GridQuery = this.query,
    url = this.url
  ): Observable<BaseResponse<GridModel<TResponse>>> {
    const params = this.turnGridQueryToHttpParams(query);
    return this.$baseService
      .get<GridModel<TResponse>>(url, params)
      .pipe(this.mapToSetBaseResponse());
  }

  /**
   *
   * @returns
   */
  protected mapToSetBaseResponse() {
    return map((result: BaseResponse<GridModel<TResponse>>) => {
      this.baseResponse = result;
      if (!this.baseResponse.success) {
        this.baseResponse.data = GridQueryConstants.DEFAULT_DATA;
      }

      return result;
    });
  }

  /**
   *
   * @param query
   * @returns
   */
  protected turnGridQueryToHttpParams(query: GridQuery) {
    let params = new HttpParams()
      .append('page', `${query.pageIndex}`)
      .append('per_page', `${query.pageSize}`)
      .append('sort_by', `${query.sortField}`)
      .append('order_by', `${query.sortOrder.replace('end', '')}`);
    query.filter.forEach((filterItem) => {
      filterItem.value.forEach((value: string | undefined) => {
        if (value && value.length > 0) {
          params = params.append(filterItem.key, value);
        }
      });
    });
    return params;
  }

  /**
   *
   * @param query
   * @param filterStatus
   * @param filterUserType
   * @returns
   */
  public resetQueryByCondition(
    checkingFiltersForResetQuery: KeyValue<string, string>[]
  ) {
    for (let index = 0; index < checkingFiltersForResetQuery.length; index++) {
      const filter = checkingFiltersForResetQuery[index];
      if (this.isChangedSpecificFilter(this.query.filter, filter)) {
        this.initQuery();
        return;
      }
    }
  }

  /**
   *
   * @param filters
   * @param key
   * @param value
   */
  private isChangedSpecificFilter(
    filters: Array<{
      key: string;
      value: string[];
    }>,
    filter: KeyValue<string, string>
  ) {
    const filterByKey = filters.find((f) => f.key === filter.key);
    if (filterByKey && filterByKey.value[0] !== filter.value) {
      return true;
    }

    return false;
  }
}
