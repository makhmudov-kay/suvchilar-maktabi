import { Injectable } from '@angular/core';
import { CRUDWithFormDataService } from 'projects/ngx-ou-grid/src/lib/services/crud-with-form-data.service';
import { BaseResponse } from 'projects/ngx-ou-grid/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends CRUDWithFormDataService<any, any> {
  url = 'admin/news';

  override edit(
    id: number,
    model: any,
    isPost?: boolean
  ): Observable<BaseResponse<any>> {
    return super.edit(id, model, true);
  }
}
