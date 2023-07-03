import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends BaseService {
  /**
   *
   */
  url = 'news';

  /**
   *
   * @returns
   */
  getNewsList() {
    return this.get<any[]>(`${this.url}`);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  getDetailNews(id: number) {
    return this.get<any[]>(`${this.url}/${id}`);
  }
}
