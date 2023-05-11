import { Routes, RouterModule } from '@angular/router';
import { ManagersComponent } from './managers.component';

const routes: Routes = [{ path: '', component: ManagersComponent }];

export const ManagersRoutes = RouterModule.forChild(routes);
