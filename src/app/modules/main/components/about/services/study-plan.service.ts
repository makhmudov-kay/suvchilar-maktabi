import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class StudyPlanService extends BaseService {
  /**
   *
   */
  url = 'program';

  /**
   *
   * @returns
   */
  getStudyPlan() {
    return this.get<any[]>(`${this.url}`);
  }
}
