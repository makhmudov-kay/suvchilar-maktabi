import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseAddEdit } from 'ngx-ou-grid';
import { LearningMaterialsRequest } from '../models/learning-materials.request';
import { LearningMaterialsResponse } from '../models/learning-materials.response';
import { LearningMaterialsService } from '../services/learning-materials.service';

@Component({
  selector: 'app-add-edit-materials',
  templateUrl: './add-edit-materials.component.html',
  styleUrls: ['./add-edit-materials.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditMaterialsComponent extends BaseAddEdit<
  LearningMaterialsResponse,
  LearningMaterialsRequest
> {
  /**
   *
   * @param $data
   */
  constructor(protected override $data: LearningMaterialsService) {
    super($data);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: LearningMaterialsResponse) {
    this.form = this.fb.group({
      title: this.fb.group({}),
      description: this.fb.group({}),
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
