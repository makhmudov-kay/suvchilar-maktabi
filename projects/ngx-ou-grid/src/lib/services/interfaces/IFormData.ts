export interface IFormData<TBody> {
  convertModelIntoFormData(model: TBody): FormData;
}
