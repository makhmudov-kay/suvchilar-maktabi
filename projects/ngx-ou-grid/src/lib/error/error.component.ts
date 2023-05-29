import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ERROR_MESSAGE_FROM_BACKEND } from '../utilits/utilits';
import { NzAlertModule } from 'ng-zorro-antd/alert';

type alertType = 'basic' | 'alert';

@Component({
  selector: 'error',
  standalone: true,
  imports: [CommonModule, TranslateModule, NzAlertModule],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  // *USE ONE OF CONTROL OR MESSAGE
  /**
   *
   */
  @Input()
  control!: AbstractControl;

  /**
   *
   */
  @Input()
  message!: string;

  /**
   *
   */
  @Input()
  type: alertType = 'basic';

  /**
   *
   */
  readonly ERROR_MESSAGE_FROM_BACKEND = ERROR_MESSAGE_FROM_BACKEND;
}
