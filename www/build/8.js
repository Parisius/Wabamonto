webpackJsonp([8],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposertrPageModule", function() { return ProposertrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposertr__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProposertrPageModule = /** @class */ (function () {
    function ProposertrPageModule() {
    }
    ProposertrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proposertr__["a" /* ProposertrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proposertr__["a" /* ProposertrPage */]),
            ],
        })
    ], ProposertrPageModule);
    return ProposertrPageModule;
}());

//# sourceMappingURL=proposertr.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposertrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposertrPage = /** @class */ (function () {
    function ProposertrPage(app, navCtrl, navParams, fb, geolocation) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.geolocation = geolocation;
    }
    ProposertrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProposertrPage');
        this.loadMap();
    };
    ProposertrPage.prototype.goToProposerT1 = function () {
        this.navCtrl.setRoot('ProposerTPage');
    };
    ProposertrPage.prototype.goBack = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ProposertrPage.prototype.ngOnInit = function () {
        this.trajetForm = this.fb.group({
            departure: ['Haie Vive', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            arrival: ['Suru Lere', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.departure = this.trajetForm.controls['departure'];
        this.arrival = this.trajetForm.controls['arrival'];
        this.date = this.trajetForm.controls['date'];
    };
    ProposertrPage.prototype.next = function () {
        this.navCtrl.setRoot('ProposerTPage');
    };
    ProposertrPage.prototype.loadMap = function () {
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
    ProposertrPage.prototype.function = function (success) {
        console.log(success);
    };
    ProposertrPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map_canvas,
            animation: google.maps.Animation.DROP,
            position: this.map_canvas.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    ProposertrPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map_canvas, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProposertrPage.prototype, "mapElement", void 0);
    ProposertrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proposertr',template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposertr\proposertr.html"*/'\n<ion-header cler>\n\n  <ion-navbar no-border-bottom>\n      <ion-buttons >\n          <button ion-button icon-only (click)="goBack()">\n              <ion-icon name="undo2" ></ion-icon>\n          </button>\n      </ion-buttons>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click) = "addMarker()">\n            <ion-icon name="" ></ion-icon>\n        </button>\n    </ion-buttons>\n    \n</ion-navbar>\n\n</ion-header>\n\n<ion-content  padding style="background-color:#ffffff;">\n  <div style="height: 40%; width: 100%" #mapCanvas id="map_canvas"></div>  \n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n  <div >\n  \n    <form [formGroup]="trajetForm" (ngSubmit)="next()" margin-top novalidate >\n    <ion-list>\n      <ion-item class="proposer">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Lieu de départ" nngControlame="departure" no-lines></ion-input>\n      </ion-item>\n      \n      <ion-item class="proposer">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Lieu de destination" ngControl="arrival"></ion-input>\n      </ion-item>\n      \n      <ion-item class="proposer">\n        <ion-label>\n          Date et Heure\n        </ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" ngControl="date" ></ion-datetime>\n       \n      </ion-item>\n    \n    </ion-list>\n\n    <button  type="submit" ion-button  outline color="CTA" block large style="color:#f67300; font-size:18px;border-radius:5px 5px 5px 5px;">\n      Continuer\n    </button>\n    \n    </form>\n<!-- -->\n    \n  </div>\n  </ion-col >\n</ion-row>\n</ion-grid>\n\n</ion-content>\n <!-- <ion-input type="date" placeholder="Date de Naissance" name="date"></ion-input> [disabled]="!trajetForm.valid" -->'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\pages\proposertr\proposertr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ProposertrPage);
    return ProposertrPage;
}());

//# sourceMappingURL=proposertr.js.map

/***/ })

});
//# sourceMappingURL=8.js.map