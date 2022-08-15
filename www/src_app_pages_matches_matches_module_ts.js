"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_matches_matches_module_ts"],{

/***/ 9283:
/*!*********************************************************!*\
  !*** ./src/app/pages/matches/matches-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageRoutingModule": () => (/* binding */ MatchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page */ 9289);




const routes = [
    {
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_0__.MatchesPage
    }
];
let MatchesPageRoutingModule = class MatchesPageRoutingModule {
};
MatchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatchesPageRoutingModule);



/***/ }),

/***/ 3904:
/*!*************************************************!*\
  !*** ./src/app/pages/matches/matches.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageModule": () => (/* binding */ MatchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches-routing.module */ 9283);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page */ 9289);







let MatchesPageModule = class MatchesPageModule {
};
MatchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchesPageRoutingModule
        ],
        declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_1__.MatchesPage]
    })
], MatchesPageModule);



/***/ }),

/***/ 9289:
/*!***********************************************!*\
  !*** ./src/app/pages/matches/matches.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPage": () => (/* binding */ MatchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page.html?ngResource */ 2541);
/* harmony import */ var _matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page.scss?ngResource */ 6954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9878);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _newmatch_newmatch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newmatch/newmatch.page */ 1642);









let MatchesPage = class MatchesPage {
    constructor(apiService, toastController, modalController) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.selectedClub = null;
        this.clubs = [];
        this.matches = [];
        this.datepickerinput = null;
        this.dataLoaded = false;
    }
    ngOnInit() {
        this.loadSetup();
    }
    loadSetup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedClub = this.apiService.currentUser.selectedClub;
            if (!this.selectedClub) {
                //this.getPossibleClubs()
                this.getPossibleClubs().subscribe((clubs) => {
                    this.clubs = clubs;
                    if (this.clubs.length == 1) {
                        this.setSelectedClub(this.clubs[0]);
                    }
                });
            }
            else {
                this.getAllMatches();
            }
        });
    }
    getAllMatches() {
        this.apiService.getAllMatches(this.selectedClub._id)
            .subscribe(matches => {
            this.matches = matches.filter(match => match.doParticipate !== undefined); // undefined = no participation required, null = no feedback yet
            this.matches.sort((a, b) => {
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
            });
        });
    }
    selectParticipation(match) {
        this.apiService.setParticipationForMatch(match.clubId, match._id, match.doParticipate).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            match.isBlocked = true;
            const answer = res.hasTime ? 'bestätigt' : 'abgelehnt';
            const toast = yield this.toastController.create({
                message: `Teilnahme wurde ${answer}`,
                duration: 2000,
                color: res.hasTime ? 'success' : 'warning'
            });
            toast.present();
            toast.onDidDismiss().then(() => {
                match.isBlocked = false;
            });
        }));
    }
    getPossibleClubs() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.apiService.currentUser.clubs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)((club) => this.apiService.getClubInformation(club.clubId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.toArray)());
    }
    setSelectedClub(club) {
        this.selectedClub = club;
        this.apiService.setSelectedClub(this.selectedClub).then(() => { this.getAllMatches(); });
    }
    resetSelectedClub() {
        this.selectedClub = null;
        this.apiService.removeSelectedClub();
        if (this.clubs.length == 0) {
            this.getPossibleClubs().subscribe((clubs) => { this.clubs = clubs; });
        }
    }
    openNewMatchModal(match) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const newMatch = yield this.modalController.create({
                component: _newmatch_newmatch_page__WEBPACK_IMPORTED_MODULE_3__.NewmatchPage,
                componentProps: {
                    existingMatch: match
                }
            });
            newMatch.onDidDismiss()
                .then((event) => {
                const refreshPage = event['data'];
                if (refreshPage) {
                    this.getAllMatches();
                }
            });
            return yield newMatch.present();
        });
    }
    hasAdminRole() {
        return this.apiService.hasRoleForClub('admin', this.selectedClub._id);
    }
};
MatchesPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
MatchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-matches',
        template: _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesPage);



/***/ }),

/***/ 6954:
/*!************************************************************!*\
  !*** ./src/app/pages/matches/matches.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibWF0Y2hlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 2541:
/*!************************************************************!*\
  !*** ./src/app/pages/matches/matches.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"selectedClub\">{{ selectedClub.name }}</ion-title>\n    <ion-title *ngIf=\"!selectedClub\">Wähle deinen Verein</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab *ngIf=\"selectedClub && hasAdminRole()\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\"\n    style=\"margin: 0 10% 20% 0;\">\n    <ion-fab-button color=\"primary\" (click)=\"openNewMatchModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-row>\n    <ion-col size=\"12\" size-md='6' offset-md='3'>\n      <ion-button type=\"button\" expand=\"block\" fill=\"clear\" (click)=\"resetSelectedClub()\" *ngIf=\"selectedClub\">\n        Ausgewählter\n        Verein ändern\n      </ion-button>\n      <ion-grid *ngIf=\"!selectedClub\">\n        <ion-list *ngFor=\"let club of clubs\">\n          <ion-card button (click)=\"setSelectedClub(club)\">\n            <ion-card-content>\n              {{ club.name }}\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"selectedClub\">\n        <ion-list *ngFor=\"let match of matches\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{ match.isHome ? 'Heimspiel' : 'Auswärtsspiel' }} gegen {{ match.opponent }}\n              </ion-card-subtitle>\n              <ion-row>\n                <ion-card-title>{{ match.startDate | date:'EE, dd.MM.yy' }} </ion-card-title>\n                <ion-button *ngIf=\"hasAdminRole()\" (click)=\"openNewMatchModal(match)\" fill=\"clear\" size=\"small\"\n                  style=\"margin-top: 0%;\">\n                  <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n              </ion-row>\n            </ion-card-header>\n            <div>\n              <ion-item text-wrap>\n                <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n                <ion-label> {{match.startDate | date:\"HH:mm \":\"+0200\"}} Uhr</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n                <ion-label>{{ match.city }}</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n                <ion-label text-wrap>{{match.meetingPoint }}</ion-label>\n              </ion-item>\n            </div>\n            <div>\n              <ion-text class=\"center\"><b>Teilnahme</b></ion-text>\n              <ion-segment [(ngModel)]=\"match.doParticipate\" (ionChange)=\"selectParticipation(match)\" color=\"primary\"\n                scrollable class=\"center\" [disabled]=\"match.isBlocked\">\n                <ion-segment-button value=\"true\">\n                  <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                  <ion-label>Ja</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"false\">\n                  <ion-label>Nein</ion-label>\n                  <ion-icon name=\"close-circle-outline\"></ion-icon>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n            <div>\n            </div>\n          </ion-card>\n        </ion-list>\n\n        <ion-text class=\"center\" *ngIf=\"matches?.length == 0\">Keine bevorstehenden Spiele für {{ selectedClub.name }}\n          gefunden. </ion-text>\n      </ion-grid>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_matches_module_ts.js.map