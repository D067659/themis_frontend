(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkthemis_frontend"] = self["webpackChunkthemis_frontend"] || []).push([["src_app_pages_matches_matches_module_ts"], {
    /***/
    29283: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchesPageRoutingModule": function MatchesPageRoutingModule() {
          return (
            /* binding */
            _MatchesPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _matches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./matches.page */
      49289);

      var routes = [{
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_0__.MatchesPage
      }];

      var _MatchesPageRoutingModule = function MatchesPageRoutingModule() {
        _classCallCheck(this, MatchesPageRoutingModule);
      };

      _MatchesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MatchesPageRoutingModule);
      /***/
    },

    /***/
    73904: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchesPageModule": function MatchesPageModule() {
          return (
            /* binding */
            _MatchesPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./matches-routing.module */
      29283);
      /* harmony import */


      var _matches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./matches.page */
      49289);

      var _MatchesPageModule = function MatchesPageModule() {
        _classCallCheck(this, MatchesPageModule);
      };

      _MatchesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchesPageRoutingModule],
        declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_1__.MatchesPage]
      })], _MatchesPageModule);
      /***/
    },

    /***/
    49289: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchesPage": function MatchesPage() {
          return (
            /* binding */
            _MatchesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_matches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./matches.page.html */
      99638);
      /* harmony import */


      var _matches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./matches.page.scss */
      53582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      5830);

      var _MatchesPage = /*#__PURE__*/function () {
        function MatchesPage(apiService, toastController) {
          _classCallCheck(this, MatchesPage);

          this.apiService = apiService;
          this.toastController = toastController;
          this.selectedClub = null;
          this.clubs = [];
          this.matches = [];
          this.datepickerinput = null;
          this.today = 2021;
        }

        _createClass(MatchesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedClub = this.apiService.currentUser.selectedClub;

            if (!this.selectedClub) {
              this.getPossibleClubs();

              if (this.clubs.length == 1) {
                this.setSelectedClub(this.clubs[0]);
              }
            } else {
              this.getAllMatches();
            }
          }
        }, {
          key: "getPossibleClubs",
          value: function getPossibleClubs() {
            var _this = this;

            var _iterator = _createForOfIteratorHelper(this.apiService.currentUser.clubs),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var club = _step.value;
                this.apiService.getClubInformation(club.clubId).subscribe(function (club) {
                  _this.clubs.push(club);
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "setSelectedClub",
          value: function setSelectedClub(club) {
            this.selectedClub = club;
            this.apiService.currentUser.selectedClub = this.selectedClub;
            this.getAllMatches();
          }
        }, {
          key: "getAllMatches",
          value: function getAllMatches() {
            var _this2 = this;

            this.apiService.getAllMatches(this.selectedClub._id).subscribe(function (matches) {
              // Check for users participation for each match
              matches.forEach(function (match) {
                _this2.apiService.getParticipationForMatch(match.clubId, match._id).subscribe(function (participation) {
                  match.doParticipate = participation === null || participation === void 0 ? void 0 : participation.hasTime;
                });
              });
              _this2.matches = matches;
            });
          }
        }, {
          key: "toggleParticipation",
          value: function toggleParticipation(match) {
            match.doParticipate = false;
          }
        }, {
          key: "selectParticipation",
          value: function selectParticipation(match) {
            var _this3 = this;

            this.apiService.setParticipationForMatch(match.clubId, match._id, match.doParticipate).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var answer, toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        match.isBlocked = true;
                        answer = res.hasTime ? 'bestätigt' : 'abgelehnt';
                        _context.next = 4;
                        return this.toastController.create({
                          message: "Teilnahme wurde ".concat(answer),
                          duration: 2000,
                          color: res.hasTime ? 'success' : 'danger'
                        });

                      case 4:
                        toast = _context.sent;
                        toast.present();
                        toast.onDidDismiss().then(function () {
                          match.isBlocked = false;
                        });

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "resetSelectedClub",
          value: function resetSelectedClub() {
            this.selectedClub = null;
            this.matches = null;
          }
        }, {
          key: "test",
          value: function test() {
            console.log(this.datepickerinput);
          }
        }]);

        return MatchesPage;
      }();

      _MatchesPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }];
      };

      _MatchesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-matches',
        template: _raw_loader_matches_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_matches_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MatchesPage);
      /***/
    },

    /***/
    53582: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoibWF0Y2hlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    99638: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"selectedClub\">{{ selectedClub.name }}</ion-title>\n    <ion-title *ngIf=\"!selectedClub\">Wähle deinen Verein</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" size-md='6' offset-md='3'>\n      <ion-button type=\"button\" expand=\"block\" fill=\"clear\" (click)=\"resetSelectedClub()\" *ngIf=\"selectedClub\">\n        Ausgewählter\n        Verein ändern\n      </ion-button>\n      <ion-grid *ngIf=\"!selectedClub\">\n        <ion-list *ngFor=\"let club of clubs\">\n          <ion-card button (click)=\"setSelectedClub(club)\">\n            <ion-card-content>\n              {{ club.name }}\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"selectedClub\">\n        <ion-list *ngFor=\"let match of matches\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{ match.isHome ? 'Heimspiel' : 'Auswärtsspiel' }} gegen {{ match.opponent }}\n              </ion-card-subtitle>\n              <ion-card-title>{{ match.startDate | date:'EE, dd.MM.yy' }}</ion-card-title>\n            </ion-card-header>\n            <div>\n              <ion-item text-wrap>\n                <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n                <ion-label> {{match.startDate | date:\"HH:mm \":\"+0000\"}} Uhr</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n                <ion-label>{{ match.city }}</ion-label>\n              </ion-item>\n              <ion-item text-wrap>\n                <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n                <ion-label text-wrap>{{match.meetingPoint }}</ion-label>\n              </ion-item>\n            </div>\n            <div>\n              <p style=\"text-align: center;\"><b>Teilnahme</b></p>\n              <ion-segment [(ngModel)]=\"match.doParticipate\" (ngModelChange)=\"selectParticipation(match)\"\n                color=\"primary\" scrollable class=\"center\" [disabled]=\"match.isBlocked\">\n                <ion-segment-button value=\"true\">\n                  <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                  <ion-label>Ja</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"false\">\n                  <ion-label>Nein</ion-label>\n                  <ion-icon name=\"close-circle-outline\"></ion-icon>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n            <div>\n            </div>\n          </ion-card>\n\n        </ion-list>\n        <ion-text class=\"center\" *ngIf=\"matches?.length == 0\">Keine bevorstehenden Spiele für {{ selectedClub.name }}\n          gefunden. </ion-text>\n      </ion-grid>\n\n      <ion-item>\n        <ion-label>Datum</ion-label>\n        <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"2021\" max=\"2023\" placeholder=\"Datum wählen\"\n          (ionChange)=\"test()\" [(ngModel)]=\"datepickerinput\">\n        </ion-datetime>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_matches_matches_module_ts-es5.js.map