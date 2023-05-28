import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutes } from './about-us.routing';

@NgModule({
  imports: [CommonModule, AboutUsRoutes],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {}
