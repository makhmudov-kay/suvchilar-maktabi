import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  imports: [CommonModule, NewsRoutes, NzIconModule, NzPaginationModule],
  declarations: [NewsComponent],
})
export class NewsModule {}
