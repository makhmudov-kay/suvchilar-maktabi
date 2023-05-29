import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response.interface';

export interface ICreateUpdate<TResponse, TBody> {
  add(model: TBody): Observable<BaseResponse<TResponse>>;
  edit(id: number, model: TBody): Observable<BaseResponse<TResponse>>;
}
