import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CertificateRequest } from '../models/certificate.request';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class CertificateService extends BaseService {
  /**
   *
   */
  url = 'request/certificate';

  /**
   *
   * @param certificateId
   * @returns
   */
  getCertificate(certificateId: CertificateRequest) {
    const httpOptions = {
      responseType: 'blob' as 'json',
    };

    return this.http.post<Blob>(
      `${this.endpoint}${this.url}`,
      certificateId,
      httpOptions
    );
  }
}
