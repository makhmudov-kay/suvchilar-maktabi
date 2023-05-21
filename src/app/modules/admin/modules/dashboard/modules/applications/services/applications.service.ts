import { Injectable } from '@angular/core';
import { Application } from '../models/application.response';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService extends BaseService {
  /**
   *
   */
  url = 'admin/request';

  /**
   *
   * @returns
   */
  getApplicationsList() {
    return this.get<Application[]>(this.url);
  }

  /**
   *
   * @param model
   * @returns
   */
  edit(model: Application) {
    return this.put(`${this.url}/${model.id}`, model);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteApplication(id: number) {
    return this.delete(`${this.url}/${id}`)
  }
}
