import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { GridService } from './grid.service';
import { iCRUDWithGrid } from './interfaces/iCRUDWithGrid';
import { BaseService } from './base.service';
import { BaseResponse } from '../models/base-response.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class CRUDWithGridService<
    TResponse = NzSafeAny,
    TBody = NzSafeAny
  >
  extends GridService<TResponse>
  implements iCRUDWithGrid<TResponse, TBody>
{
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
  }

  /**
   *
   * @returns
   */
  add(model: TBody): Observable<BaseResponse<TResponse>> {
    return this.$baseService.post<TResponse>(this.url, model);
  }

  /**
   *
   * @returns
   */
  edit(id: number, model: TBody): Observable<BaseResponse<TResponse>> {
    return this.$baseService.put<TResponse>(`${this.url}/${id}`, model);
  }

  /**
   *
   * @returns
   */
  delete(id: number): Observable<BaseResponse<TResponse>> {
    return this.$baseService.delete<TResponse>(`${this.url}/${id}`);
  }
}
