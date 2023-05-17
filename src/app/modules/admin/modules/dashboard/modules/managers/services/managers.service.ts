import { Injectable } from '@angular/core';
import { Manager } from '../models/mangers.response';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class ManagersService extends BaseService {
  /**
   *
   */
  url = 'admin/user';

  /**
   *
   * @returns
   */
  getManagersList() {
    return this.get<Manager[]>(this.url);
  }
}
