"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_club_club_module_ts"],{

/***/ 3494:
/*!***************************************************!*\
  !*** ./src/app/pages/club/club-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPageRoutingModule": () => (/* binding */ ClubPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _club_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club.page */ 722);




const routes = [
    {
        path: '',
        component: _club_page__WEBPACK_IMPORTED_MODULE_0__.ClubPage
    }
];
let ClubPageRoutingModule = class ClubPageRoutingModule {
};
ClubPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClubPageRoutingModule);



/***/ }),

/***/ 7671:
/*!*******************************************!*\
  !*** ./src/app/pages/club/club.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPageModule": () => (/* binding */ ClubPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _club_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-routing.module */ 3494);
/* harmony import */ var _club_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.page */ 722);







let ClubPageModule = class ClubPageModule {
};
ClubPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _club_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClubPageRoutingModule
        ],
        declarations: [_club_page__WEBPACK_IMPORTED_MODULE_1__.ClubPage]
    })
], ClubPageModule);



/***/ }),

/***/ 722:
/*!*****************************************!*\
  !*** ./src/app/pages/club/club.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPage": () => (/* binding */ ClubPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _club_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club.page.html?ngResource */ 5298);
/* harmony import */ var _club_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.page.scss?ngResource */ 4627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9878);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);










let ClubPage = class ClubPage {
    constructor(apiService, alertController, platform, modalController, formBuilder, toastController) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.platform = platform;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.selectedClub = null;
        this.clubs = [];
        this.players = [];
        this.playerAlreadyInClub = false;
    }
    ngOnInit() {
        this.loadSetup();
        this.loadNewPlayerForm();
    }
    loadSetup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedClub = this.apiService.currentUser.selectedClub;
            if (!this.selectedClub) {
                this.getPossibleClubs().subscribe((clubs) => {
                    this.clubs = clubs;
                    console.log('possible clubs: ', this.clubs);
                    if (this.clubs.length < 2) {
                        this.setSelectedClub(this.clubs[0]);
                    }
                });
            }
            else {
                this.getPlayersForClub();
            }
        });
    }
    getPossibleClubs() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.apiService.currentUser.clubs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)((club) => this.apiService.getClubInformation(club.clubId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.toArray)());
    }
    setSelectedClub(club) {
        this.selectedClub = club;
        this.apiService.setSelectedClub(this.selectedClub).then(() => { this.getPlayersForClub(); });
    }
    resetSelectedClub() {
        this.selectedClub = null;
        this.apiService.removeSelectedClub();
        if (this.clubs.length == 0) {
            this.getPossibleClubs().subscribe((clubs) => { this.clubs = clubs; });
        }
    }
    getPlayersForClub() {
        // Get all possible players for selected club
        this.apiService.getPlayersForClub(this.apiService.currentUser.selectedClub._id).subscribe((players) => {
            this.players = players;
        });
    }
    checkForDuplicatedPlayer() {
        const emailCheck = this.newPlayerForm.get('email').value;
        this.playerAlreadyInClub = this.players.some((player) => player.email == emailCheck);
        if (this.playerAlreadyInClub) {
            this.newPlayerForm.get('email').setErrors(({ 'duplicate': true }));
        }
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.newPlayerForm.controls["clubName"].setValue(this.selectedClub.name);
            this.apiService.addPlayerToClub(this.selectedClub._id, this.newPlayerForm.value).subscribe((x) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield this.presentToast();
                yield this.dismissModal();
            }));
        });
    }
    promtForDeletion(player) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Löschen bestätigen!',
                message: `Bitte bestätigen, dass Sie ${player.name} aus dem Verein entfernen möchten.`,
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Bestätigen',
                        cssClass: 'danger',
                        handler: () => {
                            this.removePlayerFromClub(player);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    removePlayerFromClub(player) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.removePlayerFromClub(this.apiService.currentUser.selectedClub._id, player._id).subscribe(() => {
                this.players = this.players.filter(remainingPlayers => remainingPlayers._id !== player._id);
            });
            ;
        });
    }
    hasAdminRole() {
        return this.apiService.hasRoleForClub('admin', this.selectedClub._id);
    }
    isDesktop() {
        return this.platform.is('desktop');
    }
    entryIsMe(player) {
        return player._id == this.apiService.currentUser._id;
    }
    loadNewPlayerForm() {
        this.newPlayerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            // isAdmin: [''] TODO: Maybe we can define admins right on creation, currently it is desired to have this as additional step (like deleting via swipe)
            clubName: []
        });
    }
    get name() {
        return this.newPlayerForm.get('name');
    }
    get email() {
        return this.newPlayerForm.get('email');
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Aktivierungslink erfolgreich versandt',
                duration: 2000
            });
            toast.present();
        });
    }
};
ClubPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ClubPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-club',
        template: _club_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_club_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClubPage);



/***/ }),

/***/ 4627:
/*!******************************************************!*\
  !*** ./src/app/pages/club/club.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbHViLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5298:
/*!******************************************************!*\
  !*** ./src/app/pages/club/club.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"selectedClub\">{{ selectedClub.name }}</ion-title>\n    <ion-title *ngIf=\"!selectedClub\">Wähle deinen Verein</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\" size-md='6' offset-md='3'>\n      <ion-button type=\"button\" expand=\"block\" fill=\"clear\" (click)=\"resetSelectedClub()\" *ngIf=\"selectedClub\">\n        Ausgewählter\n        Verein ändern\n      </ion-button>\n      <ion-grid *ngIf=\"!selectedClub\">\n        <ion-list *ngFor=\"let club of clubs\">\n          <ion-card button (click)=\"setSelectedClub(club)\">\n            <ion-card-content>\n              {{ club.name }}\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-grid>\n\n      <div *ngIf=\"selectedClub\">\n        <ion-list *ngFor=\"let player of players\">\n          <ion-item-sliding>\n            <ion-item>\n              <ion-button *ngIf=\"hasAdminRole() && isDesktop()\" slot=\"end\" color=\"danger\" size=\"medium\"\n                (click)=\"promtForDeletion(player)\" [disabled]=\"entryIsMe(player)\">\n                <ion-icon name=\"person-remove-sharp\"></ion-icon>\n              </ion-button>\n              <ion-label>\n                <h2>{{ player.name }}</h2>\n                <h3> {{ player.email }}</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\" *ngIf=\"hasAdminRole() && !isDesktop()\">\n              <ion-item-option (click)=\"promtForDeletion(player)\" [disabled]=\"entryIsMe(player)\" color=\"danger\">\n                <ion-icon name=\"person-remove-sharp\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-footer *ngIf=\"selectedClub && hasAdminRole()\">\n    <ion-button expand=\"full\" id=\"openModal\" color=\"primary\">\n      Spieler hinzufügen\n    </ion-button>\n\n    <ion-modal trigger=\"openModal\" [initialBreakpoint]=\"0.7\" [breakpoints]=\"[0, 0.7, 1]\">\n      <ng-template>\n        <ion-header class=\"ion-no-border\">\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"dismissModal()\">Close</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content no-padding>\n\n          <ion-label style=\"margin-top: 5%; text-align: center;\">Füge einen Spieler zu {{ selectedClub.name }} hinzu.\n          </ion-label>\n\n          <form [formGroup]=\"newPlayerForm\" (ngSubmit)=\"submitForm()\">\n            <ion-card>\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Spielername</ion-label>\n                <ion-input formControlName=\"name\" type=\"text\"> </ion-input>\n                <ion-note slot=\"error\" *ngIf=\"(name.dirty || name.touched) && name.errors\">Ungültiger Name\n                </ion-note>\n              </ion-item>\n\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">E-Mail</ion-label>\n                <ion-input formControlName=\"email\" type=\"text\" (ionBlur)=\"checkForDuplicatedPlayer()\"></ion-input>\n                <ion-note slot=\"helper\">Der Spieler bekommt einen Aktivierungslink an diese E-Mail-Adresse geschickt\n                </ion-note>\n                <!-- <ion-note slot=\"error\" *ngIf=\"emails?.errors?.duplicate\">\n                  Dieser Spieler existiert bereits im Verein\n                </ion-note> -->\n                <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email?.errors?.required\">\n                  Ungültige E-Mail-Adresse\n                </ion-note>\n                <ion-note slot=\"error\" *ngIf=\"(email.dirty || email.touched) && email?.errors?.duplicate\">\n                  Dieser Spieler existiert bereits im Verein\n                </ion-note>\n              </ion-item>\n\n              <!-- <ion-item lines=\"full\">\n                <ion-label>Als Admin hinzufügen</ion-label>\n                <ion-checkbox color=\"primary\" formControlName=\"isAdmin\"></ion-checkbox>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col>\n                  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"!newPlayerForm.valid\">\n                    Code versenden</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n\n          </form>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </ion-footer>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_club_club_module_ts.js.map