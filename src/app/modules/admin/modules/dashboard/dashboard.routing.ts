import { StatisticModule } from './modules/statistic/statistic.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/statistic/statistic.module').then(
            (m) => m.StatisticModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./modules/applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'managers',
        loadChildren: () =>
          import('./modules/managers/managers.module').then(
            (m) => m.ManagersModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'banner',
        loadChildren: () =>
          import('./modules/banner/banner.module').then((m) => m.BannerModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
