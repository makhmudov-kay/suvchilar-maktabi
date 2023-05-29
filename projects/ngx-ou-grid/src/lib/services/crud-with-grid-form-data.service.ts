import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { obj2FormData } from '../utilits/utilits';
import { CRUDWithGridService } from './crud-with-grid.service';
import { iCRUDWithGridWithFormData } from './interfaces/iCRUDWithGridWithFormData';
import { BaseService } from './base.service';
import { BaseResponse } from '../models/base-response.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudWithGridFormDataService<
    TResponse = NzSafeAny,
    TBody = NzSafeAny
  >
  extends CRUDWithGridService<TResponse, TBody>
  implements iCRUDWithGridWithFormData<TResponse, TBody>
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
  override add(model: TBody): Observable<BaseResponse<TResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<TResponse>(this.url, formData);
  }

  /**
   *
   * @returns
   */
  override edit(
    id: number,
    model: TBody,
    isPost = false
  ): Observable<BaseResponse<TResponse>> {
    const formData = this.convertModelIntoFormData(model);
    if (isPost) {
      return this.$baseService.post<TResponse>(`${this.url}/${id}`, formData);
    }
    return this.$baseService.put<TResponse>(`${this.url}/${id}`, formData);
  }

  /**
   *
   * @param model
   */
  convertModelIntoFormData(model: TBody): FormData {
    const formData = obj2FormData(model);
    return formData;
  }
}
