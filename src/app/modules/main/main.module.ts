import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutes } from './main.routing';
import { HeaderComponent } from './components/header/header.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BannerComponent } from './components/banner/banner.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AboutComponent } from './components/about/about.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { GetSertificateComponent } from './components/get-sertificate/get-sertificate.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutes,
    FormsModule,
    ReactiveFormsModule,

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
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ApplicationFormComponent,
    GetSertificateComponent,
    PartnersComponent,
    ContactsComponent,
    FooterComponent,
  ],
})
export class MainModule {}
