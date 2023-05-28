import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyPlanComponent } from './study-plan.component';
import { StudyPlanRoutes } from './study-plan.routing';

@NgModule({
  imports: [CommonModule, StudyPlanRoutes],
  declarations: [StudyPlanComponent],
})
export class StudyPlanModule {}
