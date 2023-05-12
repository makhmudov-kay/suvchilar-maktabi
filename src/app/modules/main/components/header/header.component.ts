import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Languages {
  code: string;
  short_name: string;
}

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
  visible = false;

  /**
   *
   */
  languageCodes: Languages[] = [
    { code: 'uz_latin', short_name: 'O’zb' },
    { code: 'uz_cyril', short_name: 'Ўзб' },
    { code: 'ru', short_name: 'Рус' },
  ];

  /**
   *
   */
  get currentLanguage() {
    return localStorage.getItem('language');
  }

  /**
   *
   * @param translate
   */
  constructor(private translate: TranslateService) {}

  /**
   *
   * @param selectedLanguage
   */
  onChangeLanguage(selectedLanguage: string) {
    localStorage.setItem('language', selectedLanguage);
    this.translate.use(selectedLanguage);
  }

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
}
