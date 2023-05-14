import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirstStepRequest } from '../models/first-step.request';
import { Observable } from 'rxjs';
import { FirstStepResponse } from '../models/first-step.response';
import { SecondStepRequest } from '../models/second-step.request';
import { SecondStepResponse } from '../models/second-step.response';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  /**
   */
  url = 'http://91.213.99.234:8000/api';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @param request
   * @returns
   */
  sendFirstStep(request: FirstStepRequest): Observable<FirstStepResponse> {
    return this.http.post<FirstStepResponse>(
      `${this.url}/request-step-one`,
      request
    );
  }

  /**
   *
   * @param request
   * @returns
   */
  sendSecondStep(request: SecondStepRequest): Observable<SecondStepResponse> {
    return this.http.post<SecondStepResponse>(
      `${this.url}/request-step-two`,
      request
    );
  }
}
