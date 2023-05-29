import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'az-delete-btn-popconfirm',
  templateUrl: './delete-btn-popconfirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteBtnPopconfirmComponent {
  /**
   *
   */
  @Output()
  onConfirm = new EventEmitter();
}
