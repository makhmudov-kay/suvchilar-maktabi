import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';

export interface ErrorModel {
  errors: {[key: string]: string[]};
  message: string;
}

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private message: NzMessageService
  ) {}

  /**
   *
   * @param req
   * @param next
   * @returns
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        const errorCustom = this.getServerErrors(error);
        if (typeof errorCustom === 'string')
        this.message.error(errorCustom);
        else {
          // const errorMessage = (errorCustom as ErrorModel).message;
          // if (errorMessage)
          // this.message.error(errorMessage)
          // else {
          //   this.message.error((errorCustom as {unknownError: string}).unknownError)
          // }
        }
        return throwError(() => errorCustom);
      })
    );
  }

  private getServerErrors(error: HttpErrorResponse) {
    if (!navigator.onLine) {
      return 'Offline';
    }

    switch (error.status) {
      case HttpStatusCode.PayloadTooLarge:
        return 'PayloadTooLarge';

      case HttpStatusCode.Forbidden:
        return 'Forbidden';

      case HttpStatusCode.InternalServerError:
        return 'InternalServerError';

      case HttpStatusCode.NotFound:
        return 'NotFound';

      default:
        return this.getErrorFromServer(error);
    }
  }

  /**
   *
   * @param error
   * @returns
   */
  private getErrorFromServer(error: HttpErrorResponse) {
    const errors = (error.error as ErrorModel).errors;
    if (errors) {
      const firstError = errors[Object.keys(errors)[0]];
      if (firstError) {
        if (firstError[0] != undefined) {
          return error.error as ErrorModel;
        }
      }

      // return ErrorHelper.createUnknownError(error.error.error);
      return {unknownError: JSON.stringify(errors)}
    }

    // return ErrorHelper.createUnknownError(error);
    return {unknownError: JSON.stringify(error)}
  }
}
