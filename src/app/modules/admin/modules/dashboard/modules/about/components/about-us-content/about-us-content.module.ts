import { NgModule } from '@angular/core';
import { OurTargetRoutes } from './about-us-content.routing';
import { AboutUsContentComponent } from './about-us-content.component';
import { SharedModule } from 'src/app/modules/admin/shared/shared/shared.module';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';

@NgModule({
  imports: [OurTargetRoutes, SharedModule],
  declarations: [AboutUsContentComponent, AddEditContentComponent],
})
export class AboutUsContentModule {}
