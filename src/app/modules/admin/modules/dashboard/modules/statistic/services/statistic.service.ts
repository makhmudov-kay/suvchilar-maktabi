import { Injectable } from '@angular/core';
import { Statistic } from '../model/statistic.response';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class StatisticService extends BaseService {
  /**
   *
   */
  url = 'admin/statistics';

  /**
   *
   * @returns
   */
  getStatisticsList() {
    return this.get<Statistic>(this.url);
  }
}
