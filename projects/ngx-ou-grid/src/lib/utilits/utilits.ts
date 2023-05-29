import { UntypedFormGroup } from '@angular/forms';
import { Constants } from './constants';

export const ERROR_MESSAGE_FROM_BACKEND = 'errorMessageFromBackend';

export interface IPhone {
  phone: string | number;
}

/**
 *
 * @param modelWithPhone
 */
export function addPrefixToPhoneNumber(modelWithPhone: IPhone) {
  modelWithPhone.phone = Number(
    Constants.PREFIX_PHONENUMBER + modelWithPhone.phone
  );
}

/**
 *
 * Checks for validation to the reactive form
 * @param form Forom needs validation
 */
export function markAllAsDirty(
  form: UntypedFormGroup,
  skippedControls?: string[]
) {
  Object.keys(form.controls).forEach((controlName) => {
    if (skippedControls && skippedControls?.indexOf(controlName) >= 0) {
      return;
    }

    const control = form.controls[controlName];
    if (control.invalid) {
      if (control instanceof UntypedFormGroup) {
        Object.values(control.controls).forEach((subControl) => {
          if (
            subControl.invalid &&
            !control.hasError(ERROR_MESSAGE_FROM_BACKEND)
          ) {
            subControl.markAsDirty();
            subControl.updateValueAndValidity({ onlySelf: true });
          }
        });
      } else {
        if (!control.hasError(ERROR_MESSAGE_FROM_BACKEND)) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      }
    }
  });
}

/**
 *
 * @param obj
 * @returns
 */
export function obj2FormData(obj: any): FormData {
  const formData: FormData = new FormData();
  createFormData(obj, '', formData);

  return formData;
}

function createFormData(obj: any, subKeyStr = '', formData: FormData) {
  for (const i in obj) {
    const value = obj[i];
    const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;
    if (value instanceof File) {
      formData.append(subKeyStrTrans, value, value?.name);
      continue;
    }

    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      value instanceof Date ||
      typeof value === 'boolean'
    ) {
      formData.append(subKeyStrTrans, value.toString());
    } else if (typeof value === 'object') {
      createFormData(value, subKeyStrTrans, formData);
    }
  }
}
