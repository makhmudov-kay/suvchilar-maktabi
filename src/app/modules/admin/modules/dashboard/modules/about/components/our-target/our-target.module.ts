import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTargetComponent } from './our-target.component';
import { OurTargetRoutes } from './our-target.routing';

@NgModule({
  imports: [CommonModule, OurTargetRoutes],
  declarations: [OurTargetComponent],
})
export class OurTargetModule {}
