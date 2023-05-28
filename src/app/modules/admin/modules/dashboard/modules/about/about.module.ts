import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, AboutRoutes, RouterModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
