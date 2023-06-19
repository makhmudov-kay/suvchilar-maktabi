import { Injectable } from '@angular/core';
import { CRUDService } from 'ngx-ou-grid';
import { LearningMaterialsResponse } from '../models/learning-materials.response';
import { LearningMaterialsRequest } from '../models/learning-materials.request';

@Injectable({
  providedIn: 'root',
})
export class LearningMaterialsService extends CRUDService<
  LearningMaterialsResponse,
  LearningMaterialsRequest
> {
  url = 'admin/material';
}
