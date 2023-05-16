import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /**
   *
   * @param translate
   * @returns
   */
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem(Constants.LANGUAGE);
    if (lang) {
      this.translate.use(lang);
      return;
    }
    localStorage.setItem(Constants.LANGUAGE, 'uz_cyrl');

    this.translate.use('uz_cyrl');
  }
}
