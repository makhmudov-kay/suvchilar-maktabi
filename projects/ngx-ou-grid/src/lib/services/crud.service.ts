import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { iCRUD } from './interfaces/iCRUD';
import { BaseService } from './base.service';
import { BaseResponse } from '../models/base-response.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class CRUDService<TResponse = NzSafeAny, TBody = NzSafeAny>
  implements iCRUD<TResponse, TBody>
{
  /**
   *
   */
  abstract url: string;

  /**
   *
   */
  $baseService = inject(BaseService);

  /**
   *
   * @returns
   */
  getAll(params?: HttpParams): Observable<BaseResponse<TResponse[]>> {
    return this.$baseService.get<TResponse[]>(this.url, params);
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
