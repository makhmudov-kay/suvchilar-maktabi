import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GridComponent } from './grid/grid.component';
import { GetDeepValuePipe } from './pipes/getDeepValue.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NoImagePipe } from './pipes/noImage.pipe';
import { DeleteBtnPopconfirmComponent } from './delete-btn-popconfirm/delete-btn-popconfirm.component';
import { GridWithBackendComponent } from './grid/grid-with-backend/grid-with-backend.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SearchInputComponent } from './search-input/search-input.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SearchInputWithSelectComponent } from './search-input/search-input-with-select/search-input-with-select.component';
import { SearchInputAdvancedComponent } from './search-input/search-input-advanced/search-input-advanced.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HeaderWithDividerComponent } from './header-with-divider/header-with-divider.component';
import { HeaderWithDividerBasicComponent } from './header-with-divider/header-with-divider-basic/header-with-divider-basic.component';
import { HeaderWithDividerAdvancedComponent } from './header-with-divider/header-with-divider-advanced/header-with-divider-advanced.component';
import { TitleTotalPipe } from './pipes/title-total.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    GridComponent,
    GridWithBackendComponent,
    DeleteBtnPopconfirmComponent,
    SearchInputWithSelectComponent,
    SearchInputComponent,
    SearchInputAdvancedComponent,
    HeaderWithDividerComponent,
    HeaderWithDividerBasicComponent,
    HeaderWithDividerAdvancedComponent,
    SortPipe,
    NoImagePipe,
    TitleTotalPipe,
    GetDeepValuePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,

    NzModalModule,
    NzSelectModule,
    NzTableModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzPopconfirmModule,
    NzDividerModule,
  ],
  exports: [
    GridComponent,
    GridWithBackendComponent,
    HeaderWithDividerComponent,
    HeaderWithDividerBasicComponent,
    HeaderWithDividerAdvancedComponent,
    TitleTotalPipe,
  ],
})
export class NgxOuGridModule {}
