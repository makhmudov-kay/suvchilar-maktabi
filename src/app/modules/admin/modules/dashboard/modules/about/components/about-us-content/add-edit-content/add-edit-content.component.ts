import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseAddEdit } from 'ngx-ou-grid';
import { AboutUsContentService } from '../services/about-us-content.service';
import { AboutUsResponse } from '../model/about-us.response';
import { AboutUsRequest } from '../model/about-us.request';

@Component({
  selector: 'app-add-edit-content',
  templateUrl: './add-edit-content.component.html',
  styleUrls: ['./add-edit-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditContentComponent extends BaseAddEdit<
  AboutUsResponse,
  AboutUsRequest
> {
  /**
   *
   * @param $data
   */
  constructor(protected override $data: AboutUsContentService) {
    super($data);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: AboutUsResponse) {
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
