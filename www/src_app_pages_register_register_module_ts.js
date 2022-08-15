"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _login_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);








let RegisterPage = class RegisterPage {
    constructor(fb, authService, alertController, router, activatedRoute, loadingController, menu) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.menu = menu;
        this.loginUrl = '/home';
        this.isExistingUser = true;
    }
    ionViewWillEnter() {
        this.menu.enable(false);
        this.menu.get().then((menu) => {
            menu.swipeGesture = false;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.credentials = this.fb.group({
                email: [this.activatedRoute.snapshot.queryParamMap.get('email') || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
                confirmationCode: [this.activatedRoute.snapshot.queryParamMap.get('confirmationCode'), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                clubId: [this.activatedRoute.snapshot.queryParamMap.get('club'), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
            });
            if (this.credentials.get('clubId').value || this.credentials.get('confirmationCode').value) {
                this.checkPlayerData(); //this.register()
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Daten fehlen',
                    message: '<center>Um dich einem Verein zuzuordnen, brauchen wir den Registrierungscode. Folge der Bestätigungsmail in deinem E-Mail Postfach um das automatisch zu vervollständigen.</center>',
                    buttons: ['OK'],
                });
                yield alert.present();
            }
        });
    }
    checkPlayerData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.checkPlayerData(this.credentials.value).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (user.email && user.name && user.clubs.length >= 1) {
                    yield loading.dismiss();
                    return this.register();
                }
                else {
                    yield loading.dismiss();
                    this.promtForRegistration();
                }
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Registrierung fehlgeschlagen',
                    message: res.error.msg.message,
                    buttons: [{
                            text: 'Zum Login',
                            handler: () => { this.navToLogin(); }
                        }],
                });
                yield alert.present();
            }));
        });
    }
    promtForRegistration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Registrierung abschliessen',
                message: '</center>Fast fertig! Um deinen Benutzeraccount zu vervollständigen brauchen wir noch ein paar Informationen. Bitte fülle diese aus.</center>',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.register(this.credentials.value).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (user.email && user.name && user.clubs.length >= 1) {
                    const alert = yield this.alertController.create({
                        header: 'Neuer Verein hinzugefügt!',
                        message: 'Du wurdest erfolgreich zu deinem neuen Verein hinzugefügt.',
                        buttons: [{
                                text: 'Zum Login',
                                handler: () => { this.router.navigateByUrl(this.loginUrl, { replaceUrl: true }); }
                            }],
                    });
                    yield alert.present();
                }
                else {
                    this.isExistingUser = false;
                }
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Registrierung fehlgeschlagen',
                    message: res.error.msg.message,
                    buttons: [{
                            text: 'Zum Login',
                            handler: () => { this.navToLogin(); }
                        }],
                });
                yield alert.present();
            }));
        });
    }
    navToLogin() {
        this.router.navigateByUrl('/login', { replaceUrl: true });
    }
    // Easy access for form fields
    get email() {
        return this.credentials.get('email');
    }
    get name() {
        return this.credentials.get('name');
    }
    get password() {
        return this.credentials.get('password');
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div *ngIf=\"!isExistingUser\" class=\"error\">\n    <ion-icon class=\"icon\" name=\"information-circle-outline\"></ion-icon>\n    <i class=\"text\">Um die Registrierung erfolgreich abzuschliessen benötigen wir noch einen Benutzeraccount.<br>\n      Bitte unten registrieren.</i>\n  </div>\n\n  <div class=\"login-section ion-padding\">\n    <div class=\"heading ion-padding\">\n      <h1>Erstelle einen Account!</h1>\n    </div>\n\n    <form (ngSubmit)=\"register()\" [formGroup]=\"credentials\">\n\n      <div class=\"login-form ion-padding\">\n        <div class=\"form-input\">\n          <ion-icon name=\"mail-outline\"> </ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">E-Mail</ion-label>\n            <ion-input type=\"text\" placeholder=\"E-Mail\" formControlName=\"email\" readonly></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email.errors\">Ungültige E-Mail-Adresse\n            </ion-note>\n          </ion-item>\n        </div>\n\n        <div class=\"form-input\">\n          <ion-icon name=\"person-outline\"> </ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">Vor- und Zuname</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(name.dirty || name.touched) && name.errors\">Mindestens 5 Zeichen\n            </ion-note>\n          </ion-item>\n        </div>\n\n        <div class=\"form-input\">\n          <ion-icon name=\"lock-closed-outline\"> </ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">Passwort</ion-label>\n            <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Mindestens 6 Zeichen\n            </ion-note>\n          </ion-item>\n        </div>\n\n        <div class=\"form-input\">\n          <ion-icon name=\"lock-closed-outline\"> </ion-icon>\n          <ion-item>\n            <ion-label position=\"floating\">Passwort wiederholen</ion-label>\n            <ion-input type=\"password\" placeholder=\"Password wiederholen\" formControlName=\"password\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"(password.dirty || password.touched) && password.errors\">Mindestens 6 Zeichen\n            </ion-note>\n          </ion-item>\n        </div>\n      </div>\n\n      <div class=\"action-buttons ion-padding\">\n        <ion-button type=\"submit\" expand=\"large\" class=\"login-button\" [disabled]=\"!credentials.valid\">Registrieren\n        </ion-button>\n\n        <ion-button type=\"button\" expand=\"large\" color=\"light\" fill=\"clear\" (click)=\"navToLogin()\">\n          <p><u>Zurück zum\n              Login</u></p>\n        </ion-button>\n      </div>\n\n      <!-- <ion-button type=\"button\" expand=\"block\" color=\"tertiary\">\n        <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n        Mit meinem Google Account registrieren\n      </ion-button> -->\n    </form>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map