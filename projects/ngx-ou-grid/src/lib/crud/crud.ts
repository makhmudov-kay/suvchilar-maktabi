import { HttpParams } from '@angular/common/http';
import { Type } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { of, takeUntil } from 'rxjs';
import { Column, Filter } from '../grid/models/column.interface';
import { SearchInputAdvancedConfig } from '../search-input/search-input-advanced/search-input-advanced.component';
import { CRUDService } from '../services/crud.service';
import { CreateUpdateDelete } from './create-update-delete';
import { iCRUD } from './interfaces/i-crud';
import { Language } from '../models/language.interface';
import { Constants } from '../utilits/constants';

export interface FilterAdvanced<TData> {
  field: string;
  filter: Filter;
  filterFn: (item: TData, filter: Filter) => boolean;
}
export abstract class CRUD<
    TResponse = NzSafeAny,
    TBody = NzSafeAny,
    TEditingData = TResponse
  >
  extends CreateUpdateDelete<TResponse, TBody, TEditingData>
  implements iCRUD<TResponse, TEditingData>
{
  /**
   *
   */
  abstract override addEditModal: Type<any>;

  /**
   *
   */
  abstract makeColumnsForGrid(): void;

  /**
   *
   */
  abstract makeWidthConfig(languages?: Language[]): void;

  /**
   *
   */
  readonly FILTER?: {
    [name: string]: FilterAdvanced<TResponse>;
  };

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<TResponse> = {
    data: [],
    filteredData: [],
    keys: [],
    searchText: '',
  };

  /**
   *
   */
  columns: Column[] = [];

  /**
   *
   */
  nzWidthConfig: string[] = [];

  /**
   *
   */
  language$ = of(Constants.LANGUAGES);

  /**
   *
   */
  params?: HttpParams;

  /**
   *
   * @param $data
   * @param $destroy
   * @param cd
   */
  constructor(protected override $data: CRUDService<TResponse, TBody>) {
    super($data);
  }

  /**
   *
   * @param searchedText
   * @param searchingText
   * @returns
   */
  private isIncludes(searchedText: string, searchingText: string) {
    return searchedText.toLowerCase().includes(searchingText.toLowerCase());
  }

  /**
   *
   */
  private filterByFilters() {
    if (this.FILTER) {
      Object.keys(this.FILTER).forEach((key) => {
        const column = this.columns.find((column) => column.field === key);
        if (column) {
          const filter = column.filter;
          if (filter && filter.value !== undefined && filter.value !== null) {
            this.searchInputConfig.filteredData =
              this.searchInputConfig.filteredData.filter((item) => {
                return this.FILTER?.[key].filterFn(item, filter);
              });
          }
        }
      });
    }
  }

  /**
   *
   */
  onInit(): void {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.$data
      .getAll(this.params)
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };

          this.makeColumnsForGrid();
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   */
  override refresh() {
    this.loadData();
  }

  /**
   *
   */
  search() {
    const searchText = this.searchInputConfig.searchText;
    if (searchText.length === 0) {
      this.searchInputConfig.filteredData = this.searchInputConfig.data;
      return;
    }

    this.searchInputConfig.filteredData = this.searchInputConfig.data.filter(
      (item: any) =>
        this.searchInputConfig.keys.find((key) => {
          if (typeof item[key] === 'object') {
            return Object.keys(item[key]).find((subKey) =>
              this.isIncludes(
                item[key][subKey].toString(),
                this.searchInputConfig.searchText
              )
            );
          }
          return this.isIncludes(
            item[key].toString(),
            this.searchInputConfig.searchText
          );
        })
    );
  }

  /**
   *
   */
  public filter() {
    this.search();
    this.filterByFilters();
  }
}
