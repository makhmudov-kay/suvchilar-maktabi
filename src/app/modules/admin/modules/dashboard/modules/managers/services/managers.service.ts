import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../models/mangers.response';
import { BaseService } from 'src/app/shared/base.service';
import { BaseResponse } from 'src/app/shared/base-response.interface';

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
