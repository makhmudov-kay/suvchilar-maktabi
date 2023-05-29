import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response.interface';

export interface IDelete<TResponse> {
  delete(id: number): Observable<BaseResponse<TResponse>>;
}
