import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';
import { ManagersRoutes } from './managers.routing';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SearchPipe } from 'src/app/modules/admin/shared/pipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { NgxMaskModule } from 'ngx-mask';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  imports: [
    CommonModule,
    ManagersRoutes,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    ErrorComponent,
    NgxMaskModule,

    /* Ng-ZORRO */
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
    NzTagModule,
  ],
  declarations: [ManagersComponent],
})
export class ManagersModule {}
