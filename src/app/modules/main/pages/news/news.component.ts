import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NewsService } from './services/news.service';
import { Observable, filter, map } from 'rxjs';
import { currentLanguage$ } from 'src/app/shared/languages/languages.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  /**
   */
  news$!: Observable<any[]>;

  /**
   *
   */
  paginatedNews$!: Observable<any[]>;

  /**
   *
   */
  page_size = 12;

  /**
   *
   * @param $news
   */
  constructor(private $news: NewsService) {}

  /**
   *
   */
  ngOnInit() {
    currentLanguage$.subscribe((w) => {
      this.news$ = this.$news.getNewsList().pipe(map((result) => result.data));
      this.changeCurrentPage(1);
    });
  }

  /**
   *
   * @param currentPage
   */
  changeCurrentPage(currentPage: number) {
    this.paginatedNews$ = this.news$.pipe(
      map((w) => {
        return w.slice(
          (currentPage - 1) * this.page_size,
          currentPage * this.page_size
        );
      })
    );
  }
}
