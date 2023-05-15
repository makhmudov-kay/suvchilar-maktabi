import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CertificateService } from './services/certificate.service';

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
   *
   * @param $certificate
   * @param cd
   */
  constructor(
    private $certificate: CertificateService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  searchSertificate() {
    if (this.certificate_id) {
      const request = {
        certificate_id: this.certificate_id,
      };
      this.$certificate.getCertificate(request).subscribe((data: Blob) => {
        this.sertificateForDownload = data;
        this.cd.markForCheck();
      });
    }
  }

  /**
   *
   * @param data
   */
  downloadSertificate(data: Blob) {
    // TODO: REMOVE IF WE DO NOT NEED REALLY
    // this.blob = new Blob([data], { type: 'application/pdf' });

    var downloadURL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = `Sertificate_${this.certificate_id}.pdf`;
    link.click();
    this.cd.markForCheck();
  }
}
