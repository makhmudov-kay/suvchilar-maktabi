import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const languageCode = localStorage.getItem(Constants.LANGUAGE);
    if (languageCode) {
      const headers = req.headers.set(Constants.LANGUAGE, languageCode);
      const languageReq = req.clone({ headers });
      return next.handle(languageReq);
    }
    return next.handle(req);
  }
}
