import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { currentLanguage$ } from 'src/app/shared/languages/languages.component';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit {
  /**
   *
   */
  newsDetail$!: Observable<any>;

  /**
   *
   */
  get id() {
    return Number(this.route.snapshot.params['id']);
  }

  /**
   *
   * @param $news
   * @param route
   */
  constructor(private $news: NewsService, private route: ActivatedRoute) {}

  ngOnInit() {
    if (isFinite(this.id)) {
      currentLanguage$.subscribe(() => {
        this.newsDetail$ = this.$news
          .getDetailNews(this.id)
          .pipe(map((result) => result.data));
      });
    }
  }
}
