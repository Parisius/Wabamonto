webpackJsonp([9],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposerTPageModule", function() { return ProposerTPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposer_t__ = __webpack_require__(305);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proposer_t__["a" /* ProposerTPage */]),
            ],
        })
    ], ProposerTPageModule);
    return ProposerTPageModule;
}());

//# sourceMappingURL=proposer-t.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProposerTPage = /** @class */ (function () {
    function ProposerTPage(navCtrl, navParams, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
    }
    ProposerTPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProposerTPage');
        this.loadMap();
    };
    ProposerTPage.prototype.goBack = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ProposerTPage.prototype.goToProposerT = function () {
        this.navCtrl.setRoot('ProposerTPage');
    };
    ProposerTPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map_canvas = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    ProposerTPage.prototype.sendTrajet = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Success',
            message: 'Trajet enrégistré',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.goBack();
                    }
                }
            ]
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProposerTPage.prototype, "mapElement", void 0);
    ProposerTPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proposer-t',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposer-t\proposer-t.html"*/'\n<ion-header cler>\n\n  <ion-navbar no-border-bottom>\n      <ion-buttons >\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="undo2" ></ion-icon>\n          </button>\n      </ion-buttons>\n    \n</ion-navbar>\n\n</ion-header>\n\n<ion-content class="map-page" padding>\n  <div style="height: 40%; width: 100%" #mapCanvas id="map_canvas"></div> \n  <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n   <div>\n    <form (ngSubmit)="sendTrajet()" margin-top novalidate class="centered">\n    <ion-list>\n      <ion-item class="proposer">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Etapes" name="step"></ion-input>\n      </ion-item>\n      \n      <ion-item class="proposer">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Nombre de places" name="places"></ion-input>\n      </ion-item>\n      \n      <ion-item class="proposer">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Prix de la place" name="cost"></ion-input>\n      </ion-item>\n    </ion-list>\n      <button type ="submit" style="font-size:18px;border-radius:5px 5px 5px 5px; border: 1px solid #b3b3b3"  large ion-button color="CTA" block (click)="goToProposerT()">\n      Proposer un trajet\n    </button>\n    </form>\n    \n  </div>\n</ion-col >\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposer-t\proposer-t.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ProposerTPage);
    return ProposerTPage;
}());

//# sourceMappingURL=proposer-t.js.map

/***/ })

});
//# sourceMappingURL=9.js.map