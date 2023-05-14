import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private $auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.$auth.token}`,
      },
    });
    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.$auth.logout();
          this.router.navigate(['/admin', 'auth']);
        }
        return throwError(() => error);
      })
    );
  }
}
