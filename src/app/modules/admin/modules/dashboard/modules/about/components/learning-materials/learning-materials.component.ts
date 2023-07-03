import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LearningMaterialsResponse } from './models/learning-materials.response';
import { LearningMaterialsRequest } from './models/learning-materials.request';
import { CRUD, Language, columnFactory } from 'ngx-ou-grid';
import { AddEditMaterialsComponent } from './add-edit-materials/add-edit-materials.component';
import { LearningMaterialsService } from './services/learning-materials.service';

@Component({
  selector: 'app-learning-materials',
  templateUrl: './learning-materials.component.html',
  styleUrls: ['./learning-materials.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningMaterialsComponent
  extends CRUD<LearningMaterialsResponse, LearningMaterialsRequest>
  implements OnInit
{
  /**
   *
   */
  addEditModal = AddEditMaterialsComponent;

  /**
   *
   * @param $managers
   * @param fb
   * @param cd
   * @param $regions
   */
  constructor(protected $file: LearningMaterialsService) {
    super($file);
    this.searchInputConfig.keys = ['title'];
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
          field: 'material',
          rowspan: 2,
          template: 'custom',
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
      '120px',
      '150px',
    ];
  }
}
