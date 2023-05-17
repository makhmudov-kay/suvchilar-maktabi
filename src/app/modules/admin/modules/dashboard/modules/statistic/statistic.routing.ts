import { Routes, RouterModule } from '@angular/router';
import { StatisticComponent } from './statistic.component';

const routes: Routes = [{ path: '', component: StatisticComponent }];

export const StatisticRoutes = RouterModule.forChild(routes);
