import { KeyValue } from '@angular/common';
import { ChangeDetectorRef, inject } from '@angular/core';
import { GridQueryConstants } from '../../config/grid-query-default.consants';
import { GridService } from '../../services/grid.service';
import { GridModel } from './grid-model';
import { GridQuery } from './grid-query.interface';
import { BaseResponse } from '../../models/base-response.interface';

export abstract class Grid<TData> {
  /**
   *
   */
  protected get data(): GridModel<TData> {
    return this.$data.baseResponse.data;
  }
  protected set data(v: GridModel<TData>) {
    this.$data.baseResponse = { ...this.$data.baseResponse, data: v };
  }

  /**
   *
   */
  protected get baseResponse(): BaseResponse<GridModel<TData>> {
    return this.$data.baseResponse;
  }
  protected set baseResponse(v: BaseResponse<GridModel<TData>>) {
    this.$data.baseResponse = v;
  }

  /**
   *
   */
  protected get DEFAULT_QUERY(): GridQuery {
    return this.$data.DEFAULT_QUERY;
  }

  /**
   *
   */
  protected get query(): GridQuery {
    return this.$data.query;
  }
  protected set query(v: GridQuery) {
    this.$data.query = v;
  }

  /**
   *
   */
  protected get DEFAULT_DATA(): GridModel<TData> {
    const data = [];
    for (
      let index = 0;
      index < GridQueryConstants.PAGINATION_PAGE_SIZE;
      index++
    ) {
      data.push({} as TData);
    }
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
  cd = inject(ChangeDetectorRef);

  /**
   *
   */
  constructor(protected $data: GridService<TData>) {
    this.init();
  }

  /**
   *
   */
  protected filterData() {
    this.query.pageIndex = GridQueryConstants.DEFAULT_PAGE_INDEX;
    this.setQueryFilter();
    this.loadData();
  }

  /**
   *
   */
  protected init(): void {
    this.initQuery();
  }

  /**
   *
   */
  protected initQuery(): void {
    this.$data.initQuery();
    this.setQueryFilter();
  }

  /**
   *
   */
  protected setDefaultData(): void {
    this.data = this.DEFAULT_DATA;
  }

  /**
   *
   * GETS NEW QUERY FILTER
   * @returns
   */
  protected getQueryFilter(): KeyValue<string, string[]>[] {
    return [];
  }

  /**
   *
   * SETS CURRENT NEW QUERY FILTER TO CURRENT QUERY FILTER
   */
  protected setQueryFilter(): void {
    this.query.filter = this.getQueryFilter();
  }

  /**
   *
   * JUST LOADS DATA FROM SERVER BY QUERY
   */
  protected loadDataFromServer(query: GridQuery, url?: string) {
    this.$loadDataFromServer(query, url).subscribe(() => {
      this.cd.markForCheck();
    });
  }

  /**
   *
   * @param query
   * @param url
   * @returns
   */
  protected $loadDataFromServer(query: GridQuery, url: string | undefined) {
    return this.$data.getGridData(query, url);
  }

  /**
   *
   */
  public loadData(): void {
    this.loadDataFromServer(this.query);
  }
}
