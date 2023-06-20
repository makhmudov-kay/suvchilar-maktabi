import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
   */
  fileSrc!: string;

  /**
   */
  file?: File | null;

  /**
   */
  fileSrcFromBackend!: string;

  /**
   */
  @ViewChild('input')
  input!: ElementRef;

  /**
   *
   */
  fileName?: string;

  /**
   *
   * @param $data
   */
  constructor(
    protected override $data: LearningMaterialsService,
    private cd: ChangeDetectorRef
  ) {
    super($data);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: LearningMaterialsResponse) {
    this.form = this.fb.group({
      title: this.fb.group({}),
      material: [null],
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

  /**
   *
   * @param e
   */
  handleFileInput(e: any) {
    this.file = e.target?.files?.item(0);
    this.form.controls['material'].setValue(this.file);
    if (this.file) {
      this.fileName = this.file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.fileSrc = reader.result as string;
        this.cd.markForCheck();
      };
      reader.readAsDataURL(this.file);
    }
    this.input.nativeElement.value = '';
    this.cd.markForCheck();
  }

  /**
   *
   */
  deleteFile() {
    if (this.fileSrc) {
      this.form.controls['material'].setValue(null);
      this.fileSrc = '';
      this.file = null;
    }
  }
}
