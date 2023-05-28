import { Routes, RouterModule } from '@angular/router';
import { StudyPlanComponent } from './study-plan.component';

const routes: Routes = [{ path: '', component: StudyPlanComponent }];

export const StudyPlanRoutes = RouterModule.forChild(routes);
