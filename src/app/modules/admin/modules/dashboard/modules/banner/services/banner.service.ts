import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { BannerRequest } from '../models/banner.request';
import { obj2FormData } from 'src/app/shared/utils/obj2FormData';
import { BannerResponse } from '../models/banner.response';

@Injectable({
  providedIn: 'root',
})
export class BannerService extends BaseService {
  /**
   */
  url = 'admin/slider';

  /**
   *
   * @returns
   */
  getBannerList() {
    return this.get<BannerResponse[]>(`${this.url}`);
  }

  /**
   *
   * @param request
   * @returns
   */
  addBanner(request: BannerRequest) {
    const formData = obj2FormData(request);
    return this.post<BannerResponse>(`${this.url}`, formData);
  }

  /**
   *
   * @param id
   * @param request
   * @returns
   */
  editBanner(id: number, request: BannerRequest) {
    const formData = obj2FormData(request);
    return this.post<BannerResponse>(`${this.url}/${id}`, formData);
  }

  /**
   *
   * @param id
   * @returns
   */
  deleteBanner(id: number) {
    return this.delete(`${this.url}/${id}`);
  }
}
