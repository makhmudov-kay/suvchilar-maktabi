import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../projects/ngx-ou-grid/src/lib/utilits/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /**
   *
   */
  currentLanguage() {
    let currentLanguageCode = localStorage.getItem(Constants.LANGUAGE);
    if (!currentLanguageCode) {
      currentLanguageCode = Constants.DEFAULT_LANGUAGE.code;
      localStorage.setItem(Constants.LANGUAGE, currentLanguageCode);
    }
    return currentLanguageCode;
  }

  /**
   *
   * @param translate
   * @returns
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(Constants.DEFAULT_LANGUAGE.code);
    this.translate.use(this.currentLanguage());
  }
}
