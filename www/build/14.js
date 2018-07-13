webpackJsonp([14],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoChangePageModule", function() { return InfoChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_change__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoChangePageModule = /** @class */ (function () {
    function InfoChangePageModule() {
    }
    InfoChangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_change__["a" /* InfoChangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_change__["a" /* InfoChangePage */]),
            ],
        })
    ], InfoChangePageModule);
    return InfoChangePageModule;
}());

//# sourceMappingURL=info-change.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoChangePage; });
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
 * Generated class for the InfoChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoChangePage = /** @class */ (function () {
    function InfoChangePage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoChangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoChangePage');
    };
    InfoChangePage.prototype.goBack = function () {
        this.app.getRootNav().push('TabsPage');
    };
    InfoChangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-change',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\info-change\info-change.html"*/'<ion-header cler>\n    <ion-navbar no-border-bottom>\n        <ion-buttons >\n            <button ion-button icon-only (click)="goBack()">\n                <ion-icon name="undo2"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  >\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n                <div  style="text-align:left; font-size:16px;" >\n                                    <p style="color:#000000;">\n                                    Changer d\'adresse mail\n                                    </p>\n                </div>\n                \n                <form >\n                    <ion-list>\n                    <ion-item class="proposer">\n                    <ion-label></ion-label>\n                    <ion-input type="text" placeholder="Adresse mail" name="mail"></ion-input>\n                    </ion-item>\n                    </ion-list>\n\n                </form>\n\n                <div  style="text-align:left; font-size:16px;" >\n                                        <p style="color:#000000;">\n                                        Changer de numéro de téléphone\n                                        </p>\n                </div>\n                    \n                <form>\n                    <div class="spacer" style="height:10;" id="information-spacer13"></div>\n                    <ion-list>\n                        <ion-item class="proposer">\n                        <ion-label></ion-label>\n                        <ion-input type="text" placeholder="Numéro de téléphone" name="imma"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </form>\n\n                <div  style="text-align:left; font-size:16px;" >\n                                        <p style="color:#000000;">\n                                        Changer de mot de passe\n                                        </p>\n                </div>\n                    \n                <form>\n                    <div class="spacer" style="height:10;" id="information-spacer13"></div>\n                    <ion-list>\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Mot de passe actuel" name="pass"></ion-input>\n                        </ion-item>\n\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Nouveau mot de passe " name="npass"></ion-input>\n                        </ion-item>\n\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Confirmer mot de passe " name="cpass"></ion-input>\n                        </ion-item>\n\n                    </ion-list>\n                    <button id="trajet-button16" style="font-size:18px;border-radius:5px 5px 5px 5px;"  large ion-button color="CTA" block >\n                    Changer mot de passe\n                    </button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\info-change\info-change.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InfoChangePage);
    return InfoChangePage;
}());

//# sourceMappingURL=info-change.js.map

/***/ })

});
//# sourceMappingURL=14.js.map