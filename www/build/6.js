webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservation__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */]),
            ],
        })
    ], TestPageModule);
    return TestPageModule;
}());

//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationPage = /** @class */ (function () {
    function ReservationPage(app, navCtrl, navParams, toastCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Sessions have been updated.',
                duration: 3000
            });
            toast.present();
        }, 1000);
    };
    ReservationPage.prototype.goToProposerT = function () {
        this.navCtrl = this.app.getRootNav();
        this.navCtrl.setRoot('ProposertrPage');
    };
    ReservationPage.prototype.goToSearchT = function () {
        this.navCtrl = this.app.getRootNav();
        this.navCtrl.setRoot('SearchtPage');
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\reservation\reservation.html"*/'<!--\n  Generated template for the ReservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header cler>\n\n    <ion-navbar no-border-bottom>\n        <ion-buttons >\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu" ></ion-icon>\n            </button>\n        </ion-buttons>\n      <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="search" color="dark"></ion-icon>\n          </button>\n      </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding  style="background-color:#019996;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <br><br><br><br><br><br>\n    <ion-grid>\n        <ion-row>\n          <ion-col text-center>\n    <div>\n      <h4 id="trajet-heading4" style="color:#FFFFFF;font-weight:300;text-align:center;">Vous n\'avez encore réservé pour aucun trajet</h4>\n      <br>\n      <button id="trajet-button16" style="font-size:18px;border-radius:5px 5px 5px 5px;"  large ion-button color="CTA" block (click)="goToProposerT()">\n        Proposer un trajet\n      </button>\n      <div class="spacer" style="height:10px;" id="trajet-spacer31"></div>\n      <button id="trajet-button17" large ion-button color="cler" block style="color:#F67300;font-size:18px;border-radius:5px 5px 5px 5px;" (click)="goToSearchT()">\n        Rechercher un trajet\n      </button>\n    </div>\n  </ion-col >\n</ion-row>\n</ion-grid>\n\n    <ion-fab bottom right #fab>\n      <button ion-fab color="cler" outline style=" border: 1px solid #F67300">\n        <ion-icon name="plus" color="CTA" (click)="goToProposerT()" ></ion-icon></button>\n      <!-- <ion-fab-list side="top">\n        <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n        <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n      </ion-fab-list> -->\n    </ion-fab>\n  \n  \n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\reservation\reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ })

});
//# sourceMappingURL=6.js.map