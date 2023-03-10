"use strict";
(self["webpackChunklandrick_angular"] = self["webpackChunklandrick_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 6005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 2369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/account-profile/account-profile.component */ 2016);
/* harmony import */ var _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/account-setting/account-setting.component */ 4741);
/* harmony import */ var _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/account-works/account-works.component */ 844);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 7021);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/index/index.component */ 8002);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 9959);
/* harmony import */ var _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-aboutus-two/page-aboutus-two.component */ 6507);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 5296);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 3380);
/* harmony import */ var _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/page-blog-list/page-blog-list.component */ 6126);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 2219);
/* harmony import */ var _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email/email-alert/email-alert.component */ 80);
/* harmony import */ var _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email/email-confirmation/email-confirmation.component */ 8942);
/* harmony import */ var _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./email/email-invoice/email-invoice.component */ 9760);
/* harmony import */ var _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email/email-password-reset/email-password-reset.component */ 4065);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);
/* harmony import */ var _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/components/index-services/index-services.component */ 517);
/* harmony import */ var _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/components/page-contact-one/page-contact-one.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);
























const routes = [{
  path: '',
  component: _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__.MasterPageComponent,
  children: [{
    path: '',
    component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexComponent
  }, {
    path: 'account-profile',
    component: _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_3__.AccountProfileComponent
  }, {
    path: 'account-setting',
    component: _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__.AccountSettingComponent
  }, {
    path: 'account-works',
    component: _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_5__.AccountWorksComponent
  }, {
    path: 'index',
    component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexComponent
  }, {
    path: 'index-services',
    component: _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_19__.IndexServicesComponent
  }, {
    path: 'index-blog',
    component: _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_6__.IndexBlogComponent
  }, {
    path: 'page-aboutus',
    component: _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_10__.PageAboutusComponent
  }, {
    path: 'page-aboutus-two',
    component: _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_9__.PageAboutusTwoComponent
  }, {
    path: 'page-blog-list',
    component: _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_12__.PageBlogListComponent
  }, {
    path: 'page-contact-one',
    component: _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_20__.PageContactOneComponent
  }, {
    path: 'widget',
    component: _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_13__.WidgetComponent
  }, {
    path: 'page-blog-detail-two',
    component: _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_11__.PageBlogDetailTwoComponent
  }, {
    path: '#',
    component: _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_18__.SwitcherComponent
  }]
}, {
  path: 'auth-login',
  component: _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__.AuthLoginComponent
}, {
  path: 'auth-re-password',
  component: _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__.AuthRePasswordComponent
}, {
  path: 'auth-signup',
  component: _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__.AuthSignupComponent
}, {
  path: 'email-alert',
  component: _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_14__.EmailAlertComponent
}, {
  path: 'email-confirmation',
  component: _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_15__.EmailConfirmationComponent
}, {
  path: 'email-invoice',
  component: _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_16__.EmailInvoiceComponent
}, {
  path: 'email-password-reset',
  component: _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_17__.EmailPasswordResetComponent
}];
class AppRoutingModule {}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["????defineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["????defineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled"
  }), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["????setNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);




class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'landrick-angular';
    /**
     * Unicons icon refreshed on route change.
     */
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        window['Unicons']['refresh']();
      }
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
AppComponent.??fac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-switcher")(1, "router-outlet")(2, "modal-outlet")(3, "app-carousel");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__.SwitcherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5369);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-typed-js */ 7513);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! angularx-flatpickr */ 1988);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 7321);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-masonry */ 9765);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 4169);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/registration/registration.component */ 7462);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 9959);
/* harmony import */ var _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/account-profile/account-profile.component */ 2016);
/* harmony import */ var _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/account-setting/account-setting.component */ 4741);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 6005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 2369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email/email-alert/email-alert.component */ 80);
/* harmony import */ var _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email/email-confirmation/email-confirmation.component */ 8942);
/* harmony import */ var _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email/email-invoice/email-invoice.component */ 9760);
/* harmony import */ var _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./email/email-password-reset/email-password-reset.component */ 4065);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/components/index/index.component */ 8002);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 5296);
/* harmony import */ var _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/components/page-aboutus-two/page-aboutus-two.component */ 6507);
/* harmony import */ var _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/components/page-blog-list/page-blog-list.component */ 6126);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 3380);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 2219);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-feather/icons */ 1744);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 7021);
/* harmony import */ var _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/components/account-works/account-works.component */ 844);
/* harmony import */ var _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/components/index-services/index-services.component */ 517);
/* harmony import */ var _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/components/page-contact-one/page-contact-one.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2560);





















































const DEFAULT_SWIPER_CONFIG = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
class AppModule {}
AppModule.??fac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["????defineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["????defineInjector"]({
  providers: [{
    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_37__.allIcons), _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__.ScrollToModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule.forRoot([], {}), ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__.NgxYoutubePlayerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbDropdownModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__.CKEditorModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__.FlatpickrModule.forRoot(), angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_45__.NgxMasonryModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["????setNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_23__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__.FooterComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationComponent, _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_7__.MasterPageComponent, _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_8__.AccountProfileComponent, _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_9__.AccountSettingComponent, _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_27__.AccountWorksComponent, _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_10__.AuthLoginComponent, _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_11__.AuthRePasswordComponent, _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_12__.AuthSignupComponent, _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_13__.EmailAlertComponent, _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_14__.EmailConfirmationComponent, _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_15__.EmailInvoiceComponent, _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_16__.EmailPasswordResetComponent, _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_17__.IndexComponent, _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_28__.IndexServicesComponent, _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_26__.IndexBlogComponent, _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_18__.PageAboutusComponent, _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_19__.PageAboutusTwoComponent, _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_20__.PageBlogListComponent, _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_21__.PageBlogDetailTwoComponent, _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_29__.PageContactOneComponent, _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_22__.WidgetComponent, _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_25__.SwitcherComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__.NgxYoutubePlayerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbDropdownModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__.CKEditorModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_45__.NgxMasonryModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule]
  });
})();

/***/ }),

/***/ 6005:
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLoginComponent": () => (/* binding */ AuthLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Login Component
 */
class AuthLoginComponent {
  constructor() {}
  ngOnInit() {}
}
AuthLoginComponent.??fac = function AuthLoginComponent_Factory(t) {
  return new (t || AuthLoginComponent)();
};
AuthLoginComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AuthLoginComponent,
  selectors: [["app-auth-login"]],
  decls: 68,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/login.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "login-page", "bg-white", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"]],
  template: function AuthLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15)(35, "div", 24)(36, "div", 16)(37, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Remember me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 28)(42, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Forgot password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 30)(45, "div", 31)(46, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 33)(49, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Or Login With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14)(52, "div", 34)(53, "div", 31)(54, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 34)(58, "div", 31)(59, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 38)(63, "p", 39)(64, "small", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Don't have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2369:
/*!*********************************************************************!*\
  !*** ./src/app/auth/auth-re-password/auth-re-password.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRePasswordComponent": () => (/* binding */ AuthRePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth RePassword Component
 */
class AuthRePasswordComponent {
  constructor() {}
  ngOnInit() {}
}
AuthRePasswordComponent.??fac = function AuthRePasswordComponent_Factory(t) {
  return new (t || AuthRePasswordComponent)();
};
AuthRePasswordComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AuthRePasswordComponent,
  selectors: [["app-auth-re-password"]],
  decls: 37,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/recovery.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "text-muted"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Enter Your Email Address", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthRePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Recover Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Please enter your email address. You will receive a link to create a new password via email.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17)(20, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i-feather", 21)(26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15)(28, "div", 23)(29, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 25)(32, "p", 26)(33, "small", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Remember your password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8094:
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-signup/auth-signup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Signup Component
 */
class AuthSignupComponent {
  constructor() {}
  ngOnInit() {}
}
AuthSignupComponent.??fac = function AuthSignupComponent_Factory(t) {
  return new (t || AuthSignupComponent)();
};
AuthSignupComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AuthSignupComponent,
  selectors: [["app-auth-signup"]],
  decls: 84,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-auth-home", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/signup.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "First Name", "name", "s", "required", "", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "Last Name", "name", "s", "required", "", 1, "form-control", "ps-5"], [1, "col-md-12"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["routerLink", "/auth-signup", 1, "text-primary"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "First name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Last name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 24)(35, "div", 16)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i-feather", 25)(42, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 24)(44, "div", 16)(45, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i-feather", 27)(51, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 24)(53, "div", 16)(54, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "I Accept ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Terms And Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 24)(61, "div", 33)(62, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 35)(65, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Or Signup With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 14)(68, "div", 36)(69, "div", 33)(70, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 36)(74, "div", 33)(75, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 40)(79, "p", 41)(80, "small", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Already have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoginComponent {
  constructor() {}
  ngOnInit() {}
}
LoginComponent.??fac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 0,
  vars: 0,
  template: function LoginComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7462:
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RegistrationComponent {
  constructor() {}
  ngOnInit() {}
}
RegistrationComponent.??fac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)();
};
RegistrationComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-registration"]],
  decls: 2,
  vars: 0,
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "registration works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2016:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/account-profile/account-profile.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountProfileComponent": () => (/* binding */ AccountProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);




/**
 * Account Profile Component
 */
class AccountProfileComponent {
  constructor() {
    /**
     * nav light class add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountProfileComponent.??fac = function AccountProfileComponent_Factory(t) {
  return new (t || AccountProfileComponent)();
};
AccountProfileComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AccountProfileComponent,
  selectors: [["app-account-profile"]],
  decls: 318,
  vars: 1,
  consts: [["id", "home", 1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], [1, "widget", "mt-4"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0", "active"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "border-bottom", "pb-4"], [1, "col-md-6", "mt-4"], [1, "mt-4"], [1, "d-flex", "align-items-center"], ["name", "mail", 1, "fea", "icon-ex-md", "text-muted", "me-3"], [1, "flex-1"], [1, "text-primary", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "d-flex", "align-items-center", "mt-3"], ["name", "bookmark", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "italic", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "globe", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "gift", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "map-pin", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "phone", 1, "fea", "icon-ex-md", "text-muted", "me-3"], [1, "col-md-6", "mt-4", "pt-2", "pt-sm-0"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow", "mt-4"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "flex-1", "content", "ms-3"], ["href", "javascript:void(0)", 1, "text-primary"], ["src", "assets/images/job/Codepen.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/job/Gitlab.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "mt-4", "mb-0"], [1, "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], ["src", "assets/images/blog/02.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "col-12", "mt-4", "pt-2"], ["routerLink", "/page-blog-grid", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function AccountProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 50)(71, "ul", 51)(72, "li", 52)(73, "a", 53)(74, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 57)(79, "a", 58)(80, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li", 57)(85, "a", 60)(86, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 57)(91, "a", 62)(92, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li", 57)(97, "a", 64)(98, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li", 57)(103, "a", 66)(104, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li", 57)(109, "a", 68)(110, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 78)(140, "div", 79)(141, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 79)(146, "div", 2)(147, "div", 80)(148, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Personal Details :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 81)(151, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "i-feather", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 84)(154, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Email :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "kristajoseph0203@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i-feather", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 84)(161, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Skills :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "css");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "mysql");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "i-feather", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 84)(177, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Language :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Japanese");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Chinese");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "i-feather", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 84)(190, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Website :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "www.kristajoseph.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 84)(197, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Birthday :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "2nd March, 1996");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "i-feather", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 84)(204, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Location :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Beijing, China");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "i-feather", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 84)(211, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Cell No :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "(+12) 1254-56-4896");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 94)(216, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Experience :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 97)(221, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Senior Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "3 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p", 42)(226, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " @London, UK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 97)(232, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Web Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "2 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p", 42)(237, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Codepen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " @Washington D.C, USA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](241, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 97)(243, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "UI Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "2 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p", 42)(248, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Gitlab");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, " @Perth, Australia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "h5", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Posts & News :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 2)(254, "div", 102)(255, "div", 103)(256, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](257, "img", 105)(258, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 107)(260, "h5")(261, "a", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 109)(264, "ul", 110)(265, "li", 111)(266, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "i", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "li", 18)(270, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "i", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 118)(277, "small", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](278, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "small", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 102)(284, "div", 103)(285, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "img", 123)(287, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 107)(289, "h5")(290, "a", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "How apps is changing the IT world");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 109)(293, "ul", 110)(294, "li", 111)(295, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "i", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "li", 18)(299, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](300, "i", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 118)(306, "small", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](307, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "small", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 124)(313, "a", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](315, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "a", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](317, "i-feather", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](316);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4741:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/account-setting/account-setting.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingComponent": () => (/* binding */ AccountSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * Account Setting Component
 */
class AccountSettingComponent {
  constructor() {
    /**
     * Nav Light Class Add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountSettingComponent.??fac = function AccountSettingComponent_Factory(t) {
  return new (t || AccountSettingComponent)();
};
AccountSettingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AccountSettingComponent,
  selectors: [["app-account-setting"]],
  decls: 313,
  vars: 1,
  consts: [[1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], [1, "navbar-item", "account-menu", "px-0", "mt-2", "active"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "card", "border-0", "rounded", "shadow"], [1, "text-md-start", "text-center"], [1, "mt-3", "text-md-start", "text-center", "d-sm-flex"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "float-md-left", "avatar-medium", "rounded-circle", "shadow", "me-md-4"], [1, "mt-md-4", "mt-3", "mt-sm-0"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2", "ms-2"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "first", "type", "text", "placeholder", "First Name :", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "last", "type", "text", "placeholder", "Last Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Your email :", 1, "form-control", "ps-5"], ["name", "bookmark", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "occupation", "type", "text", "placeholder", "Occupation :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Description :", 1, "form-control", "ps-5"], [1, "col-sm-12"], ["type", "submit", "id", "submit", "name", "send", "value", "Save Changes", 1, "btn", "btn-primary"], [1, "col-md-6", "mt-4", "pt-2"], ["name", "phone", 1, "fea", "icon-sm", "icons"], ["name", "number", "id", "number", "type", "number", "placeholder", "Phone :", 1, "form-control", "ps-5"], ["name", "globe", 1, "fea", "icon-sm", "icons"], ["name", "url", "id", "url", "type", "url", "placeholder", "Url :", 1, "form-control", "ps-5"], [1, "col-lg-12", "mt-2", "mb-0"], [1, "btn", "btn-primary"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Old password", "required", "", 1, "form-control", "ps-5"], ["type", "password", "placeholder", "New password", "required", "", 1, "form-control", "ps-5"], ["type", "password", "placeholder", "Re-type New password", "required", "", 1, "form-control", "ps-5"], [1, "rounded", "shadow", "mt-4"], [1, "p-4", "border-bottom"], [1, "p-4"], [1, "d-flex", "justify-content-between", "pb-4"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "noti1", 1, "form-check-input"], ["for", "noti1", 1, "form-check-label"], [1, "d-flex", "justify-content-between", "py-4", "border-top"], ["type", "checkbox", "value", "", "checked", "", "id", "noti2", 1, "form-check-input"], ["for", "noti2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti3", 1, "form-check-input"], ["for", "noti3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti4", 1, "form-check-input"], ["for", "noti4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti5", 1, "form-check-input"], ["for", "noti5", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti6", 1, "form-check-input"], ["for", "noti6", 1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", "id", "noti7", 1, "form-check-input"], ["for", "noti7", 1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", "id", "noti8", 1, "form-check-input"], ["for", "noti8", 1, "form-check-label"], [1, "mb-0", "text-danger"], [1, "mt-4"], [1, "btn", "btn-danger"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function AccountSettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 36)(71, "ul", 50)(72, "li", 51)(73, "a", 52)(74, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 56)(79, "a", 57)(80, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li", 56)(85, "a", 59)(86, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 56)(91, "a", 61)(92, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li", 56)(97, "a", 63)(98, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li", 65)(103, "a", 66)(104, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li", 56)(109, "a", 68)(110, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 78)(140, "div", 79)(141, "div", 5)(142, "h5", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Personal Detail :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "img", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 83)(147, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Change Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "form")(152, "div", 38)(153, "div", 86)(154, "div", 87)(155, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i-feather", 90)(159, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 86)(161, "div", 87)(162, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i-feather", 92)(166, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 86)(168, "div", 87)(169, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Your Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i-feather", 94)(173, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 86)(175, "div", 87)(176, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Occupation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "i-feather", 96)(180, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 3)(182, "div", 87)(183, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i-feather", 98)(187, "textarea", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 2)(189, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 2)(192, "div", 102)(193, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Contact Info :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "form")(196, "div", 38)(197, "div", 3)(198, "div", 87)(199, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Phone No. :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "i-feather", 103)(203, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 3)(205, "div", 87)(206, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Website :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "i-feather", 105)(210, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 107)(212, "button", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 102)(215, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Change password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "form")(218, "div", 38)(219, "div", 3)(220, "div", 87)(221, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Old password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "i-feather", 109)(225, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 3)(227, "div", 87)(228, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "New password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "i-feather", 109)(232, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 3)(234, "div", 87)(235, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Re-type New password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](238, "i-feather", 109)(239, "input", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 107)(241, "button", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Save password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 113)(244, "div", 114)(245, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Account Notifications :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 115)(248, "div", 116)(249, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "When someone mentions me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](252, "input", 118)(253, "label", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 120)(255, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "When someone follows me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "input", 121)(259, "label", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 120)(261, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "When shares my activity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "input", 123)(265, "label", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 120)(267, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "When someone messages me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "input", 125)(271, "label", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 113)(273, "div", 114)(274, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "Marketing Notifications :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 115)(277, "div", 116)(278, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "There is a sale or promotion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "input", 127)(282, "label", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 120)(284, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Company news");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "input", 129)(288, "label", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 120)(290, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Weekly jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](293, "input", 131)(294, "label", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 120)(296, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Unsubscribe News");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](299, "input", 133)(300, "label", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 113)(302, "div", 114)(303, "h5", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Delete Account :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 115)(306, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Do you want to delete the account? Please press below \"Delete\" button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 136)(309, "button", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Delete Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "a", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](312, "i-feather", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](311);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 844:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/account-works/account-works.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountWorksComponent": () => (/* binding */ AccountWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);





function AccountWorksComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 89)(6, "h5", 41)(7, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h6", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.designation);
  }
}
;
/**
 * Account Works Component
 */
class AccountWorksComponent {
  constructor() {
    /**
     * Member Data
     */
    this.worksData = [{
      image: "assets/images/work/1.jpg",
      name: "Iphone mockup",
      designation: "Branding"
    }, {
      image: "assets/images/work/2.jpg",
      name: "Mockup Collection",
      designation: "Mockup"
    }, {
      image: "assets/images/work/3.jpg",
      name: "Abstract images",
      designation: "Abstract"
    }, {
      image: "assets/images/work/4.jpg",
      name: "Yellow bg with Books",
      designation: "Books"
    }, {
      image: "assets/images/work/5.jpg",
      name: "Company V-card",
      designation: "V-card"
    }, {
      image: "assets/images/work/6.jpg",
      name: "Mockup box with paints",
      designation: "Photography"
    }, {
      image: "assets/images/work/7.jpg",
      name: "Coffee cup",
      designation: "Cups"
    }, {
      image: "assets/images/work/8.jpg",
      name: "Pen and article",
      designation: "Article"
    }, {
      image: "assets/images/work/9.jpg",
      name: "White mockup box",
      designation: "Color"
    }, {
      image: "assets/images/work/10.jpg",
      name: "Logo Vectors",
      designation: "Logos"
    }, {
      image: "assets/images/work/11.jpg",
      name: "Black and white T-shirt",
      designation: "Clothes"
    }, {
      image: "assets/images/work/12.jpg",
      name: "Yellow bg with cellphone",
      designation: "Cellphone"
    }];
    /**
     * nav light class add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountWorksComponent.??fac = function AccountWorksComponent_Factory(t) {
  return new (t || AccountWorksComponent)();
};
AccountWorksComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: AccountWorksComponent,
  selectors: [["app-account-works"]],
  decls: 147,
  vars: 2,
  consts: [["id", "home", 1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], [1, "navbar-item", "account-menu", "px-0", "mt-2", "active"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "rounded", "shadow", "p-4"], [1, "row", "projects-wrapper"], ["class", "col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-classic"], [1, "card-body", "p-0"], ["routerLink", "/portfolio-detail-one"], ["alt", "", 1, "img-fluid", "rounded", "work-image", 3, "src"], [1, "content", "pt-3"], ["routerLink", "/portfolio-detail-one", 1, "text-dark", "title"], [1, "text-muted", "tag", "mb-0"]],
  template: function AccountWorksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 36)(71, "ul", 50)(72, "li", 51)(73, "a", 52)(74, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 56)(79, "a", 57)(80, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li", 59)(85, "a", 60)(86, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 56)(91, "a", 62)(92, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li", 56)(97, "a", 64)(98, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li", 56)(103, "a", 66)(104, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "li", 56)(109, "a", 68)(110, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 78)(140, "div", 79)(141, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Works & Projects: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](144, AccountWorksComponent_div_144_Template, 11, 3, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i-feather", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.worksData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7021:
/*!********************************************************************!*\
  !*** ./src/app/core/components/index-blog/index-blog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexBlogComponent": () => (/* binding */ IndexBlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 2891);






function IndexBlogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Weekend Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
  }
}
function IndexBlogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Business Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
  }
}
function IndexBlogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Delicious & Organic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
  }
}
/***
 * Blog Component
 */
class IndexBlogComponent {
  constructor() {
    /***
     * Nav bg light calss Add
     */
    this.navClass = 'bg-white';
    /***
     * Main Slider navigation Add
     */
    this.showNavigationArrows = true;
    this.showNavigationIndicators = false;
    /**
     * Blog Data
     */
    this.blogData = [{
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
    /**
     * Resent Post Data
     */
    this.resentPostData = [{
      image: "assets/images/blog/04.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/05.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/06.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
  }
  ngOnInit() {}
}
IndexBlogComponent.??fac = function IndexBlogComponent_Factory(t) {
  return new (t || IndexBlogComponent)();
};
IndexBlogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: IndexBlogComponent,
  selectors: [["app-index-blog"]],
  decls: 85,
  vars: 7,
  consts: [["id", "home", 1, "main-slider"], [1, "slides", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "section"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "features-absolute", "blog-search"], [1, "row", "justify-content-center"], [1, "col-md-10"], [1, "text-center", "subcribe-form"], [2, "max-width", "800px"], ["type", "text", "id", "course", "name", "name", "placeholder", "Search keywords...", 1, "rounded-pill", "shadow-md", "bg-white"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], [1, "container", "mt-4", "mt-lg-0"], [1, "row", "align-items-center", "mb-4", "pb-4"], [1, "col-md-8"], [1, "section-title", "text-md-left"], [1, "mb-4"], [1, "text-muted", "mb-0", "para-desc"], [1, "text-primary", "fw-bold"], [1, "col-md-4", "mt-4", "mt-sm-0"], [1, "text-center", "text-md-end"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-primary"], ["name", "arrow-right", 1, "fea", "icon-sm"], [3, "blogData"], [1, "container", "mt-100", "mt-60"], ["name", "arrow-right", 1, "icons"], [1, "container-fluid", "mt-100", "mt-60"], [1, "rounded-md", "shadow-md", "py-5", "position-relative", 2, "background", "url('assets/images/3.jpg') center center"], [1, "bg-overlay", "rounded-md"], [1, "container", "py-5"], [1, "col-12"], [1, "section-title", "text-center"], [1, "fw-bold", "text-white", "title-dark", "mb-4", "pb-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "col-12", "mt-4", "pt-2"], [1, "text-center"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg1.jpg') center center"], [1, "title-heading", "text-center"], [1, "text-white", "title-dark", "mb-3"], [1, "list-unstyled"], [1, "list-inline-item", "small", "user", "text-white-50", "me-2"], [1, "uil", "uil-user", "text-white", "title-dark"], [1, "list-inline-item", "small", "date", "text-white-50"], [1, "uil", "uil-calendar-alt", "text-white", "title-dark"], [1, "para-desc", "mx-auto", "text-white-50", "mb-0"], [1, "mt-4"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg2.jpg') center center"], [1, "mdi", "mdi-account", "text-white", "title-dark"], [1, "mdi", "mdi-calendar-check", "text-white", "title-dark"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg3.jpg') center center"]],
  template: function IndexBlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0)(1, "ngb-carousel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, IndexBlogComponent_ng_template_2_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, IndexBlogComponent_ng_template_3_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, IndexBlogComponent_ng_template_4_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Popular post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 21)(29, "div", 22)(30, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 26)(35, "div", 15)(36, "div", 16)(37, "div", 17)(38, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Recent Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 21)(46, "div", 22)(47, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "i-feather", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 28)(52, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 31)(55, "div", 8)(56, "div", 32)(57, "div", 33)(58, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "People are podcasting ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, " all over the world ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](64, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 26)(66, "div", 15)(67, "div", 16)(68, "div", 17)(69, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "All News or Blog Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "app-blog", 25)(77, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 36)(79, "div", 37)(80, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "i-feather", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("blogData", ctx.resentPostData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("blogData", ctx.resentPostData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 517:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/index-services/index-services.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexServicesComponent": () => (/* binding */ IndexServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);
/* harmony import */ var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/services.component */ 2474);









function IndexServicesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function IndexServicesComponent_ng_template_18_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "youtube-player", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("videoId", "jNTZpfXYJa4");
  }
}
/***
 * Services Component
 */
class IndexServicesComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.footerVariant = 'bg-light';
    /**
     * Services Data
     */
    this.servicesData = [{
      icon: "uil uil-flip-h h1 text-primary",
      title: "Built for Everyone",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    }, {
      icon: "uil uil-minus-path h1 text-primary",
      title: "Responsive Design",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    }, {
      icon: "uil uil-layers-alt h1 text-primary",
      title: "Build Everything",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }];
    /**
     * Customer Testimonial Data
     */
    this.customerData = [{
      image: "assets/images/client/amazon.svg",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
      name: "Thomas Israel"
    }, {
      image: "assets/images/client/google.svg",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
      name: "Carl Oliver"
    }, {
      image: "assets/images/client/lenovo.svg",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
      name: "Barbara McIntosh"
    }, {
      image: "assets/images/client/paypal.svg",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
      name: "Jill Webb"
    }, {
      image: "assets/images/client/shopify.svg",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
      name: "Dean Tolle"
    }, {
      image: "assets/images/client/spotify.svg",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
      name: "Christa Smith"
    }];
  }
  ngOnInit() {}
  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
IndexServicesComponent.??fac = function IndexServicesComponent_Factory(t) {
  return new (t || IndexServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
};
IndexServicesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: IndexServicesComponent,
  selectors: [["app-index-services"]],
  decls: 115,
  vars: 12,
  consts: [["id", "home", 1, "bg-half-170", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-7"], [1, "title-heading", "mt-4"], [1, "heading", "mb-3"], [1, "para-desc", "text-muted"], [1, "mt-4", "pt-2"], ["routerLink", "/page-services", 1, "btn", "btn-primary", "m-1"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "btn", "btn-icon", "btn-pills", "btn-primary", "m-1", 3, "click"], ["name", "video", 1, "icons"], [1, "fw-bold", "text-uppercase", "small", "align-middle", "ms-2"], ["content", ""], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/illustrator/services.svg", "alt", ""], [1, "section", "pt-0"], [3, "servicesData"], [1, "section", "bg-light"], [1, "col-md-6", "order-2", "order-md-1", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "me-lg-5"], [1, "title", "mb-4"], [1, "text-muted"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], [1, "uil", "uil-angle-right-b"], [1, "col-md-6", "order-1", "order-md-2"], ["src", "assets/images/saas/classic01.png", "alt", "", 1, "img-fluid"], [1, "container", "mt-100", "mt-60"], ["id", "counter", 1, "row", "justify-content-center"], [1, "col-md-4", "mt-4", "pt-2"], [1, "counter-box", "text-center", "px-lg-4"], [1, "mb-0", "text-primary", "display-4"], [1, "counter-value", 3, "CountTo", "from", "duration"], [1, "counter-head"], [1, "text-muted", "mb-0"], [1, "section"], [1, "col-md-6"], ["src", "assets/images/illustrator/analyze_report_4.svg", "alt", "", 1, "me-md-4"], [1, "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "ms-lg-5"], [1, "mdi", "mdi-chevron-right"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "text-primary", "fw-bold"], [3, "customerData"], [1, "row", "justify-content-center", "mt-4", "pt-2"], [1, "col-lg-7", "col-md-10"], [1, "subcribe-form"], [1, "ms-0"], ["type", "email", "id", "email", "name", "email", "placeholder", "E-mail :", 1, "bg-white", "shadow", "rounded-pill"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], [1, "uil", "uil-arrow-right"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"]],
  template: function IndexServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Build Anything ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "For Your Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function IndexServicesComponent_Template_a_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.openWindowCustomClass(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i-feather", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Watch Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, IndexServicesComponent_ng_template_18_Template, 6, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "section", 15)(23, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "app-services", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "section", 17)(26, "div", 1)(27, "div", 2)(28, "div", 18)(29, "div", 19)(30, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Get Notified About Importent Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "Start Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 29)(43, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Happy Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 28)(51, "div", 29)(52, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](56, "Awards");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 28)(60, "div", 29)(61, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](63, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "Project Complete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](67, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "section", 34)(69, "div", 1)(70, "div", 2)(71, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "div", 37)(74, "div", 38)(75, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "Clean And Modern Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](78, "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "Start Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](81, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "div", 26)(83, "div", 40)(84, "div", 41)(85, "div", 42)(86, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](87, "Our Happy Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](89, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](91, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](92, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](93, "app-customer-testmonial", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "div", 26)(95, "div", 40)(96, "div", 41)(97, "div", 42)(98, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](99, "Subscribe for our Latest Newsletter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](101, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](104, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](105, "div", 46)(106, "div", 47)(107, "div", 48)(108, "form", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](111, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](112, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](113, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](114, "i-feather", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("servicesData", ctx.servicesData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("CountTo", 97)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("CountTo", 15)("from", 1)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("CountTo", 98)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("customerData", ctx.customerData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__.YoutubePlayerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective, _shared_services_services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n  .dark-modal .modal-header {\r\n  margin-left: auto;\r\n  border: none;\r\n  padding: 0 !important;\r\n}\r\n\r\n  .dark-modal .close {\r\n  border: none;\r\n  background: transparent;\r\n  color: white;\r\n  font-size: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZGV4LXNlcnZpY2VzL2luZGV4LXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5jbG9zZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8002:
/*!**********************************************************!*\
  !*** ./src/app/core/components/index/index.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5369);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/clients-logo/clients-logo.component */ 5229);







function IndexComponent_ng_template_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Thomas Israel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
function IndexComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Carl Oliver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
function IndexComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Barbara McIntosh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
function IndexComponent_ng_template_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Jill Webb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
function IndexComponent_ng_template_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" There is now an abundance of readable dummy texts. These are usually used when a text is required. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Dean Tolle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
function IndexComponent_ng_template_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 104)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "- Christa Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
  }
}
/**
 * Index Component
 */
class IndexComponent {
  constructor() {
    /**
     * Partners slider
     */
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      autoplay: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: false
    };
  }
  ngOnInit() {}
}
IndexComponent.??fac = function IndexComponent_Factory(t) {
  return new (t || IndexComponent)();
};
IndexComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: IndexComponent,
  selectors: [["app-index"]],
  decls: 294,
  vars: 2,
  consts: [[1, "bg-half-170", "d-table", "w-100"], [1, "container"], [1, "row", "mt-5", "align-items-center"], [1, "col-lg-7", "col-md-7"], [1, "title-heading", "me-lg-4"], [1, "heading", "mb-3"], [1, "text-primary"], [1, "para-desc", "text-muted"], [1, "mt-4"], ["routerLink", "/page-contact-one", 1, "btn", "btn-primary", "mt-2", "me-2"], [1, "uil", "uil-envelope"], ["routerLink", "/documentation", 1, "btn", "btn-outline-primary", "mt-2"], [1, "uil", "uil-book-alt"], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/illustrator/Startup_SVG.svg", "alt", ""], [1, "py-4", "border-bottom", "border-top"], [1, "section", "bg-light", "border-bottom"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "title", "mb-4"], [1, "text-muted", "para-desc", "mb-0", "mx-auto"], [1, "text-primary", "fw-bold"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-6", "mt-4", "pt-2"], ["src", "assets/images/illustrator/SEO_SVG.svg", "alt", ""], [1, "col-lg-7", "col-md-6", "mt-4", "pt-2"], [1, "section-title", "ms-lg-5"], [1, "text-muted"], [1, "list-unstyled", "text-muted"], [1, "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"], ["href", "javascript:void(0)", 1, "mt-3", "h6", "text-primary"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "container", "mt-100", "mt-60"], [1, "col-lg-7", "col-md-6", "order-2", "order-md-1", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title"], [1, "col-lg-5", "col-md-6", "order-1", "order-md-2"], [1, "card", "rounded", "border-0", "shadow", "ms-lg-5"], [1, "card-body"], ["src", "assets/images/illustrator/Mobile_notification_SVG.svg", "alt", ""], [1, "content", "mt-4", "pt-2"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "Name", "name", "name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-12", "mt-2", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "section", "pb-0"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "col-12", "mt-4", "pt-2"], ["id", "customer-testi", 3, "options"], ["carouselSlide", ""], [1, "section"], [1, "row", "mt-lg-4", "align-items-center"], [1, "col-lg-5", "col-md-12", "text-center", "text-lg-start"], [1, "section-title", "mb-4", "mb-lg-0", "pb-2", "pb-lg-0"], ["href", "https://1.envato.market/4n73n", "target", "_blank", 1, "btn", "btn-primary", "mt-4"], [1, "badge", "rounded-pill", "bg-danger", "ms-2"], [1, "col-lg-7", "col-md-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "ms-lg-5"], [1, "col-md-6", "col-12", "px-md-0"], [1, "card", "pricing-rates", "starter-plan", "shadow", "rounded", "border-0"], [1, "card-body", "py-5"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "col-md-6", "col-12", "mt-4", "pt-2", "pt-sm-0", "mt-sm-0", "px-md-0"], [1, "card", "pricing-rates", "bg-light", "shadow", "rounded", "border-0"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-light"], ["viewBox", "0 0 2880 250", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M720 125L2160 0H2880V250H0V125H720Z", "fill", "currentColor"], [1, "section", "bg-light"], [1, "col-md-6", "col-12"], [1, "d-flex"], ["name", "help-circle", 1, "fea", "icon-ex-md", "text-primary", "me-2", "mt-1"], [1, "flex-1"], [1, "mt-0"], [1, "answer", "text-muted", "mb-0"], [1, "col-md-6", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], [1, "row", "my-md-5", "pt-md-3", "my-4", "pt-2", "pb-lg-4", "justify-content-center"], [1, "text-muted", "para-desc", "mx-auto"], ["href", "page-contact-two", 1, "btn", "btn-primary", "mt-4"], [1, "mdi", "mdi-phone"], [1, "shape", "overflow-hidden", "text-footer"], ["href", "#", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "card", "customer-testi", "text-center", "border", "rounded", "mx-2"], ["src", "assets/images/client/amazon.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], [1, "text-muted", "mt-4"], ["src", "assets/images/client/google.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], ["src", "assets/images/client/lenovo.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], ["src", "assets/images/client/paypal.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], ["src", "assets/images/client/shopify.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], ["src", "assets/images/client/spotify.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Our Creativity Is Your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Success");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 15)(21, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "app-clients-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "section", 16)(24, "div", 1)(25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "How It Work ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 23)(36, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 26)(39, "div", 27)(40, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "Change the way you build websites");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "ul", 29)(45, "li", 30)(46, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Digital Marketing Solutions for Tomorrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "li", 30)(50, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Our Talented & Experienced Marketing Agency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "li", 30)(54, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Create your own skin to match your brand");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Find Out More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 35)(61, "div", 23)(62, "div", 36)(63, "div", 37)(64, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Speed up your development ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Landrick.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](71, "Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "ul", 29)(73, "li", 30)(74, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Digital Marketing Solutions for Tomorrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li", 30)(78, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](79, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "Our Talented & Experienced Marketing Agency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "li", 30)(82, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Create your own skin to match your brand");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Find Out More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](87, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 38)(89, "div", 39)(90, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 42)(93, "form")(94, "div", 43)(95, "div", 44)(96, "div", 45)(97, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Name : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](102, "i-feather", 49)(103, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 44)(105, "div", 45)(106, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Email : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "i-feather", 51)(112, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 44)(114, "div", 45)(115, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Password : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](120, "i-feather", 53)(121, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 55)(123, "div", 56)(124, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Download");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "section", 58)(127, "div", 1)(128, "div", 17)(129, "div", 18)(130, "div", 19)(131, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "We believe in building each other and hence");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Work with some amazing partners");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "p", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](139, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 43)(141, "div", 60)(142, "owl-carousel-o", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](143, IndexComponent_ng_template_143_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](144, IndexComponent_ng_template_144_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](145, IndexComponent_ng_template_145_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](146, IndexComponent_ng_template_146_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](147, IndexComponent_ng_template_147_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](148, IndexComponent_ng_template_148_Template, 7, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "section", 63)(150, "div", 1)(151, "div", 64)(152, "div", 65)(153, "div", 66)(154, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](155, "Our Comfortable Rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "p", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](160, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "Buy Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "v3.2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 69)(166, "div", 70)(167, "div", 23)(168, "div", 71)(169, "div", 72)(170, "div", 73)(171, "h6", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](172, "Starter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "div", 75)(174, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](177, "39");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "/mo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "ul", 79)(181, "li", 80)(182, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](183, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Full Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "li", 80)(186, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](188, "Source Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "li", 80)(190, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](191, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](192, "Free Appointments");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "li", 80)(194, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](195, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, "Enhanced Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](198, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "div", 82)(200, "div", 83)(201, "div", 73)(202, "h6", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Professional");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 75)(205, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "/mo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "ul", 79)(212, "li", 80)(213, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](214, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](215, "Full Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "li", 80)(217, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](218, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Source Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "li", 80)(221, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](222, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "Free Appointments");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "li", 80)(225, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](226, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "Enhanced Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Try it now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 84)(231, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "svg", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](233, "path", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "section", 88)(235, "div", 1)(236, "div", 43)(237, "div", 89)(238, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](239, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 92)(241, "h5", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](242, "How our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](244, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, " work ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "p", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "div", 95)(249, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](250, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "div", 92)(252, "h5", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](253, " What is the main process open account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "p", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "div", 96)(257, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](258, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 92)(260, "h5", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, " How to make unlimited data entry ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "p", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](264, "div", 96)(265, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](266, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 92)(268, "h5", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](269, " Is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](270, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](271, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, " safer to use with my account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "p", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](274, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "div", 97)(276, "div", 18)(277, "div", 37)(278, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](279, "Have Question ? Get in touch!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](280, "p", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](281, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](282, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](283, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](284, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "a", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](286, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](287, " Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "div", 84)(289, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](290, "svg", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](291, "path", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "a", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](293, "i-feather", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](142);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("options", ctx.customOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_0__.ClientsLogoComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9959:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/master-page/master-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/footer/footer.component */ 5227);




class MasterPageComponent {
  constructor() {}
  ngOnInit() {}
  /**
   * Router activation
   */
  onActivate(componentReference) {
    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
  }
}
MasterPageComponent.??fac = function MasterPageComponent_Factory(t) {
  return new (t || MasterPageComponent)();
};
MasterPageComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: MasterPageComponent,
  selectors: [["app-master-page"]],
  decls: 3,
  vars: 7,
  consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], [3, "footerVariant", "hideFooter"]],
  template: function MasterPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "router-outlet", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("activate", function MasterPageComponent_Template_router_outlet_activate_1_listener($event) {
        return ctx.onActivate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "app-footer", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6507:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus-two/page-aboutus-two.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusTwoComponent": () => (/* binding */ PageAboutusTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);
/* harmony import */ var _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/clients-logo/clients-logo.component */ 5229);








function PageAboutusTwoComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 103)(1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function PageAboutusTwoComponent_ng_template_150_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "youtube-player", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("videoId", "yba7hPeTSjk");
  }
}
/**
 * Aboutus Two Component
 */
class PageAboutusTwoComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageAboutusTwoComponent.??fac = function PageAboutusTwoComponent_Factory(t) {
  return new (t || PageAboutusTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
};
PageAboutusTwoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: PageAboutusTwoComponent,
  selectors: [["app-page-aboutus-two"]],
  decls: 174,
  vars: 5,
  consts: [["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/aboutus.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level", "title-heading"], [1, "text-white", "title-dark"], [1, "text-white-50", "para-desc", "mb-0", "mx-auto"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], ["id", "counter", 1, "row", "align-items-center"], [1, "col-md-6"], ["src", "assets/images/company/about2.png", "alt", "", 1, "img-fluid"], [1, "col-md-6", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "ms-lg-4"], [1, "d-flex", "mb-4"], [1, "text-primary", "h1", "mb-0"], [1, "counter-value", "display-1", "fw-bold", 3, "CountTo", "from", "duration"], [1, "h6", "align-self-end", "ms-2"], [1, "section-title"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "container", "mt-5"], [1, "section", "bg-light"], [1, "col-12"], [1, "section-title", "text-center", "mb-4", "pb-2"], [1, "text-primary"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "row"], [1, "col-md-4", "mt-4", "pt-2"], [1, "card", "features", "feature-clean", "work-process", "bg-transparent", "process-arrow", "border-0", "text-center"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-presentation-edit", "d-block", "rounded", "h3", "mb-0"], [1, "card-body"], [1, "text-dark"], [1, "text-muted", "mb-0"], [1, "col-md-4", "mt-md-5", "pt-md-3", "mt-4", "pt-2"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "col-md-4", "mt-md-5", "pt-md-5", "mt-4", "pt-2"], [1, "card", "features", "feature-clean", "work-process", "bg-transparent", "d-none-arrow", "border-0", "text-center"], [1, "uil", "uil-image-check", "d-block", "rounded", "h3", "mb-0"], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-end", "mb-4", "pb-4"], [1, "col-md-8"], [1, "section-title", "text-md-left"], [1, "text-muted", "mb-0", "para-desc"], [1, "col-md-4", "mt-4", "mt-sm-0"], [1, "text-center", "text-md-end"], ["href", "javascript:void(0)", 1, "text-primary", "h6"], ["name", "arrow-right", 1, "fea", "icon-sm"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "bg-white", "rounded", "shadow", "p-3", "mb-0", "mt-4", "col-md-4", "pt-2"], ["nav", "ngbNav"], ["ngbNavItem", "top"], ["ngbNavLink", "", 1, "rounded"], [1, "text-center", "pt-1", "pb-1"], [1, "mb-0"], ["ngbNavContent", ""], ["ngbNavItem", ""], [1, "mt-4", "ms-4", 3, "ngbNavOutlet"], [1, "section", "bg-light", "pt-0"], [1, "col-12", "text-center"], [1, "video-solution-cta", "position-relative", 2, "z-index", "1"], ["src", "assets/images/cta-bg.jpg", "alt", "", 1, "img-fluid", "rounded-md", "shadow-lg"], [1, "play-icon"], ["href", "javascript:void(0);", 1, "play-btn", "video-play-icon", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow-lg"], ["content", ""], [1, "content", "mt-md-4", "pt-md-2"], [1, "col-lg-10", "text-center"], [1, "row", "align-items-center"], [1, "col-md-6", "mt-4", "pt-2"], [1, "section-title", "text-md-start"], [1, "text-white-50"], [1, "title", "text-white", "title-dark", "mb-0"], [1, "col-md-6", "col-12", "mt-4", "pt-md-2"], [1, "text-white-50", "para-desc"], ["href", "javascript:void(0)", 1, "text-white", "title-dark"], [1, "feature-posts-placeholder", "bg-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], ["id", "developing", "role", "tabpanel", "aria-labelledby", "webdeveloping", 1, "bg-white", "show", "active", "p-4", "rounded", "shadow"], ["src", "assets/images/work/7.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "text-primary"], ["id", "data-analise", "role", "tabpanel", "aria-labelledby", "database", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/8.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], ["id", "security", "role", "tabpanel", "aria-labelledby", "server", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/9.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], ["id", "designing", "role", "tabpanel", "aria-labelledby", "webdesigning", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/12.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"]],
  template: function PageAboutusTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, " Aboutus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8)(11, "nav", 9)(12, "ul", 10)(13, "li", 11)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li", 11)(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Aboutus");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 15)(22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "section", 19)(26, "div", 2)(27, "div", 20)(28, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 23)(31, "div", 24)(32, "div", 25)(33, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Years ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, " Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 29)(41, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Who we are ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "app-clients-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "section", 35)(53, "div", 2)(54, "div", 3)(55, "div", 36)(56, "div", 37)(57, "h6", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "Work Process");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](60, "How do we works ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](64, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 40)(67, "div", 41)(68, "div", 42)(69, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](70, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "div", 45)(72, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](73, "Discussion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 48)(77, "div", 42)(78, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](79, "i", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "div", 45)(81, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "Strategy & Testing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](84, "Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "div", 50)(86, "div", 51)(87, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](88, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "div", 45)(90, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](91, "Reporting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](93, "Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](94, "div", 53)(95, "div", 54)(96, "div", 55)(97, "div", 56)(98, "h6", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](99, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](101, "What we do ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](102, "p", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](103, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](105, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](106, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "div", 58)(108, "div", 59)(109, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](110, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](111, "i-feather", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 62)(113, "ul", 63, 64)(115, "li", 65)(116, "a", 66)(117, "div", 67)(118, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](119, "Web Developing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](120, PageAboutusTwoComponent_ng_template_120_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](121, "li", 70)(122, "a", 66)(123, "div", 67)(124, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](125, "Database Analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](126, PageAboutusTwoComponent_ng_template_126_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](127, "li", 70)(128, "a", 66)(129, "div", 67)(130, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](131, "Server Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](132, PageAboutusTwoComponent_ng_template_132_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](133, "li", 70)(134, "a", 66)(135, "div", 67)(136, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](137, "Web Designing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](138, PageAboutusTwoComponent_ng_template_138_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](139, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "section", 72)(141, "div", 2)(142, "div", 3)(143, "div", 73)(144, "div", 74)(145, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](146, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](147, "div", 76)(148, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function PageAboutusTwoComponent_Template_a_click_148_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](151);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.openWindowCustomClass(_r5));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](149, "i", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](150, PageAboutusTwoComponent_ng_template_150_Template, 6, 1, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](152, "div", 80)(153, "div", 3)(154, "div", 81)(155, "div", 82)(156, "div", 83)(157, "div", 84)(158, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](159, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](160, "h4", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](161, "Meet Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](162, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](163, " Team Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](164, "div", 87)(165, "div", 84)(166, "p", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](167, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](168, "a", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](169, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](170, "i-feather", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](171, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](172, "a", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](173, "i-feather", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("CountTo", 15)("from", 0)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__.YoutubePlayerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective, _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n  .dark-modal .modal-header {\r\n  border: none\r\n}\r\n\r\n  .dark-modal .close {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYWJvdXR1cy10d28vcGFnZS1hYm91dHVzLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5296:
/*!************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus/page-aboutus.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusComponent": () => (/* binding */ PageAboutusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/features/features.component */ 1717);







function PageAboutusComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PageAboutusComponent_ng_template_31_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);
      const modal_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "iframe", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
}
function PageAboutusComponent_div_70_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i-feather", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("name", item_r8);
  }
}
function PageAboutusComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul", 55)(6, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, PageAboutusComponent_div_70_a_7_Template, 2, 1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 58)(9, "h5", 59)(10, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", data_r6.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", data_r6.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](data_r6.designation);
  }
}
;
/**
 * Aboutus Component
 */
class PageAboutusComponent {
  constructor(modalService) {
    this.modalService = modalService;
    /**
     * Member Data
     */
    this.memberData = [{
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    }, {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    }, {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    }, {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }];
  }
  ngOnInit() {}
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageAboutusComponent.??fac = function PageAboutusComponent_Factory(t) {
  return new (t || PageAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
PageAboutusComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: PageAboutusComponent,
  selectors: [["app-page-aboutus"]],
  decls: 89,
  vars: 2,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/company/about.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "play-icon"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "play-btn", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["content", ""], [1, "col-lg-7", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "section-title", "ms-lg-4"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "uil", "uil-angle-right-b"], [1, "container", "mt-100", "mt-60"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "section", "bg-light"], [1, "row"], ["class", "col-lg-3 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "section-title"], [1, "text-muted", "para-desc", "mx-auto"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://player.vimeo.com/video/99025203", "height", "450", "width", "780", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; encrypted-media"], [1, "col-lg-3", "col-md-6", "mt-4", "pt-2"], [1, "card", "team", "text-center", "bg-transparent", "border-0"], [1, "card-body", "p-0"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-large", "rounded-circle", 3, "src"], [1, "list-unstyled", "social-icon", "team-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", "class", "rounded ms-1", 4, "ngFor", "ngForOf"], [1, "content", "pt-3", "pb-3"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "name", "text-dark"], [1, "designation", "text-muted"], ["href", "javascript:void(0)", 1, "rounded", "ms-1"], [1, "fea", "icon-sm", "fea-social", 3, "name"]],
  template: function PageAboutusComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " About us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 21)(29, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PageAboutusComponent_Template_a_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](32);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx.openWindowCustomClass(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, PageAboutusComponent_ng_template_31_Template, 6, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 25)(34, "div", 26)(35, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Buy Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 32)(46, "div", 2)(47, "div", 33)(48, "div", 34)(49, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "app-features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "section", 36)(58, "div", 1)(59, "div", 37)(60, "div", 33)(61, "div", 34)(62, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Our Greatest Minds");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](70, PageAboutusComponent_div_70_Template, 14, 4, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 32)(72, "div", 2)(73, "div", 33)(74, "div", 39)(75, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "See everything about your employee at one place.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 41)(83, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "Get Started Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Free Trial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "i-feather", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.memberData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__.FeaturesComponent],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  }\r\n    .dark-modal .modal-header {\r\n  border : none\r\n  }\r\n    .dark-modal .close {\r\n  color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYWJvdXR1cy9wYWdlLWFib3V0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsWUFBWTtFQUNaIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlciA6IG5vbmVcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3380:
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/page-blog-detail-two/page-blog-detail-two.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogDetailTwoComponent": () => (/* binding */ PageBlogDetailTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * page Blog-Detail-Two Component
 */
class PageBlogDetailTwoComponent {
  constructor() {
    /**
     * Nav Light Class Add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
PageBlogDetailTwoComponent.??fac = function PageBlogDetailTwoComponent_Factory(t) {
  return new (t || PageBlogDetailTwoComponent)();
};
PageBlogDetailTwoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: PageBlogDetailTwoComponent,
  selectors: [["app-page-blog-detail-two"]],
  decls: 169,
  vars: 5,
  consts: [["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/1.jpg') center center"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title", "text-white", "title-dark"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "col-lg-10"], [1, "row"], [1, "col-md-2", "d-none", "d-md-block"], [1, "list-unstyled", "text-center", "sticky-bar", "social-icon", "mb-0"], [1, "mb-3", "h6"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-md-10"], [1, "text-muted"], [1, "list-unstyled", "d-flex", "justify-content-between", "mt-4"], [1, "list-inline-item", "user", "me-2"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "uil", "uil-user", "text-dark"], [1, "list-inline-item", "date", "text-muted"], [1, "uil", "uil-calendar-alt", "text-dark"], ["src", "assets/images/blog/bg1.jpg", "alt", "", 1, "img-fluid", "rounded-md", "shadow"], [1, "mt-4"], [1, "media-list", "list-unstyled", "mb-0"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "pe-3"], ["src", "assets/images/client/01.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "flex-1", "commentor-detail"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-dark", "media-heading"], [1, "text-muted", 3, "ngxScrollTo"], [1, "mdi", "mdi-reply"], [1, "mt-3"], [1, "text-muted", "fst-italic", "p-3", "bg-light", "rounded"], ["src", "assets/images/client/02.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], ["href", "javascript:void(0)", 1, "media-heading", "text-dark"], ["src", "assets/images/client/03.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "list-unstyled", "ps-4", "ps-md-5", "sub-comment"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["id", "message", "placeholder", "Your Comment", "rows", "5", "name", "message", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-6"], [1, "text-danger"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["id", "name", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "send", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function PageBlogDetailTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Smartest Applications for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Your Business ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7)(11, "nav", 8)(12, "ul", 9)(13, "li", 10)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10)(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Blog Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14)(22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "section", 18)(26, "div", 2)(27, "div", 3)(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "ul", 22)(32, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li")(35, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i-feather", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li")(38, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i-feather", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li")(41, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i-feather", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li")(44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i-feather", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 29)(47, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ul", 31)(50, "li", 32)(51, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Mornings contain the secret to an extraordinarily successful life");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Comments :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "ul", 39)(65, "li", 38)(66, "div", 40)(67, "div", 41)(68, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 44)(71, "h6", 45)(72, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "15th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 49)(80, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li", 38)(83, "div", 40)(84, "div", 41)(85, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 44)(88, "h6", 45)(89, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "15th August, 2019 at 05:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 49)(97, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 38)(100, "div", 40)(101, "div", 41)(102, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 44)(105, "h6", 45)(106, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "16th August, 2019 at 03:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 49)(114, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "ul", 54)(117, "li", 38)(118, "div", 40)(119, "div", 41)(120, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 44)(123, "h6", 45)(124, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "17th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 49)(132, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Leave A Comment :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "form", 49)(137, "div", 20)(138, "div", 55)(139, "div", 56)(140, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Your Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "i-feather", 59)(144, "textarea", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 61)(146, "div", 56)(147, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "i-feather", 63)(153, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 61)(155, "div", 56)(156, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i-feather", 65)(162, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 55)(164, "div", 67)(165, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i-feather", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6126:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-blog-list/page-blog-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogListComponent": () => (/* binding */ PageBlogListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);





function PageBlogListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35)(7, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 32)(14, "div", 40)(15, "h5")(16, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 43)(21, "ul", 44)(22, "li", 45)(23, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 48)(27, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", data_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.message);
  }
}
;
/**
 * Page Blog-List Component
 */
class PageBlogListComponent {
  constructor() {
    /**
     * Blog Data
     */
    this.blogListData = [{
      image: "assets/images/work/14.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/15.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/16.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/17.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/18.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/19.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/13.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
  }
  ngOnInit() {}
}
PageBlogListComponent.??fac = function PageBlogListComponent_Factory(t) {
  return new (t || PageBlogListComponent)();
};
PageBlogListComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: PageBlogListComponent,
  selectors: [["app-page-blog-list"]],
  decls: 48,
  vars: 2,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], ["class", "col-lg-6 col-12 mb-4 pb-2", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-lg-6", "col-12", "mb-4", "pb-2"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], [1, "row", "align-items-center", "g-0"], [1, "col-md-6"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "overlay", "bg-dark"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "text-muted", "mb-0"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"]],
  template: function PageBlogListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Blog Listing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 9)(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Blog List");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "section", 17)(26, "div", 1)(27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, PageBlogListComponent_div_28_Template, 33, 7, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 20)(30, "ul", 21)(31, "li", 22)(32, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 24)(35, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 22)(38, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 22)(41, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li", 22)(44, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i-feather", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.blogListData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9894:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-contact-one/page-contact-one.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactOneComponent": () => (/* binding */ PageContactOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function PageContactOneComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 69)(1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PageContactOneComponent_ng_template_63_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "iframe", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
/**
 * Page Contact-One Component
 */
class PageContactOneComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {}
  mapView(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageContactOneComponent.??fac = function PageContactOneComponent_Factory(t) {
  return new (t || PageContactOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
};
PageContactOneComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: PageContactOneComponent,
  selectors: [["app-page-contact-one"]],
  decls: 128,
  vars: 1,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section", "pb-0"], [1, "row"], [1, "col-md-4"], [1, "card", "border-0", "text-center", "features", "feature-clean"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-phone", "d-block", "rounded", "h3", "mb-0"], [1, "content", "mt-3"], [1, "fw-bold"], [1, "text-muted"], ["href", "tel:+152534-468-854", 1, "text-primary"], [1, "col-md-4", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "uil", "uil-envelope", "d-block", "rounded", "h3", "mb-0"], ["href", "mailto:contact@example.com", 1, "text-primary"], [1, "uil", "uil-map-marker", "d-block", "rounded", "h3", "mb-0"], ["href", "javascript:void(0);", "data-type", "iframe", 1, "video-play-icon", "text-primary", 3, "click"], ["content", ""], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-6", "pt-2", "pt-sm-0", "order-2", "order-md-1"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body", "py-5"], [1, "card-title"], [1, "custom-form", "mt-3"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], [1, "col-12"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-7", "col-md-6", "order-1", "order-md-2"], [1, "card", "border-0"], [1, "card-body", "p-0"], ["src", "assets/images/contact.svg", "alt", "", 1, "img-fluid"], [1, "container-fluid", "mt-100", "mt-60"], [1, "col-12", "p-0"], [1, "card", "map", "border-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "allowfullscreen", "", 2, "border", "0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]],
  template: function PageContactOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 9)(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Contact One");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "section", 17)(26, "div", 1)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23)(33, "h5", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Start working with Landrick that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "+152 534-468-854");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 27)(40, "div", 20)(41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23)(44, "h5", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Start working with Landrick that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "contact@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 27)(51, "div", 20)(52, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 23)(55, "h5", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "C/54 Northwest Freeway, Suite 558, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Houston, USA 485");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PageContactOneComponent_Template_a_click_61_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](64);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx.mapView(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "View on Google map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, PageContactOneComponent_ng_template_63_Template, 6, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 33)(66, "div", 34)(67, "div", 35)(68, "div", 36)(69, "div", 37)(70, "h4", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Get In Touch !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 39)(73, "form", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "p", 41)(75, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 18)(77, "div", 43)(78, "div", 44)(79, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Your Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i-feather", 48)(85, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 43)(87, "div", 44)(88, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i-feather", 50)(94, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 52)(96, "div", 44)(97, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i-feather", 53)(101, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 52)(103, "div", 44)(104, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Comments ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i-feather", 55)(110, "textarea", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 18)(112, "div", 52)(113, "div", 57)(114, "button", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 59)(117, "div", 60)(118, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 63)(121, "div", 18)(122, "div", 64)(123, "div", 65)(124, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "iframe", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: [".dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n}\n\n  .dark-modal .modal-header {\n    border: none\n}\n\n  .dark-modal .close {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtY29udGFjdC1vbmUvcGFnZS1jb250YWN0LW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICAgIGJvcmRlcjogbm9uZVxufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2219:
/*!************************************************************!*\
  !*** ./src/app/core/components/widget/widget.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetComponent": () => (/* binding */ WidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);






function WidgetComponent_ng_template_575_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 332)(1, "button", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WidgetComponent_ng_template_575_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "iframe", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
  }
}
/**
 * Widget Component
 */
class WidgetComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {}
  mapView(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
WidgetComponent.??fac = function WidgetComponent_Factory(t) {
  return new (t || WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
WidgetComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: WidgetComponent,
  selectors: [["app-widget"]],
  decls: 806,
  vars: 4,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-12"], [1, "section-title"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "features"], [1, "image", "position-relative", "d-inline-block"], [1, "uil", "uil-airplay", "h1", "text-primary"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"], [1, "d-flex", "features", "pt-4", "pb-4"], [1, "icon", "text-center", "rounded-circle", "text-primary", "me-3", "mt-2"], ["name", "monitor", 1, "fea", "icon-ex-md"], [1, "flex-1"], [1, "text-muted", "para", "mb-0"], [1, "card", "work-process", "border-0", "rounded", "shadow"], [1, "card-body"], [1, "text-muted", "para"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "uil", "uil-angle-right-b"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0", "mt-2"], [1, "step", "h1", "mb-0", "fw-bold"], [1, "step-icon"], [1, "mdi", "mdi-check-all", "mdi-36px"], [1, "card", "border-0", "text-center", "features", "feature-clean", "course-feature", "p-4", "overflow-hidden", "shadow"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-file", "d-block", "rounded", "h3", "mb-0"], [1, "card-body", "p-0", "mt-4"], ["href", "javascript:void(0)", 1, "title", "h5", "text-dark"], [1, "text-muted", "mt-2"], ["href", "javascript:void(0)", 1, "text-primary", "read-more"], [1, "uil", "uil-file", "text-primary", "full-img"], [1, "card", "bg-light", "rounded", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "uil", "uil-rupee-sign", "h1", "text-primary"], [1, "mt-4"], [1, "card-title"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "border-0", "text-center", "features", "feature-clean"], [1, "uil", "uil-phone", "d-block", "rounded", "h3", "mb-0"], [1, "content", "mt-3"], [1, "fw-bold"], [1, "text-muted"], ["href", "tel:+152534-468-854", 1, "text-primary"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white", "shadow"], [1, "icon", "rounded-circle", "shadow-lg", "d-inline-block"], ["name", "pen-tool", 1, "fea"], [1, "mt-3", "title"], [1, "uil", "uil-envelope-lock", "d-block", "rounded", "h3", "mb-0"], [1, "mt-2"], ["name", "arrow-right", 1, "fea", "icon-sm"], [1, "d-flex", "features", "feature-clean"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "content", "ms-4"], [1, "mb-1"], ["href", "javascript:void(0)", 1, "text-dark"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white"], ["name", "monitor", 1, "fea"], ["href", "javascript:void(0)", 1, "title", "text-dark"], ["href", "javascript:void(0)", 1, "text-muted", "small"], [1, "card", "features", "fea-primary", "rounded", "p-4", "bg-light", "position-relative", "overflow-hidden", "border-0"], [1, "h1", "icon2", "text-primary"], [1, "uil", "uil-briefcase"], [1, "card-body", "p-0", "content"], [1, "para", "text-muted", "mb-0"], [1, "col-12", "mt-4", "pt-2"], [1, "d-flex", "client-testi"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "avatar", "avatar-small", "client-image", "rounded", "shadow"], [1, "flex-1", "content", "p-3", "shadow", "rounded", "bg-white", "position-relative"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-primary"], [1, "card", "client-testi", "text-center", "border", "rounded", "mx-2"], ["src", "assets/images/client/lenovo.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], [1, "text-muted", "mt-4"], [1, "card", "client-testi", "m-2", "text-center", "rounded", "shadow", "border-0"], [1, "text-muted", "h6", "fst-italic"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "card", "client-testi", "border-0", "text-center"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "rounded-circle", "mx-auto", "shadow"], [1, "col-lg-8", "col-12", "mt-4"], [1, "card", "rounded", "bg-light", "overflow-hidden", "border-0", "m-2"], [1, "row", "align-items-center", "g-0"], [1, "col-md-5"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "img-fluid"], [1, "col-md-7"], [1, "card-body", "client-testi"], [1, "text-primary", "fw-bold"], [1, "text-muted", "d-block"], [1, "text-muted", "h6", "mb-0", "fst-italic"], [1, "card", "blog", "rounded", "border-0", "shadow"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card", "courses-desc", "overflow-hidden", "rounded", "shadow", "border-0"], [1, "position-relative", "d-block", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "", 1, "img-fluid", "rounded-top", "mx-auto"], [1, "overlay-work", "bg-dark"], ["href", "javascript:void(0)", 1, "text-white", "h6", "preview"], [1, "rating"], [1, "mdi", "mdi-star", "h5", "mb-0", "text-warning"], [1, "uil", "uil-user", "text-muted"], [1, "fees", "d-flex", "justify-content-between"], [1, "list-unstyled", "mb-0", "numbers"], [1, "mdi", "mdi-school", "text-muted"], [1, "mdi", "mdi-book", "text-muted"], [1, "h6"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "...", 1, "card-img-top"], [1, "overlay", "bg-dark"], [1, "teacher", "d-flex", "align-items-center"], ["src", "assets/images/client/01.jpg", "alt", "", 1, "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "ms-2"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-light", "user"], [1, "text-light", "small", "my-0"], [1, "course-fee", "bg-white", "text-center", "shadow-lg", "rounded-circle"], [1, "text-primary", "fw-bold", "fee"], ["href", "javascript:void(0)", 1, "text-primary", "h6"], [1, "list-unstyled", "d-flex", "justify-content-between", "border-top", "mt-3", "pt-3", "mb-0"], [1, "text-muted", "small"], ["name", "book", 1, "fea", "icon-sm", "text-info"], [1, "text-muted", "small", "ms-3"], ["name", "clock", 1, "fea", "icon-sm", "text-warning"], ["name", "eye", 1, "fea", "icon-sm", "text-primary"], [1, "col-lg-6", "col-12", "mt-4", "pt-2"], [1, "col-md-6", "order-2", "order-md-1"], [1, "col-md-6", "order-1", "order-md-2"], ["src", "assets/images/work/15.jpg", "alt", "", 1, "img-fluid"], [1, "card", "shop-list", "border-0", "position-relative"], [1, "label", "list-unstyled", "mb-0"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-primary"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-success"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-warning"], [1, "shop-image", "position-relative", "overflow-hidden", "rounded", "shadow"], ["routerLink", "/shop-product-detail"], ["src", "assets/images/shop/product/s1.jpg", "alt", "", 1, "img-fluid"], ["routerLink", "/shop-product-detail", 1, "overlay-work"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "shop-icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-soft-danger"], ["name", "heart", 1, "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#productview", 1, "btn", "btn-icon", "btn-pills", "btn-soft-primary"], ["name", "eye", 1, "icons"], ["routerLink", "/shop-cart", 1, "btn", "btn-icon", "btn-pills", "btn-soft-warning"], ["name", "shopping-cart", 1, "icons"], [1, "card-body", "content", "pt-4", "p-2"], ["routerLink", "/shop-product-detail", 1, "text-dark", "product-name", "h6"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "text-muted", "small", "fst-italic", "mb-0", "mt-1"], [1, "text-success", "ms-1"], [1, "list-unstyled", "text-warning", "mb-0"], [1, "mdi", "mdi-star"], [1, "card", "border-0", "work-container", "work-classic"], [1, "card-body", "p-0"], ["src", "assets/images/work/2.jpg", "alt", "", 1, "img-fluid", "rounded", "work-image"], [1, "content", "pt-3"], ["href", "javascript:void(0)", 1, "text-dark", "title"], [1, "text-muted", "tag", "mb-0"], [1, "card", "border-0", "work-container", "work-grid", "position-relative", "d-block", "overflow-hidden", "rounded"], ["href", "assets/images/work/11.jpg", "title", "", 1, "lightbox", "d-inline-block"], ["src", "assets/images/work/11.jpg", "alt", "work-image", 1, "img-fluid"], [1, "content", "bg-white", "p-3"], ["routerLink", "/portfolio-detail-one", 1, "text-dark", "title"], [1, "card", "work-container", "work-modern", "position-relative", "overflow-hidden", "shadow", "rounded", "border-0"], ["src", "assets/images/work/3.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "content"], ["href", "javascript:void(0)", 1, "title", "text-white", "d-block", "fw-bold"], [1, "text-light"], [1, "client"], [1, "muil", "uil-calendar-alt"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "portfolio-box-img", "position-relative", "overflow-hidden"], ["src", "assets/images/personal/6.jpg", "alt", "1", 1, "item-container", "img-fluid", "mx-auto"], ["routerLink", "/portfolio-detail-one", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], ["href", "javascript:void(0);", 1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill"], ["name", "camera", 1, "fea", "icon-sm", "image-icon"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], ["src", "assets/images/hotel/01.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "overlay-work"], ["href", "javascript:void(0)", 1, "title", "text-white", "pb-2", "border-bottom"], [1, "post-meta", "mb-0", "mt-2", "text-white", "list-unstyled"], [1, "list-inline-item", "me-3"], [1, "mdi", "mdi-bed-empty", "mdi-24px", "me-2"], [1, "mdi", "mdi-scale-bathroom", "mdi-24px", "me-2"], [1, "text-white", "d-block", "mb-0"], [1, "text-success"], [1, "read_more", "bg-primary", "text-center", "rounded-circle"], ["href", "javascript:void(0)", 1, "text-light", "d-block"], ["name", "chevron-right", 1, "fea", "icon-sm", "title-dark"], [1, "card", "work-container", "work-modern", "overflow-hidden", "rounded", "border-0", "shadow-lg"], ["src", "assets/images/course/online/ab02.jpg", "alt", "work-image", 1, "img-fluid"], [1, "card", "categories", "overflow-hidden", "rounded", "shadow", "border-0"], ["src", "assets/images/work/5.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0"], ["href", "javascript:void(0)", 1, "title", "h6", "text-dark"], [1, "h6", "mb-0", "jobs"], [1, "card", "job-box", "rounded", "shadow", "border-0", "overflow-hidden"], [1, "border-bottom"], ["src", "assets/images/job/remote.jpg", "alt", "", 1, "img-fluid"], [1, "job-overlay", "bg-white"], [1, "mb-0", "position"], ["routerLink", "/page-job-detail", 1, "text-dark", "h5"], [1, "list-unstyled", "h6", "mb-0", "text-warning"], [1, "list-inline-item", "mb-0"], [1, "list-unstyled", "head", "mb-0"], [1, "badge", "bg-danger", "rounded-pill"], [1, "card-body", "content", "position-relative"], [1, "firm-logo", "rounded-circle", "shadow", "bg-light", "text-center"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-md-sm"], [1, "company-detail", "text-center", "mt-3"], ["routerLink", "/page-job-company", 1, "text-dark", "company-name"], ["data-type", "iframe", 1, "video-play-icon", "text-muted", 3, "click"], ["name", "map-pin", 1, "fea", "icon-sm"], ["content", ""], [1, "job-facts", "list-unstyled"], [1, "list-inline-item", "text-muted"], ["name", "check", 1, "fea", "icon-sm", "text-success", "me-1"], [1, "d-grid"], ["routerLink", "/page-job-detail", 1, "btn", "btn-outline-primary"], [1, "candidate-list", "card", "rounded", "border-0", "shadow"], [1, "list-unstyled", "align-items-center"], [1, "list-inline-item", "float-end"], [1, "mdi", "mdi-heart", "h5", "mb-0"], [1, "badge", "rounded-pill", "bg-soft-success"], [1, "content", "text-center"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "avatar", "avatar-md-md", "shadow-md", "rounded-circle"], [1, "list-unstyled", "mb-1", "mt-2"], ["routerLink", "/page-job-candidate", 1, "text-dark", "h5", "name"], [1, "text-muted", "my-1"], [1, "uil", "uil-graduation-cap", "h4", "mb-0", "me-2", "text-primary"], [1, "list-unstyled", "mt-3"], [1, "list-inline-item", "m-1"], ["href", "jvascript:void(0)", 1, "rounded", "bg-light", "py-1", "px-2", "text-muted", "small"], ["routerLink", "/page-job-candidate", 1, "btn", "btn-soft-primary"], [1, "company-list", "card", "border-0", "rounded", "shadow", "bg-white"], [1, "text-center", "py-5", "border-bottom"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-small", "mx-auto", "rounded-circle", "d-block", "mb-3"], ["routerLink", "page-job-company", 1, "text-dark", "h5", "name"], [1, "text-muted", "mt-1", "mb-0"], [1, "p-4"], [1, "list-unstyled", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-map-pin", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-link", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-dollar-sign", "fea", "icon-sm", "text-warning", "me-2"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-users", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/page-job-company", 1, "btn", "btn-soft-primary"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "rounded", "text-center", "border-0"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "col-lg-5", "col-md-6", "mt-4", "pt-2"], [1, "card", "rounded", "shadow", "bg-light", "border-0"], ["src", "assets/images/payments/payment/master.png", "height", "60", "alt", "", 1, "text-end"], [1, ""], [1, "d-flex", "justify-content-between"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2"], ["id", "counter", 1, "row"], [1, "card", "counter-box", "border-0", "bg-primary", "shadow", "text-center", "rounded"], [1, "mb-0", "text-light", "title-dark"], [1, "counter-value", 3, "CountTo", "from", "duration"], [1, "counter-head", "text-light", "title-dark", "mb-0"], [1, "col-lg-5", "mt-4", "pt-2"], [1, "card", "event-schedule", "rounded", "border"], [1, "d-flex"], [1, "date", "text-center", "text-primary", "me-3", "mb-0", "list-unstyled"], [1, "day", "fw-bold", "mb-2"], [1, "month", "fw-bold"], [1, "flex-1", "content"], [1, "text-muted", "location-time"], [1, "text-dark", "h6"], [1, "text-danger"], ["routerLink", "/widget", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], ["name", "help-circle", 1, "fea", "icon-ex-md", "text-primary", "me-2", "mt-1"], [1, "mt-0"], [1, "answer", "text-muted", "mb-0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]],
  template: function WidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, " Widget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Features Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 21)(30, "div", 22)(31, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 25)(34, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Easy To Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 21)(39, "div", 27)(40, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "i-feather", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 30)(43, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Use On Any Device");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 21)(48, "div", 32)(49, "div", 33)(50, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Final Approvement");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "ul", 37)(58, "li", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "Step 03.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "li", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](61, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 21)(63, "div", 41)(64, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](65, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 44)(67, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, " Unlimited Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 21)(76, "div", 49)(77, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 52)(80, "h5", 53)(81, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, " Low Fees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "If the distribution of letters and 'words' is random, the reader will not be distracted.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "div", 55)(86, "div", 56)(87, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 58)(90, "h5", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Start working with Landrick that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "+152 534-468-854");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 55)(97, "div", 62)(98, "div", 33)(99, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](100, "i-feather", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "h5", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Perfect Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "Dummy text is text that is used in the publishing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 21)(106, "div", 56)(107, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](108, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 44)(110, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Fully Secured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 67)(115, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](117, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 21)(119, "div", 69)(120, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](121, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 71)(123, "h5", 72)(124, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "Learners");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "This is required when, for text is not yet available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 21)(129, "div", 74)(130, "div", 50)(131, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 58)(134, "h5")(135, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "IT & Software");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](138, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 21)(140, "div", 78)(141, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](142, "i", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "div", 81)(144, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](145, "Our Vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "p", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "It is a long established fact that a reader will be of a page reader will be of at its layout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "div", 18)(149, "div", 83)(150, "div", 20)(151, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Testimonial Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 21)(154, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 86)(157, "ul", 87)(158, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](159, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](161, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](167, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "\" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](171, "- Christa Smith ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "small", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](173, "Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "div", 21)(175, "div", 91)(176, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](177, "img", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "\" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, "- Barbara McIntosh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 21)(183, "div", 94)(184, "div", 33)(185, "p", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](186, "\" It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "ul", 97)(189, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](190, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](192, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](194, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](196, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](198, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](200, "- Dean Tolle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "small", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](202, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "div", 21)(204, "div", 98)(205, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](206, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "\" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "- Jill Webb");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "div", 100)(212, "div", 101)(213, "div", 102)(214, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](215, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "div", 105)(217, "div", 106)(218, "h6", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Barbara McIntosh ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "small", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "ul", 87)(223, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](224, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](226, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](228, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](230, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](232, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "p", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "\" This seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "div", 18)(236, "div", 83)(237, "div", 20)(238, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Blog Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 21)(241, "div", 110)(242, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](243, "img", 111)(244, "div", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "div", 113)(246, "h5")(247, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 115)(250, "ul", 87)(251, "li", 116)(252, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](253, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "li", 88)(256, "a", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](257, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "a", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](261, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 123)(263, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](264, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](265, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](267, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](268, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "div", 21)(270, "div", 128)(271, "div", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](272, "img", 130)(273, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "a", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](275, "Preview Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](276, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 33)(278, "h5")(279, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](280, "Program for Missionaries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 133)(282, "ul", 87)(283, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](286, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](288, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](289, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](290, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](292, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "5 Star (3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](295, "i", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](296, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "div", 136)(298, "ul", 137)(299, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](300, "i", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](301, " 30 Students");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](302, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](303, "i", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, " 5 Lession");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "h4")(306, "span", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](307, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](308, "75");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 21)(310, "div", 141)(311, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](312, "img", 142)(313, "div", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](314, "div", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](315, "img", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](316, "div", 146)(317, "h6", 147)(318, "a", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "Dung Lewis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "p", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "Professor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](322, "div", 150)(323, "h6", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](324, "$11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "div", 13)(326, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](327, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](328, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "div", 113)(330, "small")(331, "a", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](332, "Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](333, "h5", 67)(334, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](335, "Program for Missionaries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](336, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, "The most well-known dummy text is the have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](339, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](340, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "ul", 153)(342, "li", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](343, "i-feather", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](344, " 25 Lectures ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "li", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](346, "i-feather", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, " 1h 30m ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](348, "li", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](349, "i-feather", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, " 3012 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "div", 159)(352, "div", 141)(353, "div", 102)(354, "div", 160)(355, "div", 113)(356, "h5")(357, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](360, "Due to its widespread use as filler text for layouts, non-readability");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "div", 115)(362, "ul", 87)(363, "li", 116)(364, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](365, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](366, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](367, "li", 88)(368, "a", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](369, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "a", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](372, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](373, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](375, "img", 162)(376, "div", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 123)(378, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](379, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](380, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](382, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](383, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](384, "div", 18)(385, "div", 83)(386, "div", 20)(387, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "Shop Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "div", 21)(390, "div", 163)(391, "ul", 164)(392, "li")(393, "a", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](394, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "li")(396, "a", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](397, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "li")(399, "a", 167);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, "Sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "div", 168)(402, "a", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](403, "img", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "a", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](405, "img", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](406, "ul", 173)(407, "li")(408, "a", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](409, "i-feather", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "li", 67)(411, "a", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](412, "i-feather", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "li", 67)(414, "a", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](415, "i-feather", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](416, "div", 180)(417, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](418, "T-Shirts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "div", 182)(420, "h6", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](421, "$5.00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](422, "span", 184);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](423, "30% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](424, "ul", 185)(425, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](426, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](427, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](428, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](429, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](430, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](431, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](432, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](434, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](435, "div", 18)(436, "div", 83)(437, "div", 20)(438, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](439, "Work, Project & Portfolio Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](440, "div", 21)(441, "div", 187)(442, "div", 188)(443, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](444, "img", 189);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](445, "div", 190)(446, "h5", 147)(447, "a", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](448, "Iphone mockup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](449, "h6", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](450, "Branding");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](451, "div", 21)(452, "div", 193)(453, "div", 188)(454, "a", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](455, "img", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "div", 196)(457, "h5", 147)(458, "a", 197);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](459, "Black and white T-shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](460, "h6", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](461, "Clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](462, "div", 21)(463, "div", 198)(464, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](465, "img", 199)(466, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "div", 200)(468, "a", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](469, "Spa Cosmetics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "small", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, "Developing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "div", 203)(473, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](474, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](475, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](477, "i", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](478, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "div", 21)(480, "div", 205)(481, "div", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](482, "img", 207)(483, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "div", 200)(485, "h5", 147)(486, "a", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](487, "Mockup box with paints");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](488, "h6", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](489, "Photography");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "div", 210)(491, "a", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](492, "i-feather", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](493, "div", 55)(494, "div", 213)(495, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](496, "img", 214)(497, "div", 215);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](498, "div", 200)(499, "a", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](500, "Regular Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](501, "ul", 217)(502, "li", 218);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](503, "i", 219);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](504, "1 Bed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](505, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](506, "i", 220);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](507, "1 Bathrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "p", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](509, "Rent ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](510, "span", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](511, "$350");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, " /Night");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "div", 223)(514, "a", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](515, "i-feather", 225);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](516, "div", 55)(517, "div", 226)(518, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](519, "img", 227)(520, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](521, "div", 200)(522, "a", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](523, "Michanical Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](524, "small", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](525, "Engineering");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](526, "div", 18)(527, "div", 83)(528, "div", 20)(529, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](530, "Job Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](531, "div", 55)(532, "div", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](533, "img", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](534, "div", 33)(535, "ul", 230)(536, "li")(537, "a", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](538, "Communications");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](539, "li", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](540, "125 Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "div", 21)(542, "div", 233)(543, "div", 234)(544, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](545, "img", 235)(546, "div", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](547, "div", 237)(548, "a", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](549, "Python Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](550, "ul", 239)(551, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](552, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](554, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](555, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](556, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](557, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](558, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](560, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](561, "ul", 241)(562, "li", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](563, "Remote");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](564, "div", 243)(565, "div", 244);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](566, "img", 245);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "div", 246)(568, "h5", 147)(569, "a", 247);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](570, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "p", 60)(572, "a", 248);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WidgetComponent_Template_a_click_572_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](576);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx.mapView(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](573, "i-feather", 249);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](574, " San Francisco ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](575, WidgetComponent_ng_template_575_Template, 6, 0, "ng-template", null, 250, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "ul", 251)(578, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](579, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](580, " 2 Year Expirence ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](582, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](583, " Working Hours- 6hr ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](585, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](586, " Information strategy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "div", 254)(588, "a", 255);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](589, "Apply Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "div", 21)(591, "div", 256)(592, "div", 33)(593, "ul", 257)(594, "li", 258)(595, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](596, "i", 259);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "li", 88)(598, "span", 260);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](599, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](600, "div", 261);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](601, "img", 262);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "ul", 263)(603, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](604, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](605, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](606, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](607, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](608, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](610, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](612, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](613, "a", 264);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](614, "Martha Griffin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](615, "p", 265);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](616, "WordPress Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](617, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](618, "i", 266);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](619, "Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](620, "span", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](621, "3+ years");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](622, "ul", 267)(623, "li", 268)(624, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](625, "PHP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](626, "li", 268)(627, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](628, "WordPress");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](629, "li", 268)(630, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](631, "Web Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](632, "li", 268)(633, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](634, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](635, "li", 268)(636, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](637, "JS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](638, "div", 254)(639, "a", 270);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](640, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](641, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](642, "div", 21)(643, "div", 271)(644, "div", 272);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](645, "img", 273);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](646, "a", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](647, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](648, "p", 275);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](649, "Internet Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](650, "div", 276)(651, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](652, "Company Details :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](653, "ul", 277)(654, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](655, "svg", 278);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](656, "path", 279)(657, "circle", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](658, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](659, "Location :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](660, " San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](661, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](662, "svg", 281);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](663, "path", 282)(664, "path", 283);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](665, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](666, "Comapny :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](667, " circleci.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](668, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](669, "svg", 284);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](670, "line", 285)(671, "path", 286);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](672, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](673, "Revenue :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](674, " $ 5M / Annual");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](675, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](676, "svg", 287);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](677, "path", 288)(678, "circle", 289)(679, "path", 290)(680, "path", 291);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](681, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](682, "No. of employees :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](683, " 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](684, "div", 254)(685, "a", 292);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](686, "View Detail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](687, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](688, "div", 18)(689, "div", 83)(690, "div", 20)(691, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](692, "Price Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](693, "div", 21)(694, "div", 293)(695, "div", 50)(696, "h6", 294);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](697, "Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](698, "div", 295)(699, "span", 296);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](700, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](701, "span", 297);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](702, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](703, "span", 298);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](704, "/mo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](705, "ul", 299)(706, "li", 300)(707, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](708, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](709, "Full Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](710, "li", 300)(711, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](712, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](713, "Enhanced Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](714, "li", 300)(715, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](716, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](717, "Source Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](718, "li", 300)(719, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](720, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](721, "1 Domain Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](722, "a", 303);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](723, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](724, "div", 18)(725, "div", 83)(726, "div", 20)(727, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](728, "Payment Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](729, "div", 304)(730, "div", 305)(731, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](732, "img", 306);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](733, "div", 52)(734, "h5", 307);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](735, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4559");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](736, "div", 308)(737, "p", 300);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](738, "Cristino Murfy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](739, "h6", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](740, "Exp: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](741, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](742, "10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](743, "div", 18)(744, "div", 83)(745, "div", 20)(746, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](747, "Counter Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](748, "div", 309)(749, "div", 310)(750, "div", 19)(751, "div", 311)(752, "div", 50)(753, "h2", 312);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](754, "span", 313);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](755, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](756, "h5", 314);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](757, "Happy Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](758, "div", 18)(759, "div", 83)(760, "div", 20)(761, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](762, "Event Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](763, "div", 315)(764, "div", 316)(765, "div", 33)(766, "div", 317)(767, "ul", 318)(768, "li", 319);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](769, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](770, "li", 320);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](771, "OCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](772, "div", 321)(773, "h4")(774, "a", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](775, "Digital Conference Event Intro");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](776, "p", 322)(777, "span", 323);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](778, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](779, " Hall 3, Sinchang-dong, Kwangju, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](780, "span", 324);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](781, "South Korea");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](782, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](783, "span", 323);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](784, "Time:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](785, " 10:30AM to 11:15AM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](786, "a", 325);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](787, "Buy Ticket");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](788, "div", 18)(789, "div", 83)(790, "div", 20)(791, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](792, "FAQs Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](793, "div", 326)(794, "div", 317);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](795, "i-feather", 327);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](796, "div", 30)(797, "h5", 328);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](798, "How our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](799, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](800, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](801, " work ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](802, "p", 329);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](803, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](804, "a", 330);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](805, "i-feather", 331);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](754);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("CountTo", 97)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 80:
/*!************************************************************!*\
  !*** ./src/app/email/email-alert/email-alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailAlertComponent": () => (/* binding */ EmailAlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Alert Component
 */
class EmailAlertComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailAlertComponent.??fac = function EmailAlertComponent_Factory(t) {
  return new (t || EmailAlertComponent)();
};
EmailAlertComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: EmailAlertComponent,
  selectors: [["app-email-alert"]],
  decls: 36,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "24px 24px"], [2, "padding", "8px", "color", "#e43f52", "background-color", "rgba(228, 63, 82, 0.2)", "border", "1px solid rgba(228, 63, 82, 0.2)", "border-radius", "6px", "text-align", "center", "font-size", "16px", "font-weight", "600"], [2, "padding", "0 24px 15px", "color", "#8492a6"], [2, "color", "#fff", "background-color", "#e43f52", "padding", "4px 8px", "border-radius", "6px"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px", "background-color", "#2f55d4", "border", "1px solid #2f55d4", "color", "#ffffff"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody")(7, "tr")(8, "td", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Warning: You're approaching your limit. Please upgrade. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr")(12, "td", 7)(13, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " You have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "1 free report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " remaining. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr")(19, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Add your credit card / debit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr")(22, "td", 9)(23, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Upgrade Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr")(26, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Thanks for choosing Landrick Template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr")(29, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr")(34, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8942:
/*!**************************************************************************!*\
  !*** ./src/app/email/email-confirmation/email-confirmation.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationComponent": () => (/* binding */ EmailConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Confirmation Component
 */
class EmailConfirmationComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailConfirmationComponent.??fac = function EmailConfirmationComponent_Factory(t) {
  return new (t || EmailConfirmationComponent)();
};
EmailConfirmationComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: EmailConfirmationComponent,
  selectors: [["app-email-confirmation"]],
  decls: 31,
  vars: 1,
  consts: [[2, "align-items", "center", "padding", "150px 0"], [1, "container"], [1, "row", 2, "justify-content", "center"], [1, "col-lg-6", "col-md-8"], [2, "box-sizing", "border-box", "width", "100%", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "48px 24px 0", "color", "#161c2d", "font-size", "18px", "font-weight", "600"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 1, "btn-primary", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr", 5)(7, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tbody")(10, "tr")(11, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Hello, Harry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr")(14, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Thanks for creating an Landrick account. To continue, please confirm your email address by clicking the button below : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr")(17, "td", 10)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Confirm Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr")(21, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " This link will be active for 30 min from the time this email was sent. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr")(24, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr")(29, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9760:
/*!****************************************************************!*\
  !*** ./src/app/email/email-invoice/email-invoice.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailInvoiceComponent": () => (/* binding */ EmailInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Invoice Component
 */
class EmailInvoiceComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailInvoiceComponent.??fac = function EmailInvoiceComponent_Factory(t) {
  return new (t || EmailInvoiceComponent)();
};
EmailInvoiceComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: EmailInvoiceComponent,
  selectors: [["app-email-invoice"]],
  decls: 73,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "24px 24px 0"], ["cellpadding", "0", "cellspacing", "0", 2, "border", "none"], [2, "min-width", "130px", "padding-bottom", "8px"], [2, "color", "#8492a6"], [2, "padding", "24px"], [2, "display", "block", "overflow-x", "auto", "-webkit-overflow-scrolling", "touch", "border-radius", "6px", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], ["cellpadding", "0", "cellspacing", "0"], [1, "bg-light"], ["scope", "col", 2, "text-align", "left", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px"], ["scope", "col", 2, "text-align", "left", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px", "width", "200px"], ["scope", "col", 2, "text-align", "end", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px"], ["scope", "row", 2, "text-align", "left", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "text-align", "left", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "text-align", "end", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "background-color", "rgba(47, 85, 212, 0.2)", "color", "#2f55d4", "overflow-x", "hidden"], ["scope", "row", 2, "text-align", "left", "padding", "12px", "border-top", "1px solid rgba(47, 85, 212, 0.2)"], ["colspan", "2", 2, "text-align", "end", "font-weight", "700", "font-size", "18px", "padding", "12px", "border-top", "1px solid rgba(47, 85, 212, 0.2)"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody")(7, "tr")(8, "td", 5)(9, "table", 6)(10, "tbody")(11, "tr")(12, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Invoice No. :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "#land45845621");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr")(17, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Name :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Harry Patel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr")(22, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Address :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "1962 Pike Street, CA 92123");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr")(27, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "March, 25 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr")(32, "td", 9)(33, "div", 10)(34, "table", 11)(35, "thead", 12)(36, "tr")(37, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "tbody")(44, "tr")(45, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Landrick Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "$ 5200 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "tr")(52, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Customization");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "$ 3660 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "tr")(59, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "$ 13740 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "tr", 19)(66, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " $ 22600");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "tr")(71, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4065:
/*!******************************************************************************!*\
  !*** ./src/app/email/email-password-reset/email-password-reset.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailPasswordResetComponent": () => (/* binding */ EmailPasswordResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Password-Reset Component
 */
class EmailPasswordResetComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailPasswordResetComponent.??fac = function EmailPasswordResetComponent_Factory(t) {
  return new (t || EmailPasswordResetComponent)();
};
EmailPasswordResetComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: EmailPasswordResetComponent,
  selectors: [["app-email-password-reset"]],
  decls: 28,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "48px 24px 0", "color", "#161c2d", "font-size", "18px", "font-weight", "600"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px", "background-color", "#2f55d4", "border", "1px solid #2f55d4", "color", "#ffffff"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailPasswordResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody")(7, "tr")(8, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Hello, Harry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr")(11, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " To reset your password, please click the button below : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr")(14, "td", 7)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr")(18, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr")(21, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr")(26, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", ctx.year, "Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2891:
/*!***********************************************!*\
  !*** ./src/app/shared/blog/blog.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function BlogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7)(6, "h5")(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 14)(16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19)(23, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", data_r1.date, "");
  }
}
class BlogComponent {
  constructor() {}
  ngOnInit() {}
}
BlogComponent.??fac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)();
};
BlogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  inputs: {
    blogData: "blogData"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["alt", "...", 1, "card-img-top", "rounded-top", 3, "src"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", "href", "javascript:void(0);", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"]],
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BlogComponent_div_1_Template, 29, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.blogData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5229:
/*!***************************************************************!*\
  !*** ./src/app/shared/clients-logo/clients-logo.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsLogoComponent": () => (/* binding */ ClientsLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ClientsLogoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
  }
}
;
class ClientsLogoComponent {
  constructor() {
    /**
     * Clients Logo
     */
    this.clients_logo = [{
      image: "assets/images/client/amazon.svg"
    }, {
      image: "assets/images/client/google.svg"
    }, {
      image: "assets/images/client/lenovo.svg"
    }, {
      image: "assets/images/client/paypal.svg"
    }, {
      image: "assets/images/client/shopify.svg"
    }, {
      image: "assets/images/client/spotify.svg"
    }];
  }
  ngOnInit() {}
}
ClientsLogoComponent.??fac = function ClientsLogoComponent_Factory(t) {
  return new (t || ClientsLogoComponent)();
};
ClientsLogoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: ClientsLogoComponent,
  selectors: [["app-clients-logo"]],
  decls: 2,
  vars: 1,
  consts: [[1, "row", "justify-content-center"], ["class", "col-lg-2 col-md-2 col-6 text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-2", "col-6", "text-center"], ["alt", "", 1, "avatar", "avatar-ex-sm", 3, "src"]],
  template: function ClientsLogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ClientsLogoComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.clients_logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1717:
/*!*******************************************************!*\
  !*** ./src/app/shared/features/features.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);



function FeaturesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i-feather", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 9)(5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("name", data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.title);
  }
}
;
class FeaturesComponent {
  constructor() {
    /**
     * Clients Logo
     */
    this.featuresdata = [{
      icon: "monitor",
      title: "Fully Responsive"
    }, {
      icon: "heart",
      title: "Browser Compatibility"
    }, {
      icon: "eye",
      title: "Retina Ready"
    }, {
      icon: "bold",
      title: "Based On Bootstrap 5"
    }, {
      icon: "feather",
      title: "Feather Icons"
    }, {
      icon: "code",
      title: "Built With SASS"
    }, {
      icon: "user-check",
      title: "W3c Valid Code"
    }, {
      icon: "git-merge",
      title: "Flaticon Icons"
    }, {
      icon: "settings",
      title: "Easy to customize"
    }];
  }
  ngOnInit() {}
}
FeaturesComponent.??fac = function FeaturesComponent_Factory(t) {
  return new (t || FeaturesComponent)();
};
FeaturesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: FeaturesComponent,
  selectors: [["app-features"]],
  decls: 6,
  vars: 1,
  consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "uil", "uil-angle-right"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow"], [1, "icon", "text-center", "rounded-circle", "me-3"], [1, "fea", "icon-ex-md", "text-primary", 3, "name"], [1, "flex-1"], [1, "title", "mb-0"]],
  template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FeaturesComponent_div_1_Template, 7, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.featuresdata);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function FooterComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div")(1, "footer", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 28)(10, "li", 11)(11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 14)(14, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 14)(17, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 14)(20, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 34)(23, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 36)(26, "li")(27, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li")(31, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li")(35, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li")(39, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li")(43, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li")(47, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li")(51, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li")(55, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 46)(59, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Usefull Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul", 36)(62, "li")(63, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Terms of Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li")(67, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li")(71, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li")(75, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Changelog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li")(79, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 46)(83, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Sign up and receive the latest tips via email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "form")(88, "div", 23)(89, "div", 52)(90, "div", 53)(91, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i-feather", 57)(97, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 52)(99, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
  }
}
function FooterComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 61)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 64)(9, "li", 11)(10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 14)(13, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 14)(16, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 14)(19, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 34)(22, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul", 36)(25, "li")(26, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li")(30, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li")(34, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li")(38, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li")(42, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li")(46, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li")(50, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li")(54, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 46)(58, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Usefull Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ul", 36)(61, "li")(62, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Terms of Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li")(66, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li")(70, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li")(74, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Changelog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li")(78, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 46)(82, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Sign up and receive the latest tips via email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "form")(87, "div", 23)(88, "div", 52)(89, "div", 53)(90, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i-feather", 57)(96, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 52)(98, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
  }
}
function FooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FooterComponent_div_0_div_1_Template, 101, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, FooterComponent_div_0_ng_template_2_Template, 100, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.footerVariant == "bg-light")("ngIfElse", _r2);
  }
}
/***
 * Footer Component
 */
class FooterComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
FooterComponent.??fac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  inputs: {
    footerVariant: "footerVariant",
    hideFooter: "hideFooter"
  },
  decls: 31,
  vars: 2,
  consts: [[4, "ngIf"], [1, "footer", "footer-bar"], [1, "container", "text-center"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "text-sm-start"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], ["href", "javascript:void(0);", 1, "text-reset"], [1, "col-sm-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "list-unstyled", "text-sm-end", "mb-0"], [1, "list-inline-item"], ["href", "javascript:void(0)"], ["src", "assets/images/payments/american-ex.png", "title", "American Express", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "list-inline-item", "ms-1"], ["src", "assets/images/payments/discover.png", "title", "Discover", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/master-card.png", "title", "Master Card", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/paypal.png", "title", "Paypal", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/visa.png", "title", "Visa", "alt", "", 1, "avatar", "avatar-ex-sm"], [4, "ngIf", "ngIfElse"], ["execute_block", ""], [1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], ["href", "#", 1, "logo-footer"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", ""], [1, "mt-4", "text-muted"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-2", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "text-dark", "footer-head"], [1, "list-unstyled", "footer-list", "mt-4"], ["routerLink", "/page-aboutus", 1, "text-muted"], [1, "uil", "uil-angle-right-b", "me-1"], ["routerLink", "/page-services", 1, "text-muted"], ["routerLink", "/page-team", 1, "text-muted"], ["routerLink", "/page-pricing", 1, "text-muted"], ["routerLink", "/portfolio-modern-three", 1, "text-muted"], ["routerLink", "/page-jobs", 1, "text-muted"], ["routerLink", "/page-blog-grid", 1, "text-muted"], ["routerLink", "/auth-cover-login", 1, "text-muted"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], ["routerLink", "/page-terms", 1, "text-muted"], ["routerLink", "/page-privacy", 1, "text-muted"], ["routerLink", "/documentation", 1, "text-muted"], ["routerLink", "/changelog", 1, "text-muted"], ["routerLink", "/components", 1, "text-muted"], [1, "col-lg-12"], [1, "foot-subscribe", "foot-white", "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "bg-light", "border", "ps-5", "rounded"], [1, "d-grid"], ["type", "submit", "id", "submitsubscribe", "name", "send", "value", "Subscribe", 1, "btn", "btn-soft-primary"], [1, "footer"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "mt-4"], [1, "list-unstyled", "social-icon", "foot-social-icon", "mb-0", "mt-4"], [1, "text-light", "footer-head"], ["routerLink", "/page-aboutus", 1, "text-foot"], ["routerLink", "/page-services", 1, "text-foot"], ["routerLink", "/page-team", 1, "text-foot"], ["routerLink", "/page-pricing", 1, "text-foot"], ["routerLink", "/portfolio-modern-three", 1, "text-foot"], ["routerLink", "/page-jobs", 1, "text-foot"], ["routerLink", "/page-blog-grid", 1, "text-foot"], ["routerLink", "/auth-cover-login", 1, "text-foot"], ["routerLink", "/page-terms", 1, "text-foot"], ["routerLink", "/page-privacy", 1, "text-foot"], ["routerLink", "/documentation", 1, "text-foot"], ["routerLink", "/changelog", 1, "text-foot"], ["routerLink", "/components", 1, "text-foot"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "ps-5", "rounded"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, FooterComponent_div_0_Template, 4, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u00A9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Themesbrand");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9)(15, "ul", 10)(16, "li", 11)(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 14)(20, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 14)(23, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 14)(26, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 14)(29, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hideFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.year, " Landrick. Design with ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function HeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23)(5, "ul", 24)(6, "li", 25)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "EOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " $ 55.88 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "+$ 4.62 ( +9.01% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 25)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "CHKP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " $ 120.03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "-$ 14.07 ( -10.49% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 25)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "FANG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " $ 63.58 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "+$ 5.17 ( +8.84% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 25)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " $ 14.75 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "+$ 1.05 ( +7.66% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 25)(31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "PKI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " $ 139.72 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "-$ 11.41 ( -7.55% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li", 25)(37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "ABMD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " $ 326.23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "-$ 21.61 ( -6.21% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 25)(43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "BITCOIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " $ 37,471.47 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "+$ 492.60 ( +1.33% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 25)(49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "XRP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " $ 0.39");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " UNCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li", 25)(56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "LITECOIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " $ 148.67");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "-$ 5.58 ( -3.62% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li", 25)(63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "BITCOIN CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " $ 427.37");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "-$ 15.98 ( -3.60% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 25)(70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "ETHEREUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " $ 1,647.87 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "+$ 14.51 ( +0.89% )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
  }
}
function HeaderComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 30)(2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function HeaderComponent_ul_5_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "div", 72)(4, "h1", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 75)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Your wishlist is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Create your first wishlist request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 75)(12, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "+ Create new wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
  }
}
function HeaderComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 32)(1, "li", 33)(2, "div", 34)(3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 37)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 39)(9, "div", 34)(10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 42)(13, "div", 43)(14, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 46)(17, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "T-shirt (M)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "$320 X 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "$640");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 46)(26, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "$50 X 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 46)(35, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Watch (Men)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "$800 X 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "$800");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 52)(42, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Total($):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "$1690");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 53)(47, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "View Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "*T&C Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li", 39)(54, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_ul_5_Template_a_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](57);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r9.wishListModal(_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, HeaderComponent_ul_5_ng_template_56_Template, 14, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 33)(59, "div", 60)(60, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 62)(63, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
  }
}
function HeaderComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 32)(1, "li", 77)(2, "div", 78)(3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 81)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 77)(9, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 77)(12, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 77)(15, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 77)(18, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
  }
}
function HeaderComponent_ul_7_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 92)(1, "div", 93)(2, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_ul_7_ng_template_17_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 95)(4, "div", 96)(5, "div", 97)(6, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 100)(9, "form", 101)(10, "div", 21)(11, "div", 102)(12, "div", 103)(13, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Your Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i-feather", 106)(19, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 102)(21, "div", 103)(22, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i-feather", 108)(28, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 102)(30, "div", 110)(31, "div", 103)(32, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 114)(37, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 116)(40, "div", 117)(41, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 119)(44, "p", 120)(45, "small", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Don't have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()()();
  }
}
function HeaderComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 32)(1, "li", 33)(2, "div", 78)(3, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 81)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 39)(9, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 39)(12, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 33)(15, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_ul_7_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](18);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r16.developerModal(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, HeaderComponent_ul_7_ng_template_17_Template, 49, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function HeaderComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 123)(2, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function HeaderComponent_span_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function HeaderComponent_span_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
  }
}
function HeaderComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span")(1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HeaderComponent_span_9_ng_template_2_Template, 4, 0, "ng-template", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HeaderComponent_span_9_ng_template_3_Template, 2, 0, "ng-template", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.navClass === "nav-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.navClass !== "nav-light");
  }
}
const _c0 = function (a0) {
  return {
    "tagline-height": a0
  };
};
const _c1 = function (a0) {
  return {
    "open": a0
  };
};
/***
 * Header Component
 */
class HeaderComponent {
  constructor(router, modalService) {
    this.router = router;
    this.modalService = modalService;
    this.isCondensed = false;
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }
  ngAfterViewInit() {
    this._activateMenuDropdown();
  }
  ngOnInit() {}
  _activateMenuDropdown() {
    /**
     * Menu activation reset
     */
    const resetParent = el => {
      el.classList.remove("active");
      const parent = el.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");
            }
          }
        }
      }
    };
    let links = document.getElementsByClassName("nav-link-ref");
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i]["pathname"]) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
              document.getElementById("navigation").style.display = "none";
              this.isCondensed = false;
            }
          }
        }
      }
    }
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }
  /**
   * Menu clicked show the submenu
   */
  onMenuClick(event) {
    event.preventDefault();
    const nextEl = event.target.nextSibling.nextSibling;
    if (nextEl && !nextEl.classList.contains("open")) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("open");
      }
      nextEl.classList.add("open");
    } else if (nextEl) {
      nextEl.classList.remove("open");
    }
    return false;
  }
  developerModal(content) {
    this.modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  wishListModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
HeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    navClass: "navClass",
    buttonList: "buttonList",
    sliderTopbar: "sliderTopbar",
    isdeveloper: "isdeveloper",
    shopPages: "shopPages"
  },
  decls: 37,
  vars: 17,
  consts: [["class", "tagline bg-light", 4, "ngIf"], ["id", "topnav", 1, "defaultscroll", "sticky", 3, "ngClass", "scroll"], [1, "container"], ["class", "logo", "routerLink", "/index", 4, "ngIf"], ["class", "buy-button list-inline mb-0", 4, "ngIf"], [4, "ngIf"], [1, "menu-extras"], [1, "menu-item"], ["id", "isToggle", 1, "navbar-toggle", 3, "ngClass", "click"], [1, "lines"], ["id", "navigation"], [1, "navigation-menu"], ["routerLink", "/", 1, "nav-link-ref"], ["routerLink", "/index-blog", 1, "nav-link-ref"], ["routerLink", "/index-services", 1, "nav-link-ref"], ["routerLink", "/page-aboutus", 1, "nav-link-ref"], ["routerLink", "/page-contact-one", 1, "nav-link-ref"], [1, "buy-menu-btn", "d-none"], ["href", "javascript: void(0);", "target", "_blank", 1, "btn", "btn-primary"], [1, "tagline", "bg-light"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "text-slider"], [1, "list-inline", "mb-0", "move-text"], [1, "list-inline-item", "px-2", "mb-0"], [1, "text-success"], [1, "text-danger"], [1, "text-muted"], ["routerLink", "/index", 1, "logo"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", "", 1, "l-dark", "logo-light-mode"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "logo-dark-mode"], [1, "buy-button", "list-inline", "mb-0"], [1, "list-inline-item", "mb-0"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "h5", "text-muted"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["type", "text", "id", "text", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], [1, "list-inline-item", "mb-0", "pe-1"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-soft-primary", "dropdown-toggle"], [1, "uil", "uil-shopping-cart", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "p-4", 2, "width", "300px"], [1, "pb-4"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "flex-1", "text-start", "ms-3"], [1, "text-dark", "mb-0"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "mt-4"], ["src", "assets/images/shop/product/s-2.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], ["src", "assets/images/shop/product/s-3.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-4", "border-top"], [1, "mt-3", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "text-muted", "text-start", "mt-1", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-heart", "align-middle", "icons"], ["content", ""], ["ngbDropdown", "", 1, "dropdown", "dropdown-primary"], [1, "uil", "uil-user", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-3", 2, "width", "200px"], ["href", "#", 1, "dropdown-item", "text-dark"], [1, "uil", "uil-user", "align-middle", "me-1"], [1, "uil", "uil-clipboard-notes", "align-middle", "me-1"], [1, "uil", "uil-arrow-circle-down", "align-middle", "me-1"], [1, "dropdown-divider", "my-3", "border-top"], [1, "uil", "uil-sign-out-alt", "align-middle", "me-1"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden"], [1, "modal-body", "py-5"], [1, "text-center"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-danger", "rounded-circle", "mx-auto", 2, "height", "95px", "width", "95px"], [1, "mb-0"], [1, "uil", "uil-heart-break", "align-middle"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], [1, "list-inline-item", "mb-0", "ms-1"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "text-muted"], [1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-primary"], [1, "uil", "uil-facebook-f", "icons"], [1, "uil", "uil-github", "icons"], [1, "uil", "uil-twitter", "icons"], [1, "uil", "uil-linkedin-alt", "icons"], ["type", "text", "id", "text2", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], ["href", "#", 1, "btn", "btn-icon", "btn-soft-primary"], [1, "mdi", "mdi-stack-overflow", "mdi-18px", "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#loginform", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-user", "icons"], ["role", "document", 1, "modal-lg", "modal-dialog-centered"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden", "position-relative"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "position-absolute", "top-0", "end-0", "mt-2", "me-2", 2, "z-index", "1", 3, "click"], [1, "modal-body", "p-0"], [1, "container-fluid", "px-0"], [1, "row", "align-items-center", "g-0"], [1, "col-lg-6", "col-md-5"], ["src", "assets/images/course/online/ab02.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-md-7"], [1, "login-form", "p-4"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "ms-1"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", "", 1, "l-dark"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "l-light"], [1, "buy-button"], [3, "ngIf"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "login-btn-primary"], ["href", "javascript: void(0);", 1, "btn", "btn-light", "login-btn-light"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HeaderComponent_div_0_Template, 75, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function HeaderComponent_Template_header_scroll_1_listener() {
        return ctx.windowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2)(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HeaderComponent_a_4_Template, 3, 0, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HeaderComponent_ul_5_Template, 76, 0, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HeaderComponent_ul_6_Template, 20, 0, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HeaderComponent_ul_7_Template, 19, 0, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HeaderComponent_a_8_Template, 3, 0, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, HeaderComponent_span_9_Template, 4, 2, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6)(11, "div", 7)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_12_listener() {
        return ctx.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "span")(15, "span")(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10)(18, "ul", 11)(19, "li")(20, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li")(23, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li")(26, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li")(29, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li")(32, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 17)(35, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.sliderTopbar == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.navClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.sliderTopbar == true));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.navClass !== "nav-light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shopPages == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.buttonList == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isdeveloper == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.navClass === "nav-light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.buttonList && !ctx.isdeveloper && !ctx.shopPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c1, ctx.isCondensed === true));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.navClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



class ScrollspyDirective {
  // tslint:disable-next-line: variable-name
  constructor(_el, document) {
    this._el = _el;
    this.document = document;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Window scroll method
   */
  onScroll(event) {
    let currentSection;
    const children = this._el.nativeElement.querySelectorAll('section');
    const scrollTop = this.document.documentElement.scrollTop;
    const parentOffset = this.document.documentElement.offsetTop;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
ScrollspyDirective.??fac = function ScrollspyDirective_Factory(t) {
  return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
ScrollspyDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: ScrollspyDirective,
  selectors: [["", "appScrollspy", ""]],
  hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
    }
  },
  inputs: {
    spiedTags: "spiedTags"
  },
  outputs: {
    sectionChange: "sectionChange"
  }
});

/***/ }),

/***/ 2474:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ServicesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r1.description);
  }
}
class ServicesComponent {
  constructor() {}
  ngOnInit() {}
}
ServicesComponent.??fac = function ServicesComponent_Factory(t) {
  return new (t || ServicesComponent)();
};
ServicesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: ServicesComponent,
  selectors: [["app-services"]],
  inputs: {
    servicesData: "servicesData"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "row"], ["class", "col-md-4 col-12 mt-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12", "mt-5"], [1, "features", "features", "text-center"], [1, "image", "position-relative", "d-inline-block"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ServicesComponent_div_1_Template, 9, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.servicesData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 6564);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-logo/clients-logo.component */ 5229);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ 2474);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ 1717);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ 2891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);










class SharedModule {}
SharedModule.??fac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
  type: SharedModule
});
SharedModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](SharedModule, {
    declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent]
  });
})();

/***/ }),

/***/ 2157:
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitcherComponent": () => (/* binding */ SwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Switcher component
 */
class SwitcherComponent {
  constructor() {}
  ngOnInit() {
    // assign value
    this.isVisible = false;
  }
  /**
   * Change theme color
   */
  onChangeColor(color) {
    document.getElementById('color-opt').setAttribute('href', './assets/css/colors/' + color + '.css');
  }
  /**
   * Set dark theme
   */
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set light theme
   */
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Set dark-rtl theme
   */
  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
  }
  /**
   * Set dark-light theme
   */
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set rtl theme
   */
  setRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-rtl.min.css');
  }
  /**
   * Set light theme
   */
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Toggle switcher
   */
  onChangeSwitch() {
    this.isVisible = !this.isVisible;
  }
}
SwitcherComponent.??fac = function SwitcherComponent_Factory(t) {
  return new (t || SwitcherComponent)();
};
SwitcherComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
  type: SwitcherComponent,
  selectors: [["app-switcher"]],
  decls: 47,
  vars: 2,
  consts: [["id", "style-switcher", 1, "bg-light", "border", "p-3", "pt-2", "pb-2", 2, "left", "0px"], [1, "title", "text-center"], [1, "pattern"], [1, "list-inline-item"], ["href", "javascript: void(0);", 1, "color1", 3, "click"], ["href", "javascript: void(0);", 1, "color2", 3, "click"], ["href", "javascript: void(0);", 1, "color3", 3, "click"], ["href", "javascript: void(0);", 1, "color4", 3, "click"], ["href", "javascript: void(0);", 1, "color5", 3, "click"], ["href", "javascript: void(0);", 1, "color6", 3, "click"], ["href", "javascript: void(0);", 1, "color7", 3, "click"], ["href", "javascript: void(0);", 1, "color8", 3, "click"], ["href", "javascript: void(0);", 1, "color9", 3, "click"], [1, "title", "text-center", "pt-3", "mb-0", "border-top"], [1, "text-center", "list-unstyled", "mb-0"], [1, "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "rtl-version", "t-rtl-light", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "ltr-version", "t-ltr-light", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "dark-rtl-version", "t-rtl-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "dark-ltr-version", "t-ltr-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "dark-version", "t-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "light-version", "t-light", "mt-2", 3, "click"], [1, "bottom"], ["href", "javascript: void(0);", 1, "settings", "bg-white", "title-bg-dark", "shadow", "d-block", 3, "click"], [1, "mdi", "mdi-cog", "ms-1", "mdi-24px", "position-absolute", "mdi-spin", "text-primary"]],
  template: function SwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div")(2, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select Your Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_6_listener() {
        return ctx.onChangeColor("default");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 3)(8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_8_listener() {
        return ctx.onChangeColor("green");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 3)(10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_10_listener() {
        return ctx.onChangeColor("purple");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 3)(12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_12_listener() {
        return ctx.onChangeColor("red");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 3)(14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_14_listener() {
        return ctx.onChangeColor("skyblue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 3)(16, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_16_listener() {
        return ctx.onChangeColor("skobleoff");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 3)(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_18_listener() {
        return ctx.onChangeColor("cyan");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 3)(20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_20_listener() {
        return ctx.onChangeColor("slateblue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 3)(22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_22_listener() {
        return ctx.onChangeColor("yellow");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Theme Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 14)(26, "li", 15)(27, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_27_listener() {
        return ctx.setRtl();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "RTL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li", 15)(30, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_30_listener() {
        return ctx.setLtr();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "LTR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 15)(33, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_33_listener() {
        return ctx.darkRtl();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "RTL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 15)(36, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_36_listener() {
        return ctx.darkLtr();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "LTR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 15)(39, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_39_listener() {
        return ctx.setDark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 15)(42, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_42_listener() {
        return ctx.setLight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 22)(45, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwitcherComponent_Template_a_click_45_listener() {
        return ctx.onChangeSwitch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](ctx.isVisible ? "left: 0px" : "left: -189px");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map