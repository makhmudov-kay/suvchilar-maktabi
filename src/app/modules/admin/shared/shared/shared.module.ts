import { NgxKirilLotinPipe } from 'ngx-kiril-lotin';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent, NgxOuGridModule } from 'ngx-ou-grid';
import { SearchPipe } from '../pipe/search.pipe';
import { LanguageControlsComponent } from '../components/language-controls/language-controls.component';

@NgModule({
  declarations: [
    LanguageControlsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorComponent,
    NgxOuGridModule,
    NgxKirilLotinPipe,

    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorComponent,
    NgxOuGridModule,
    LanguageControlsComponent,

    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
  ],
})
export class SharedModule {}
