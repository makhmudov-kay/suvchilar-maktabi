import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { NewsDetailRoutes } from './news-detail.routing';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NewsDetailRoutes, NzIconModule],
  declarations: [NewsDetailComponent],
})
export class NewsDetailModule {}
