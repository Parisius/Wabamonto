webpackJsonp([3],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(313);
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
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TestPageModule);
    return TestPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


/* import { TrajetPage } from '../trajet/trajet';
import { ReservationPage } from '../reservation/reservation';
import { DiscussionPage } from '../discussion/discussion';
import { NotificationPage } from '../notification/notification';
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'TrajetPage';
        this.tab2Root = 'ReservationPage';
        this.tab3Root = 'DiscussionPage';
        this.tab4Root = 'NotificationPage';
        /* tab5Root = 'InformationsPage';
        tab6Root = 'InfoChangePage';
        tab7Root = 'CarAddPage';
        tab8Root = 'AccountAmPage'; */
        this.myIndex = 0;
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex] =  "myIndex">\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="road" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="briefcase"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="mail2"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="bell"></ion-tab>*\n</ion-tabs>\n\n<!-- <ion-tabs [selectedIndex] =  "myNIndex">\n\n    <ion-tab [root]="tab5Root" tabTitle="" tabIcon="user" ></ion-tab>\n    <ion-tab [root]="tab6Root" tabTitle="" tabIcon="key2"></ion-tab>\n    <ion-tab [root]="tab7Root" tabTitle="" tabIcon="automobile"></ion-tab>\n    <ion-tab [root]="tab8Root" tabTitle="" tabIcon="coin-dollar"></ion-tab>\n  \n</ion-tabs>\n    -->\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=3.js.map