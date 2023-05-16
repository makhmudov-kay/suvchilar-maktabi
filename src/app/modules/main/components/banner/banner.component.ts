import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  /**
   *
   */
  array = [1];

  /**
   *
   */
  current = 0;

  /**
   *
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   *
   * @param el
   */
  changeSlide(el: any) {
    this.current = el.to;
    this.cd.markForCheck();
  }
}
