import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about-us', pathMatch: 'full' },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./components/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'our-target',
        loadChildren: () =>
          import('./components/our-target/our-target.module').then(
            (m) => m.OurTargetModule
          ),
      },
      {
        path: 'study-plan',
        loadChildren: () =>
          import('./components/study-plan/study-plan.module').then(
            (m) => m.StudyPlanModule
          ),
      },
    ],
  },
];

export const AboutRoutes = RouterModule.forChild(routes);
