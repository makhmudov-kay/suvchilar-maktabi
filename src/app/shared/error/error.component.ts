import { JsonPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';

type alertType = 'basic' | 'alert';

@Component({
  selector: 'error',
  standalone: true,
  imports: [TranslateModule, NgSwitch, NgSwitchCase, NgIf, JsonPipe, NzAlertModule],
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
   * TODO: IMPLEMENT OR REMOVE
   */
  // readonly ERROR_MESSAGE_FROM_BACKEND = Constants.ERROR_MESSAGE_FROM_BACKEND;
}
