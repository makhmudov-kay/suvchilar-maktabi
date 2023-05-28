import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchPipe } from 'src/app/modules/admin/shared/pipe/search.pipe';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { BannerRoutes } from './banner.routing';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SearchPipe,
    ErrorComponent,
    BannerRoutes,
    NzImageModule,

    /* NG-ZORRO */
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
  ],
  declarations: [BannerComponent],
})
export class BannerModule {}
