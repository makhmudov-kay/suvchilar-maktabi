import { Injectable } from '@angular/core';
import { CRUDWithFormDataService } from 'projects/ngx-ou-grid/src/lib/services/crud-with-form-data.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService extends CRUDWithFormDataService<any, any> {
  url = 'admin/news';
}
