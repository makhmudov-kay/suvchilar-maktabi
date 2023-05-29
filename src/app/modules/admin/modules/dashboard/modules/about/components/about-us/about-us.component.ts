import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { AboutUsService } from './service/about-us.service';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { AboutResponse } from './model/about.response';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements OnInit {
  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  data$!: Observable<any>;

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
   *
   */
  modalTitle = 'add';

  /**
   */
  @ViewChild('input')
  input!: ElementRef;

  /**
   *
   */
  form!: UntypedFormGroup;

  /**
   *
   */
  id!: number;

  /**
   *
   * @param $about
   * @param cd
   */
  constructor(
    private $about: AboutUsService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  /**
   *
   */
  private getAboutData() {
    this.data$ = this.$about
      .getAboutUsContent()
      .pipe(map((result) => result.data));
  }

  /**
   *
   */
  private initForm(editingData?: AboutResponse) {
    this.form = this.fb.group({
      photo: [editingData?.photo],
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.getAboutData();
    this.initForm();
  }

  /**
   *
   * @param editingData
   */
  showModal(editingData?: AboutResponse) {
    if (editingData) {
      this.id = editingData.id;
      this.fileSrcFromBackend = editingData.photo;
      this.modalTitle = 'edit';
    }
    this.isVisible = true;
    this.cd.markForCheck();
  }

  /**
   *
   */
  handleOk() {
    const request = this.form.getRawValue();

    this.$about.addAboutUsContent(request).subscribe((result) => {
      if (result.success) {
        this.getAboutData();
        this.cd.markForCheck();
      }
    });

    this.isVisible = false;
    this.cd.markForCheck();
  }

  handleCancel() {
    this.isVisible = false;
    this.cd.markForCheck();
  }

  /**
   *
   * @param e
   */
  handleFileInput(e: any) {
    this.file = e.target?.files?.item(0);
    this.form.controls['photo'].setValue(this.file);
    if (this.file) {
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
  deleteNotUploadedImage() {
    if (this.fileSrc) {
      this.form.controls['photo'].setValue(null);
      this.fileSrc = '';
      this.file = null;
    }
  }

  /**
   *
   * @param id
   */
  deleteImage(id: number) {
    this.$about.deleteAbout(id).subscribe((result) => {
      if (result.success) {
        this.getAboutData();
        this.cd.markForCheck();
      }
    });
  }
}
