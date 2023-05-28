import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

export const AboutUsRoutes = RouterModule.forChild(routes);
