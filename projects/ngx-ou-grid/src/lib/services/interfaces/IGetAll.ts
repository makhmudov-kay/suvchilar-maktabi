import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response.interface';

export interface IGetAll<TResponse> {
  getAll(params?: HttpParams): Observable<BaseResponse<TResponse[]>>;
}
