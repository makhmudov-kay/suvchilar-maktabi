import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionAndDistrictsResponse } from '../models/region-and-districts.response';

@Injectable({
  providedIn: 'root',
})
export class RegionsAndDistrictsService {
  /**
   *
   */
  url = 'http://91.213.99.234:8000/api/region/with-district';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getRegionAndDistricts(): Observable<RegionAndDistrictsResponse> {
    return this.http.get<RegionAndDistrictsResponse>(`${this.url}`);
  }
}
