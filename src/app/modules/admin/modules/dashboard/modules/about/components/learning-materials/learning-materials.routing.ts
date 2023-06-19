import { Routes, RouterModule } from '@angular/router';
import { LearningMaterialsComponent } from './learning-materials.component';

const routes: Routes = [{ path: '', component: LearningMaterialsComponent }];

export const LearningMaterialsRoutes = RouterModule.forChild(routes);
