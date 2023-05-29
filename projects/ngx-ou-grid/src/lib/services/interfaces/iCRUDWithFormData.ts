import { IFormData } from './IFormData';
import { iCRUD } from './iCRUD';

export interface iCRUDWithFormData<TResponse, TBody>
  extends iCRUD<TResponse, TBody>,
    IFormData<TBody> {}
