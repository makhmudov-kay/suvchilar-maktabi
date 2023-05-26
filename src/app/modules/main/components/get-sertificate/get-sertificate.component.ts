import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CertificateService } from './services/certificate.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { catchError, map, of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-sertificate',
  templateUrl: './get-sertificate.component.html',
  styleUrls: ['./get-sertificate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetSertificateComponent {
  /**
   *
   */
  sertificateForDownload?: Blob;

  /**
   */
  certificate_id!: string;

  /**
   */
  form!: FormGroup;

  /**
   *
   */
  messageError = false;

  /**
   *
   * @param $certificate
   * @param cd
   * @param fb
   */
  constructor(
    private $certificate: CertificateService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      certificate_id: [null],
    });
  }

  /**
   *
   * @param certificateID
   */
  changeInputCertificate(certificateID: string) {
    this.certificate_id = certificateID;
    this.messageError = false;
    this.cd.markForCheck();
  }

  /**
   *
   */
  searchSertificate(button: NzButtonComponent) {
    if (this.certificate_id) {
      button.nzLoading = true;
      const request = {
        certificate_id: this.certificate_id,
      };
      return this.$certificate.getCertificate(request).pipe(
        map((data: Blob) => {
          this.sertificateForDownload = data;
          button.nzLoading = false;
          this.cd.markForCheck();
          return data;
        }),
        catchError((error) => {
          button.nzLoading = false;
          this.messageError = true;
          this.cd.markForCheck();
          return error;
        })
      );
    }

    return of(null);
  }

  /**
   *
   * @param data
   */
  downloadSertificate(data: Blob) {
    downloadFile(data, this.certificate_id);
    this.cd.markForCheck();
  }
}

export function downloadFile(data: Blob, certificateId: string) {
  // TODO: REMOVE IF WE DO NOT NEED REALLY
  // this.blob = new Blob([data], { type: 'application/pdf' });

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = `Certificate_${certificateId}.pdf`;
  link.click();
}
