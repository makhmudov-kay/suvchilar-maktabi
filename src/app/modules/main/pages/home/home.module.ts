import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { LanguagesComponent } from 'src/app/shared/languages/languages.component';
import { AsyncClickDirective } from 'ngx-async-click';
import { ErrorComponent } from 'ngx-ou-grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BannerComponent } from '../../components/banner/banner.component';
import { AboutComponent } from '../../components/about/about.component';
import { ApplicationFormComponent } from '../../components/application-form/application-form.component';
import { GetSertificateComponent } from '../../components/get-sertificate/get-sertificate.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskModule,
    LanguagesComponent,
    AsyncClickDirective,
    ErrorComponent,

    /* NG-ZORRO */
    NzDividerModule,
    NzCarouselModule,
    NzButtonModule,
    NzTabsModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDrawerModule,
    NzTypographyModule,
    NzToolTipModule,
    NzCalendarModule,
    NzTableModule,
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ApplicationFormComponent,
    GetSertificateComponent,
    PartnersComponent,
    ContactsComponent,
  ],
})
export class HomeModule {}
