import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, of } from 'rxjs';
import { Constants } from 'projects/ngx-ou-grid/src/lib/utilits/constants';
import { BaseService } from 'ngx-ou-grid';

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
    return this.post('check-phone', phoneNumber);
  }

  /**
   *
   * @returns
   */
  phoneAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const phone = Constants.PREFIX_PHONENUMBER + control.value;

      return this.checkPhone(phone).pipe(
        map((result) => (result.success ? null : { phoneValidation: true }))
      );
    };
  }
}
