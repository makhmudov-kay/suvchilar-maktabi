import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './modules/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
];

export const NewsRoutes = RouterModule.forChild(routes);
