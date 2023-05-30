import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class AboutUsContentService extends BaseService {
  /**
   *
   */
  url = 'about-goal';

  /**
   *
   * @returns
   */
  getAboutUsContent() {
    return this.get<any[]>(`${this.url}`);
  }
}
