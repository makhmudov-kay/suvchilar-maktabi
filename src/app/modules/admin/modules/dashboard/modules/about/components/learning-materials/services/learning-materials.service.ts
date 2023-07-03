import { Injectable } from '@angular/core';
import { LearningMaterialsResponse } from '../models/learning-materials.response';
import { LearningMaterialsRequest } from '../models/learning-materials.request';
import { CRUDWithFormDataService } from 'projects/ngx-ou-grid/src/lib/services/crud-with-form-data.service';
import { BaseResponse } from 'ngx-ou-grid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearningMaterialsService extends CRUDWithFormDataService<
  LearningMaterialsResponse,
  LearningMaterialsRequest
> {
  url = 'admin/material';

  override edit(
    id: number,
    model: any,
    isPost?: boolean
  ): Observable<BaseResponse<any>> {
    return super.edit(id, model, true);
  }
}
