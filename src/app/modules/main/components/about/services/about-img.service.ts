import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class AboutImgService extends BaseService {
  /**
   *
   */
  url = 'about';

  /**
   * 
   * @returns 
   */
  getAboutImage() {
    return this.get(`${this.url}`);
  }
}
