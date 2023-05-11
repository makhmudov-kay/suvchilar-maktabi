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
  array = [1, 2, 3, 4];

  current = 0;

  constructor(private cd: ChangeDetectorRef) {}

  changeSlide(el: any) {
    this.current = el.to;
    this.cd.markForCheck();
  }
}
