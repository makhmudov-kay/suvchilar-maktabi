import { KeyValue } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'az-search-input-with-select',
  templateUrl: './search-input-with-select.component.html',
  styleUrls: ['./search-input-with-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputWithSelectComponent {
  /**
   *
   */
  @Input()
  selectList: KeyValue<string, string>[] = [];

  /**
   *
   */
  @Output()
  search = new EventEmitter<string>();

  /**
   *
   */
  @Input()
  searchBy?: NzSafeAny;

  /**
   *
   */
  @Output()
  searchByChange = new EventEmitter();

  /**
   *
   */
  @Input()
  searchText = '';

  /**
   *
   */
  @Output()
  searchTextChange = new EventEmitter();
}
