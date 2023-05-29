import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'projects/ngx-ou-grid/src/lib/utilits/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /**
   *
   */
  @Output()
  languageChangeEvent = new EventEmitter();

  /**
   *
   */
  visible = false;

  /**
   *
   */
  get currentLanguage() {
    return localStorage.getItem(Constants.LANGUAGE);
  }

  /**
   *
   * @param translate
   */
  constructor(private router: Router, private viewPort: ViewportScroller) {}

  /**
   *
   */
  openDrawer(): void {
    this.visible = true;
  }

  /**
   *
   */
  closeDrawer(): void {
    this.visible = false;
  }

  /**
   *
   * @param fragment
   */
  closeDrawerAndNavigate(fragment: string) {
    this.closeDrawer();
    setTimeout(() => {
      this.router.navigate([], { fragment });
      this.viewPort.scrollToAnchor(fragment);
    }, 500);
  }

  /**
   *
   */
  changesLanguage() {
    this.languageChangeEvent.emit();
  }
}
