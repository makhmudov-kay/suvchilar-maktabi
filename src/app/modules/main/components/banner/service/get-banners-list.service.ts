import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class GetBannersListService extends BaseService {
  /**
   */
  url = 'slider';

  /**
   *
   * @returns
   */
  getBanners() {
    return this.get<any[]>(`${this.url}`);
  }
}
