import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from 'ngx-ou-grid';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutes,
    NzIconModule,
    NzPaginationModule,
    TranslateModule,
    ErrorComponent,
  ],
  declarations: [NewsComponent],
})
export class NewsModule {}
