import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CRUD, Language, columnFactory } from 'ngx-ou-grid';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';
import { AboutUsContentService } from './services/about-us-content.service';
import { AboutUsResponse } from './model/about-us.response';
import { AboutUsRequest } from './model/about-us.request';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsContentComponent
  extends CRUD<AboutUsResponse, AboutUsRequest>
  implements OnInit
{
  /**
   *
   */
  addEditModal = AddEditContentComponent;

  /**
   *
   * @param $managers
   * @param fb
   * @param cd
   * @param $regions
   */
  constructor(protected $content: AboutUsContentService) {
    super($content);
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
          field: 'description',
          colspan: 2,
          rowspan: 1,
          justHeader: true,
        }),
        ...languages.map((language) =>
          columnFactory({
            field: 'description.' + language.code,
            header: language.short_name,
            sortable: true,
            nzAlignBody: 'left',
            row: 2,
            template: 'ellipsis',
          })
        ),
      ];

      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   * @param languages
   */
  override makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      '50px',
      ...languages.map(() => '200px'),
      ...languages.map(() => '200px'),
      '120px',
    ];
  }
}
