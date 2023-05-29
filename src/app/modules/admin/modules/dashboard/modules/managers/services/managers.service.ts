import { Injectable } from '@angular/core';
import { Manager } from '../models/mangers.response';
import {
  ManagerAddedResponse,
  ManagerRequest,
} from '../models/manager.request';
import { BaseService, CRUDService } from 'ngx-ou-grid';

@Injectable({
  providedIn: 'root',
})
export class ManagersService extends CRUDService<Manager, ManagerRequest> {
  /**
   *
   */
  url = 'admin/user';

  // /**
  //  *
  //  * @returns
  //  */
  // getManagersList() {
  //   return this.get<Manager[]>(this.url);
  // }

  // /**
  //  *
  //  * @param request
  //  * @returns
  //  */
  // addManager(request: ManagerRequest) {
  //   return this.post<ManagerAddedResponse>(this.url, request);
  // }

  // /**
  //  *
  //  * @param id
  //  * @returns
  //  */
  // deleteManager(id: number) {
  //   return this.delete(`${this.url}/${id}`);
  // }

  // /**
  //  *
  //  * @param id
  //  * @param request
  //  * @returns
  //  */
  // editManager(id: number, request: ManagerRequest) {
  //   return this.put(`${this.url}/${id}`, request);
  // }
}
