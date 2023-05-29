import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserLogin } from '../models/user-login';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { Constants } from 'projects/ngx-ou-grid/src/lib/utilits/constants';
import { BaseService } from 'ngx-ou-grid';

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
    const expDate = new Date(
      localStorage.getItem(Constants.REFRESH_TOKEN) as any
    );
    if (new Date() > expDate) {
      this.logout();
      return null ?? '';
    }
    return localStorage.getItem(Constants.ACCESS_TOKEN) ?? '';
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
    localStorage.removeItem('admin');
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
      localStorage.setItem(Constants.ACCESS_TOKEN, response!.access_token);
      localStorage.setItem(Constants.REFRESH_TOKEN, expDate.toString());
      return;
    }
    localStorage.removeItem(Constants.ACCESS_TOKEN);
    localStorage.removeItem(Constants.REFRESH_TOKEN);
  }
}
