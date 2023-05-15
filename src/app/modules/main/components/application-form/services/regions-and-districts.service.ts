import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region-and-districts.response';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class RegionsAndDistrictsService extends BaseService {
  /**
   *
   */
  url = 'region/with-district';

  /**
   *
   * @returns
   */
  getRegionAndDistricts() {
    return this.get<Region[]>(`${this.url}`);
  }
}
