webpackJsonp([4],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot('HomePage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\signup\signup.html"*/'<ion-content padding style="background:url(assets/imgs/back.png) no-repeat center;background-size:cover;background-color:#019996;" id="page5">\n	<ion-grid>\n    <ion-row>\n      <ion-col text-center>\n  \n  \n  <div class="spacer" style="width:300px;height:114px;" id="login-spacer5"></div>\n	<h2 id="register-heading1" style="color:#FFFFFF;font-weight:400;text-align:center;">\n	  Inscription\n	</h2>\n	<form id="register-form1">\n	  <ion-list id="register-list2">\n		<ion-item class="proposer">\n		  <ion-input type="email" placeholder="Adresse mail" name="mail"></ion-input>\n		</ion-item>\n		\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="tel" placeholder="Numéro de téléphone" name="phonenum"></ion-input>\n		</ion-item>\n		\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="password" placeholder="Password" name="password"></ion-input>\n		</ion-item>\n		\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="text" placeholder="Confirmation du mot de passe" name="passconfirm"></ion-input>\n		</ion-item>\n	  </ion-list>\n	  \n	  <button id="register-button1" ion-button color="CTA" large block style="font-size:18px;border-radius:5px 5px 5px 5px;"  (click)="goToLogin()">\n		S\'inscrire\n	  </button>\n	  <div id="register-markdown1" class="show-list-numbers-and-dots">\n		<p style="color:#FFFFFF;" align="center">\n		  En vous inscrivant vous acceptez nos <b> condition d&#39;utilisation </b>et notre <b>politique de confidentialité</b>\n		</p>\n	  </div>\n	  <button id="register-button2" ion-button clear color="light" block style="color:#FFFFFF;" (click)="goToLogin()">\n		Déja membre? Connectez vous!\n	  </button>\n	</form>\n\n  </ion-col >\n</ion-row>\n</ion-grid>\n  </ion-content>'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map