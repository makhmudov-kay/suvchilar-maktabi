import { Injectable } from '@angular/core';
import { CRUDService } from 'ngx-ou-grid';
import { StudyPlanRequest } from '../model/study-plan.request';

@Injectable({
  providedIn: 'root',
})
export class StudyPlanService extends CRUDService<any, StudyPlanRequest> {
  /**
   *
   */
  url = 'admin/program';
}
