(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _app_components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _app_components_nearbyshops_nearbyshops_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/components/nearbyshops/nearbyshops.component */ "./src/app/components/nearbyshops/nearbyshops.component.ts");
/* harmony import */ var _app_components_myshops_myshops_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/components/myshops/myshops.component */ "./src/app/components/myshops/myshops.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Router Module

// Importing components






// Mapping routes to components
var routes = [
    { path: '', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'user', component: _app_components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'nearby', component: _app_components_nearbyshops_nearbyshops_component__WEBPACK_IMPORTED_MODULE_7__["NearbyshopsComponent"] },
    { path: 'myshops', component: _app_components_myshops_myshops_component__WEBPACK_IMPORTED_MODULE_8__["MyshopsComponent"] },
    { path: 'user', component: _app_components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // Passing routes to the RouterModule
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid mt-5\">\r\n  <flash-messages></flash-messages>\r\n  <!-- Router Outlet -->\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Perishop';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_nearbyshops_nearbyshops_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nearbyshops/nearbyshops.component */ "./src/app/components/nearbyshops/nearbyshops.component.ts");
/* harmony import */ var _components_myshops_myshops_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/myshops/myshops.component */ "./src/app/components/myshops/myshops.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _components_nearbyshops_nearbyshops_component__WEBPACK_IMPORTED_MODULE_13__["NearbyshopsComponent"],
                _components_myshops_myshops_component__WEBPACK_IMPORTED_MODULE_14__["MyshopsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: auto;\r\n  height: 200px;\r\n}\r\n\r\n.img-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5 mb-3 rounded shadow-sm\" style=\"background-color: rgb(238, 238, 238);\">\n  <div class=\"img-container pt-3\">\n    <img class=\"m-1 shadow-sm\" *ngFor=\"let img of shopsImages\" [src]='img' alt=\"Random Shops Images\" />\n  </div>\n  <div class=\"pt-4 pb-4\">\n    <h1 class=\"display-4 text-center\">\n      <i class=\"fab fa-periscope mr-3\"></i>Welcome to Perishop\n    </h1>\n\n    <h2 class=\"text-center font-weight-light mt-4\">\n      300+ Shops\n      <i class=\"fas fa-shopping-bag ml-2\"></i>\n    </h2>\n\n    <h4 class=\"font-weight-light text-center\">\n      Find out nearby ones to visit, like or dislike !\n    </h4>\n  </div>\n\n  <div *ngIf=\"!authService.loggedIn()\" class=\"text-center pb-3\">\n    <button [routerLink]=\"['login']\" class=\"btn-lg btn-primary m-2 pl-4 pr-4\">Log In</button>\n    <span class=\"h3 font-weight-light m-2\">/</span>\n    <button [routerLink]=\"['signup']\" class=\"btn-lg btn-success m-2 pl-4 pr-4\">Sign Up</button>\n  </div>\n\n  <div *ngIf=\"authService.loggedIn()\" class=\"text-center pb-3\">\n    <button [routerLink]=\"['nearby']\" class=\"btn-lg btn-primary m-2 pl-4 pr-4\">Find Nearby Shops</button>\n    <span class=\"h3 font-weight-light m-2\">/</span>\n    <button [routerLink]=\"['myshops']\" class=\"btn-lg btn-success m-2 pl-4 pr-4\">Go to My Shops</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.shopsImages = [
            "../../../assets/shop_images/shop1.jpg",
            "../../../assets/shop_images/shop2.jpg",
            "../../../assets/shop_images/shop3.jpg",
            "../../../assets/shop_images/shop4.jpg"
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-header {\r\n  width: inherit;\r\n  border-bottom-style: solid;\r\n  border-bottom-color: rgba(0, 96, 250, 0.1);\r\n  border-bottom-width: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow border-success mx-auto mt-5 mb-3\" style=\"width: 500px;\">\n\n  <div class=\"sign-up-header mb-3\">\n    <img class=\"m-3\" src=\"../../../assets/logo.png\" style=\"width: 64px;\" alt=\"Shoppy logo\">\n    <h3 class=\"d-inline text-justify font-weight-light m-3\">Log In</h3>\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-user mr-2\"></i>Username :</span>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-key mr-2\"></i>Password :</span>\n    </div>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <button (click)=\"onLoginSubmit()\" class=\"m-5 btn-primary rounded p-2\">Log In</button>\n\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.user.name + ", you are now logged In", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
                console.log(data);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger',
                    timeout: 3000 });
                _this.clearForm();
            }
        });
    };
    LoginComponent.prototype.clearForm = function () {
        this.username = '';
        this.password = '';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/myshops/myshops.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/myshops/myshops.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n@media(max-width: 50rem){\r\n  .card-container{\r\n    justify-content: center;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/myshops/myshops.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/myshops/myshops.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"numberOfShops != 0\" class=\"container card-container d-flex flex-row flex-wrap\">\n  <div *ngFor=\"let shop of myShops.myShops\" class=\"card shadow m-4\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"{{ shop.picture }}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"><i class=\"fab fa-shopware mr-3\"></i>{{ shop.name }}</h5>\n      <p class=\"card-text ml-3\"><i class=\"fas fa-building mr-3 mt-3\"></i>{{ shop.city }}</p>\n      <p class=\"card-text ml-3\"><i class=\"fas fa-road mr-3\"></i>Distance Away: {{ shop.distanceAway }}</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item ml-3\"><i class=\"fas fa-at mr-3\"></i>{{ shop.email }}</li>\n    </ul>\n    <div class=\"card-body d-flex flex-row justify-content-end align-items-center\">\n      <i class=\"far fa-heart mr-3 icon text-danger\"></i>\n      <button (click)=\"unLike(shop)\" class=\"btn btn-danger mr-2\">unLike</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/myshops/myshops.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/myshops/myshops.component.ts ***!
  \*********************************************************/
/*! exports provided: MyshopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshopsComponent", function() { return MyshopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyshopsComponent = /** @class */ (function () {
    function MyshopsComponent(shopService, authService, router) {
        this.shopService = shopService;
        this.authService = authService;
        this.router = router;
        this.myShops = {
            success: false,
            numberOfShops: 0,
            myShops: []
        };
    }
    MyshopsComponent.prototype.ngOnInit = function () {
        this.authService.user = JSON.parse(localStorage.getItem('user'));
        this.loadMyShops();
    };
    MyshopsComponent.prototype.loadMyShops = function () {
        var _this = this;
        if (this.authService.user) {
            this.shopService.getMyShops().subscribe(function (data) {
                console.log(data.myShops);
                _this.myShops.success = data.success;
                _this.myShops.numberOfShops = data.numberOfShops;
                _this.myShops.myShops = data.myShops;
                for (var i = 0; i < _this.myShops.myShops.length; i++) {
                    _this.myShops.myShops[i]["distanceAway"] = data.distances[i];
                }
            }, function (err) { console.log(err); });
        }
    };
    MyshopsComponent.prototype.unLike = function (shop) {
        var _this = this;
        this.shopService.unLikeShop(shop).subscribe(function (data) {
            if (data.success) {
                _this.myShops.myShops.filter(function (shop) { return !_this.myShops.myShops.includes(shop); });
                alert(shop.name + " is unliked!");
            }
        }, function (err) { console.log(err); });
        this.loadMyShops();
    };
    MyshopsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myshops',
            template: __webpack_require__(/*! ./myshops.component.html */ "./src/app/components/myshops/myshops.component.html"),
            styles: [__webpack_require__(/*! ./myshops.component.css */ "./src/app/components/myshops/myshops.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MyshopsComponent);
    return MyshopsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  box-shadow: 0 4px gray;\r\n  height: 80px;\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: black;\r\n  border-radius: 8px;\r\n}\r\n\r\n.divider {\r\n  height: 80px;\r\n  border-right: 1px solid rgb(255, 255, 255);\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  #navbar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 170px;\r\n  }\r\n\r\n  #auth-links {\r\n    margin: 5px auto 0 auto !important; \r\n  }\r\n\r\n  #nav-links {\r\n    margin: 5px auto 0 auto !important;\r\n  }\r\n  \r\n  #brand {\r\n    margin: 10px auto 0px auto !important; \r\n  }\r\n}\r\n\r\n@media (min-width: 850px) {\r\n  #navbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"d-flex align-items-center navbar-dark bg-dark\" id=\"navbar\">\n\n  <div class=\"mr-4 ml-4\" id=\"brand\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img [routerLink]=\"['']\" src=\"../../../assets/logo.png\" style=\"width: 48px; height: 48px;\" alt=\"Perishop logo\">\n    </a>\n    <h4 class=\"text-white lead d-inline\">Shoppy</h4>\n    <span class=\"ml-3 divider\"></span>\n  </div>\n\n  <div *ngIf=\"authService.loggedIn()\" id=\"nav-links\">\n    <a [routerLink]=\"['nearby']\" class=\"btn\">\n      <i class=\"fas fa-map-marker-alt mr-2\"></i>Nearby Shops</a>\n    <a [routerLink]=\"['myshops']\" class=\"btn\">\n      <i class=\"fas fa-shopping-bag mr-2\"></i>My Shops</a>\n  </div>\n\n  <div class=\"ml-auto mr-4\" id=\"auth-links\">\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['login']\" class=\"btn\">Log In\n      <i class=\"fas fa-sign-in-alt ml-2\"></i>\n    </a>\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['signup']\" class=\"btn\">Sign Up\n      <i class=\"fas fa-user-plus ml-2\"></i>\n    </a>\n    <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['user']\" class=\"btn\">\n      <i class=\"fas fa-user mr-2\"></i>Profile</a>\n    <a *ngIf=\"authService.loggedIn()\" (click) = \"onLogOut()\" [routerLink]=\"['']\" class=\"btn\">Log Out\n      <i class=\"fas fa-sign-out-alt ml-2\"></i>\n    </a>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.authService.logOut();
        this.flashMessage.show('You are now logged Out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/nearbyshops/nearbyshops.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/nearbyshops/nearbyshops.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n@media(max-width: 50rem){\r\n  .card-container{\r\n    justify-content: center;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/nearbyshops/nearbyshops.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nearbyshops/nearbyshops.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <label class=\"m-2 h5\" for=\"radius\"><i class=\"fas fa-search mr-2\"></i>Search by radius :</label>\n  <select class=\"m-2\" [(ngModel)]=\"radius\" name=\"radius\" id=\"radius\">\n    <option value=\"1\">1 Km</option>\n    <option value=\"2\">2 Km</option>\n    <option value=\"5\">5 Km (default)</option>\n    <option value=\"10\">10 Km</option>\n    <option value=\"20\">20 Km</option>\n    <option value=\"100\">100 Km</option>\n  </select>\n  <button (click)=\"getShops()\" class=\"btn btn-info m-2 pl-4 pr-4\">Search</button>\n</div>\n\n<div *ngIf=\"numberOfShops != 0\" class=\"container card-container d-flex flex-row flex-wrap\">\n  <div *ngFor=\"let shop of nearbyShops.nearbyShops\" class=\"card shadow m-4\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"{{ shop.picture }}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"><i class=\"fab fa-shopware mr-3\"></i>{{ shop.name }}</h5>\n      <p class=\"card-text ml-3\"><i class=\"fas fa-building mr-3 mt-3\"></i>{{ shop.city }}</p>\n      <p class=\"card-text ml-3\"><i class=\"fas fa-road mr-3\"></i>Distance Away: {{ shop.distanceAway }} Km</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item ml-3\"><i class=\"fas fa-at mr-3\"></i>{{ shop.email }}</li>\n    </ul>\n    <div class=\"card-body d-flex flex-row justify-content-center\">\n\n      <div class=\"d-flex flex-row align-items-center justify-content-start mr-2\">\n        <i class=\"fas fa-heart m-2 icon text-primary\"></i>\n        <button (click)=\"onLikeShop(shop)\" class=\"btn btn-primary m-2\">Like</button>\n      </div>\n      <div class=\"d-flex flex-row align-items-center\">\n        <span class=\"h2\">|</span>\n      </div>\n      <div class=\"d-flex flex-row align-items-center justify-content-end ml-2\">\n        <i class=\"fas fa-thumbs-down m-2 icon text-danger\"></i><button (click)=\"onDislikeShop(shop)\" class=\"btn btn-danger m-2\">Dislike</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/nearbyshops/nearbyshops.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nearbyshops/nearbyshops.component.ts ***!
  \*****************************************************************/
/*! exports provided: NearbyshopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyshopsComponent", function() { return NearbyshopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NearbyshopsComponent = /** @class */ (function () {
    function NearbyshopsComponent(shopService, flashMessage, authService) {
        this.shopService = shopService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.nearbyShops = {
            success: false,
            numberOfShops: 0,
            nearbyShops: []
        };
        this.radius = 5;
    }
    NearbyshopsComponent.prototype.ngOnInit = function () {
        this.authService.user = JSON.parse(localStorage.getItem('user'));
        this.getUserLocation();
    };
    NearbyshopsComponent.prototype.getUserLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.shopService.userLocation.userLatitude = Number(position.coords.longitude.toFixed(5));
            _this.shopService.userLocation.userLongitude = Number(position.coords.latitude.toFixed(5));
        });
        this.shopService.locationLoaded = true;
    };
    NearbyshopsComponent.prototype.getShops = function () {
        var _this = this;
        this.shopService.getNearbyShops(this.radius).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.numberOfShops + " Shops found! Loading...", { cssClass: 'alert-success', timeout: 3000 });
                console.log(data);
                _this.nearbyShops.success = data.success;
                _this.nearbyShops.numberOfShops = data.numberOfShops;
                _this.nearbyShops.nearbyShops = data.nearbyShops;
                for (var i = 0; i < _this.nearbyShops.nearbyShops.length; i++) {
                    _this.nearbyShops.nearbyShops[i]["distanceAway"] = data.distances[i];
                    _this.isTimeExpried(_this.nearbyShops.nearbyShops[i]._id);
                }
            }
            else {
                _this.flashMessage.show('No shops found, please increase radius!', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) { console.log(err); });
    };
    NearbyshopsComponent.prototype.onDislikeShop = function (shop) {
        var _this = this;
        var date = new Date().getHours();
        this.shopService.onDislikeShop(shop._id, date).subscribe(function (data) {
            console.log(data);
            _this.nearbyShops.nearbyShops = _this.nearbyShops.nearbyShops.filter(function (item) { return item._id != shop._id; });
            alert(shop.name + " " + data.msg);
            _this.isTimeExpried(shop._id);
        }, function (err) { console.log(err); });
    };
    NearbyshopsComponent.prototype.onLikeShop = function (shop) {
        this.shopService.onLikeShop(shop._id).subscribe(function (data) {
            console.log(data);
            alert(shop.name + " " + data.msg);
        }, function (err) { console.log(err); });
    };
    NearbyshopsComponent.prototype.isTimeExpried = function (shopId) {
        var _this = this;
        this.shopService.isDisliked(shopId).subscribe(function (res) {
            console.log(res);
            if (res.disliked && !res.timeExpired) {
                _this.nearbyShops.nearbyShops = _this.nearbyShops.nearbyShops.filter(function (shop) { return shop._id != shopId; });
                console.log(_this.nearbyShops.nearbyShops);
            }
        });
    };
    NearbyshopsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nearbyshops',
            template: __webpack_require__(/*! ./nearbyshops.component.html */ "./src/app/components/nearbyshops/nearbyshops.component.html"),
            styles: [__webpack_require__(/*! ./nearbyshops.component.css */ "./src/app/components/nearbyshops/nearbyshops.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NearbyshopsComponent);
    return NearbyshopsComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-header {\r\n  width: inherit;\r\n  border-bottom-style: solid;\r\n  border-bottom-color: rgba(0, 96, 250, 0.1);\r\n  border-bottom-width: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow border-info mx-auto mt-5 mb-3\" style=\"width: 500px;\">\n\n  <div class=\"sign-up-header mb-3\">\n    <img class=\"m-3\" src=\"../../../assets/logo.png\" style=\"width: 64px;\" alt=\"Shoppy logo\">\n    <h3 class=\"d-inline text-justify font-weight-light m-3\">Sign Up</h3>\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-id-card mr-2\"></i>Name :</span>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-user mr-2\"></i>Username :</span>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-envelope mr-2\"></i>Email :</span>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <div class=\"input-group m-3 mx-auto\" style=\"width: 90%\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-default\"><i class=\"fas fa-key mr-2\"></i>Password :</span>\n    </div>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n  </div>\n\n  <button (click)='onSignUpSubmit()' class=\"m-5 btn-success rounded p-2\">Sign Up</button>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUpSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateSignUp(user)) {
            this.flashMessage.show('Please Fill in all Fields !', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Email validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a Valid Email !', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Sign up User
        this.authService.signUpUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashMessage.show(data.msg + " ", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"user\" class=\"card border-info mb-3 mx-auto\" style=\"max-width: 18rem;\">\n  <div class=\"card-header\"><i class=\"fas fa-id-card mr-2\"></i> Welcome : {{ user.name }}</div>\n  <div class=\"card-body text-info\">\n    \n    <h5 class=\"card-title\">Info :</h5>\n    <p class=\"card-text\"><i class=\"fas fa-user mr-2\"></i> Username: {{ user.username }}</p>\n    <p class=\"card-text\"><i class=\"fas fa-envelope mr-2\"></i> Email: {{ user.email }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(authServicee, router) {
        this.authServicee = authServicee;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signUpUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/signup', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/login', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.getItem('id_token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/shop.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/shop.service.ts ***!
  \******************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopService = /** @class */ (function () {
    function ShopService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.locationLoaded = false; //default false
        this.userLocation = {
            userLatitude: 0,
            userLongitude: 0,
            radius: 5 //default 5Km
        };
    }
    ShopService.prototype.getNearbyShops = function (radius) {
        if (this.locationLoaded) {
            this.userLocation.radius = radius;
            console.log(this.userLocation);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.append('Content-Type', 'application/json');
            return this.http.get("http://localhost:3000/shops/nearby/" + this.userLocation.userLatitude + "-" + this.userLocation.userLongitude + "-" + this.userLocation.radius, { headers: headers });
        }
    };
    ShopService.prototype.onDislikeShop = function (shopId, date) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/shops/nearby/d/" + this.authService.user.username + "-" + shopId + "-" + date, { headers: headers });
    };
    ShopService.prototype.onLikeShop = function (shopId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/shops/nearby/l/" + this.authService.user.username + "-" + shopId, { headers: headers });
    };
    ShopService.prototype.getMyShops = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/shops/myshops/" + this.authService.user.username, { headers: headers });
    };
    ShopService.prototype.unLikeShop = function (shop) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/shops/myshops/ul/" + this.authService.user.username + "-" + shop._id, { headers: headers });
    };
    ShopService.prototype.isDisliked = function (shopId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/shops/nearby/isd/" + this.authService.user.username + "-" + shopId, { headers: headers });
    };
    ShopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateSignUp = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gamer\Desktop\web_code_challenge\perishop\client-perishop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map