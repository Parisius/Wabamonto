webpackJsonp([18],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAddPageModule", function() { return CarAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_add__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarAddPageModule = /** @class */ (function () {
    function CarAddPageModule() {
    }
    CarAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_add__["a" /* CarAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_add__["a" /* CarAddPage */]),
            ],
        })
    ], CarAddPageModule);
    return CarAddPageModule;
}());

//# sourceMappingURL=car-add.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarAddPage; });
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
 * Generated class for the CarAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarAddPage = /** @class */ (function () {
    function CarAddPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarAddPage');
    };
    CarAddPage.prototype.goBack = function () {
        this.app.getRootNav().push('TabsPage');
    };
    CarAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-add',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\car-add\car-add.html"*/'<ion-header cler>\n    <ion-navbar no-border-bottom>\n        <ion-buttons >\n            <button ion-button icon-only (click)="goBack()">\n                <ion-icon name="undo2"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  >\n\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n\n<div  style="text-align:left; font-size:20px;" >\n                    <p style="color:#000000;">\n                    Ajouter une voiture\n                    </p>\n</div>\n<div>\n  <form id="information-form4">\n  <ion-list>\n    <ion-item class="proposer">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Modèle" name="model"></ion-input>\n    </ion-item>\n\n    <div class="spacer" style="height:10;" id="information-spacer13"></div>\n    <ion-item class="proposer">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Numéro d\'immatriculation" name="imma"></ion-input>\n    </ion-item>\n\n    <div class="spacer" style="height:10;" id="information-spacer14"></div>\n\n    </ion-list>\n  </form>\n  <button id="trajet-button16" style="font-size:18px;border-radius:5px 5px 5px 5px;"  large ion-button color="CTA" block >\n    Ajouter une voiture\n  </button>\n  \n</div>\n               \n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\car-add\car-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CarAddPage);
    return CarAddPage;
}());

//# sourceMappingURL=car-add.js.map

/***/ })

});
//# sourceMappingURL=18.js.map