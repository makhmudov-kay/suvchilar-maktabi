import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { obj2FormData } from '../utilits/utilits';
import { CRUDService } from './crud.service';
import { iCRUDWithFormData } from './interfaces/iCRUDWithFormData';
import { IFormData } from './interfaces/IFormData';
import { BaseResponse } from '../models/base-response.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CRUDWithFormDataService<
    TResponse = NzSafeAny,
    TBody = NzSafeAny
  >
  extends CRUDService<TResponse, TBody>
  implements iCRUDWithFormData<TResponse, TBody>, IFormData<TBody>
{
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
