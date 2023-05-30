import { Component, OnInit } from '@angular/core';
import { StudyPlanService } from './services/study-plan.service';
import { CRUD, Language, columnFactory } from 'ngx-ou-grid';
import { StudyPlanRequest } from './model/study-plan.request';
import { AddEditStudyPlanComponent } from './add-edit-study-plan/add-edit-study-plan.component';

@Component({
  selector: 'app-study-plan',
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.less'],
})
export class StudyPlanComponent
  extends CRUD<any, StudyPlanRequest>
  implements OnInit
{
  /**
   *
   */
  addEditModal = AddEditStudyPlanComponent;

  /**
   *
   * @param $managers
   * @param fb
   * @param cd
   * @param $regions
   */
  constructor(protected $studyPlan: StudyPlanService) {
    super($studyPlan);
    this.searchInputConfig.keys = ['plan_name'];
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
          field: 'plan_name',
          colspan: 2,
          rowspan: 1,
          justHeader: true,
          header: 'title',
        }),
        ...languages.map((language) =>
          columnFactory({
            field: 'plan_name.' + language.code,
            header: language.short_name,
            sortable: true,
            nzAlignBody: 'left',
            row: 2,
          })
        ),
        columnFactory({
          field: 'plan_start',
          rowspan: 2,
          header: 'start',
        }),
        columnFactory({
          field: 'plan_end',
          rowspan: 2,
          header: 'finish',
        }),
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
      ...languages.map(() => '300px'),
      '150px',
      '150px',
      '120px',
    ];
  }
}
