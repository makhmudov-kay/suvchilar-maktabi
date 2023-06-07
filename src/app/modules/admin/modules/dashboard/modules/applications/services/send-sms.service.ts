import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';
import { SendSmsRequest } from '../models/send-sms.request';

@Injectable({
  providedIn: 'root',
})
export class SendSmsService extends BaseService {
  /**
   *
   */
  url = 'admin/send-sms';

  /**
   *
   * @returns
   */
  sendSms(request: SendSmsRequest) {
    return this.post(this.url, request);
  }
}
