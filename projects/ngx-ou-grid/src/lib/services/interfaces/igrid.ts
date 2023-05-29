import { Observable } from 'rxjs';
import { GridModel } from '../../grid/models/grid-model';
import { GridQuery } from '../../grid/models/grid-query.interface';
import { BaseResponse } from '../../models/base-response.interface';

export interface IGridService<TResponse> {
  DEFAULT_QUERY: GridQuery;
  query: GridQuery;
  initQuery(): void;
  getGridData(
    query: GridQuery,
    url?: string
  ): Observable<BaseResponse<GridModel<TResponse>>>;
}
