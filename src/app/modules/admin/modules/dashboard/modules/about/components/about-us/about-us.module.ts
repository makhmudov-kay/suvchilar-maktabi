import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutes } from './about-us.routing';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutes,
    TranslateModule,

    /* NG-ZORRO */
    NzCardModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
  ],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {}
