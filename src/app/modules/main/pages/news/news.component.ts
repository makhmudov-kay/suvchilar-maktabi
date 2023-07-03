import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { Observable, map } from 'rxjs';
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
  news$!: Observable<any>;

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
    });
  }
}
