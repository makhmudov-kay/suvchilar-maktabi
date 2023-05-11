import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'applications', pathMatch: 'full' },
      {
        path: 'applications',
        loadChildren: () =>
          import('./modules/applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'managers',
        loadChildren: () =>
          import('./modules/managers/managers.module').then(
            (m) => m.ManagersModule
          ),
      },
    ],
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
