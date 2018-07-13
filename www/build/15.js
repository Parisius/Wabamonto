webpackJsonp([15],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.loginForm = formBuilder.group({
            mail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['']
        });
    }
    HomePage.prototype.doLogin = function () {
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log("error!");
        }
        else {
            this.navCtrl.setRoot('MenuPage');
            console.log("success!");
            console.log(this.loginForm.value);
        }
    };
    HomePage.prototype.goToRegister = function () {
        this.navCtrl.setRoot('SignupPage');
    };
    HomePage.prototype.goToForgotten = function () {
        this.navCtrl.setRoot('ForgetPassPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button  ion-button full style="color:rgb(25, 21, 245);" (click)="doLogin()">\n        Login\n    </button>\n    <ion-item>Ionic Icons:</ion-item>\n    <ion-icon name="ionic"></ion-icon>\n    <ion-icon name="star"></ion-icon>\n    <ion-icon name="radio-unchecked"></ion-icon>\n  \n    <ion-item>Font-Awesome Icons:</ion-item>\n    <ion-icon name="road"></ion-icon>\n    <ion-icon name="briefcase"></ion-icon>\n    <ion-icon name="search"></ion-icon>\n    <ion-icon name="automobile"></ion-icon>\n    <ion-icon name="bell"></ion-icon>\n    <ion-icon name="coin-dollar"></ion-icon>\n    <ion-icon name="key2"></ion-icon>\n    <ion-icon name="mail2"></ion-icon>\n    <ion-icon name="plus"></ion-icon>\n    <ion-icon name="undo2"></ion-icon>\n    <ion-icon name="user"></ion-icon>\n    <ion-icon name="menu"></ion-icon>\n\n    <div text-capitalize>\n        text-capitalize\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.\n      </div>\n</ion-content>\n -->\n<ion-content padding style="background:url(assets/imgs/back.png) no-repeat center;background-size:cover;background-color:#019996;" id="page6">\n	 <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n  \n  <div class="spacer" style="width:300px;height:114px;" id="login-spacer5"></div>\n	<h2 id="login-heading2" style="color:#FFFFFF;font-weight:400;text-align:center;font-size:32px;">\n	  Connexion\n	</h2>\n	<div class="spacer" style="height:15;" id="login-spacer6"></div>\n  <p *ngIf="submitAttempt" style="color: #ffffff;">Veuillez remplir tout les champs.</p>\n	<form id="login-form2" [formGroup]="loginForm">\n	  <ion-list id="login-list3">\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="email" placeholder="Adresse mail" formControlName="mail" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!loginForm.controls.mail.valid  &&  submitAttempt">\n      <p>Veuillez entrer une adresse mail valide.</p>\n  </ion-item>\n		<br>\n	  	<ion-item class="proposer">\n			<ion-label></ion-label>\n			<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n	  	</ion-item>\n	</ion-list>\n	<br>\n	  <button id="login-button3" ion-button color="CTA" large block style="font-size:18px;border-radius:5px 5px 5px 5px;"  (click)="doLogin()">\n		Se connecter\n	  </button>\n		\n	  <button id="login-button4" ion-button clear color="light" block style="color:#FFFFFF;" (click)="goToRegister()">\n		Ou créer un compte\n	  </button>\n	  <div class="spacer" style="height:5;" id="login-spacer7"></div>\n	  <button id="login-button5" ion-button clear color="light" block style="color:#FFFFFF;" (click)="goToForgotten()">\n		Mot de passe oublié?\n	  </button>\n	</form>\n  </ion-col >\n</ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map