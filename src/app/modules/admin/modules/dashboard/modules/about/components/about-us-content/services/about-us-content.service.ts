import { Injectable } from '@angular/core';
import { CRUDService } from 'ngx-ou-grid';
import { AboutUsResponse } from '../model/about-us.response';
import { AboutUsRequest } from '../model/about-us.request';

@Injectable({
  providedIn: 'root',
})
export class AboutUsContentService extends CRUDService<
  AboutUsResponse,
  AboutUsRequest
> {
  url = 'admin/about-goal';
}
