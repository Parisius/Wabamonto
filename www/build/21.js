webpackJsonp([21],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAmPageModule", function() { return AccountAmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_am__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountAmPageModule = /** @class */ (function () {
    function AccountAmPageModule() {
    }
    AccountAmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_am__["a" /* AccountAmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_am__["a" /* AccountAmPage */]),
            ],
        })
    ], AccountAmPageModule);
    return AccountAmPageModule;
}());

//# sourceMappingURL=account-am.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountAmPage; });
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
 * Generated class for the AccountAmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountAmPage = /** @class */ (function () {
    function AccountAmPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountAmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountAmPage');
    };
    AccountAmPage.prototype.goBack = function () {
        this.app.getRootNav().push('TabsPage');
    };
    AccountAmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-am',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\account-am\account-am.html"*/'<ion-header cler>\n    <ion-navbar no-border-bottom>\n        <ion-buttons >\n            <button ion-button icon-only (click)="goBack()">\n                <ion-icon name="undo2"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<br><br><br>\n<div  style="text-align:left;" >\n    <h4 style="color:#000000; font-size:25px;">Crédit actuel: 43200 FCFA</h4>\n</div>\n\n<br><br>\n<div  style="text-align:left;" >\n        <h4 style="color:#000000; font-size:16px;">Rajouter des fonds</h4>\n</div>\n    \n        <ion-col> \n            <img src="assets/imgs/mtn.jpg" style="width : 30% ; height : 15%" ng-click="nextpage()" >\n        </ion-col>\n\n        <ion-col >\n           <img src="assets/imgs/moov.png" style="width :24% ; height : 15%" ng-click="nextpage()" >\n        </ion-col>\n\n        <ion-col >\n            <img src="assets/imgs/PayPal.png" style="width : 30% ; height : 12%" ng-click="nextpage()" >\n        </ion-col>\n\n        <br><br><br><br>\n <div  style="text-align:left;" >\n        <h4 style="color:#000000; font-size:16px;">Retirer des fonds</h4>\n</div>\n    \n        <ion-col> \n            <img src="assets/imgs/mtn.jpg" style="width : 30% ; height : 15%" ng-click="nextpage()" >\n        </ion-col>\n\n        <ion-col >\n           <img src="assets/imgs/moov.png" style="width :24% ; height : 15%" ng-click="nextpage()" >\n        </ion-col>\n\n        <ion-col >\n            <img src="assets/imgs/PayPal.png" style="width : 30% ; height : 12%" ng-click="nextpage()" >\n        </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\account-am\account-am.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
    ], AccountAmPage);
    return AccountAmPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=account-am.js.map

/***/ })

});
//# sourceMappingURL=21.js.map