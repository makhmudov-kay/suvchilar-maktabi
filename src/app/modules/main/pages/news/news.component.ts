import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { Observable, map } from 'rxjs';

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
    this.news$ = this.$news.getNewsList().pipe(map((result) => result.data));
  }
}
