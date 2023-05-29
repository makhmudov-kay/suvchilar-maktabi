import { IDelete } from './IDelete';
import { ICreateUpdate } from './ICreateUpdate';
import { IGridService } from './igrid';
import { IUrl } from './iurl';

export interface iCRUDWithGrid<TResponse, TBody>
  extends ICreateUpdate<TResponse, TBody>,
    IDelete<TResponse>,
    IGridService<TResponse>,
    IUrl {}
