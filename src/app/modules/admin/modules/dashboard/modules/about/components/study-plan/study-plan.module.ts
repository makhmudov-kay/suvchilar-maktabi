import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyPlanComponent } from './study-plan.component';
import { StudyPlanRoutes } from './study-plan.routing';
import { SharedModule } from 'src/app/modules/admin/shared/shared/shared.module';
import { AddEditStudyPlanComponent } from './add-edit-study-plan/add-edit-study-plan.component';

@NgModule({
  imports: [SharedModule, StudyPlanRoutes],
  declarations: [StudyPlanComponent, AddEditStudyPlanComponent],
})
export class StudyPlanModule {}
