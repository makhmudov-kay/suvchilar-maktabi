import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface SearchInputAdvancedConfig<T = NzSafeAny> {
  /**
   * filtered data
   */
  data: T[];

  /**
   *
   */
  filteredData: T[];

  /**
   * search by these keys
   */
  keys: string[];

  /**
   *
   */
  searchText: string;
}

@Component({
  selector: 'az-search-input-advanced',
  templateUrl: './search-input-advanced.component.html',
  styleUrls: ['./search-input-advanced.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputAdvancedComponent {
  /**
   *
   * Required
   */
  private _config!: SearchInputAdvancedConfig;

  @Input()
  public set config(v: SearchInputAdvancedConfig) {
    this._config = v;

    // TODO: IMPROVE THIS LOGIC
    setTimeout(() => {
      this.search();
      // this.search(this.config);
      this.cd.markForCheck();
    });
  }

  public get config(): SearchInputAdvancedConfig {
    return this._config;
  }

  /**
   *
   */
  @Output()
  onSearch = new EventEmitter();

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   *
   * @param config
   * @returns
   */
  onInputText(config: SearchInputAdvancedConfig) {
    const searchText = config.searchText;
    if (searchText.length === 0 || searchText.length >= 3) {
      this.search();
      return;
    }
  }

  /**
   *
   */
  handleKeyupEnter() {
    this.search();
  }

  /**
   *
   */
  private search() {
    this.onSearch.emit();
  }
}
