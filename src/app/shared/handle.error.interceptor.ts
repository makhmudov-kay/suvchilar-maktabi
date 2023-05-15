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
        this.message.error(errorCustom);
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
    const errors = error.error.error;
    if (errors) {
      const firstError = errors?.[0];
      if (firstError) {
        if (firstError.field != undefined) {
          return error.error.error;
        }
      }

      // return ErrorHelper.createUnknownError(error.error.error);
    }

    // return ErrorHelper.createUnknownError(error);
  }
}
