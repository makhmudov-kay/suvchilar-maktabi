import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagersList } from '../models/mangers.response';

@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  /**
   *
   */
  url = 'http://91.213.99.234:8000/api/admin/user';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getManagersList(): Observable<ManagersList> {    
    return this.http.get<ManagersList>(this.url);
  }
}
