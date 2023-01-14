import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { IndexBlogComponent } from './core/components/index-blog/index-blog.component';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { combineLatest } from 'rxjs/internal/operators';
import {IndexServicesComponent} from "./core/components/index-services/index-services.component";
import {PageContactOneComponent} from "./core/components/page-contact-one/page-contact-one.component";

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'account-profile', component: AccountProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'account-works', component: AccountWorksComponent },
      { path: 'index', component: IndexComponent },

      { path: 'index-services', component: IndexServicesComponent },
      { path: 'index-blog', component: IndexBlogComponent },
      { path: 'page-aboutus', component: PageAboutusComponent },
      { path: 'page-aboutus-two', component: PageAboutusTwoComponent },
      { path: 'page-blog-list', component: PageBlogListComponent },
      { path: 'page-contact-one', component: PageContactOneComponent },

      { path: 'widget', component: WidgetComponent },
      { path: 'page-blog-detail-two', component: PageBlogDetailTwoComponent },
      { path: '#', component: SwitcherComponent },
    ]
  },

  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-signup', component: AuthSignupComponent },

  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
