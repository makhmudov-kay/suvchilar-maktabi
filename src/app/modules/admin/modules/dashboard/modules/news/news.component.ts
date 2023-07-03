import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CRUD, Language, columnFactory } from 'ngx-ou-grid';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent extends CRUD<any, any> implements OnInit {
  /**
   *
   */
  addEditModal = AddEditNewsComponent;

  /**
   *
   * @param $managers
   * @param fb
   * @param cd
   * @param $regions
   */
  constructor(protected $news: NewsService) {
    super($news);
    this.searchInputConfig.keys = ['name', 'description'];
  }

  /**
   *
   */
  ngOnInit() {
    super.onInit();
  }

  /**
   *
   */
  override makeColumnsForGrid(): void {
    this.language$.subscribe((languages) => {
      this.columns = [
        columnFactory({
          field: 'id',
          sortable: true,
          rowspan: 2,
        }),
        columnFactory({
          field: 'title',
          colspan: 2,
          rowspan: 1,
          justHeader: true,
        }),
        ...languages.map((language) =>
          columnFactory({
            field: 'title.' + language.code,
            header: language.short_name,
            sortable: true,
            nzAlignBody: 'left',
            row: 2,
          })
        ),
        columnFactory({
          field: 'content',
          header: 'description',
          colspan: 2,
          rowspan: 1,
          justHeader: true,
        }),
        ...languages.map((language) =>
          columnFactory({
            field: 'content.' + language.code,
            header: language.short_name,
            sortable: true,
            nzAlignBody: 'left',
            row: 2,
          })
        ),
        columnFactory({
          field: 'views_count',
          rowspan: 2,
        }),
        columnFactory({
          field: 'photo',
          rowspan: 2,
          template: 'custom',
          header: 'image',
        }),
      ];

      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   */
  override makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      '50px',
      ...languages.map(() => '200px'),
      ...languages.map(() => '200px'),
      '120px',
      '150px',
    ];
  }
}
