webpackJsonp([6],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposerTPageModule", function() { return ProposerTPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposer_t__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProposerTPageModule = /** @class */ (function () {
    function ProposerTPageModule() {
    }
    ProposerTPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proposer_t__["a" /* ProposerTPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proposer_t__["a" /* ProposerTPage */]),
            ],
        })
    ], ProposerTPageModule);
    return ProposerTPageModule;
}());

//# sourceMappingURL=proposer-t.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the ProposerTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProposerTPage = /** @class */ (function () {
    function ProposerTPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProposerTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProposerTPage');
    };
    ProposerTPage.prototype.goBack = function () {
        this.navCtrl.setRoot('TrajetPage');
    };
    ProposerTPage.prototype.goToProposerT = function () {
        this.navCtrl.setRoot('ProposerTPage');
    };
    ProposerTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proposer-t',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposer-t\proposer-t.html"*/'\n<ion-header cler>\n\n  <ion-navbar no-border-bottom>\n      <ion-buttons >\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="undo2" ></ion-icon>\n          </button>\n      </ion-buttons>\n    \n</ion-navbar>\n\n</ion-header>\n\n<ion-content class="map-page" padding>\n  <div style="height: 40%; width: 100%" #mapCanvas id="map_canvas"></div> \n   <div ion-col text-center>\n    <form id="information-form4">\n    <ion-list>\n      <ion-item id="information-input9">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Etapes" name="step"></ion-input>\n      </ion-item>\n      <br>\n      <div class="spacer" style="height:10;" id="information-spacer13"></div>\n      <ion-item id="information-input10">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Nombre de places" name="places"></ion-input>\n      </ion-item>\n      <br>\n      <div class="spacer" style="height:10;" id="information-spacer14"></div>\n      <ion-item id="information-input10">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Prix de la place" name="cost"></ion-input>\n      </ion-item>\n      <br>\n      <div class="spacer" style="height:10;" id="information-spacer15"></div>\n      \n      <br>\n      </ion-list>\n    </form>\n    <button id="trajet-button16" style="font-size:18px;border-radius:5px 5px 5px 5px;"  large ion-button color="CTA" block (click)="goToProposerT()">\n      Proposer un trajet\n    </button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposer-t\proposer-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProposerTPage);
    return ProposerTPage;
}());

//# sourceMappingURL=proposer-t.js.map

/***/ })

});
//# sourceMappingURL=6.js.map