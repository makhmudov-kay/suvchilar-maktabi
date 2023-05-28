import { Routes, RouterModule } from '@angular/router';
import { OurTargetComponent } from './our-target.component';

const routes: Routes = [{ path: '', component: OurTargetComponent }];

export const OurTargetRoutes = RouterModule.forChild(routes);
