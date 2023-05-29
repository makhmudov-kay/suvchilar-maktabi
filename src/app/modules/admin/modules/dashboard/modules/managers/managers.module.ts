import { NgModule } from '@angular/core';
import { ManagersComponent } from './managers.component';
import { ManagersRoutes } from './managers.routing';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/modules/admin/shared/shared/shared.module';
import { AddEditManagerComponent } from './add-edit-manager/add-edit-manager.component';

@NgModule({
  imports: [ManagersRoutes, SharedModule, NgxMaskModule],
  declarations: [ManagersComponent, AddEditManagerComponent],
})
export class ManagersModule {}
