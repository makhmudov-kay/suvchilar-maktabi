import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { StatisticRoutes } from './statistic.routing';
import { TranslateModule } from '@ngx-translate/core';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  imports: [CommonModule, StatisticRoutes, TranslateModule, NzStatisticModule],
  declarations: [StatisticComponent],
})
export class StatisticModule {}
