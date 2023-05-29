import { Column } from '../../grid/models/column.interface';
import { Language } from '../../models/language.interface';

export interface IGridAdmin {
  /**
   *
   */
  columns: Column[];

  /**
   *
   */
  nzWidthConfig: string[];

  /**
   *
   */
  makeColumnsForGrid?(): void;

  /**
   *
   */
  makeWidthConfig?(languages?: Language[]): void;
}
