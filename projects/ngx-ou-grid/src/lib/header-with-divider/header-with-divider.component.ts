import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'az-header-with-divider',
  templateUrl: './header-with-divider.component.html',
  styles: [
    `
      .position-relative {
        position: relative;
      }

      .divider__right {
        padding: 0 15px;
        position: absolute;
        display: flex;
        right: 25px;
        top: 0;
        background: white;
        z-index: 2;
        text-align: left;
      }

      .divider__left {
        height: 32px;
        display: flex;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderWithDividerComponent {
  /**
   *
   */
  @Input()
  title!: string;
}
