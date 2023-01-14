import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { IndexComponent } from './core/components/index/index.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IndexBlogComponent} from "./core/components/index-blog/index-blog.component";
import {AccountWorksComponent} from "./core/components/account-works/account-works.component";
import {IndexServicesComponent} from "./core/components/index-services/index-services.component";
import {PageContactOneComponent} from "./core/components/page-contact-one/page-contact-one.component";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    MasterPageComponent,
    AccountProfileComponent,
    AccountSettingComponent,
    AccountWorksComponent,
    AuthLoginComponent,
    AuthRePasswordComponent,
    AuthSignupComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    IndexComponent,
    IndexServicesComponent,
    IndexBlogComponent,
    PageAboutusComponent,
    PageAboutusTwoComponent,
    PageBlogListComponent,
    PageBlogDetailTwoComponent,
    PageContactOneComponent,
    WidgetComponent,
    SwitcherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
