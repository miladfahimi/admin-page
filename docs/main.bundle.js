webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-main></app-main>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-center-text {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/main/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_sidebar_subsidebar_subsidebar_component__ = __webpack_require__("../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_contents_contents_component__ = __webpack_require__("../../../../../src/app/main/contents/contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_contents_content_content_component__ = __webpack_require__("../../../../../src/app/main/contents/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_main_service__ = __webpack_require__("../../../../../src/app/main/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'sidebar', component: __WEBPACK_IMPORTED_MODULE_9__main_sidebar_subsidebar_subsidebar_component__["a" /* SubsidebarComponent */], outlet: 'expandmenu' },
    { path: 'content', component: __WEBPACK_IMPORTED_MODULE_11__main_contents_content_content_component__["a" /* ContentComponent */] },
    { path: '', redirectTo: '/content', pathMatch: 'full' },
    { path: 'subsidebar', component: __WEBPACK_IMPORTED_MODULE_9__main_sidebar_subsidebar_subsidebar_component__["a" /* SubsidebarComponent */], outlet: 'expandmenu' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_sidebar_subsidebar_subsidebar_component__["a" /* SubsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_contents_contents_component__["a" /* ContentsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_contents_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__["a" /* NavComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_13__main_main_service__["a" /* MainService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__ = __webpack_require__("../../../../../src/app/shared/menuitems.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__ = __webpack_require__("../../../../../src/app/shared/submenuitems.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
////////////////////////////////////////////////////
//MODULES




////////////////////////////////////////////////////
//SERVICES
////////////////////////////////////////////////////
//MODELS


var AppService = (function () {
    ////////////////////////////////////////////////////
    //CYCLE HOOKS
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        ////////////////////////////////////////////////////
        //OBSERVABLES
        this.subMenuItems = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](undefined);
        ////////////////////////////////////////////////////
        //VARIABLES
        this.menuItems = [
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('home', '#lnr-home', 'home', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('categories', '#lnr-upload', 'categories', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('products', '#lnr-gift', 'products', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('chart', '#lnr-chart-bars', 'chart', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('users', '#lnr-user', 'users', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
            new __WEBPACK_IMPORTED_MODULE_4__shared_menuitems_model__["a" /* MenuItems */]('setting', '#lnr-cog', 'setting', [new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Add', '#lnr-plus-circle', 'Add'),
                new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('remove', '#lnr-circle-minus', 'remove'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('Edit', '#lnr-menu-circle', 'Edit'), new __WEBPACK_IMPORTED_MODULE_5__shared_submenuitems_model__["a" /* SubMenuItems */]('help', '#lnr-question-circle', 'help')]),
        ];
        this.title = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onCloseSubSidebar();
    }
    ////////////////////////////////////////////////////
    //METHODES
    AppService.prototype.onUpdateTitle = function (title) {
        this.title.emit(title);
    };
    AppService.prototype.onGetMenuItem = function () {
        return this.menuItems;
    };
    AppService.prototype.onGetSubMenuItem = function (submenu) {
        for (var i = 0; i < this.menuItems.length; i++) {
            if (this.menuItems[i].name == submenu) {
                var selectedItem = i;
            }
        }
        this.subMenuItems.next(this.menuItems[selectedItem].subMenu);
    };
    AppService.prototype.onCloseSubSidebar = function () {
        this.router.navigate([{ outlets: { expandmenu: null } }]);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/main/contents/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-on\">\r\n    <div class=\"row\">\r\n        <div class=\"col-1-of-2\">\r\n            <div class=\"row\" *ngFor=\"let table of tables\">\r\n                <div class=\"col-1-of-1\">\r\n                    <div class=\"items--main\">\r\n                            <img class=\"items__img\" src=\"{{table.imagePath}}\" alt=\"\">\r\n                            <p class=\"items__p\">Google Sheets is one of my favorite web applications. It’s quick, lightweight, and easy to use. For those of you not familiar with Google Sheets, it’s Google’s web-based spreadsheet application. While creating tabular data is the main function of this application, did you know that you can also create dynamic, embeddable charts based on these data values? Let’s take a look.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-1-of-2\">\r\n            <div class=\"row\" *ngFor=\"let row of rowNumber; let i=index\">\r\n                <div class=\"col-1-of-2-2nd\" *ngFor=\"let deal of getCurrentDeals(i)\">\r\n                    <div class=\"items\">\r\n                        <h1 class=\"header-2\">{{deal.product}}</h1>\r\n                        <svg class=\"content__svg\">\r\n                            <use attr.xlink:href=\"{{deal.imagePath}}\"></use>\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-1-of-1\">\r\n            <div class=\"items--footer\">\r\n                <h1 class=\"header-1\">Test from https://www.webascender.com/</h1>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/contents/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  -ms-flex: 1;\n      flex: 1;\n  color: white; }\n  .content__img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 10rem; }\n  .content__svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 10rem;\n    fill: rgba(0, 0, 0, 0.4);\n    width: 1em;\n    height: 1em; }\n\n.items {\n  position: relative;\n  margin: 0 auto;\n  background-color: white;\n  padding: 1rem;\n  height: 20rem;\n  overflow: hidden; }\n  .items--main {\n    background-color: white;\n    color: gray;\n    height: 43rem; }\n  .items--footer {\n    height: 10rem;\n    background-color: white; }\n  .items__img {\n    display: block;\n    padding: 2rem;\n    width: 100%;\n    height: auto; }\n  .items__p {\n    padding: 2rem;\n    text-align: justify; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/contents/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__ = __webpack_require__("../../../../../src/app/shared/deals.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_tables_model__ = __webpack_require__("../../../../../src/app/shared/tables.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//SERVICES

//MODELS


var ContentComponent = (function () {
    function ContentComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.rows = [1, 2];
        this.deals = [
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product1', 2, '#lnr-car'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product2', 1, '#lnr-heart-pulse'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product3', 3, '#lnr-diamond'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product4', 4, '#lnr-screen'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product5', 2, '#lnr-bicycle'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product6', 1, '#lnr-leaf'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product7', 3, '#lnr-printer'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_deals_model__["a" /* Deals */]('product8', 4, '#lnr-shirt'),
        ];
        this.tables = [
            new __WEBPACK_IMPORTED_MODULE_4__shared_tables_model__["a" /* Tables */]('product2', 'blue', 39, 'unisex, freesize', './assets/images/mysvg.svg#sunny'),
            new __WEBPACK_IMPORTED_MODULE_4__shared_tables_model__["a" /* Tables */]('product1', 'green', 42, 'unisex, freesize', './assets/images/chart1.png'),
        ];
        this.rowNumber = [];
        for (var i = 0; i < this.deals.length / 2; i++) {
            this.rowNumber.push(i);
        }
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.appService.onUpdateTitle('home');
        // this.onGetData();
    };
    // onGetData() {
    //   try {
    //     setTimeout(() => {
    //       this.http
    //         .get("http://192.168.0.102:3100/bookingapp")
    //         .subscribe((data: Tables[]) => {
    //           if (data.length > 0) {
    //             for (var i = 0; i < 2; i++) {
    //               this.tables[i] = data[i];
    //             }
    //           } else {
    //             throw ("No data comes from server!");
    //           }
    //         });
    //     }, 500);
    //   }
    //   catch (e) {
    //     console.log("error : " + e);
    //   }
    //   finally {
    //     console.log("request sent!");
    //   }
    // }
    ContentComponent.prototype.getCurrentDeals = function (currentIndex) {
        var item = [];
        var firstIndex = currentIndex * 2;
        for (var i = 0; i < 2; i++) {
            var nextIndex = firstIndex + i;
            if (this.deals[nextIndex]) {
                item.push(this.deals[nextIndex]);
            }
        }
        return item;
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/main/contents/content/content.component.html"),
            host: {
                class: 'content'
            },
            styles: [__webpack_require__("../../../../../src/app/main/contents/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/contents/contents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__flex\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/contents/contents.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contents {\n  -ms-flex: 1;\n      flex: 1;\n  background-color: var(--gray-2);\n  background-color: var(--gray-2); }\n  .contents__flex {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/contents/contents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentsComponent = (function () {
    function ContentsComponent() {
    }
    ContentsComponent.prototype.ngOnInit = function () {
    };
    ContentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contents',
            template: __webpack_require__("../../../../../src/app/main/contents/contents.component.html"),
            host: {
                class: 'contents'
            },
            styles: [__webpack_require__("../../../../../src/app/main/contents/contents.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentsComponent);
    return ContentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <app-sidebar></app-sidebar>\n  <router-outlet name=\"expandmenu\"></router-outlet>\n  <app-content></app-content>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: inherit;\n  background-color: var(--gray-1);\n  background-color: var(--gray-1); }\n  @media screen and (max-width: 600px) {\n    .main {\n      -ms-flex-direction: column;\n          flex-direction: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            host: {
                class: 'main'
            },
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(appService) {
        this.appService = appService;
    }
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/main/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar__container\">\n    <a *ngFor=\"let menuItem of menuItems\" (click)=onClick(menuItem.name); [routerLink]=\"[{ outlets: { expandmenu: ['subsidebar'] } }]\" routerLinkActive=\"active\">\n        <div class=\"sidebar__icon\">\n            <svg class=\"sidebar__svg\">\n                <use [attr.xlink:href]=\"menuItem.icon\"></use>\n            </svg>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  -ms-flex: 0 0 5rem;\n      flex: 0 0 5rem;\n  text-align: center;\n  color: white;\n  background-color: var(--violet-3);\n  background-color: var(--violet-3); }\n  @media screen and (max-width: 600px) {\n    .sidebar {\n      -ms-flex: 0 0 4rem;\n          flex: 0 0 4rem;\n      height: 4rem; } }\n  .sidebar__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-grid-column-align: center;\n        justify-items: center; }\n    @media screen and (max-width: 600px) {\n      .sidebar__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        height: 5rem; } }\n  .sidebar a {\n    color: white; }\n  .sidebar__icon {\n    -ms-flex: 0 0 1;\n        flex: 0 0 1;\n    justify-self: flex-start;\n    padding: 1rem;\n    cursor: pointer;\n    transition: all .3s; }\n    .sidebar__icon svg {\n      opacity: .3; }\n    .sidebar__icon:hover {\n      background-color: var(--violet-4);\n      background-color: var(--violet-4);\n      border-left: 0.2rem solid var(--btn-red);\n      border-left: 0.2rem solid var(--btn-red);\n      transform: scaleX(1.05) translateX(2px); }\n      .sidebar__icon:hover svg {\n        opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .sidebar__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center; }\n        .sidebar__icon:hover {\n          border: none;\n          border-top: 0.2rem solid var(--btn-red);\n          border-top: 0.2rem solid var(--btn-red);\n          transform: scaleX(1.1); } }\n  .sidebar__svg {\n    font-size: 2.5rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
////////////////////////////////////////////////////
//MODULES

////////////////////////////////////////////////////
//SERVICES

var SidebarComponent = (function () {
    ////////////////////////////////////////////////////
    //CYCLE HOOKS
    function SidebarComponent(appService) {
        this.appService = appService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = this.appService.onGetMenuItem();
    };
    ////////////////////////////////////////////////////
    //METHODES
    SidebarComponent.prototype.onClick = function (name) {
        this.appService.onUpdateTitle(name);
        this.appService.onGetSubMenuItem(name);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/main/sidebar/sidebar.component.html"),
            host: {
                class: 'sidebar'
            },
            styles: [__webpack_require__("../../../../../src/app/main/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subsidebar__container\">\n\n    <div class=\"close\">\n        <a (click)=\"onClose()\">\n            <div class=\"close__btn\">\n                <svg class=\"close__svg\">\n                    <use xlink:href=\"#lnr-cross-circle\"></use>\n                </svg>\n            </div>\n        </a>\n    </div>\n\n    <div class=\"subsidebar__2nd\">\n        <div class=\"subsidebar__2nd__con\">\n            <h1 class=\"subsidebar__h1\">\n\n            </h1>\n            <div class=\"subsidebar__btn\">\n                <button class=\"btn btn__purple u-text-to-upper\">new item</button>\n            </div>\n            <div *ngFor=\"let subMenuItem of subMenuItems\" class=\"subsidebar__icon u-c-text u-text-to-upper\">\n                <a href=\"#\">\n                    <svg class=\"subsidebar__svg\">\n                        <use [attr.xlink:href]=\"subMenuItem.icon\"></use>\n                    </svg>\n                    <span>{{subMenuItem.name}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"subsidebar__1st u-c-text\">\n        <div class=\"subsidebar__1st__con \">\n            <h1 class=\"subsidebar__h1\">\n                recent items\n            </h1>\n            <div class=\"subsidebar__icon u-c-text u-text-to-upper\">\n                <a href=\"#\">\n                    <svg class=\"subsidebar__svg\">\n                        <use xlink:href=\"#lnr-arrow-down-circle\"></use>\n                    </svg>\n                    <span>download pdf</span>\n                </a>\n            </div>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subsidebar {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .subsidebar {\n      height: 20rem; } }\n  .subsidebar__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4));\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .subsidebar__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .subsidebar__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .subsidebar__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n    @media screen and (max-width: 600px) {\n      .subsidebar__1st {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .subsidebar__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .subsidebar__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .subsidebar__2nd {\n        -ms-flex: 1;\n            flex: 1; } }\n  .subsidebar__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 30% 0; }\n    @media screen and (max-width: 600px) {\n      .subsidebar__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .subsidebar__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .subsidebar__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .subsidebar__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .subsidebar__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      padding-bottom: 2rem; }\n      @media screen and (max-width: 600px) {\n        .subsidebar__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .subsidebar__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .subsidebar__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .subsidebar__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .subsidebar__svg {\n        font-size: 2rem; } }\n  .subsidebar__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .subsidebar__end:hover {\n      border: none;\n      background-color: var(--violet-3);\n      background-color: var(--violet-3); }\n\n.close {\n  position: absolute;\n  top: 4.8rem;\n  left: 21rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 1rem;\n  cursor: pointer; }\n  @media screen and (max-width: 600px) {\n    .close {\n      left: 0;\n      top: 25.5rem; } }\n  .close__btn {\n    color: white; }\n  .close a {\n    color: white;\n    opacity: .3; }\n  .close__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .close__svg {\n        font-size: 2rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
////////////////////////////////////////////////////
//MODULES


////////////////////////////////////////////////////
//SERVICES

var SubsidebarComponent = (function () {
    ////////////////////////////////////////////////////
    //CYCLE HOOKS
    function SubsidebarComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    SubsidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.appService.subMenuItems.subscribe(function (data) {
            _this.subMenuItems = data;
        });
    };
    SubsidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ////////////////////////////////////////////////////
    //METHODES
    SubsidebarComponent.prototype.onClose = function () {
        this.appService.onCloseSubSidebar();
    };
    SubsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subsidebar',
            template: __webpack_require__("../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.html"),
            host: {
                class: 'subsidebar'
            },
            styles: [__webpack_require__("../../../../../src/app/main/sidebar/subsidebar/subsidebar.component.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SubsidebarComponent);
    return SubsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav__logo\">\n    <div class=\"logo\"></div>\n</div>\n<div class=\"nav__header\">\n    <h1 class=\"header-1 u-text-to-upper u-w u-c-text\">{{title}}</h1>\n</div>\n<div class=\"nav__btn\">\n    <button class=\"btn btn__red u-text-to-upper\">new ticket</button>\n</div>\n<div class=\"nav__items\">\n    <h1 class=\"nav__h1 u-text-to-upper\">welcome milad</h1>\n</div>\n<div class=\"nav__profile\">\n    <img class=\"nav__img\" src=\"./assets/images/milad.jpg\" alt=\"\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  height: 5rem;\n  background-color: white;\n  -ms-grid-column-align: flex-start;\n      justify-items: flex-start;\n  -ms-flex-align: center;\n      align-items: center; }\n  .nav__logo {\n    -ms-flex: 0 0 5rem;\n        flex: 0 0 5rem; }\n  .nav__header {\n    -ms-flex: 0 0 20rem;\n        flex: 0 0 20rem;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    height: 5rem;\n    background-color: var(--violet-3);\n    background-color: var(--violet-3); }\n    @media screen and (max-width: 550px) {\n      .nav__header {\n        display: none; } }\n  .nav__items {\n    -ms-flex: 1;\n        flex: 1; }\n  .nav__btn {\n    -ms-flex: 0 0 10rem;\n        flex: 0 0 10rem;\n    margin-left: 1.2rem; }\n    @media screen and (max-width: 550px) {\n      .nav__btn {\n        margin-left: 2.6rem; } }\n    @media screen and (max-width: 415px) {\n      .nav__btn {\n        margin-left: 1.2rem; } }\n  .nav__profile {\n    -ms-flex: 0 0 3.5rem;\n        flex: 0 0 3.5rem;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    height: 3.5rem;\n    margin-right: .8rem;\n    border-radius: 100px;\n    background-color: var(--gray-1);\n    background-color: var(--gray-1);\n    overflow: hidden; }\n  .nav__img {\n    width: 5rem;\n    transform: translateX(-8px); }\n  .nav__h1 {\n    font-size: 1rem;\n    margin-right: .5rem;\n    letter-spacing: 1rem;\n    text-align: right; }\n    @media screen and (max-width: 550px) {\n      .nav__h1 {\n        font-size: .5rem;\n        letter-spacing: .5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.title = 'welcome!';
        setInterval(function () {
            _this.appService.title.subscribe(function (data) {
                _this.title = data;
            });
        }, 100);
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            host: {
                class: 'nav'
            },
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/deals.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deals; });
var Deals = (function () {
    function Deals(product, quantity, imagePath) {
        this.product = product;
        this.quantity = quantity;
        this.imagePath = imagePath;
    }
    return Deals;
}());



/***/ }),

/***/ "../../../../../src/app/shared/menuitems.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var MenuItems = (function () {
    function MenuItems(name, icon, url, subMenu) {
        this.name = name;
        this.icon = icon;
        this.url = url;
        this.subMenu = subMenu;
    }
    return MenuItems;
}());



/***/ }),

/***/ "../../../../../src/app/shared/submenuitems.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubMenuItems; });
var SubMenuItems = (function () {
    function SubMenuItems(name, icon, url) {
        this.name = name;
        this.icon = icon;
        this.url = url;
    }
    return SubMenuItems;
}());



/***/ }),

/***/ "../../../../../src/app/shared/tables.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tables; });
var Tables = (function () {
    function Tables(product, color, size, description, imagePath) {
        this.product = product;
        this.color = color;
        this.size = size;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Tables;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map