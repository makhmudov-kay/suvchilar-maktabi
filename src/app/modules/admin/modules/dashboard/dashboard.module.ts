import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,

    /* NG-ZORRO */
    NzLayoutModule,
    NzCollapseModule,
    NzIconModule,
    NzMenuModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
