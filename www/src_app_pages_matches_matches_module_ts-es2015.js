(self["webpackChunkthemis_frontend"] = self["webpackChunkthemis_frontend"] || []).push([["src_app_pages_matches_matches_module_ts"],{

/***/ 29283:
/*!*********************************************************!*\
  !*** ./src/app/pages/matches/matches-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageRoutingModule": function() { return /* binding */ MatchesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page */ 49289);




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

/***/ 73904:
/*!*************************************************!*\
  !*** ./src/app/pages/matches/matches.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageModule": function() { return /* binding */ MatchesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches-routing.module */ 29283);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page */ 49289);







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

/***/ 49289:
/*!***********************************************!*\
  !*** ./src/app/pages/matches/matches.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPage": function() { return /* binding */ MatchesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_matches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./matches.page.html */ 99638);
/* harmony import */ var _matches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page.scss */ 53582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);






let MatchesPage = class MatchesPage {
    constructor(apiService, toastController) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.selectedClub = null;
        this.clubs = [];
        this.matches = [];
        this.datepickerinput = null;
        this.today = 2021;
    }
    ngOnInit() {
        this.selectedClub = this.apiService.currentUser.selectedClub;
        if (!this.selectedClub) {
            this.getPossibleClubs();
            if (this.clubs.length == 1) {
                this.setSelectedClub(this.clubs[0]);
            }
        }
        else {
            this.getAllMatches();
        }
    }
    getPossibleClubs() {
        for (const club of this.apiService.currentUser.clubs) {
            this.apiService.getClubInformation(club.clubId).subscribe((club) => {
                this.clubs.push(club);
            });
        }
    }
    setSelectedClub(club) {
        this.selectedClub = club;
        this.apiService.currentUser.selectedClub = this.selectedClub;
        this.getAllMatches();
    }
    getAllMatches() {
        this.apiService.getAllMatches(this.selectedClub._id).subscribe((matches) => {
            // Check for users participation for each match
            matches.forEach(match => {
                this.apiService.getParticipationForMatch(match.clubId, match._id).subscribe((participation) => {
                    match.doParticipate = participation === null || participation === void 0 ? void 0 : participation.hasTime;
                });
            });
            this.matches = matches;
        });
    }
    toggleParticipation(match) {
        match.doParticipate = false;
    }
    selectParticipation(match) {
        this.apiService.setParticipationForMatch(match.clubId, match._id, match.doParticipate).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            match.isBlocked = true;
            const answer = res.hasTime ? 'bestätigt' : 'abgelehnt';
            const toast = yield this.toastController.create({
                message: `Teilnahme wurde ${answer}`,
                duration: 2000,
                color: res.hasTime ? 'success' : 'danger'
            });
            toast.present();
            toast.onDidDismiss().then(() => {
                match.isBlocked = false;
            });
        }));
    }
    resetSelectedClub() {
        this.selectedClub = null;
        this.matches = null;
    }
    test() {
        console.log(this.datepickerinput);
    }
};
MatchesPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
MatchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-matches',
        template: _raw_loader_matches_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_matches_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MatchesPage);



/***/ }),

/***/ 53582:
/*!*************************************************!*\
  !*** ./src/app/pages/matches/matches.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibWF0Y2hlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ 99638:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/matches/matches.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"selectedClub\">{{ selectedClub.name }}</ion-title>\n    <ion-title *ngIf=\"!selectedClub\">Wähle deinen Verein</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" size-md='6' offset-md='3'>\n      <ion-button type=\"button\" expand=\"block\" fill=\"clear\" (click)=\"resetSelectedClub()\" *ngIf=\"selectedClub\">\n        Ausgewählter\n        Verein ändern\n      </ion-button>\n      <ion-grid *ngIf=\"!selectedClub\">\n        <ion-list *ngFor=\"let club of clubs\">\n          <ion-card button (click)=\"setSelectedClub(club)\">\n            <ion-card-content>\n              {{ club.name }}\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"selectedClub\">\n        <ion-list *ngFor=\"let match of matches\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{ match.isHome ? 'Heimspiel' : 'Auswärtsspiel' }} gegen {{ match.opponent }}\n              </ion-card-subtitle>\n              <ion-card-title>{{ match.startDate | date:'EE, dd.MM.yy' }}</ion-card-title>\n            </ion-card-header>\n            <div>\n              <ion-item text-wrap>\n                <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n                <ion-label> {{match.startDate | date:\"HH:mm \":\"+0000\"}} Uhr</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n                <ion-label>{{ match.city }}</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n                <ion-label text-wrap>{{match.meetingPoint }}</ion-label>\n              </ion-item>\n            </div>\n            <div>\n              <p style=\"text-align: center;\"><b>Teilnahme</b></p>\n              <ion-segment [(ngModel)]=\"match.doParticipate\" (ngModelChange)=\"selectParticipation(match)\"\n                color=\"primary\" scrollable class=\"center\" [disabled]=\"match.isBlocked\">\n                <ion-segment-button value=\"true\">\n                  <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                  <ion-label>Ja</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"false\">\n                  <ion-label>Nein</ion-label>\n                  <ion-icon name=\"close-circle-outline\"></ion-icon>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n            <div>\n            </div>\n          </ion-card>\n\n        </ion-list>\n        <ion-text class=\"center\" *ngIf=\"matches?.length == 0\">Keine bevorstehenden Spiele für {{ selectedClub.name }}\n          gefunden. </ion-text>\n      </ion-grid>\n\n      <ion-item>\n        <ion-label>Datum</ion-label>\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2023\" placeholder=\"Datum wählen\"\n          (ionChange)=\"test()\" [(ngModel)]=\"datepickerinput\">\n        </ion-datetime>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_matches_matches_module_ts-es2015.js.map