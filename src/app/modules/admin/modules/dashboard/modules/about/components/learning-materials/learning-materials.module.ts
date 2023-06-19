import { NgModule } from '@angular/core';
import { LearningMaterialsComponent } from './learning-materials.component';
import { LearningMaterialsRoutes } from './learning-materials.routing';
import { AddEditMaterialsComponent } from './add-edit-materials/add-edit-materials.component';
import { SharedModule } from 'src/app/modules/admin/shared/shared/shared.module';

@NgModule({
  imports: [SharedModule, LearningMaterialsRoutes],
  declarations: [LearningMaterialsComponent, AddEditMaterialsComponent],
})
export class LearningMaterialsModule {}
