import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BaseAddEdit } from 'ngx-ou-grid';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.less'],
})
export class AddEditNewsComponent extends BaseAddEdit<any, any> {
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
    protected override $data: NewsService,
    private cd: ChangeDetectorRef
  ) {
    super($data);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: any) {
    this.form = this.fb.group({
      title: this.fb.group({}),
      content: this.fb.group({}),
      photo: [null],
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
    this.form.controls['photo'].setValue(this.file);
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
