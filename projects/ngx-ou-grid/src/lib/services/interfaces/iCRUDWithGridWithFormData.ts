import { IFormData } from './IFormData';
import { iCRUDWithGrid } from './iCRUDWithGrid';

export interface iCRUDWithGridWithFormData<TResponse, TBody>
  extends iCRUDWithGrid<TResponse, TBody>,
    IFormData<TBody> {}
