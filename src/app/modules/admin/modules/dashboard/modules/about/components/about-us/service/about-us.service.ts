import { Injectable } from '@angular/core';
import { AboutRequest } from '../model/about.request';
import { obj2FormData } from 'src/app/shared/utils/obj2FormData';
import { AboutResponse } from '../model/about.response';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService extends BaseService {
  /**
   *
   */
  url = 'admin/about';

  /**
   *
   * @returns
   */
  getAboutUsContent() {
    return this.get<AboutResponse[]>(this.url);
  }

  /**
   *
   * @param request
   * @returns
   */
  addAboutUsContent(request: AboutRequest) {
    const formData = obj2FormData(request);
    return this.post(`${this.url}`, formData);
  }

  /**
   *
   * @param request
   * @returns
   */
  editAboutUsContent(id: number, request: AboutRequest) {
    const formData = obj2FormData(request);
    return this.post(`${this.url}/${id}`, formData);
  }

  /**
   *
   * @param id
   * @returns
   */
  deleteAbout(id: number) {
    return this.delete(`${this.url}/${id}`);
  }
}
