import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutes } from './news.routing';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from 'ngx-ou-grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutes,
    NzIconModule,
    NzPaginationModule,
    TranslateModule,
    ErrorComponent,
    NzTypographyModule,
  ],
  declarations: [NewsComponent],
})
export class NewsModule {}
