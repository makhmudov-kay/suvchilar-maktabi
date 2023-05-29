import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';

export interface Filter {
  data$: Observable<KeyValue<any, any>[]>;
  value: any;
}

export interface IColumn {
  /**
   *
   */
  field: string;

  /**
   * Header of column
   */
  header?: string;

  sortable?: boolean;
  sortByLocalCompare?: boolean;
  width?: string | null;

  /**
   * Attached to left
   */
  nzLeft?: boolean;

  /**
   * Attached to right
   */
  nzRight?: boolean;

  /**
   *
   */
  nzAlignHeader?: 'left' | 'right' | 'center';

  /**
   *
   */
  nzAlignBody?: 'left' | 'right' | 'center';

  /**
   *
   * custom - Specific template
   * image - consists of image
   * ellipsis - for ellipsis text
   * basic - just text
   */
  template?: 'custom' | 'image' | 'basic' | 'ellipsis';

  /**
   *
   */
  rowspan?: number | null;

  /**
   *
   */
  colspan?: number | null;

  /**
   * Defines extra column for thead(It does not used tbody)
   */
  justHeader?: boolean;

  /**
   * Index of row of thead. It starts from 1
   */
  row?: number;

  /**
   *
   */
  filter?: Filter | null;
}

export class Column implements IColumn {
  /**
   *
   */
  constructor(
    public field: string,
    public header: string = field,
    public sortable: boolean = false,
    public sortByLocalCompare: boolean = true,
    public nzAlignHeader: 'left' | 'right' | 'center' = 'center',
    public nzAlignBody: 'left' | 'right' | 'center' = 'center',
    public nzLeft: boolean = false,
    public nzRight: boolean = false,
    public rowspan: number | null = null,
    public colspan: number | null = null,
    public justHeader: boolean = false,
    public row: number = 1,
    public template: 'custom' | 'image' | 'basic' | 'ellipsis' = 'basic',
    public filter: Filter | null = null
  ) {}
}

export function columnFactory({
  field,
  header,
  sortable,
  sortByLocalCompare,
  nzAlignHeader,
  nzAlignBody,
  nzLeft,
  nzRight,
  rowspan,
  colspan,
  justHeader,
  row,
  template,
  filter,
}: IColumn) {
  return new Column(
    field,
    header,
    sortable,
    sortByLocalCompare,
    nzAlignHeader,
    nzAlignBody,
    nzLeft,
    nzRight,
    rowspan,
    colspan,
    justHeader,
    row,
    template,
    filter
  );
}
