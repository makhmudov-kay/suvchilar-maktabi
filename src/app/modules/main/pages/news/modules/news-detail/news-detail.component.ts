import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit {
  newsDetail$!: Observable<any>;

  id!: number;

  constructor(private $news: NewsService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.newsDetail$ = this.$news
        .getDetailNews(this.id)
        .pipe(map((result) => result.data));
    }
  }
}
