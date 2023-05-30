import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Language, Constants } from 'ngx-ou-grid';
import { Observable, of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { NgxKirilLotinPipe } from 'ngx-kiril-lotin';

type controlInputType = 'textarea' | 'input';

@Component({
  selector: 'app-language-controls',
  templateUrl: './language-controls.component.html',
  styleUrls: ['./language-controls.component.less'],
  providers: [NgxKirilLotinPipe]
})
export class LanguageControlsComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: UntypedFormGroup;

  /**
   *
   */
  @Input()
  formGroupName!: string;

  /**
   *
   */
  @Input()
  rows = 3;

  /**
   *
   */
  @Input()
  translations: NzSafeAny;

  /**
   *
   */
  @Input()
  inline = false;

  /**
   *
   */
  @Input()
  inputType: controlInputType = 'textarea';

  /**
   *
   */
  language$: Observable<Language[]> = of([
    Constants.UZ_CYRILLIC,
    Constants.UZ_LATIN,
  ]);

  /**
   *
   */
  readonly UZ_CYRL = Constants.UZ_CYRILLIC.code;
  readonly UZ_LATN = Constants.UZ_LATIN.code;

  /**
   *
   */
  constructor(private $kirilLotin: NgxKirilLotinPipe) {}

  /**
   *
   */
  ngOnInit(): void {
    this.addLanguageControls();
  }

  /**
   *
   * @param model
   */
  private addLanguageControls() {
    this.language$.subscribe((languages) => {
      languages.forEach((language) => {
        (this.form.get(this.formGroupName) as UntypedFormGroup)?.addControl(
          language.code,
          new UntypedFormControl(
            this.translations?.[language.code],
            Validators.required
          )
        );
      });
    });
  }

  /**
   *
   * @param value
   * @param languageCode
   * @param form
   */
  cyrillToLatin(languageCode: string, form: AbstractControl) {
    const value = (form as FormGroup).controls[languageCode].value;
    // CYRILL TO LATIN
    if (languageCode === this.UZ_CYRL) {
      (form as FormGroup).controls[this.UZ_LATN].setValue(
        this.$kirilLotin.transform(value, 'kirilToLotin')
      );
      return;
    }

    // LATIN TO CYRILL
    if (languageCode === this.UZ_LATN) {
      (form as FormGroup).controls[this.UZ_CYRL].setValue(
        this.$kirilLotin.transform(value, 'lotinToKiril')
      );
      return;
    }
  }
}
