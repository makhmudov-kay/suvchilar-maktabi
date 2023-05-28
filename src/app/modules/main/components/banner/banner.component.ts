import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { GetBannersListService } from './service/get-banners-list.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  /**
   *
   */
  array = [1];

  /**
   *
   */
  current = 0;

  /**
   */
  carousels$!: Observable<any[]>;

  /**
   *
   * @param cd
   */
  constructor(
    private cd: ChangeDetectorRef,
    private $banner: GetBannersListService
  ) {}

  /**
   *
   */
  private getCarousel() {
    this.carousels$ = this.$banner
      .getBanners()
      .pipe(map((result) => result.data));
  }

  /**
   *
   */
  ngOnInit() {
    this.getCarousel();
  }

  /**
   *
   * @param el
   */
  changeSlide(el: any) {
    this.current = el.to;
    this.cd.markForCheck();
  }
}
