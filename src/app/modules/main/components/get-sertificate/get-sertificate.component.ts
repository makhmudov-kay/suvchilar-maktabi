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
   */
  getCertificate = true;

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
      this.$certificate.getCertificate(request).subscribe(() => {  
          this.getCertificate = false;          
          this.cd.markForCheck();
      });
    }
  }
}
