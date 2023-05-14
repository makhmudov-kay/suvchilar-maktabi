import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationResponse } from '../models/application.response';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  /**
   *
   */
  url = 'http://91.213.99.234:8000/api/admin/request';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getApplicationsList(): Observable<ApplicationResponse> {
    return this.http.get<ApplicationResponse>(this.url);
  }
}
