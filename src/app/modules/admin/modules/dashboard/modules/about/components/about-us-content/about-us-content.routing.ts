import { Routes, RouterModule } from '@angular/router';
import { AboutUsContentComponent } from './about-us-content.component';

const routes: Routes = [{ path: '', component: AboutUsContentComponent }];

export const OurTargetRoutes = RouterModule.forChild(routes);
