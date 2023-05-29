import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOuGridComponent } from './ngx-ou-grid.component';

describe('NgxOuGridComponent', () => {
  let component: NgxOuGridComponent;
  let fixture: ComponentFixture<NgxOuGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOuGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxOuGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
