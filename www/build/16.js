webpackJsonp([16],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPageModule", function() { return ForgetPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_pass__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetPassPageModule = /** @class */ (function () {
    function ForgetPassPageModule() {
    }
    ForgetPassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget_pass__["a" /* ForgetPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_pass__["a" /* ForgetPassPage */]),
            ],
        })
    ], ForgetPassPageModule);
    return ForgetPassPageModule;
}());

//# sourceMappingURL=forget-pass.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPassPage; });
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



/**
 * Generated class for the ForgetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPassPage = /** @class */ (function () {
    function ForgetPassPage(navCtrl, navParams, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.forgetForm = formBuilder.group({
            mail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    ForgetPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPassPage');
    };
    ForgetPassPage.prototype.goToLogin = function () {
        this.submitAttempt = true;
        if (!this.forgetForm.valid) {
            console.log("error!");
        }
        else {
            this.navCtrl.setRoot('HomePage');
            var toast = this.toastCtrl.create({
                message: 'Vous recevrez un lien de réinitialisation dans la boîte mail indiquée',
                duration: 3000,
                position: 'middle'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
            console.log("success!");
            console.log(this.forgetForm.value);
        }
    };
    ForgetPassPage.prototype.goToRegister = function () {
        this.navCtrl.setRoot('SignupPage');
    };
    ForgetPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-pass',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\forget-pass\forget-pass.html"*/'<ion-content padding id="page7" style="background-color:#019996;">\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n  \n  <div class="spacer" style="width:300px;height:114px;" id="forgotten-spacer10"></div>\n  <h3 id="forgotten-heading3" style="color:#FFFFFF;font-weight:400;text-align:center;">\n    Mot de passe oublié\n  </h3>\n  <div id="forgotten-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#FFFFFF;font-size:13px;">\n      Entrez votre adresse mail, un lien de réinitialisation vous sera envoyé\n    </p>\n  </div>\n  <div class="spacer" style="height:15;" id="forgotten-spacer11"></div>\n  <p *ngIf="submitAttempt" style="color: #ffffff;">Veuillez remplir tout les champs.</p>\n  <form id="forgotten-form3" [formGroup]="forgetForm" >\n    <ion-list id="forgotten-list4">\n      <ion-item class="proposer" >\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Adresse mail" formControlName="mail"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!forgetForm.controls.mail.valid  &&  submitAttempt">\n        <p>Veuillez entrer une adresse mail valide.</p>\n    </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:10;" id="forgotten-spacer12"></div>\n    <button id="forgotten-button6" large ion-button color="CTA" block style="font-weight:500; font-size:18px;border-radius:5px 5px 5px 5px;" (click)="goToLogin()">\n      Envoyer le lien\n    </button>\n  <br>\n    <button id="forgotten-button7" ion-button clear color="light" block style="color:#FFFFFF;" (click)="goToRegister()">\n      Ou créer un compte\n    </button>\n  </form>\n</ion-col >\n</ion-row>\n</ion-grid>  \n</ion-content>'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\forget-pass\forget-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ForgetPassPage);
    return ForgetPassPage;
}());

//# sourceMappingURL=forget-pass.js.map

/***/ })

});
//# sourceMappingURL=16.js.map