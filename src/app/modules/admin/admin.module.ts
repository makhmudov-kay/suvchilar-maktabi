import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/auth.interceptor';

@NgModule({
  imports: [CommonModule, AdminRoutes],
  declarations: [AdminComponent],
  
})
export class AdminModule {}
