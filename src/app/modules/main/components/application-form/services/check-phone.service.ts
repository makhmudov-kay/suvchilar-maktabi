import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, of } from 'rxjs';
import { BaseService } from 'src/app/shared/base.service';
import { Constants } from 'src/app/shared/constants';

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
        map((result) => (result.success ? null : {phoneValidation: true}))
      );
    };
  }
}
