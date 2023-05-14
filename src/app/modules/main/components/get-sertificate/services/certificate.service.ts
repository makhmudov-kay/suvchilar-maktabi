import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CertificateRequest } from '../models/certificate.request';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  /**
   *
   */
  url = 'http://91.213.99.234:8000/api/request/certificate';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @param certificateId
   * @returns
   */
  getCertificate(certificateId: CertificateRequest) {
    return this.http.post(this.url, certificateId);
  }
}
