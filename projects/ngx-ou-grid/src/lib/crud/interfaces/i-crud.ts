import { ICreateUpdateDelete } from './i-create-update-delete';
import { IGridAdmin } from './i-grid';

export interface iCRUD<TResponse, TEditingData>
  extends ICreateUpdateDelete<TResponse, TEditingData>,
    IGridAdmin {}
