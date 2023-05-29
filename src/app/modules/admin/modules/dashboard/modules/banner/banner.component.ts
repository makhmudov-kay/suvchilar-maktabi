import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { BannerService } from './services/banner.service';
import { Observable, map } from 'rxjs';
import { BannerRequest } from './models/banner.request';
import { BannerResponse } from './models/banner.response';
import { BaseResponse } from 'src/app/shared/base-response.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  /**
   */
  searchText = '';

  /**
   */
  modalTitle = 'add';

  /**
   */
  form!: UntypedFormGroup;

  /**
   */
  isVisible = false;

  /**
   */
  tableLoading = false;

  /**
   */
  loadingBtn = false;

  /**
   */
  data$!: Observable<BannerResponse[]>;

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
   */
  id!: number;

  /**
   */
  errorMessage!: string;

  /**
   *
   * @param $banner
   * @param fb
   * @param cd
   */
  constructor(
    private $banner: BannerService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   * @param result
   */
  private addOrEditActionsAfterRequest(result: BaseResponse<unknown>) {
    if (result.success) {
      this.getBannerList();
      this.loadingBtn = false;
      this.handleCancel();
    } else {
      this.errorMessage = result.error.message;
      this.loadingBtn = false;
      this.cd.markForCheck();
    }
  }

  /**
   *
   * @param form
   */
  private markAllAsDirty(form: UntypedFormGroup) {
    Object.values(form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  /**
   *
   */
  private initForm(editingData?: BannerResponse) {
    this.form = this.fb.group({
      title_uz_cyrl: [editingData?.title.uz_cyrl, [Validators.required]],
      title_uz_latn: [editingData?.title.uz_latn, [Validators.required]],
      title_ru: [editingData?.title.ru, [Validators.required]],
      description_uz_cyrl: [
        editingData?.description.uz_cyrl,
        [Validators.required],
      ],
      description_uz_latn: [
        editingData?.description.uz_latn,
        [Validators.required],
      ],
      description_ru: [editingData?.description.ru, [Validators.required]],
      photo: [],
    });
  }

  /**
   *
   */
  private getBannerList() {
    this.tableLoading = true;
    this.data$ = this.$banner.getBannerList().pipe(
      map((result) => {
        this.tableLoading = false;
        return result.data;
      })
    );
  }

  /**
   *
   */
  ngOnInit() {
    this.getBannerList();
    this.initForm();
  }

  /**
   *
   * @param data
   */
  showModal(editingData?: BannerResponse) {
    if (editingData) {
      this.modalTitle = 'edit';
      this.id = editingData.id;
      this.initForm(editingData);
    } else {
      this.modalTitle = 'add';
    }
    this.isVisible = true;
    this.cd.markForCheck();
  }

  /**
   *
   */
  handleCancel() {
    this.isVisible = false;
    this.form.reset()
    this.cd.markForCheck();
  }

  /**
   *
   */
  handleOk() {
    if (this.form.invalid) {
      this.markAllAsDirty(this.form);
      return;
    }

    const form = this.form.getRawValue();
    const request: BannerRequest = {
      title: {
        uz_cyrl: form.title_uz_cyrl,
        uz_latn: form.title_uz_latn,
        ru: form.title_ru,
      },
      description: {
        uz_cyrl: form.description_uz_cyrl,
        uz_latn: form.description_uz_latn,
        ru: form.description_ru,
      }
    };

    if (this.form.controls['photo'].value) {
      request.photo = this.form.controls['photo'].value
    }

    this.loadingBtn = true;
    if (this.id) {
      this.$banner.editBanner(this.id, request).subscribe((result) => {
        this.addOrEditActionsAfterRequest(result);
      });
      return;
    }

    this.$banner.addBanner(request).subscribe((result) => {
      this.addOrEditActionsAfterRequest(result);
    });
  }

  /**
   *
   * @param data
   */
  deleteBanner(id: number) {
    this.$banner.deleteBanner(id).subscribe((result) => {
      if (result.success) {
        this.getBannerList();
        this.cd.markForCheck();
      }
    });
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
}
