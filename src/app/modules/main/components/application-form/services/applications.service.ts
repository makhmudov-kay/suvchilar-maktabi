import { Injectable } from '@angular/core';
import { FirstStepRequest } from '../models/first-step.request';
import { FirstStepResponse } from '../models/first-step.response';
import { SecondStepRequest } from '../models/second-step.request';
import { SecondStepResponse } from '../models/second-step.response';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService extends BaseService {
  /**
   *
   * @param request
   * @returns
   */
  sendFirstStep(request: FirstStepRequest) {
    return this.post<FirstStepResponse>(`request-step-one`, request);
  }

  /**
   *
   * @param request
   * @returns
   */
  sendSecondStep(request: SecondStepRequest) {
    return this.post<SecondStepResponse>(`request-step-two`, request);
  }
}
