import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
  get currentLanguage() {
    return localStorage.getItem('language');
  }

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
}
