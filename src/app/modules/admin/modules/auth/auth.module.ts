import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    /* NG-ZORR */
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
  ],
  declarations: [AuthComponent],
})
export class AuthModule {}
