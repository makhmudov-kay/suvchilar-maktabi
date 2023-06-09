import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutes } from './applications.routing';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SearchPipe } from 'src/app/modules/admin/shared/pipe/search.pipe';
import { AsyncClickDirective } from 'ngx-async-click';
import { ErrorComponent } from 'src/app/shared/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutes,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    AsyncClickDirective,
    ErrorComponent,

    /* Ng-ZORRO */
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
  ],
  declarations: [ApplicationsComponent],
})
export class ApplicationsModule {}
