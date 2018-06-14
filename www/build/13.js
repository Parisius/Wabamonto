webpackJsonp([13],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPageModule", function() { return InformationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informations__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationsPageModule = /** @class */ (function () {
    function InformationsPageModule() {
    }
    InformationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__informations__["a" /* InformationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__informations__["a" /* InformationsPage */]),
            ],
        })
    ], InformationsPageModule);
    return InformationsPageModule;
}());

//# sourceMappingURL=informations.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsPage; });
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
 * Generated class for the InformationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationsPage = /** @class */ (function () {
    function InformationsPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InformationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationsPage');
    };
    InformationsPage.prototype.goBack = function () {
        this.app.getRootNav().push('TabsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], InformationsPage.prototype, "nav", void 0);
    InformationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informations',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\informations\informations.html"*/'\n<ion-header cler>\n\n    <ion-navbar no-border-bottom>\n        <ion-buttons >\n            <button ion-button icon-only (click)="goBack()">\n                <ion-icon name="undo2"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  >\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center>\n\n                <img src="assets/imgs/head.png" style="display:block;width:50;height:40;margin-left:auto;margin-right:auto;" />\n                <div  style="text-align:center;">\n                    <p style="color:#000000;">\n                    Choisissez une photo de profil\n                    </p>\n                </div>\n                \n                <form id="information-form4">\n                    <ion-list>\n                        <ion-item class="proposer">\n                            <ion-input type="text" placeholder="Prénom" name="prenom"></ion-input>\n                        </ion-item>\n                        \n                        <div class="spacer" style="height:10;" id="information-spacer13"></div>\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Nom" name="nom"></ion-input>\n                        </ion-item>\n                        \n                        <div class="spacer" style="height:10;" id="information-spacer14"></div>\n                        <ion-item class="proposer">\n                            <ion-label>\n                                Date de naissance\n                            </ion-label>\n                            <ion-datetime displayFormat="DD/MM/YYYY" ></ion-datetime>\n                            <!-- <ion-input type="date" placeholder="Date de Naissance" name="date"></ion-input> -->\n                        </ion-item>\n                        \n                        <div class="spacer" style="height:10;" id="information-spacer15"></div>\n                        <ion-item class="proposer">\n                            <ion-label>\n                                Choisissez votre sexe\n                            </ion-label>\n                            <ion-select name="sex">\n                                <ion-option></ion-option>\n                                <ion-option>\n                                Femme\n                                </ion-option>\n                                <ion-option>\n                                Homme\n                                </ion-option>\n                                <ion-option>\n                                Autre\n                                </ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Ville" name="town"></ion-input>\n                        </ion-item>\n                    \n                        <div class="spacer" style="height:10;" id="information-spacer13"></div>\n                        <ion-item class="proposer">\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Profession" name="job"></ion-input>\n                        </ion-item>\n                        \n                        <div class="spacer" style="height:10;" id="information-spacer14"></div>\n                        <ion-item class="proposer" >\n                            <ion-label></ion-label>\n                            <ion-input type="text" placeholder="Parlez un peu de vous" name="aboutYou" height="50"></ion-input>\n                        </ion-item>\n                        \n                        <div class="spacer" style="height:10;" id="information-spacer15"></div>\n                    </ion-list>\n                    <button id="information-button8" ion-button  outline color="CTA" block large style="color:#f67300; font-size:18px;border-radius:5px 5px 5px 5px;" >\n                    Continuer\n                    </button>\n                </form>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\informations\informations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InformationsPage);
    return InformationsPage;
}());

//# sourceMappingURL=informations.js.map

/***/ })

});
//# sourceMappingURL=13.js.map