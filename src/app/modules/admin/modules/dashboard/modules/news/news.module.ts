import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/modules/admin/shared/shared/shared.module';
import { NewsRoutes } from './news.routing';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';

@NgModule({
  imports: [SharedModule, NewsRoutes, ],
  declarations: [NewsComponent, AddEditNewsComponent],
})
export class NewsModule {}
