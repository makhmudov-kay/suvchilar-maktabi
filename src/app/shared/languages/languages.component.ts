import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Constants } from '../../../../projects/ngx-ou-grid/src/lib/utilits/constants';

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
  @Output()
  changesLanguage = new EventEmitter();

  /**
   *
   */
  currentLanguage = localStorage.getItem(Constants.LANGUAGE);

  /**
   *
   */
  readonly LANGUAGES = Constants.LANGUAGES;

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
    this.changesLanguage.emit();
  }
}
