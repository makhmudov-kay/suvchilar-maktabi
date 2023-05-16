import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class CheckPhoneService extends BaseService {
  /**
   *
   * @param phone
   */
  checkPhone(phone: string) {
    const phoneNumber = {
      phone,
    };
    return this.post<any>('check-phone', phoneNumber);
  }
}
