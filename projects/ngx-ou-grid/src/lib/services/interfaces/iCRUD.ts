import { IGetAll } from './IGetAll';
import { IDelete } from './IDelete';
import { ICreateUpdate } from './ICreateUpdate';
import { IUrl } from './iurl';

export interface iCRUD<TResponse, TBody>
  extends ICreateUpdate<TResponse, TBody>,
    IDelete<TResponse>,
    IGetAll<TResponse>,
    IUrl {}
