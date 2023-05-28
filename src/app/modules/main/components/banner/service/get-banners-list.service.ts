import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';

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
