import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseAddEdit } from 'ngx-ou-grid';
import { StudyPlanService } from '../services/study-plan.service';
import { StudyPlanRequest } from '../model/study-plan.request';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-study-plan',
  templateUrl: './add-edit-study-plan.component.html',
  styleUrls: ['./add-edit-study-plan.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditStudyPlanComponent extends BaseAddEdit<any, StudyPlanRequest> {
  /**
   *
   * @param $data
   */
  constructor(protected override $data: StudyPlanService) {
    super($data);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: any) {
    this.form = this.fb.group({
      plan_name: this.fb.group({}),
      plan_start: [model?.plan_start, [Validators.required]],
      plan_end: [model?.plan_end, [Validators.required]],
    });
  }

  /**
   *
   * @returns
   */
  override getRequest() {
    const request = this.form.getRawValue();
    return request;
  }
}
