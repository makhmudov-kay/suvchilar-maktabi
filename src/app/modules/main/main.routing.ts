import { NewsDetailModule } from './pages/news/modules/news-detail/news-detail.module';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./pages/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'news/:id',
        loadChildren: () =>
          import('./pages/news/modules/news-detail/news-detail.module').then(
            (m) => m.NewsDetailModule
          ),
      },
    ],
  },
];

export const MainRoutes = RouterModule.forChild(routes);
