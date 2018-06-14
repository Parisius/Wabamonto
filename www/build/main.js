webpackJsonp([23],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		269,
		22
	],
	"../pages/account-am/account-am.module": [
		270,
		21
	],
	"../pages/add-funds/add-funds.module": [
		271,
		20
	],
	"../pages/avis/avis.module": [
		272,
		19
	],
	"../pages/car-add/car-add.module": [
		273,
		18
	],
	"../pages/discussion/discussion.module": [
		274,
		17
	],
	"../pages/forget-pass/forget-pass.module": [
		275,
		16
	],
	"../pages/home/home.module": [
		278,
		15
	],
	"../pages/info-change/info-change.module": [
		276,
		14
	],
	"../pages/informations/informations.module": [
		277,
		13
	],
	"../pages/menu/menu.module": [
		279,
		12
	],
	"../pages/message/message.module": [
		280,
		11
	],
	"../pages/notification/notification.module": [
		281,
		10
	],
	"../pages/proposer-t/proposer-t.module": [
		282,
		9
	],
	"../pages/proposertr/proposertr.module": [
		283,
		8
	],
	"../pages/rechercher-t/rechercher-t.module": [
		285,
		7
	],
	"../pages/reservation/reservation.module": [
		284,
		6
	],
	"../pages/searcht/searcht.module": [
		287,
		5
	],
	"../pages/signup/signup.module": [
		286,
		4
	],
	"../pages/tabs-p/tabs-p.module": [
		288,
		3
	],
	"../pages/tabs/tabs.module": [
		289,
		2
	],
	"../pages/trajet/trajet.module": [
		290,
		1
	],
	"../pages/whatsup/whatsup.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { HomePage } from '../pages/home/home';
/*import { TabsPage } from '../pages/tabs/tabs';
import { TrajetPage } from '../pages/trajet/trajet';
import { ReservationPage } from '../pages/reservation/reservation';
import { DiscussionPage } from '../pages/discussion/discussion';
import { NotificationPage } from '../pages/notification/notification';
import { MenuPage } from '../pages/menu/menu';*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
                /* TabsPage,
                TrajetPage,
                ReservationPage,
                DiscussionPage,
                NotificationPage,
                MenuPage*/
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    scrollPadding: true,
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-am/account-am.module#AccountAmPageModule', name: 'AccountAmPage', segment: 'account-am', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-funds/add-funds.module#AddFundsPageModule', name: 'AddFundsPage', segment: 'add-funds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avis/avis.module#AvisPageModule', name: 'AvisPage', segment: 'avis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-add/car-add.module#CarAddPageModule', name: 'CarAddPage', segment: 'car-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discussion/discussion.module#TestPageModule', name: 'DiscussionPage', segment: 'discussion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-pass/forget-pass.module#ForgetPassPageModule', name: 'ForgetPassPage', segment: 'forget-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-change/info-change.module#InfoChangePageModule', name: 'InfoChangePage', segment: 'info-change', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/informations/informations.module#InformationsPageModule', name: 'InformationsPage', segment: 'informations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#TestPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#TestPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proposer-t/proposer-t.module#ProposerTPageModule', name: 'ProposerTPage', segment: 'proposer-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proposertr/proposertr.module#ProposertrPageModule', name: 'ProposertrPage', segment: 'proposertr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#TestPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rechercher-t/rechercher-t.module#RechercherTPageModule', name: 'RechercherTPage', segment: 'rechercher-t', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searcht/searcht.module#SearchtPageModule', name: 'SearchtPage', segment: 'searcht', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-p/tabs-p.module#TabsPPageModule', name: 'TabsPPage', segment: 'tabs-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TestPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trajet/trajet.module#TestPageModule', name: 'TrajetPage', segment: 'trajet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatsup/whatsup.module#WhatsupPageModule', name: 'WhatsupPage', segment: 'whatsup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
                /*TabsPage,
               TrajetPage,
               ReservationPage,
               DiscussionPage,
               NotificationPage,
               MenuPage*/
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'HomePage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\LAFRICAINE\Desktop\app_640\Wabamonto New\wabamonto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map