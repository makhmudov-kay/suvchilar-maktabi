import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications.component';

const routes: Routes = [{ path: '', component: ApplicationsComponent }];

export const ApplicationsRoutes = RouterModule.forChild(routes);
