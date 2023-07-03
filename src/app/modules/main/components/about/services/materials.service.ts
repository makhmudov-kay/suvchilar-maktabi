import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService extends BaseService {
  /**
   *
   */
  url = 'material';

  /**
   *
   * @returns
   */
  getMaterials() {
    return this.get<any[]>(`${this.url}`);
  }
}
