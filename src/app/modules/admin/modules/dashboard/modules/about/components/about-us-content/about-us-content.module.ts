import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTargetRoutes } from './about-us-content.routing';
import { AboutUsContentComponent } from './about-us-content.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    OurTargetRoutes,
    ErrorComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    /* NG-ZORRO */
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
  ],
  declarations: [AboutUsContentComponent],
})
export class AboutUsContentModule {}
