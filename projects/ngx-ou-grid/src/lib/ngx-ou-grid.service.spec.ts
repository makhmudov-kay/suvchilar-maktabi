import { TestBed } from '@angular/core/testing';

import { NgxOuGridService } from './ngx-ou-grid.service';

describe('NgxOuGridService', () => {
  let service: NgxOuGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOuGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
