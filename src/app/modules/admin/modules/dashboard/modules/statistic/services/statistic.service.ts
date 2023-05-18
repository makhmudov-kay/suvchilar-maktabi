import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { Statistic } from '../model/statistic.response';

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
