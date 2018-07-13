webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(310);
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(311);
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
    function SignupPage(navCtrl, navParams, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
        this.signupForm = formBuilder.group({
            mail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-z0-9_.+-]+@[a-zA-z0-9_.+]+.[a-zA-z0-9_.+-.]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phonenum: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9+]'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
            passconfirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.goToLogin = function () {
        this.submitAttempt = true;
        if (!this.signupForm.valid) {
            console.log("error!");
        }
        else {
            this.navCtrl.setRoot('HomePage');
            var toast = this.toastCtrl.create({
                message: 'Inscription reussie!!',
                duration: 3000,
                position: 'middle'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
            console.log("success!");
            console.log(this.signupForm.value);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\signup\signup.html"*/'<ion-content padding style="background:url(assets/imgs/back.png) no-repeat center;background-size:cover;background-color:#019996;" id="page5">\n	<ion-grid>\n    <ion-row>\n      <ion-col text-center>\n  \n  \n  <div class="spacer" style="width:300px;height:114px;" id="login-spacer5"></div>\n	<h2 id="register-heading1" style="color:#FFFFFF;font-weight:400;text-align:center;">\n	  Inscription\n	</h2>\n	<p *ngIf="submitAttempt" style="color: #ffffff;">Veuillez remplir tout les champs.</p>\n	<form id="register-form1"[formGroup]="signupForm" >\n	  <ion-list id="register-list2">\n		<ion-item class="proposer">\n		  <ion-input type="email" placeholder="Adresse mail" formControlName="mail"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="!signupForm.controls.mail.valid  &&  submitAttempt">\n      <p>Veuillez entrer une adresse mail valide.</p>\n  </ion-item>\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="tel" placeholder="Numéro de téléphone" formControlName="phonenum"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="!signupForm.controls.phonenum.valid  &&  submitAttempt">\n      <p>Veuillez entrer un numéro de téléphone valide.</p>\n  </ion-item>\n		\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n		</ion-item>\n		\n		<ion-item class="proposer">\n		  <ion-label></ion-label>\n		  <ion-input type="text" placeholder="Confirmation du mot de passe" formControlName="passconfirm"></ion-input>\n		</ion-item>\n		<ion-item *ngIf="!signupForm.controls.phonenum.valid  &&  submitAttempt">\n      <p>Les mots de passe ne correspondent pas!</p>\n  </ion-item>\n	  </ion-list>\n	  \n	  <button id="register-button1" ion-button color="CTA" large block style="font-size:18px;border-radius:5px 5px 5px 5px;"  (click)="goToLogin()">\n		S\'inscrire\n	  </button>\n	  <div id="register-markdown1" class="show-list-numbers-and-dots">\n		<p style="color:#FFFFFF;" align="center">\n		  En vous inscrivant vous acceptez nos <b> conditions d&#39;utilisation </b>et notre <b>politique de confidentialité</b>\n		</p>\n	  </div>\n	  <button id="register-button2" ion-button clear color="light" block style="color:#FFFFFF;" (click)="goToLogin()">\n		Déja membre? Connectez vous!\n	  </button>\n	</form>\n\n  </ion-col >\n</ion-row>\n</ion-grid>\n  </ion-content>'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ })

});
//# sourceMappingURL=0.js.map