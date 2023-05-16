import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Constants } from '../constants';

interface Languages {
  code: string;
  short_name: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.less'],
  standalone: true,
  imports: [CommonModule, TranslateModule, NzDividerModule],
})
export class LanguagesComponent {
  /**
   *
   */
  @Input()
  drawerClass!: boolean;

  /**
   *
   */
  currentLanguage = localStorage.getItem(Constants.LANGUAGE);

  /**
   *
   */
  languageCodes: Languages[] = [
    { code: 'uz_latn', short_name: 'O’zb' },
    { code: 'uz_cyrl', short_name: 'Ўзб' },
    { code: 'ru', short_name: 'Рус' },
  ];

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
    this.currentLanguage = selectedLanguage;
    localStorage.setItem(Constants.LANGUAGE, selectedLanguage);
    this.translate.use(selectedLanguage);
  }
}
