import { NzSafeAny } from 'ng-zorro-antd/core/types';

export function obj2FormData(obj: NzSafeAny): FormData {
  const formData: FormData = new FormData();
  createFormData(obj, '', formData);

  return formData;
}

function createFormData(obj: NzSafeAny, subKeyStr = '', formData: FormData) {
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
