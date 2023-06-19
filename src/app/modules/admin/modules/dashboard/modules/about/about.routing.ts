import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about-us', pathMatch: 'full' },
      {
        path: 'image',
        loadChildren: () =>
          import('./components/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./components/about-us-content/about-us-content.module').then(
            (m) => m.AboutUsContentModule
          ),
      },
      {
        path: 'study-plan',
        loadChildren: () =>
          import('./components/study-plan/study-plan.module').then(
            (m) => m.StudyPlanModule
          ),
      },
      {
        path: 'learning-material',
        loadChildren: () =>
          import(
            './components/learning-materials/learning-materials.module'
          ).then((m) => m.LearningMaterialsModule),
      },
    ],
  },
];

export const AboutRoutes = RouterModule.forChild(routes);
