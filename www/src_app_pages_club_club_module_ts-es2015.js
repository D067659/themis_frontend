(self["webpackChunkthemis_frontend"] = self["webpackChunkthemis_frontend"] || []).push([["src_app_pages_club_club_module_ts"],{

/***/ 33494:
/*!***************************************************!*\
  !*** ./src/app/pages/club/club-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPageRoutingModule": function() { return /* binding */ ClubPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _club_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club.page */ 70722);




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

/***/ 67671:
/*!*******************************************!*\
  !*** ./src/app/pages/club/club.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPageModule": function() { return /* binding */ ClubPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _club_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-routing.module */ 33494);
/* harmony import */ var _club_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.page */ 70722);







let ClubPageModule = class ClubPageModule {
};
ClubPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _club_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClubPageRoutingModule
        ],
        declarations: [_club_page__WEBPACK_IMPORTED_MODULE_1__.ClubPage]
    })
], ClubPageModule);



/***/ }),

/***/ 70722:
/*!*****************************************!*\
  !*** ./src/app/pages/club/club.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubPage": function() { return /* binding */ ClubPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_club_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./club.page.html */ 87216);
/* harmony import */ var _club_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.page.scss */ 64764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);





let ClubPage = class ClubPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.clubs = [];
    }
    ngOnInit() {
        for (const club of this.apiService.currentUser.clubs) {
            this.apiService.getClubInformation(club.clubId).subscribe((res) => {
                this.clubs.push(res);
            });
        }
    }
};
ClubPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ClubPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-club',
        template: _raw_loader_club_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_club_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClubPage);



/***/ }),

/***/ 64764:
/*!*******************************************!*\
  !*** ./src/app/pages/club/club.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbHViLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 87216:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/club/club.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"clubs.length < 2\">Dein Verein</ion-title>\n    <ion-title *ngIf=\"clubs.length >= 2\">Deine Vereine</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid>\n    <ion-list *ngFor=\"let club of clubs\">\n      <ion-row>\n        <ion-col size=\"12\" size-md='6' offset-md='3'>\n          <ion-card>\n            <ion-card-content>\n              {{ club.name }}\n              {{ club.invitationCode }}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_club_club_module_ts-es2015.js.map