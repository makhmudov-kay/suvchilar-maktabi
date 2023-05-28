import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
];

export const BannerRoutes = RouterModule.forChild(routes);
