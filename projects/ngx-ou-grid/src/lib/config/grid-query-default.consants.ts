import { GridModel } from '../grid/models/grid-model';
import { GridQuery } from '../grid/models/grid-query.interface';

export class GridQueryConstants {
  public static PAGINATION_PAGE_SIZE = 12;
  public static DEFAULT_PAGE_INDEX = 1;
  public static DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };
  public static DEFAULT_DATA: GridModel<any> = {
    current_page: this.DEFAULT_PAGE_INDEX,
    data: [],
    per_page: this.PAGINATION_PAGE_SIZE,
    total: 0,
  };
}
