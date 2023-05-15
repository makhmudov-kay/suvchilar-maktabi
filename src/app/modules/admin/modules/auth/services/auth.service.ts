import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserLogin } from '../models/user-login';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  /**
   */
  error$: Subject<string> = new Subject<string>();

  /**
   *
   */
  url = 'auth';

  /**
   */
  get token(): string {
    const expDate = new Date(localStorage.getItem('refreshToken') as any);
    if (new Date() > expDate) {
      this.logout();
      return null ?? '';
    }
    return localStorage.getItem('accessToken') ?? '';
  }

  /**
   *
   * @returns
   */
  isAuthintificate(): boolean {
    return !!this.token;
  }

  /**
   *
   */
  logout(): void {
    this.setToken(null);
  }

  /**
   *
   * @param user
   * @returns
   */
  login(user: UserLogin): Observable<any> {
    return this.http
      .post<LoginResponse>(`${this.endpoint}${this.url}/login`, user)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  /**
   *
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error.error;

    switch (message) {
      case 'Unauthorized':
        this.error$.next('Неверный логин или пароль');
        break;
    }

    return throwError(() => error);
  }

  /**
   *
   * @param response
   */
  private setToken(response: LoginResponse | null): void {
    if (response) {
      const expDate = new Date(
        new Date().getTime() + +response!.expires_in * 1000
      );
      localStorage.setItem('accessToken', response!.access_token);
      localStorage.setItem('refreshToken', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
