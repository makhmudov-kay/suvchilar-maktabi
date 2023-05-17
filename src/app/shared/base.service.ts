import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { BaseResponse } from './base-response.interface';

export class BaseService {
  /**
   *
   */
  readonly endpoint = 'http://91.213.99.234:8000/api/';

  /**
   *
   */
  http = inject(HttpClient);

  /**
   *
   * @param url
   * @param params
   * @returns
   */
  get<T>(url: string, params?: HttpParams): Observable<BaseResponse<T>> {
    return this.http.get<BaseResponse<T>>(this.endpoint + url, { params }).pipe(
      // TODO: IMPLEMENT OR REMOVE
      //   catchError((errors: ErrorItem[]) => {
      //     this.makeError(errors);
      //     return of({ error: errors, success: false } as BaseResponse<T>);
      //   }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  post<T>(url: string, model?: any): Observable<BaseResponse<T>> {
    return this.http.post<BaseResponse<T>>(this.endpoint + url, model).pipe(
      // TODO: IMPLEMENT OR REMOVE
        catchError((errors: any) => {
          // this.makeError(errors);
          return of({ error: errors, success: false } as BaseResponse<T>);
        }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  put<T>(url: string, model?: any): Observable<BaseResponse<T>> {
    return this.http.put<BaseResponse<T>>(this.endpoint + url, model).pipe(
      // TODO: IMPLEMENT OR REMOVE
      //   catchError((errors: ErrorItem[]) => {
      //     this.makeError(errors);
      //     return of({ error: errors, success: false } as BaseResponse<T>);
      //   }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  delete<T>(url: string, body?: any): Observable<BaseResponse<T>> {
    return this.http
      .delete<BaseResponse<T>>(this.endpoint + url, { body })
      .pipe(
        // TODO: IMPLEMENT OR REMOVE
        //   catchError((errors: ErrorItem[]) => {
        //     this.makeError(errors);
        //     return of({ error: errors, success: false } as BaseResponse<T>);
        //   }),
        shareReplay(1)
      );
  }
}
