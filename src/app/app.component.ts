import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    const lang = localStorage.getItem('language');
    if (lang) {
      this.translate.use(lang);
      return;
    }
    localStorage.setItem('language', 'uz_cyril');
    this.translate.use('uz_cyril');
  }
}
