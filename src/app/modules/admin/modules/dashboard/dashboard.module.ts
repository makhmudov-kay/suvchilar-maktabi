import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {TranslateModule} from '@ngx-translate/core';
import { LanguagesComponent } from 'src/app/shared/languages/languages.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    TranslateModule,
    LanguagesComponent,

    /* NG-ZORRO */
    NzLayoutModule,
    NzCollapseModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
