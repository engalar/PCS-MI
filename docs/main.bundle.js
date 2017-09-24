webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_module__ = __webpack_require__("./src/app/landing-page/landing-page.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wi_page_wi_page_module__ = __webpack_require__("./src/app/wi-page/wi-page.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__wi_page_wi_page_module__["a" /* WiPageModule */],
            __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_module__["a" /* LandingPageModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/landing-page/base-widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmiProcessType; });
var EmiProcessType;
(function (EmiProcessType) {
    EmiProcessType[EmiProcessType["Cutting"] = 0] = "Cutting";
    EmiProcessType[EmiProcessType["Embroidery"] = 1] = "Embroidery";
    EmiProcessType[EmiProcessType["Washing"] = 2] = "Washing";
    EmiProcessType[EmiProcessType["Print"] = 3] = "Print";
    EmiProcessType[EmiProcessType["Sewing"] = 4] = "Sewing";
    EmiProcessType[EmiProcessType["Finishing"] = 5] = "Finishing";
})(EmiProcessType || (EmiProcessType = {}));
//# sourceMappingURL=base-widget.js.map

/***/ }),

/***/ "./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Cutting Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            Broken Yarn risk 100% in White color\r\n        </div>\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            100% PI focus to inspec tion broken yarn at arm hole and side seam parts\r\n        </div>\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">1) This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Show more\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuttingProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CuttingProcessWidgetComponent = (function () {
    function CuttingProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Cutting;
        // this.y = 245;
        // this.x = 305;
    }
    CuttingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return CuttingProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CuttingProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CuttingProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CuttingProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CuttingProcessWidgetComponent.prototype, "x", void 0);
CuttingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cutting-process-widget',
        template: __webpack_require__("./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CuttingProcessWidgetComponent);

//# sourceMappingURL=cutting-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Embroidery Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Show more\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbroideryProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmbroideryProcessWidgetComponent = (function () {
    function EmbroideryProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Embroidery;
        // this.y = 245;
        // this.x = 305;
    }
    EmbroideryProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return EmbroideryProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], EmbroideryProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], EmbroideryProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], EmbroideryProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], EmbroideryProcessWidgetComponent.prototype, "x", void 0);
EmbroideryProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-embroidery-process-widget',
        template: __webpack_require__("./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], EmbroideryProcessWidgetComponent);

//# sourceMappingURL=embroidery-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Finishing Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            Broken Yarn risk 100% in White color\r\n        </div>\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            100% PI focus to inspec tion broken yarn at arm hole and side seam parts\r\n        </div>\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">1) This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Show more\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishingProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinishingProcessWidgetComponent = (function () {
    function FinishingProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Finishing;
        // this.y = 245;
        // this.x = 305;
    }
    FinishingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return FinishingProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FinishingProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FinishingProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FinishingProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], FinishingProcessWidgetComponent.prototype, "x", void 0);
FinishingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-finishing-process-widget',
        template: __webpack_require__("./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], FinishingProcessWidgetComponent);

//# sourceMappingURL=finishing-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"emi-svg-line\" #viewport>\r\n  <div [ngSwitch]=\"p.processType\" *ngFor=\"let p of processS\" style=\"position: absolute\" [style.left.px]=\"p.x\"\r\n       [style.top.px]=\"p.y\">\r\n    <app-sew-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"4\"></app-sew-process-widget>\r\n    <app-cutting-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"0\"></app-cutting-process-widget>\r\n    <app-embroidery-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"1\"></app-embroidery-process-widget>\r\n    <app-print-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"3\"></app-print-process-widget>\r\n    <app-washing-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"2\"></app-washing-process-widget>\r\n    <app-finishing-process-widget [width]=\"p.width\" [height]=\"p.height\" *ngSwitchCase=\"5\"></app-finishing-process-widget>\r\n    <div *ngSwitchDefault>ooh your component is missing!</div>\r\n  </div>\r\n  <svg width=\"100%\" height=\"100%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><g app-svg-link *ngFor=\"let link of linkPaths\" [link]=\"link\"></g></svg>\r\n</div>\r\n<app-order-search></app-order-search>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #f5f5f7;\n  margin-top: 36px;\n  height: calc(100% - 35px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeViewComponent = (function () {
    function HomeViewComponent() {
    }
    HomeViewComponent.prototype.ngAfterViewInit = function () {
        console.log(this.viewPort.nativeElement.clientHeight);
        console.log(window.document.body.clientHeight);
    };
    HomeViewComponent.prototype.ngOnInit = function () {
        this.processS = [
            {
                x: 20,
                y: 145,
                width: 150,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Cutting
            },
            {
                x: 200,
                y: 0,
                width: 250,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Embroidery
            },
            {
                x: 200,
                y: 280,
                width: 250,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Print
            },
            {
                x: 400,
                y: 145,
                width: 250,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Sewing
            },
            {
                x: 600,
                y: 145,
                width: 350,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Washing
            },
            {
                x: 800,
                y: 145,
                width: 450,
                height: 300,
                processType: __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Finishing
            }
        ];
        this.linkPaths = [
            this.extracted(this.processS[0], this.processS[1], true),
            this.extracted(this.processS[0], this.processS[2], true),
            this.extracted(this.processS[1], this.processS[3], false),
            this.extracted(this.processS[2], this.processS[3], true),
            this.extracted(this.processS[3], this.processS[4], true),
            this.extracted(this.processS[4], this.processS[5], true),
        ];
    };
    HomeViewComponent.prototype.extracted = function (p2, p1, active) {
        return {
            fx: p2.x + p2.width,
            fy: p2.y + p2.height + 26 / 2 - 2,
            tx: p1.x - 10,
            ty: p1.y + p1.height + 26 / 2 - 2,
            active: active
        };
    };
    return HomeViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('viewport'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], HomeViewComponent.prototype, "viewPort", void 0);
HomeViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-view',
        template: __webpack_require__("./src/app/landing-page/home-view/home-view.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/home-view/home-view.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HomeViewComponent);

var _a;
//# sourceMappingURL=home-view.component.js.map

/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_view_home_view_component__ = __webpack_require__("./src/app/landing-page/home-view/home-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_search_order_search_component__ = __webpack_require__("./src/app/landing-page/order-search/order-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sew_process_widget_sew_process_widget_component__ = __webpack_require__("./src/app/landing-page/sew-process-widget/sew-process-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_link_svg_link_component__ = __webpack_require__("./src/app/landing-page/svg-link/svg-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cutting_process_widget_cutting_process_widget_component__ = __webpack_require__("./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__print_process_widget_print_process_widget_component__ = __webpack_require__("./src/app/landing-page/print-process-widget/print-process-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__embroidery_process_widget_embroidery_process_widget_component__ = __webpack_require__("./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__washing_process_widget_washing_process_widget_component__ = __webpack_require__("./src/app/landing-page/washing-process-widget/washing-process-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__finishing_process_widget_finishing_process_widget_component__ = __webpack_require__("./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'PCS-MI/home', component: __WEBPACK_IMPORTED_MODULE_2__home_view_home_view_component__["a" /* HomeViewComponent */] },
    { path: 'PCS-MI', redirectTo: 'PCS-MI/home', pathMatch: 'full' },
];
var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    return LandingPageModule;
}());
LandingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_view_home_view_component__["a" /* HomeViewComponent */], __WEBPACK_IMPORTED_MODULE_3__order_search_order_search_component__["a" /* OrderSearchComponent */], __WEBPACK_IMPORTED_MODULE_6__sew_process_widget_sew_process_widget_component__["a" /* SewProcessWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__svg_link_svg_link_component__["a" /* SvgLinkComponent */], __WEBPACK_IMPORTED_MODULE_8__cutting_process_widget_cutting_process_widget_component__["a" /* CuttingProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_9__print_process_widget_print_process_widget_component__["a" /* PrintProcessWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_10__embroidery_process_widget_embroidery_process_widget_component__["a" /* EmbroideryProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_11__washing_process_widget_washing_process_widget_component__["a" /* WashingProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_12__finishing_process_widget_finishing_process_widget_component__["a" /* FinishingProcessWidgetComponent */]
        ],
    })
], LandingPageModule);

//# sourceMappingURL=landing-page.module.js.map

/***/ }),

/***/ "./src/app/landing-page/landing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingService = (function () {
    function LandingService() {
    }
    LandingService.prototype.getHistoryOrders = function () {
        return Promise.resolve([
            { id: 'HistoryJO' + Math.random(), url: 'path/to/his1' },
            { id: 'HistoryJO' + Math.random(), url: 'path/to/his1' },
            { id: 'HistoryJO' + Math.random(), url: 'path/to/his1' },
            { id: 'HistoryJO' + Math.random(), url: 'path/to/his1' },
            { id: 'HistoryJO' + Math.random(), url: 'path/to/his1' },
        ]);
    };
    LandingService.prototype.getProposalOrders = function (state) {
        var re = [];
        for (var _i = 0, state_1 = state; _i < state_1.length; _i++) {
            var c = state_1[_i];
            re.push({ id: 'JO' + c, color: 'color' + c });
        }
        return Promise.resolve(re);
        /*
        return Promise.resolve([
          {id: 'JO3453454', color: 'color1'},
          {id: 'JO3453433', color: 'color2'},
          {id: 'JO3453422', color: 'color3'},
        ]);*/
    };
    return LandingService;
}());
LandingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LandingService);

//# sourceMappingURL=landing.service.js.map

/***/ }),

/***/ "./src/app/landing-page/order-search/order-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;display: block;z-index: 999\">\r\n  <span style=\"margin-left: 30px;font-size: x-large;\">POC</span>\r\n  <svg class=\"emi-search-icon\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 250.313 250.313\" style=\"enable-background:new 0 0 250.313 250.313;\" xml:space=\"preserve\">\r\n<g id=\"Search\">\r\n\t<path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76\r\n\t\tc10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911\r\n\t\tc0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38\r\n\t\tc8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146\r\n\t\tc-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236\r\n\t\tC170.146,140.044,140.043,170.146,102.911,170.146z\"/>\r\n</g>\r\n</svg>\r\n  <form style=\"float: right\">\r\n    <div class=\"input-group\">\r\n      <input mdInput type=\"text\" class=\"form-control emi-search-input\" placeholder=\"Search order here\"\r\n             [mdAutocomplete]=\"auto\"\r\n             [formControl]=\"stateCtrl\">\r\n      <md-autocomplete #auto=\"mdAutocomplete\">\r\n        <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.id\">\r\n          <span>{{ state.id }}</span>\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/landing-page/order-search/order-search.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-search-icon {\n  width: 45px;\n  height: 32px;\n  float: right;\n  left: calc(100% - 48px);\n  position: absolute;\n  z-index: 88; }\n\n.emi-search-input {\n  width: 300px;\n  border-radius: 20px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/order-search/order-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_service__ = __webpack_require__("./src/app/landing-page/landing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switch__ = __webpack_require__("./node_modules/rxjs/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OrderSearchComponent = (function () {
    function OrderSearchComponent(landingService) {
        var _this = this;
        this.landingService = landingService;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null).throttleTime(500).distinctUntilChanged().debounceTime(200)
            .switchMap(function (state) { return state ? _this.landingService.getProposalOrders(state) : Promise.resolve(_this.hisStates.slice()); });
    }
    OrderSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.landingService.getHistoryOrders().then(function (value) { return _this.hisStates = value; });
    };
    return OrderSearchComponent;
}());
OrderSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-search',
        template: __webpack_require__("./src/app/landing-page/order-search/order-search.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/order-search/order-search.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__landing_service__["a" /* LandingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__landing_service__["a" /* LandingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__landing_service__["a" /* LandingService */]) === "function" && _a || Object])
], OrderSearchComponent);

var _a;
//# sourceMappingURL=order-search.component.js.map

/***/ }),

/***/ "./src/app/landing-page/print-process-widget/print-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Print Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Show more\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/print-process-widget/print-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/print-process-widget/print-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintProcessWidgetComponent = (function () {
    function PrintProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Print;
        // this.y = 245;
        // this.x = 305;
    }
    PrintProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return PrintProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PrintProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PrintProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PrintProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PrintProcessWidgetComponent.prototype, "x", void 0);
PrintProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-print-process-widget',
        template: __webpack_require__("./src/app/landing-page/print-process-widget/print-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/print-process-widget/print-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], PrintProcessWidgetComponent);

//# sourceMappingURL=print-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/sew-process-widget/sew-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Sewing Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n        <!--<div class=\"card-text\">\r\n          <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n       width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n  <path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n      c0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n      s0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n  <path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n      c-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n      C8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n      C0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n      C7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n  </svg>\r\n          This is an alert\r\n        </div>\r\n        <div class=\"card-text\">\r\n          <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n       width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n  <path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n      c0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n      s0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n  <path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n      c-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n      C8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n      C0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n      C7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n  </svg>\r\n          This is an alert\r\n        </div>\r\n        <div class=\"card-text\">\r\n          <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n       width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n  <path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n      c0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n      s0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n  <path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n      c-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n      C8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n      C0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n      C7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n  </svg>\r\n          This is an alert\r\n        </div>-->\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n        <div class=\"card-text\">To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt\r\n            dipping !!\r\n        </div>\r\n        <div class=\"card-text\">New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!\r\n        </div>\r\n        <div class=\"card-text\">Added \"vanity label\" at under french front placket. The Label need to be turned out after\r\n            gmt folded !!\r\n        </div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Close\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/sew-process-widget/sew-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/sew-process-widget/sew-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SewProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SewProcessWidgetComponent = (function () {
    function SewProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Sewing;
        // this.y = 245;
        // this.x = 305;
    }
    SewProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return SewProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SewProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SewProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SewProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SewProcessWidgetComponent.prototype, "x", void 0);
SewProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sew-process-widget',
        template: __webpack_require__("./src/app/landing-page/sew-process-widget/sew-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/sew-process-widget/sew-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], SewProcessWidgetComponent);

//# sourceMappingURL=sew-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/svg-link/svg-link.component.html":
/***/ (function(module, exports) {

module.exports = "<!--3 line-->\r\n<svg:line [attr.x1]=\"point1.x\" [attr.y1]=\"point1.y\" [attr.x2]=\"point2.x\" [attr.y2]=\"point2.y\" stroke-width=\"1\"\r\n          [attr.stroke]=\"link.active?'blue':'gray'\" xmlns:svg=\"http://www.w3.org/2000/svg\"/>\r\n<svg:line [attr.x1]=\"point2.x\" [attr.y1]=\"point2.y\" [attr.x2]=\"point3.x\" [attr.y2]=\"point3.y\" stroke-width=\"1\"\r\n          [attr.stroke]=\"link.active?'blue':'gray'\" xmlns:svg=\"http://www.w3.org/2000/svg\"/>\r\n<svg:line [attr.x1]=\"point3.x\" [attr.y1]=\"point3.y\" [attr.x2]=\"point4.x\" [attr.y2]=\"point4.y\" stroke-width=\"1\"\r\n          [attr.stroke]=\"link.active?'blue':'gray'\" xmlns:svg=\"http://www.w3.org/2000/svg\"/>\r\n<!--2 circle-->\r\n<svg:circle xmlns:svg=\"http://www.w3.org/2000/svg\" [attr.cx]=\"point2.x\" [attr.cy]=\"point2.y\" r=\"2\" fill=\"green\"/>\r\n<svg:circle xmlns:svg=\"http://www.w3.org/2000/svg\" [attr.cx]=\"point3.x\" [attr.cy]=\"point3.y\" r=\"2\" fill=\"green\"/>\r\n<!--one arrow-->\r\n<svg:path [attr.transform]=\"transform\" d=\"M8.563,0.398l-7.879,4.55c-0.388,0.223-0.832-0.19-0.635-0.592l2.021-4.152c0.061-0.125,0.061-0.272,0-0.397\r\n\tL0.048-4.345c-0.196-0.403,0.248-0.816,0.635-0.592l7.879,4.549C8.865-0.213,8.865,0.224,8.563,0.398\"\r\n          [attr.fill]=\"link.active?'blue':'gray'\"\r\n          xmlns:svg=\"http://www.w3.org/2000/svg\"/>\r\n"

/***/ }),

/***/ "./src/app/landing-page/svg-link/svg-link.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/svg-link/svg-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgLinkComponent = (function () {
    function SvgLinkComponent() {
        this.point1 = {};
        this.point2 = {};
        this.point3 = {};
        this.point4 = {};
        this.transform = 'translate(1 1)';
    }
    SvgLinkComponent.prototype.ngOnInit = function () {
        this.point1.x = this.link.fx;
        this.point2.x = (this.link.fx + this.link.tx) / 2;
        this.point3.x = (this.link.fx + this.link.tx) / 2;
        this.point4.x = this.link.tx;
        this.point1.y = this.link.fy;
        this.point2.y = this.link.fy;
        this.point3.y = this.link.ty;
        this.point4.y = this.link.ty;
        this.transform = "translate(" + this.point4.x + " " + this.point4.y + ")";
    };
    return SvgLinkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__base_widget__["LinkPath"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__base_widget__["LinkPath"]) === "function" && _a || Object)
], SvgLinkComponent.prototype, "link", void 0);
SvgLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-svg-link]',
        template: __webpack_require__("./src/app/landing-page/svg-link/svg-link.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/svg-link/svg-link.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], SvgLinkComponent);

var _a;
//# sourceMappingURL=svg-link.component.js.map

/***/ }),

/***/ "./src/app/landing-page/washing-process-widget/washing-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.top]=\"y+'px'\" [style.left]=\"x+'px'\" [style.width]=\"width+'px'\" [style.height]=\"height+'px'\" class=\"card\"\r\n     style=\"width: 20rem;position: absolute\">\r\n    <div class=\"emi-svg-pic\">\r\n        <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t  viewBox=\"0 0 150 100\" enable-background=\"new 0 0 595.28 841.89\" xml:space=\"preserve\">\r\n<path fill=\"#FFFFFF\" d=\"M0.263,3.414C0.263,1.558,2.232,0,4.638,0h140.981c2.406,0,4.375,1.538,4.375,3.395\"/>\r\n<path fill=\"none\" stroke=\"#EFEEEE\" stroke-miterlimit=\"10\" d=\"M0.263,3.664c0-1.856,1.969-3.164,4.375-3.164h140.981\r\n\tc2.406,0,4.375,1.413,4.375,3.27\"/>\r\n<path fill=\"#92BCE5\" d=\"M149.994,3.453c0-1.856-1.969-3.375-4.375-3.375\"/>\r\n<path fill=\"#92BCE5\" d=\"M147,0H4.638C2.232,0,1,1.597,1,3.453V99h149V3\"/>\r\n<text transform=\"matrix(1.2963 0 0 1 20.3418 83.7227)\" fill=\"#FFFFFF\" font-family=\"'SegoeUI'\" font-size=\"12.15\">Washing Info</text>\r\n<line fill=\"#FCE7E7\" x1=\"1\" y1=\"99\" x2=\"150\" y2=\"99\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM75.274,37.729C74.843,37.741,56.344,38,55.583,38c-0.002,0-0.005,0-0.008,0c-20.234,1-27.756,7.948-35.281,20.706\r\n\tc-0.255,0.433-0.21,1.093,0.126,1.493C20.753,60.602,21.33,61,21.947,61h61.992c0.499,0,0.974-0.416,1.315-0.697\r\n\tc0.346-0.277,0.523-0.778,0.5-1.164L83.436,24.2c-0.047-0.746-0.848-1.2-1.814-1.2H41.975C40.972,23,40,23.235,40,24.012v5.37\r\n\tC40,30.156,40.972,31,41.975,31H68\"/>\r\n<path fill=\"#7CC8BB\" d=\"M66,53H46.001c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78\r\n\tc1.004,0,1.816-0.693,1.816-1.467c0-0.775-0.307-1.441-1.312-1.441\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM64.781,53h-18.78c-1.007,0-1.817,0.725-1.817,1.5c0,0.773,0.81,1.5,1.817,1.5h18.78c1.004,0,1.816-0.727,1.816-1.5\r\n\tC66.597,53.725,65.785,53,64.781,53z\"/>\r\n<path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\r\n\tM69.403,54.5c0,0.773,0.813,1.5,1.816,1.5h4.063c1.003,0,1.816-0.727,1.816-1.5c0-0.775-0.813-1.5-1.816-1.5h-4.063\r\n\tC70.215,53,69.403,53.725,69.403,54.5z\"/>\r\n<g opacity=\"0.2\">\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<rect id=\"SVGID_1_\" x=\"127\" y=\"6\" width=\"16\" height=\"12\"/>\r\n\t\t</defs>\r\n\t\t<clipPath id=\"SVGID_2_\">\r\n\t\t\t<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\r\n\t\t</clipPath>\r\n\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#FFFFFF\" d=\"M141.357,17.097L127.967,6.963C127.465,6.575,127.678,6,128.389,6h13.248\r\n\t\t\tC142.078,6,143,6.103,143,6.442v10.221C143,17.209,141.859,17.484,141.357,17.097\"/>\r\n\t</g>\r\n</g>\r\n</svg>\r\n    </div>\r\n    <div class=\"card-block emi-alert-info\">\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            Broken Yarn risk 100% in White color\r\n        </div>\r\n        <div class=\"card-text\">\r\n            <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t width=\"8.552px\" height=\"7.92px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n\tc0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n\ts0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n\tc-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n\tC8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n\tC0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n\tC7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n            100% PI focus to inspec tion broken yarn at arm hole and side seam parts\r\n        </div>\r\n    </div>\r\n    <div class=\"card-block emi-nor-info\">\r\n        <div class=\"card-text\">1) This is \"TAILORED PRO GRAM\" - New NOS Pro gram starts from 2017, used same Trims as\r\n            Regular order !! REPEAT OF S17U00549 !!\r\n        </div>\r\n        <div class=\"card-text\">This is WRINKLE FREE ORDER (NON TAPE) order !!</div>\r\n    </div>\r\n    <div class=\"card-block\" style=\"border: solid 1px #dccbcb;\r\n\tbackground-color: #fff8f8;\r\n\ttext-align: center;\">Show more\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/washing-process-widget/washing-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-pic {\n  width: 100%;\n  height: 100%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/washing-process-widget/washing-process-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WashingProcessWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_widget__ = __webpack_require__("./src/app/landing-page/base-widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WashingProcessWidgetComponent = (function () {
    function WashingProcessWidgetComponent() {
        this.processType = __WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* EmiProcessType */].Washing;
        // this.y = 245;
        // this.x = 305;
    }
    WashingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return WashingProcessWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], WashingProcessWidgetComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], WashingProcessWidgetComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], WashingProcessWidgetComponent.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], WashingProcessWidgetComponent.prototype, "x", void 0);
WashingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-washing-process-widget',
        template: __webpack_require__("./src/app/landing-page/washing-process-widget/washing-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/washing-process-widget/washing-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], WashingProcessWidgetComponent);

//# sourceMappingURL=washing-process-widget.component.js.map

/***/ }),

/***/ "./src/app/shared/image-view/image-view.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"data.url\" height=\"100%\" width=\"100%\">\r\n"

/***/ }),

/***/ "./src/app/shared/image-view/image-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shared/image-view/image-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImageViewComponent = (function () {
    function ImageViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImageViewComponent.prototype.ngOnInit = function () {
    };
    return ImageViewComponent;
}());
ImageViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-view',
        template: __webpack_require__("./src/app/shared/image-view/image-view.component.html"),
        styles: [__webpack_require__("./src/app/shared/image-view/image-view.component.sass")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, Object])
], ImageViewComponent);

var _a;
//# sourceMappingURL=image-view.component.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_view_video_view_component__ = __webpack_require__("./src/app/shared/video-view/video-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_view_image_view_component__ = __webpack_require__("./src/app/shared/image-view/image-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__video_view_video_view_component__["a" /* VideoViewComponent */], __WEBPACK_IMPORTED_MODULE_6__image_view_image_view_component__["a" /* ImageViewComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__video_view_video_view_component__["a" /* VideoViewComponent */], __WEBPACK_IMPORTED_MODULE_6__image_view_image_view_component__["a" /* ImageViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/shared/video-view/video-view.component.html":
/***/ (function(module, exports) {

module.exports = "<video width=\"320px\" height=\"200\" controls>\r\n  <source [src]=\"data.url\" type=\"video/mp4\">\r\n</video>\r\n"

/***/ }),

/***/ "./src/app/shared/video-view/video-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shared/video-view/video-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var VideoViewComponent = (function () {
    function VideoViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    VideoViewComponent.prototype.ngOnInit = function () {
    };
    return VideoViewComponent;
}());
VideoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video-view',
        template: __webpack_require__("./src/app/shared/video-view/video-view.component.html"),
        styles: [__webpack_require__("./src/app/shared/video-view/video-view.component.sass")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, Object])
], VideoViewComponent);

var _a;
//# sourceMappingURL=video-view.component.js.map

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\" >\r\n      <div>\r\n        <div class=\"card-block\">\r\n          <h3 align=\"center\">Collar WI Details </h3>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <app-garment-neck-tap-wi-widget></app-garment-neck-tap-wi-widget>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <app-mi-text-info-widget></app-mi-text-info-widget>\r\n      <app-mi-attachment-widget></app-mi-attachment-widget>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentNeckTapAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GarmentNeckTapAppComponent = (function () {
    function GarmentNeckTapAppComponent() {
    }
    GarmentNeckTapAppComponent.prototype.ngOnInit = function () {
    };
    return GarmentNeckTapAppComponent;
}());
GarmentNeckTapAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-neck-tap-app',
        template: __webpack_require__("./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.html"),
        styles: [__webpack_require__("./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], GarmentNeckTapAppComponent);

//# sourceMappingURL=garment-neck-tap-app.component.js.map

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n  viewBox=\"0 100 600 600\" style=\"enable-background:new 0 100 600 600;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{ stroke:#000000;stroke-miterlimit:10;}\r\n  .st1{ font-family:'MyriadPro-Regular';}\r\n  .st2{ font-size:21px;}\r\n  .st4{ fill:none;stroke:#000000;stroke-miterlimit:10;}\r\n</style>\r\n\r\n  <text xmlns=\"http://www.w3.org/2000/svg\"\r\n        xml:space=\"preserve\"\r\n        class=\"st0\"\r\n        *ngFor=\"let item of neckTapItems\"\r\n        [attr.y]=\"item.yValue\"  [attr.x]=\"item.xValue\">{{item.desc}}</text>\r\n\r\n<path d=\"M482.1,259.3c-1.3,5.4-1,10.8-0.1,16.2c0.3,1.6,1.5,0.9,2.2,0.7c1.6-0.4,2-0.1,1.3,1.4c-0.5,1.1-0.8,2.2-1.2,3.4\r\n\tc1.6,0.2,3-0.3,4.4-0.6c4.8-1,9.7-2,14.5-3.1c1.5-0.4,2-0.1,2.3,1.3c3.2,14.9,6.6,29.8,9.8,44.6c2.1,9.4,4.2,18.8,5.8,28.3\r\n\tc0.3,1.9,1.2,2.4,3,2.6c5.9,0.5,11.3,2.4,16,5.7c6.7,4.7,10.5,11.1,13.1,18.3c0.4,1.2-0.3,1.7-1.3,2.2c-4.6,2.2-9.5,3.7-14.5,5\r\n\tc-12.2,3-24.8,4.5-37.4,5.5c-0.8,0.1-1.7,0.1-2.5,0.2c-0.2,0.8,0.5,0.9,0.9,1.2c4.4,2.8,8.8,5.6,13.1,8.5c1.1,0.8,1.7,0.6,2.4-0.5\r\n\tc1.3-1.8,1.3-1.8,2.4,0.2c0.9,1.6,1.7,3.3,2.7,4.9c0.6,1,0.6,1.5-0.9,1.4c-2.3-0.3-4.6-0.5-7-0.7c-1-0.1-1.4-0.3-0.7-1.2\r\n\tc0.3-0.3,0.5-0.7,0.8-1.1c0.5-0.6,0.5-1.1-0.2-1.5c-5.5-3.5-11-7.1-16.5-10.6c-0.5-0.3-1-0.4-1.5-0.3c-16.8,1.1-33.7,1.2-50.6,1.4\r\n\tc-0.2,0-0.5,0-1.2,0.1c1.6,0.5,2.9,0.4,4.1,0.4c0.8,0,1.3,0.1,0.7,1c-1.3,2.3-1.3,2.3,1.2,3.7c13.6,7.6,27.3,15.2,40.9,22.8\r\n\tc2.3,1.3,1.9,1.4,3.3-0.7c0.2-0.4,0.4-0.8,1.1-1c1.5,2.4,3.1,4.9,4.8,7.6c-2.1,0-4,0-5.8,0c-0.5,0-1.1,0-1.6-0.1\r\n\tc-2.5-0.1-2.6-0.2-1.2-2.1c0.9-1.3,0-1.6-0.9-2.1c-11.2-6.3-22.4-12.5-33.7-18.8c-2.9-1.6-5.8-3.1-8.6-4.8c-1.4-0.8-2.2-0.8-2.8,0.7\r\n\tc-0.2,0.4-0.6,0.8-1.1,1.6c-1.2-2-2.5-3.7-3.4-5.6c-1.1-2.2-2.6-2.9-5.2-2.9c-33.3,0-66.7-1-100-1.6c-12.4-0.2-24.8,0-37.2,0\r\n\tc-55.9,0-111.7,2.6-167.6,1.9c-21.6-0.3-43.2-1-64.6-4.3c-9.9-1.5-19.8-3.5-28.9-7.7c-2.2-1-2.3-1.2-1.5-3.3\r\n\tc2.7-7,6.6-13.2,13.2-17.6c4.1-2.8,8.7-4.4,13.7-5.2c1.4-0.2,1.6-0.7,1.2-1.8c-0.7-1.9-1.3-3.9-2-5.9c-0.4-1.1-0.1-1.3,1.1-1.1\r\n\tc2.7,0.6,2.5,0.6,3-2c4.2-19,8.3-37.9,12.5-56.9c0.5-2.2,0.5-2.2-1.9-2.6c-1.4-0.2-1.4-0.6-0.5-1.5c1.7-1.7,3.3-3.5,4.9-5.3\r\n\tc0.7-0.8,1.4-1,2.5-0.7c17.8,4.2,35.8,7.1,53.9,9.5c13,1.7,26,3,39,4.1c25.3,2.1,50.7,3.3,76.2,3.8c10.1,0.2,20.2,0.3,30.3,0.4\r\n\tc16.6,0.1,33.3,0,49.9-0.2c1.6,0,2.8-1.3,2.7-2.7c0-0.6-0.5-0.7-1-0.8c-10.4-3.4-20.8-6.7-31.1-10.1c-1.5-0.5-1.5,0.5-1.9,1.3\r\n\tc-0.7,1.8-0.7,1.8-2.1,0.4c-1.5-1.6-3-3.1-4.6-4.7c-0.6-0.6-0.7-1,0.4-1.1c2.5-0.4,5.1-0.8,7.6-1.2c0.8-0.1,1.1,0.1,0.8,0.9\r\n\tc-0.7,2.6-0.7,2.6,2.1,3.5c9.4,3,18.7,6.1,28.1,9.1c2.9,1,2.4,0.9,3.3-1.5c0.1-0.3,0.3-0.6,0.6-1.2c2.2,2.3,4.4,4.5,6.6,6.8\r\n\tc-1.3,0.7-2.8,0.4-4.2,1.2c48.1-1.1,95.6-3.9,143-12.2c-1.1-1.3-2-2.4-2.9-3.4c-0.7-0.8-0.8-1.2,0.5-1.3c0.4,0,0.7-0.2,1.1-0.2\r\n\tc1.3,0,1.6-0.6,1.4-1.7c-0.9-5.3-1-10.7,0.1-16C480.9,259.3,481.5,259.3,482.1,259.3z M55.3,356.7c-0.5,0.1-1,0.3-1.5,0.4\r\n\tc-2.1,0.5-4,1.3-5.5,2.7c-0.1,0-0.2,0-0.3,0c-1.8,1-3.7,2-4.7,3.9c0-0.1,0.1-0.1,0.1-0.1c-0.8,0.3-1.4,0.8-1.9,1.4\r\n\tc-3.4,3.7-5.7,7.9-7.5,12.4c-0.5,1.3-0.4,1.9,1,2.6c6,2.7,12.4,4.3,18.9,5.8c1,0.2,1.1-0.2,0.9-1c-0.6-1.7-1.2-3.5-1.8-5.2\r\n\tc-0.8-2.4-0.8-2.4,1.8-2c1.3,0.2,1.5-0.5,1.7-1.4c0.2-1.2,0.1-1-0.7-1.6c-0.7-0.5-1.3-0.3-1.9-0.6c-1.2-0.5-2.2-1.1-3.4,0.2\r\n\tc0.4-1.9,0.9-3.7,1.4-5.4c0.2-0.6,1.3-1.2,1.4-1c0.5,0.9,1,0.9,1.7,0.3c0.4,1.1,1.8-0.7,2.1,0.7c0.1,0.3,0.5,0.2,0.6,0\r\n\tc0.7-1.4,1-2.9,1-4.4c0-1.2-1.5-0.8-2.3-1c-1.2-0.3-1.1-0.7-0.4-1.4c1.4-1.5,3-2.9,4.1-4.6c1.1-1.7,2.5-2.2,4.4-2.1\r\n\tc0.5,0,1.3-0.3,1.4,0.4c0.1,0.8-0.7,0.5-1.2,0.6c-0.4,0.1-0.8,0.1-1.2,0.1c-1.2,0-1.6,0.5-1.1,1.6c0.6,1.6,1.2,3.3,1.7,4.9\r\n\tc0.7,2,0.7,2.1-1.5,1.7c-1.4-0.3-1.8,0.1-2.2,1.4c-0.4,1.5-0.1,2.7,0.7,4c0.5,0.3,1.1-1.8,1.6,0.1c0,0.1,0.4,0.2,0.4,0.1\r\n\tc0.9-0.7,1.8,1.6,2.6-0.1c0.1,0.1,0.2,0.3,0.3,0.3c1,0.3,2,1,3,0.1c2,2.6-0.1,4.9-0.5,7.7c-0.7-0.9-0.5-2.7-2-1.3\r\n\tc-0.2-0.2-0.3-0.4-0.5-0.4c-0.7-0.1-1.3-0.9-1.7-0.8c-1.7,0.3-3.4,0-5-0.2c-0.4-0.1-0.9-0.2-1.1,0.5c-0.5,1.9-0.4,2.1,1.7,2.5\r\n\tc1.8,0.4,1.8,0.4,0.6,1.8c-1.3,1.5-2.6,3-4,4.5c-0.9,1-1.1,1.4,0.6,1.7c14.5,2.7,29.3,3.8,44,4.6c24.6,1.2,49.2,0.9,73.8,0.7\r\n\tc38.6-0.3,77.3-2.3,115.9-1.5c0.7,0,1.4,0.1,2-0.8c-0.9-0.1-1.6-0.1-2.3-0.1c-0.4,0-1,0.1-1-0.4c0-0.7,0.7-0.5,1.1-0.5\r\n\tc1.5,0.1,1.3-0.5,0.7-1.4c-0.7-1-1.3-2.1-2-3.2c-1-1.6-1-1.7,1.1-1.6c1.6,0,2.1-0.4,2-1.9c-0.2-5.7-0.2-11.3-0.3-17\r\n\tc0-2.8,0-2.8-2.9-3c-0.8-0.1-1-0.2-0.7-1c0.4-1.1,2-1.9,0.8-3.4c0,0,0.2-0.3,0.3-0.4c1.6-0.1,1.8-1.5,2.4-2.4\r\n\tc0.7-1.2,1.1-0.9,1.6,0.1c1.1,1.8,2.2,3.6,3.3,5.4c1,1.6,1,1.7-1,1.6c-1.8-0.1-2.1,0.6-2,2c0.2,5.8,0.2,11.5,0.3,17.3\r\n\tc0,2.4,0,2.5,2.6,2.5c1.3,0,1.2,0.5,0.7,1.3c-0.8,1.3-1.5,2.5-2.2,3.8c-0.2,0.4-0.7,0.9,0.3,1.1c0.4,0.1,1-0.1,0.9,0.5\r\n\tc-0.1,0.5-0.6,0.4-1,0.4c-0.4,0.1-1-0.2-1.3,0.5c0.6,0.3,1.3,0.2,1.9,0.2c11.7-0.3,23.5-0.2,35.2,0c34.7,0.7,69.4,1.7,104.1,1.7\r\n\tc18.2,0,36.4-0.1,54.5-1.2c0.7,0,1.4,0.1,2.1-0.4c-0.6-0.4-0.8-0.9-1.7-0.5c-1.1,0.5-2.5,0.3-3.7,0.4c-0.3,0-0.7,0-0.7-0.3\r\n\tc-0.1-0.5,0.3-0.5,0.7-0.6c1-0.1,2-0.2,3-0.3c-0.3-0.9-1.1-1.1-1.6-1.5c-11-7.1-22-14.1-33.1-21.2c-2.8-1.8-2.8-1.8-4.8,0.6\r\n\tc-0.1,0.1-0.3,0.2-0.6,0.4c-1.5-2.7-2.9-5.3-4.5-8.3c3.1,0.3,5.7,0.6,8.4,0.8c1.4,0.1,2,0.4,0.8,1.6c-1.4,1.3-0.8,2.1,0.6,3\r\n\tc11.6,7.4,23.2,14.8,34.7,22.2c2.3,1.5,4.4,2.8,7.4,2c0.2,0,0.4,0,0.5,0c0.3,0,0.6,0.1,0.6,0.4c0,0.3-0.3,0.4-0.6,0.5\r\n\tc-0.7,0.1-1.5,0-2.2,0.4c0.4,0.6,0.9,0.4,1.4,0.4c13.8-1,27.6-2.5,41.1-5.9c2.1-0.5,4.3-1,6.2-2l-0.1,0.1c0.9,0.1,1.7-0.4,2.6-0.7\r\n\tc0.3-0.1,0.5-0.2,0.6-0.5c0.2-1,2.9-2.7,3.8-2.3c0.4,0.2,0.8,1.2,1.3,0.2c0.3-0.6,0-1.5-0.7-1.9c-2-1-2.6-2.2-1.8-4.2\r\n\tc0.1-0.2,0-0.4-0.1-0.6c-1.9-3.5-4.1-6.7-7.6-9.6c0.2,0.5,0.3,0.7,0.4,0.8c0.2,0.5,1.3,0.9,0.6,1.4c-0.6,0.4-1-0.6-1.4-0.9\r\n\tc-1.1-0.8-1.2-2.2-1.9-3.1c-1.2-1.4-3.1-2.1-5-2.8c0.7,0.6,1.6,1,2.4,1.5c0.2,0.1,0.3,0.3,0.3,0.5c0,0.1-0.2,0.3-0.3,0.3\r\n\tc-0.5,0.1-3.9-1.8-3.7-2.2c0.4-1.1-0.6-1.1-1.1-1.3c-4.1-1.4-8.4-1.9-12.8-2.1c-28.3-0.9-56.7-1.6-85.1-2\r\n\tc-46.1-0.6-92.1-1-138.2-1.5c-0.8,0-2.2,0.3-2.2-0.4c0.1-1,1.5-0.5,2.2-0.5c37.6,0.4,75.3,0.8,112.9,1.2c1.6,0,3-0.2,4.5-0.8\r\n\tc14.2-5.9,28.4-11.8,42.5-17.8c1.1-0.4,2.3-0.7,2.9-1.8c0.1-0.3,0.4-0.5,0.7-0.3c0.9,0.6,1.6,0,2.3-0.3c8.7-3.6,17.4-7.2,26-10.8\r\n\tc1-0.4,1.9-0.8,2.4-1.9c0.1-0.3,0.6-0.9,0.9-0.4c0.7,1,1.3,0.3,1.9,0.1c4.5-1.8,9-3.7,13.4-5.6c1.5-0.6,3.6-1,4.4-2.1\r\n\tc0.9-1.2-0.3-3.1-0.6-4.6c-1.9-8.6-3.8-17.2-5.6-25.7c-0.2-0.7-0.2-1.4-1.4-1.1c-3.8,0.9-7.7,1.7-11.5,2.5c-0.9,0.2-1.3,0.6-1.4,1.6\r\n\tc0.4,0,0.7-0.1,1.1-0.1c0.4,0,1.1-0.4,1.2,0.2c0.2,0.6-0.6,0.5-1,0.7c-1,0.3-2.3,0.2-2.9,1.3c-0.1,0.2-0.3,0.3-0.6,0.2\r\n\tc-0.3-0.2-0.2-0.4-0.2-0.7c-0.1-1,1.4-1.4,1.3-2.6c-1.6,0.3-3.1,0.5-4.6,0.9c-0.5,0.1-0.8,0.5-0.8,1c-0.1,0.7,0.5,0.4,0.9,0.5\r\n\tc0.2,0,0.5,0.1,0.5,0.4c0,0.3-0.2,0.4-0.4,0.4c-1.1,0.3-2.3,0.6-3.5,0.6c-0.2,0-0.5,0-0.5-0.3c0-0.1,0.1-0.3,0.2-0.4\r\n\tc0.2-0.3,1.3-0.1,0.8-0.9c-0.4-0.7-1.1-0.5-1.8-0.4c-1.8,0.3-3.5,0.7-5.3,1c-25.6,4.2-51.5,6.9-77.5,8.6\r\n\tc-24.7,1.6-49.3,2.5-74.1,2.7c-9.4,0.1-18.8,0.1-28.2,0.1c-1.4,0-1.7,0.3-1,1.5c1,1.5,1.8,3.1,2.9,4.6c0.8,1.2,0.6,1.7-1,1.5\r\n\tc-1.9-0.2-2.3,0.6-2.2,2.2c0.2,11.4,0.3,22.7,0.4,34.1c0,2.5,0,2.5,2.6,2.6c0.7,0,1.5,0,0.9,1c-1.4,2.4-2.7,4.7-4.3,7.4\r\n\tc-1.5-2.5-2.8-4.8-4.3-6.9c-0.8-1.2-0.4-1.6,1-1.4c1.8,0.2,2.3-0.4,2.3-2.1c-0.2-11.3-0.3-22.6-0.4-33.9c0-2.6,0-2.6-2.8-2.8\r\n\tc-0.9-0.1-1.2-0.3-0.7-1.1c1-1.6,1.9-3.3,2.9-5c1-1.7,1-1.7-1-1.7c-14.2,0-28.5,0-42.7-0.4c-15.2-0.4-30.4-0.9-45.5-1.8\r\n\tc-16-0.9-32-2.2-47.9-3.8c-15.3-1.6-30.5-3.6-45.6-6.2c-9.1-1.6-18.1-3.3-27-5.4c-1.7-0.4-2-0.1-1.5,1.4c0.5,1.7,1.1,3.4,1.7,5.1\r\n\tc0.5,1.3,0.1,1.6-1.3,1.3c-0.7-0.2-1.7-0.7-2.1,0.1c-0.6,1.3-0.9,2.7-0.6,4.2c0.5-1,0.8-2.1,1.1-3.1c0.1-0.3,0.1-0.6,0.5-0.6\r\n\tc0.3,0,0.5,0.1,0.5,0.4c-0.1,1.3,0,2.9-0.9,3.6c-1,0.7-0.5,1.1-0.3,1.6c0.1,0.2,0.2,0.4-0.1,0.6c-0.3,0.2-0.5,0.1-0.8-0.1\r\n\tc-0.2-0.2-0.2-0.7-0.8-0.6c-1.7,4.7-4.2,17.7-3.6,18.5c0.6-0.5,0.4-1.3,0.6-1.9c0.1-0.4,0.1-1.1,0.7-1c0.8,0.1,0.4,0.9,0.3,1.2\r\n\tc-0.8,1.9,0.2,2.6,2,3.4c14.3,5.9,28.5,11.9,42.8,17.7c1.6,0.6,3,2,5,1.4c0.1,0,0.4,0.2,0.5,0.4c0.5,1,1.6,1.3,2.6,1.7\r\n\tc14.2,5.9,28.5,11.9,42.7,17.8c1.5,0.6,3,0.9,4.7,0.9c38.5-0.4,77.1-0.8,115.6-1.2c0.5,0,1,0,1.4,0c0.3,0,0.5,0.1,0.5,0.4\r\n\tc0,0.3-0.2,0.4-0.5,0.4c-0.7,0-1.4,0.1-2.2,0.1c-62.9,0.7-125.9,1-188.8,2.6c-9.5,0.2-19,0.3-28.5,0.9c-2.2,0.1-4.4,0.1-6.6,0.1\r\n\tc-0.3,0-0.7,0-0.7-0.3c-0.1-0.5,0.3-0.5,0.7-0.5c1-0.1,1.9-0.1,2.9-0.1c14.3-0.4,28.6-0.8,42.9-1.2c0.7,0,1.9,0.5,1.8-1.1\r\n\tc-0.1-0.6,0.7-0.4,0.8,0c0.4,1.2,1.4,1,2.3,1c16.9-0.3,33.9-0.6,50.8-0.9c0.6,0,1.2,0.2,1.7-0.2c-0.3-0.6-0.9-0.7-1.4-0.9\r\n\tc-2.9-1.3-5.9-2.5-8.8-3.7c-10.1-4.2-20.2-8.4-30.3-12.6c-0.5-0.2-1.1-0.9-1.5-0.2c-0.7,1.3-1.2,0.6-1.4-0.1c-0.4-1-1.3-1.5-2.3-1.9\r\n\tc-8.5-3.5-17-7.1-25.5-10.6c-0.5-0.2-0.9-0.5-1.4-0.4c-0.1,0.4,0.2,0.7,0.4,0.9c0.3,0.5,1.1,1.2,0.4,1.6c-0.8,0.5-0.8-0.6-1.3-1\r\n\tc-1-0.9-1-2.4-2.4-3c-6.5-2.7-13-5.3-19.5-8.1c-1.2-0.5-1.7-0.3-1.9,0.9c-2.4,10.9-4.8,21.8-7.1,32.7c-0.1,0.4-0.4,1,0.5,1.3\r\n\tc0.6-0.9,0.6-2,0.9-3c0.1-0.4,0.1-1.1,0.7-1c0.7,0.1,0.3,0.7,0.3,1.1c-0.1,0.6-0.2,1.2-0.4,1.8c-0.2,0.8-0.5,1.5,0.8,1.8\r\n\tc1,0.2,0.4,0.8,0.1,1.1c-1.8,1.5-2.5,3.4-2.8,5.4c-0.2,1-0.7,1.3-1.7,1.4C60.4,355.3,57.7,355.6,55.3,356.7z M414.4,351.2\r\n\tc0.9,0.4,1.6,0.3,2.2,0.3c16.5,0.3,33,0.5,49.5,0.9c2.1,0,3.3-0.3,4.1-2.1c0.3-0.7,0.8-2.1,1.5-1.7c1,0.6-0.3,1.5-0.7,2.2\r\n\tc-0.9,1.7-1,1.7,1.2,1.8c15.4,0.4,30.8,0.8,46.3,1.3c2.1,0.1,2.1,0.1,1.7-1.9c-1.8-8.9-3.7-17.9-5.5-26.8c-0.9-4.4-2-8.8-3-13.2\r\n\tc-0.1-0.4,0-1.2-0.9-0.9c-0.7,0.2-0.5,0.7-0.4,1.2c0.1,0.5,0.2,1.1,0.4,1.6c0.1,0.3,0.2,0.7-0.3,0.8c-0.5,0.1-0.6-0.2-0.7-0.6\r\n\tc-0.1-0.3-0.3-0.6-0.3-1c0-1.7-0.9-1.4-2.1-0.9c-5.2,2.2-10.4,4.3-15.5,6.5c-1,0.4-2,0.8-2.4,1.9c-0.1,0.4-0.6,0.8-0.9,0.4\r\n\tc-0.8-0.9-1.4-0.2-2,0c-8.4,3.5-16.8,7-25.2,10.5c-1.4,0.6-2.9,1-3.5,2.6c-0.1,0.4-0.9,0.8-1,0.3c-0.4-1.7-1.3-0.5-1.7-0.3\r\n\tc-13.1,5.4-26.1,10.8-39.1,16.3C415.6,350.6,415.1,350.8,414.4,351.2z M64.7,373.7c0.4,0,0.5,0.2,0.6,0.4c0.8,0.6,0.8-0.3,1.2-0.5\r\n\tc0.3-0.2,0.4-0.6,0.1-0.9c-0.8,1.1-1.5-1.1-2.3-0.1c-0.2,0.2-0.4,0.1-0.6-0.1c-0.2-0.3-0.3-0.9-0.8-0.4c-0.3,0.3-0.7,0.7-0.6,1.1\r\n\tc0.1,0.6,0.6,0.1,0.8,0.3C63.7,373.9,64.2,374.5,64.7,373.7z M57.3,371.6c0-0.4-1.3-1.1-1.7-0.9c-0.4,0.2-0.6,0.6-0.9-0.1\r\n\tc-0.3-0.8-0.7-0.2-1,0c-0.3,0.2-0.9,0.3-0.7,0.8c0.3,0.7,0.6,0,1-0.1c0.3,0,0.4,0.2,0.5,0.3c0.5,0.6,1.7-0.2,2.1,0.7\r\n\tC56.9,372.3,57.2,372,57.3,371.6z\"/>\r\n<path class=\"st1\" d=\"M55.1,335.3c-0.2,0.5-0.1,1.1-0.8,0.7c-1-0.5-1.9-1.1-2.9-1.6c-0.3-0.2-0.4-0.5-0.2-0.9c0.2-0.4,0.6-0.3,0.9-0.1\r\n\tC53.1,334,54.3,334.4,55.1,335.3z\"/>\r\n<path d=\"M55.3,356.7c1,0.1,2.5-0.9,2.7,0c0.3,1-1.5,0.8-2.4,1.1c-0.5,0.2-1.9,1.5-1.8-0.6C54.4,357,54.9,356.8,55.3,356.7z\"/>\r\n<path d=\"M48.4,359.8c0.9-0.3,1.8-1.5,2.5-0.6c0.5,0.6-1.2,0.8-1.8,1.4c0,0-0.1,0.1-0.1,0.1c-0.6,0.2-1.2,1.2-1.8,0.6\r\n\tc-0.6-0.6,0.6-1,0.9-1.5C48.2,359.8,48.3,359.8,48.4,359.8z\"/>\r\n<path d=\"M43.4,363.6c0.4-0.3,0.8-0.8,1.2-0.4c0.5,0.5-0.2,0.8-0.4,1.1c-0.4,0.5-0.9,0.9-1.3,1.4c-0.4,0.3-0.7,1.1-1.2,0.7\r\n\tc-0.6-0.4,0.1-0.9,0.4-1.2c0.5-0.6,1-1.1,1.5-1.6C43.5,363.6,43.4,363.6,43.4,363.6z\"/>\r\n<path d=\"M527.8,376.2c-3.5,0-6.2-2.6-6.2-5.8c0-3.2,2.8-5.8,6.3-5.8c3.4,0,6.2,2.6,6.3,5.8C534.1,373.6,531.3,376.2,527.8,376.2z\"/>\r\n<path d=\"M38.7,380.8c-1.3-0.5-2.7-1.1-4.1-1.6c-0.3-0.1-0.3-0.5-0.2-0.7c0.1-0.3,0.1-0.5,0.3-0.8c0.5-0.8,0.5-2.6,1.4-2.4\r\n\tc1.1,0.4-0.2,1.5-0.4,2.4c-0.2,0.8,0.3,1,0.8,1.2c0.8,0.4,1.6,0.7,2.4,1.1c0.2,0.1,0.4,0.3,0.3,0.5C39.2,380.8,39,380.8,38.7,380.8z\r\n\t\"/>\r\n<path d=\"M506.8,292.5c-0.8,1.3-1.5,2.3-2.3,3.4c-0.1,0.1-0.3,0.1-0.5,0c-0.3-0.1-0.4-0.4-0.2-0.5c1.6-1.7,1.2-3.6,0.6-5.5\r\n\tc0-0.2,0.1-0.4,0.3-0.5c0.2-0.2,0.5,0,0.6,0.2C505.7,290.6,505.6,291.8,506.8,292.5z\"/>\r\n<path d=\"M95.3,282.9c-0.2,0.7,1.2,1.5,0.3,1.9c-0.8,0.4-0.9-0.9-1.4-1.4c-0.3-0.4-0.5-0.9-1-1.1c-0.4-0.1-1.1-0.2-0.7-0.8\r\n\tc0.3-0.4,0.9-0.7,1.4-0.3c0.5,0.4,1.2,0.5,1.8,0.7c0.4,0.2,1.3,0,1.2,0.7C96.7,283.4,95.9,282.5,95.3,282.9z\"/>\r\n<path d=\"M287.5,296.2c0.8,0.3,2.3-0.3,2.3,0.5c0,1-1.4,0.5-2.2,0.5c-0.8,0-2.3,0.5-2.2-0.5C285.3,295.8,286.8,296.7,287.5,296.2z\"/>\r\n<path d=\"M363.9,389c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.4-2.2-0.4C361.8,388.5,363.2,389.3,363.9,389z\"/>\r\n<path d=\"M253.2,388.4c0.7,0.2,2-0.4,2,0.4c0,0.9-1.2,0.5-1.9,0.5c-0.9,0-2.4,0.6-2.4-0.4C250.8,388.1,252.4,388.6,253.2,388.4z\"/>\r\n<path d=\"M336.2,296.7c-0.9-0.3-2.4,0.4-2.4-0.5c0-0.9,1.5-0.5,2.3-0.5c0.7,0,2.2-0.5,2.1,0.4C338.2,297.2,336.8,296.2,336.2,296.7z\"\r\n\t/>\r\n<path d=\"M457.1,389.8c0.7,0.2,2.1-0.4,2.1,0.5c0,0.9-1.4,0.5-2.1,0.5c-0.8,0-2.3,0.5-2.3-0.4C454.9,389.5,456.3,390.1,457.1,389.8z\"\r\n\t/>\r\n<path d=\"M402.6,390.7c-0.7-0.3-2,0.4-2-0.6c0-0.7,1.3-0.4,2-0.4c0.9,0.1,2.4-0.5,2.4,0.5C405,391.1,403.4,390.5,402.6,390.7z\"/>\r\n<path d=\"M248.8,295.9c0.7,0.3,2.1-0.4,2.2,0.6c0,0.8-1.4,0.4-2.2,0.3c-0.8,0-2.2,0.4-2.2-0.6C246.6,295.5,248,296.1,248.8,295.9z\"/>\r\n<path d=\"M358.7,296.2c-0.4-0.1-1.7,0.4-1.7-0.3c0-1,1.3-0.4,2-0.5c0.5-0.1,1.1,0,1.6,0c0.4,0,1-0.1,1,0.4c0,0.5-0.6,0.5-1,0.5\r\n\tC360.1,296.2,359.5,296.2,358.7,296.2z\"/>\r\n<path d=\"M384.8,356.2c0.8,0.3,2.2-0.3,2.2,0.5c0,1-1.4,0.5-2.2,0.5c-0.8,0-2.2,0.4-2.2-0.4C382.6,355.7,384,356.5,384.8,356.2z\"/>\r\n<path d=\"M297.2,297c-0.7-0.3-2.2,0.4-2.1-0.4c0-1.1,1.4-0.5,2.2-0.5c0.8,0,2.2-0.5,2.2,0.4C299.5,297.4,298,296.7,297.2,297z\"/>\r\n<path d=\"M136.5,358.5c-0.8-0.2-2,0.4-2.1-0.5c0-0.8,1.3-0.5,2-0.5c0.8,0,2.4-0.4,2.3,0.3C138.7,358.9,137.2,358,136.5,358.5z\"/>\r\n<path d=\"M361.6,356.9c-0.8-0.3-2.3,0.4-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.5C363.7,357.3,362.3,356.6,361.6,356.9z\"\r\n\t/>\r\n<path d=\"M477.7,357.8c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.3-2.1-0.5C475.6,357.4,476.9,358.1,477.7,357.8z\"\r\n\t/>\r\n<path d=\"M454.7,358.2c-0.8-0.3-2.3,0.3-2.3-0.7c0-0.8,1.4-0.4,2.2-0.3c0.8,0,2.2-0.5,2.2,0.5C456.7,358.6,455.3,357.9,454.7,358.2z\"\r\n\t/>\r\n<path d=\"M136.7,390c0.7,0.3,2.2-0.4,2.1,0.5c0,1-1.4,0.5-2.2,0.5c-0.7,0-2.1,0.5-2.1-0.5C134.6,389.6,135.9,390.2,136.7,390z\"/>\r\n<path d=\"M438.9,356.9c0.8,0.3,2.3-0.4,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.4-2.1-0.4C436.8,356.4,438.2,357.2,438.9,356.9z\"\r\n\t/>\r\n<path d=\"M320.5,295.8c0.8,0.3,2.2-0.4,2.2,0.5c0,0.9-1.4,0.4-2.1,0.5c-0.8,0-2.3,0.4-2.3-0.4C318.3,295.4,319.8,296.3,320.5,295.8z\"\r\n\t/>\r\n<path d=\"M252.9,356.5c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.4,2.2,0.3C255.1,356.9,253.7,356.2,252.9,356.5z\"\r\n\t/>\r\n<path d=\"M400.3,357.4c-0.8-0.2-2.3,0.3-2.2-0.4c0.1-1,1.4-0.5,2.2-0.5c0.8,0,2.2-0.3,2.2,0.4C402.4,357.9,401,357.1,400.3,357.4z\"/>\r\n<path d=\"M330.3,355.4c0.9,0.3,2.4-0.4,2.4,0.6c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C328.3,355,329.7,355.8,330.3,355.4z\"/>\r\n<path d=\"M113.2,389.6c0.9,0.3,2.4-0.3,2.3,0.6c0,0.8-1.5,0.4-2.3,0.4c-0.7,0-2,0.3-2-0.4C111.3,389.1,112.6,390.1,113.2,389.6z\"/>\r\n<path d=\"M304.8,297c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.6,2-0.5c0.8,0,2.4-0.5,2.4,0.4C307.2,297.4,305.6,296.7,304.8,297z\"/>\r\n<path d=\"M309.9,389.1c-0.9-0.3-2.3,0.4-2.3-0.6c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.5,2.2,0.5C312,389.5,310.5,388.8,309.9,389.1z\"/>\r\n<path d=\"M268.7,388.2c0.7,0.3,2-0.4,2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8-0.1-2.3,0.6-2.4-0.5C266.3,387.9,267.9,388.4,268.7,388.2z\"/>\r\n<path d=\"M387.1,389.4c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.2,0.4-2.1-0.4C385,389,386.4,389.7,387.1,389.4z\"/>\r\n<path d=\"M214.2,355.8c0.8,0.4,2.1-0.4,2.2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8,0-2.3,0.4-2.3-0.4C212,355.3,213.5,356.3,214.2,355.8z\"/>\r\n<path d=\"M237.5,389.7c-0.8-0.2-2.2,0.3-2.2-0.4c0-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.5,2.1,0.4C239.7,390.1,238.3,389.4,237.5,389.7z\"/>\r\n<path d=\"M348.4,388.7c0.8,0.3,2.3-0.4,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C346.3,388.2,347.7,388.9,348.4,388.7z\"\r\n\t/>\r\n<path d=\"M343.6,296.6c-0.7-0.3-2,0.5-2-0.6c0-0.7,1.3-0.4,2-0.4c0.9,0,2.3-0.6,2.4,0.4C346,296.8,344.4,296.3,343.6,296.6z\"/>\r\n<path d=\"M97.7,389.1c0.9,0.3,2.4-0.2,2.3,0.7c-0.1,0.9-1.5,0.3-2.3,0.3c-0.7,0-2.1,0.3-2-0.5C95.8,388.5,97.1,389.5,97.7,389.1z\"/>\r\n<path d=\"M520.3,356.2c-0.9-0.3-2.3,0.2-2.3-0.6c0.1-1,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C522.2,356.7,520.9,355.9,520.3,356.2z\"\r\n\t/>\r\n<path d=\"M245.1,356.6c-0.7-0.3-2.1,0.5-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.4,2.2,0.4C247.3,356.9,245.9,356.3,245.1,356.6z\"\r\n\t/>\r\n<path d=\"M353.8,356.8c-0.7-0.3-2.2,0.3-2.2-0.5c0.1-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.5C355.9,357.2,354.5,356.6,353.8,356.8\r\n\tz\"/>\r\n<path d=\"M433.9,391c-0.8-0.2-2.2,0.3-2.2-0.5c0-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.5,2.1,0.4C436,391.4,434.6,390.7,433.9,391z\"/>\r\n<path d=\"M152.3,390c0.7,0.3,2-0.5,2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8,0-2.3,0.5-2.3-0.4C150,389.6,151.5,390.3,152.3,390z\"/>\r\n<path d=\"M464.6,390.7c-0.8-0.3-2,0.4-2-0.5c0-0.8,1.3-0.5,2-0.4c0.8,0,2.3-0.4,2.3,0.3C466.8,391.1,465.3,390.3,464.6,390.7z\"/>\r\n<path d=\"M410.4,390.9c-0.7-0.3-2,0.4-2-0.6c0-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.4,2.3,0.4C412.7,391.2,411.2,390.6,410.4,390.9z\"/>\r\n<path d=\"M183.2,390.8c-0.8-0.2-2.1,0.3-2.1-0.5c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.4,2.3,0.4C185.3,391.2,183.8,390.3,183.2,390.8z\"\r\n\t/>\r\n<path d=\"M175.4,390.8c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.3C177.6,391.3,176.2,390.5,175.4,390.8z\"\r\n\t/>\r\n<path d=\"M121.2,390.9c-0.8-0.4-2.2,0.3-2.2-0.6c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.3,2.2,0.4C123.3,391.4,121.9,390.4,121.2,390.9z\"\r\n\t/>\r\n<path d=\"M371.8,390.2c-0.8-0.3-2.2,0.3-2.2-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C373.9,390.5,372.4,389.9,371.8,390.2z\"\r\n\t/>\r\n<path d=\"M225.5,295.3c0.7,0.3,2.2-0.4,2.2,0.7c0,0.7-1.4,0.3-2.2,0.3c-0.8,0-2.2,0.5-2.2-0.5C223.3,294.9,224.7,295.6,225.5,295.3z\"\r\n\t/>\r\n<path d=\"M97.6,359.6c-0.7-0.3-1.9,0.4-1.9-0.5c0-0.7,1.2-0.5,1.8-0.4c0.9,0,2.5-0.5,2.5,0.3C100,360,98.5,359.2,97.6,359.6z\"/>\r\n<path d=\"M367,296.1c-0.8-0.4-2.1,0.4-2.2-0.5c0-0.9,1.4-0.5,2.1-0.5c0.8,0,2.3-0.5,2.3,0.4C369.2,296.4,367.7,295.6,367,296.1z\"/>\r\n<path d=\"M397.7,294.7c-0.7-0.2-1.9,0.3-1.9-0.4c-0.1-0.8,1.1-0.6,1.7-0.6c0.9,0,2.6-0.6,2.6,0.3C400.2,295,398.4,294.2,397.7,294.7z\r\n\t\"/>\r\n<path d=\"M312.9,296.9c-0.8-0.3-2.3,0.4-2.3-0.5c0-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.4C315,297.3,313.6,296.6,312.9,296.9z\"/>\r\n<path d=\"M325.3,389.2c-0.8-0.3-2.2,0.3-2.2-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.3-0.4,2.3,0.4C327.4,389.7,326,388.8,325.3,389.2z\"/>\r\n<path d=\"M122.8,327.8c0.1,0.5,0.1,0.7-0.2,0.7c-0.3,0.1-0.5,0-0.6-0.2c-0.6-1-1.2-1.9-1.8-2.9c-0.1-0.2-0.2-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C121.6,325.9,122.2,326.9,122.8,327.8z\"/>\r\n<path d=\"M112.8,359.1c0.1,0-0.1,0-0.4,0c-0.5,0-1.3,0.2-1.3-0.4c0-0.7,0.8-0.4,1.3-0.5c0.8-0.1,1.7-0.1,2.5-0.1c0.3,0,0.7,0,0.7,0.4\r\n\tc0.1,0.5-0.4,0.5-0.7,0.5C114.3,359.1,113.8,359.1,112.8,359.1z\"/>\r\n<path d=\"M206.4,356.9c-0.8-0.3-2.1,0.3-2.1-0.5c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C208.6,357.4,207.1,356.5,206.4,356.9z\"/>\r\n<path d=\"M276.3,388.1c0.7,0.2,2.1-0.2,2,0.4c0,0.9-1.3,0.5-2,0.5c-0.8,0-2.3,0.4-2.3-0.4C274.1,387.7,275.6,388.4,276.3,388.1z\"/>\r\n<path d=\"M144.4,358.2c-0.7-0.3-2.1,0.4-2.1-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.1-0.6,2.2,0.4C146.6,358.4,145.1,358,144.4,358.2z\"/>\r\n<path d=\"M317.6,388.1c0.7,0.3,2.1-0.4,2.1,0.6c0,0.8-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.4-2.1-0.4C315.4,387.7,316.8,388.4,317.6,388.1z\"\r\n\t/>\r\n<path d=\"M256.4,297c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.8,1.4-0.4,2.1-0.3c0.8,0,2.2-0.5,2.2,0.5C258.6,297.3,257.2,296.8,256.4,297z\"/>\r\n<path d=\"M105.8,390.5c-0.8-0.3-2.3,0.3-2.3-0.7c0-0.8,1.4-0.3,2.2-0.3c0.7,0,2.1-0.4,2.1,0.5C107.8,390.8,106.5,390.2,105.8,390.5z\"\r\n\t/>\r\n<path d=\"M431.3,357.8c-0.7-0.3-2.1,0.3-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C433.5,358.1,432,357.6,431.3,357.8z\"/>\r\n<path d=\"M198.7,389.5c0.8,0.3,2.2-0.4,2.2,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.4-2.2-0.3C196.6,389,198.1,390,198.7,389.5z\"/>\r\n<path d=\"M356.3,389.8c-0.8-0.3-2.2,0.4-2.2-0.6c0-0.8,1.4-0.3,2.2-0.3c0.8,0,2.2-0.4,2.2,0.4C358.4,390.3,357.1,389.6,356.3,389.8z\"\r\n\t/>\r\n<path d=\"M408,357.5c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C410.2,357.9,408.7,357.3,408,357.5z\"/>\r\n<path d=\"M279.8,296.2c0.7,0.3,2.1-0.4,2.1,0.5c0,0.9-1.4,0.5-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.5C277.6,295.9,279,296.5,279.8,296.2z\"/>\r\n<path d=\"M301.8,389.1c-0.7-0.2-2,0.3-2-0.5c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.6,2.4,0.5C304.2,389.5,302.6,388.9,301.8,389.1z\"/>\r\n<path d=\"M167.8,356.5c0.7,0.2,2-0.4,2,0.5c0,0.8-1.3,0.5-2,0.5c-0.8,0-2.3,0.5-2.3-0.3C165.6,356,167.1,356.9,167.8,356.5z\"/>\r\n<path d=\"M71.4,355c0.8,0.2,2.1-0.3,2.1,0.5c0,1-1.3,0.6-2,0.6c-0.8,0-2.3,0.5-2.3-0.4C69.2,354.6,70.7,355.3,71.4,355z\"/>\r\n<path d=\"M377,356c0.8,0.4,2.2-0.3,2.2,0.6c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.3-2.2-0.4C375,355.5,376.4,356.5,377,356z\"/>\r\n<path d=\"M134.5,346.7c-0.1,0.2-0.1,0.4-0.3,0.5c-0.2,0.2-0.5,0.1-0.6-0.1c-0.6-1-1.3-2-1.9-3c-0.1-0.2-0.1-0.4,0.1-0.6\r\n\tc0.2-0.1,0.5-0.1,0.6,0.1C133.2,344.6,133.8,345.7,134.5,346.7z\"/>\r\n<path d=\"M191,357c-0.8-0.3-2.2,0.4-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2-0.5,2,0.5C193.1,357.3,191.8,356.8,191,357z\"/>\r\n<path d=\"M186,356.6c-1.8,0.7-3.3,0.4-4.6,0.4c-0.2,0-0.3-0.3-0.5-0.4c0.2-0.1,0.3-0.4,0.5-0.4C182.7,356.3,184.1,355.9,186,356.6z\"\r\n\t/>\r\n<path d=\"M89.9,359.8c-0.7-0.2-1.9,0.4-1.9-0.5c0-0.8,1.3-0.4,2-0.4c0.8,0,2.4-0.4,2.3,0.3C92.2,360.2,90.7,359.5,89.9,359.8z\"/>\r\n<path d=\"M415.9,357.7c-0.9-0.3-2.3,0.4-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.5C418,358,416.6,357.3,415.9,357.7z\"/>\r\n<path d=\"M451.1,289.7c-0.6,0-1.3,0.4-1.4-0.4c-0.1-0.6,0.7-0.4,1.1-0.5c0.8-0.2,1.6-0.2,2.5-0.3c0.4,0,0.9-0.2,1,0.3\r\n\tc0.1,0.6-0.5,0.5-0.8,0.6C452.7,289.5,451.8,289.6,451.1,289.7z\"/>\r\n<path d=\"M146.8,290c1,0.1,2,0.2,3,0.4c0.4,0,0.7,0.2,0.6,0.6c-0.1,0.4-0.4,0.3-0.7,0.3c-1.1-0.1-2.1-0.2-3.2-0.4\r\n\tc-0.3,0-0.8-0.1-0.7-0.6C146,289.9,146.5,290,146.8,290z\"/>\r\n<path d=\"M194.6,295c-0.8-0.3-2.3,0.3-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.3,2,0.6C196.6,295.4,195.3,294.8,194.6,295z\"/>\r\n<path d=\"M233.2,295.5c0.8,0.3,2.2-0.3,2.2,0.5c-0.1,1-1.4,0.5-2.2,0.4c-0.7,0-2.1,0.4-2.1-0.5C231.1,295.1,232.5,295.8,233.2,295.5z\r\n\t\"/>\r\n<path d=\"M109,306c0.1,0.1,0.3,0.2,0.5,0.3c0.6,0.9,1.1,1.8,1.7,2.7c0.2,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0.1-0.5,0\r\n\tc-0.7-1.1-1.4-2.2-2.1-3.3C108.5,306.3,108.6,306,109,306z\"/>\r\n<path d=\"M108.3,341.9c0.1,0.4,0.1,0.7-0.2,0.7c-0.2,0-0.5-0.1-0.6-0.2c-0.6-0.9-1.2-1.9-1.7-2.9c-0.2-0.3-0.1-0.5,0.2-0.7\r\n\tc0.3-0.1,0.5,0,0.6,0.2C107.2,340,107.8,341,108.3,341.9z\"/>\r\n<path d=\"M79,355.9c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.6,2-0.6c0.8,0,2.2-0.5,2.2,0.5C81.2,356.3,79.8,355.6,79,355.9z\"/>\r\n<path d=\"M84.8,357.9c-0.3,0.6,0.5,1.8-0.4,1.8c-1.1,0-0.6-1.2-0.6-1.9c0-0.7-0.6-2,0.6-2C85.1,355.8,84.5,357.1,84.8,357.9z\"/>\r\n<path d=\"M237.4,355.6c0.8,0.2,2.2-0.3,2.1,0.5c0,1-1.3,0.5-2,0.5c-0.8,0-2.3,0.4-2.3-0.4C235.3,355.1,236.8,356,237.4,355.6z\"/>\r\n<path d=\"M260.6,356.4c-0.7-0.3-2,0.4-2-0.6c0-0.8,1.3-0.4,2-0.4c0.8,0,2.3-0.4,2.3,0.4C262.8,356.8,261.3,356,260.6,356.4z\"/>\r\n<path d=\"M472.2,390.5c-0.1,0-0.3,0-0.6,0c-0.5-0.1-1.3,0.2-1.3-0.4c0-0.6,0.8-0.4,1.3-0.5c0.8-0.1,1.7-0.1,2.5-0.1\r\n\tc0.3,0,0.6,0,0.7,0.4c0.1,0.5-0.4,0.5-0.7,0.5C473.6,390.4,473,390.4,472.2,390.5z\"/>\r\n<path d=\"M338.2,356.6c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C340.4,357.1,339,356.3,338.2,356.6z\"/>\r\n<path d=\"M222,355.8c0.7,0.2,2.1-0.3,2,0.4c0,0.9-1.3,0.5-2.1,0.5c-0.8,0-2.2,0.4-2.2-0.4C219.8,355.4,221.3,356,222,355.8z\"/>\r\n<path d=\"M121.2,358.9c-0.8-0.2-2.2,0.3-2.1-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C123.2,359.4,121.8,358.4,121.2,358.9z\"\r\n\t/>\r\n<path d=\"M501,358.5c0.7,0.3,2.1-0.4,2.1,0.6c0,0.7-1.4,0.3-2.2,0.3c-0.7,0-2.1,0.4-2.1-0.5C498.9,358,500.3,358.7,501,358.5z\"/>\r\n<path d=\"M532.7,384.7c-0.4,0-0.7,0.1-0.8-0.3c-0.1-0.5,0.3-0.5,0.6-0.6c1-0.2,2.1-0.4,3.1-0.7c0.3-0.1,0.6-0.1,0.7,0.3\r\n\tc0.1,0.4-0.2,0.6-0.6,0.6C534.7,384.3,533.7,384.5,532.7,384.7z\"/>\r\n<path d=\"M510.5,388.1c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.6,0-0.7-0.3c-0.1-0.5,0.3-0.5,0.7-0.6c1.1-0.1,2.1-0.2,3.2-0.3\r\n\tc0.3,0,0.6,0,0.7,0.3c0.1,0.5-0.3,0.5-0.6,0.6C512.1,387.9,511.3,388,510.5,388.1z\"/>\r\n<path d=\"M283.9,389.2c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.8,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C286.1,389.6,284.7,388.9,283.9,389.2z\"\r\n\t/>\r\n<path d=\"M332.9,388.3c0.8,0.3,2.3-0.4,2.3,0.6c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C330.8,387.9,332.2,388.6,332.9,388.3z\"\r\n\t/>\r\n<path d=\"M340.9,389.5c-0.8-0.3-2.4,0.3-2.3-0.5c0.1-1,1.6-0.4,2.4-0.4c0.7,0,1.9-0.4,1.9,0.5C342.9,389.8,341.7,389.3,340.9,389.5z\"\r\n\t/>\r\n<path d=\"M229.8,389.9c-0.8-0.3-2.2,0.4-2.2-0.5c0-0.9,1.4-0.5,2.1-0.5c0.8,0,2.2-0.6,2.2,0.4C231.9,390.2,230.5,389.5,229.8,389.9z\"\r\n\t/>\r\n<path d=\"M221.8,390c-0.7-0.2-2,0.3-2-0.4c0-0.9,1.3-0.5,2-0.5c0.8,0,2.2-0.5,2.2,0.4C224.1,390.4,222.6,389.8,221.8,390z\"/>\r\n<path d=\"M206.5,390.4c-0.8-0.2-2.2,0.3-2.2-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C208.6,390.9,207.1,389.9,206.5,390.4z\"\r\n\t/>\r\n<path d=\"M144.5,391c-0.8-0.3-2.2,0.3-2.2-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C146.6,391.4,145.2,390.7,144.5,391z\"/>\r\n<path d=\"M85.8,279.7c1.1,0.2,2,0.5,3,0.7c0.4,0.1,0.7,0.3,0.5,0.7c-0.1,0.3-0.5,0.3-0.8,0.2c-1-0.2-1.9-0.4-2.9-0.7\r\n\tc-0.3-0.1-0.8-0.2-0.7-0.6C85,279.5,85.5,279.7,85.8,279.7z\"/>\r\n<path d=\"M110,345c0.1,0.1,0.3,0.2,0.4,0.4c0.6,0.9,1.1,1.8,1.6,2.7c0.1,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0-0.5,0\r\n\tc-0.8-1-1.5-2.1-2-3.3C109.4,345.3,109.6,345.1,110,345z\"/>\r\n<path d=\"M478.4,299.4c0.5,0.1,0.6,0.4,0.3,0.8c-0.6,1-1.2,1.9-1.8,2.9c-0.1,0.1-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.2-0.3-0.5\r\n\tc0.6-1.1,1.3-2.2,2-3.3C478.2,299.5,478.3,299.5,478.4,299.4z\"/>\r\n<path d=\"M512.5,355.9c-0.8-0.3-2.3,0.3-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2-0.4,2,0.6C514.5,356.2,513.2,355.7,512.5,355.9z\"/>\r\n<path d=\"M461.1,328.3c-0.5-0.1-0.5-0.4-0.3-0.8c0.6-1,1.2-1.9,1.8-2.8c0.1-0.2,0.3-0.4,0.6-0.3c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.7,1.1-1.3,2.2-2,3.3C461.4,328.3,461.2,328.2,461.1,328.3z\"/>\r\n<path d=\"M179.3,294c-0.8-0.2-2.5,0.2-2.4-0.6c0.2-1.1,1.7-0.2,2.6-0.4c0.1,0,0.2,0,0.4,0c0.5,0.2,1.5-0.2,1.4,0.6\r\n\tc-0.1,0.7-1,0.2-1.5,0.3C179.6,294,179.5,294,179.3,294z\"/>\r\n<path d=\"M53.1,385.1c-0.9-0.2-1.9-0.4-2.9-0.7c-0.3-0.1-0.6-0.2-0.6-0.5c0.1-0.5,0.5-0.4,0.8-0.4c1,0.2,2,0.4,3,0.7\r\n\tc0.3,0.1,0.8,0.2,0.6,0.6C53.9,385.3,53.4,385.1,53.1,385.1z\"/>\r\n<path d=\"M76.3,296.4c0.2-0.9,0.4-1.9,0.7-2.9c0.1-0.3,0.2-0.5,0.6-0.5c0.4,0.1,0.4,0.4,0.3,0.6c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.1,0.7-0.6,0.6C76.1,297.2,76.3,296.8,76.3,296.4z\"/>\r\n<path d=\"M190.8,390.7c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C193.1,391,191.6,390.4,190.8,390.7z\"/>\r\n<path d=\"M159.8,357.7c-0.7-0.2-2.1,0.3-2-0.4c0-0.9,1.3-0.5,2-0.5c0.8,0,2.2-0.4,2.2,0.3C162,358.1,160.5,357.5,159.8,357.7z\"/>\r\n<path d=\"M437.9,290.3c0.3,0,0.9-0.2,1,0.3c0.1,0.6-0.5,0.5-0.9,0.6c-0.9,0.1-1.9,0.2-2.8,0.3c-0.3,0-0.8,0.1-0.9-0.3\r\n\tc-0.1-0.4,0.3-0.5,0.7-0.6C436,290.6,436.9,290.4,437.9,290.3z\"/>\r\n<path d=\"M67.1,338.7c0.2-0.9,0.4-1.9,0.7-2.9c0.1-0.3,0.2-0.6,0.6-0.5c0.4,0.1,0.4,0.4,0.3,0.7c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.2,0.7-0.6,0.6C66.9,339.5,67.1,339.1,67.1,338.7z\"/>\r\n<path d=\"M104.7,335.9c-0.2,0.2-0.2,0.4-0.3,0.4c-0.2,0.2-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2,0-0.5,0.2-0.6\r\n\tc0.1,0,0.4,0,0.5,0.1C103.3,333.7,104,334.8,104.7,335.9z\"/>\r\n<path d=\"M118.9,321.5c0.2,0.5,0.1,0.7-0.2,0.8c-0.3,0.1-0.5,0-0.6-0.2c-0.6-0.9-1.2-1.9-1.8-2.9c-0.1-0.2-0.1-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C117.7,319.6,118.4,320.7,118.9,321.5z\"/>\r\n<path d=\"M547.7,370c-0.1,0.2-0.2,0.4-0.3,0.5c-0.2,0.1-0.5,0.1-0.6-0.1c-0.7-1-1.3-2-2-2.9c-0.1-0.2-0.1-0.5,0.1-0.6\r\n\tc0.1-0.1,0.4-0.1,0.5,0C546.2,367.9,546.9,369,547.7,370z\"/>\r\n<path d=\"M471.2,312.4c-0.7,1.1-1.4,2.2-2.1,3.3c-0.2,0.2-0.4,0.2-0.6,0c-0.2-0.2-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C471.1,312.1,471.1,312.2,471.2,312.4z\"/>\r\n<path d=\"M65.9,386.4c0.9,0.1,1.8,0.2,2.7,0.4c0.4,0,0.8,0.1,0.7,0.5c0,0.4-0.5,0.4-0.8,0.4c-0.9-0.1-1.8-0.2-2.7-0.3\r\n\tc-0.4-0.1-1.1,0-1-0.7C64.9,386.2,65.5,386.4,65.9,386.4z\"/>\r\n<path d=\"M458.2,288.8c-0.4,0-0.8,0.1-0.8-0.4c0-0.3,0.3-0.4,0.6-0.5c1.1-0.2,2.1-0.4,3.2-0.5c0.4-0.1,0.8-0.1,0.8,0.4\r\n\tc0,0.3-0.3,0.4-0.6,0.5C460.3,288.4,459.3,288.6,458.2,288.8z\"/>\r\n<path d=\"M99.3,291.2c-0.1-0.1-0.3-0.2-0.4-0.3c-0.6-0.9-1.2-1.9-1.8-2.8c-0.1-0.2-0.2-0.4,0-0.6c0.2-0.2,0.5-0.2,0.6,0\r\n\tc0.7,1.1,1.4,2.2,2,3.2C99.9,290.8,99.7,291.1,99.3,291.2z\"/>\r\n<path d=\"M108.5,284.3c1,0.2,2,0.4,3,0.6c0.3,0.1,0.8,0.1,0.6,0.6c-0.1,0.4-0.5,0.3-0.9,0.3c-1-0.2-2-0.3-3-0.5\r\n\tc-0.3-0.1-0.8-0.2-0.6-0.6C107.7,284.2,108.2,284.4,108.5,284.3z\"/>\r\n<path d=\"M100.9,282.9c1,0.2,2,0.4,2.9,0.6c0.3,0.1,0.8,0.1,0.6,0.6c-0.1,0.4-0.6,0.3-0.9,0.3c-1-0.2-2-0.3-2.9-0.5\r\n\tc-0.3-0.1-0.8-0.1-0.6-0.6C100.1,282.8,100.6,282.9,100.9,282.9z\"/>\r\n<path d=\"M98.7,326.2c0.6,0.3,0.9,0.9,1.1,1.4c0.3,0.8,1.8,1.7,0.8,2.3c-0.6,0.4-1-1.2-1.6-1.9c-0.3-0.4-0.5-0.9-0.7-1.3\r\n\tC98.1,326.5,98.3,326.3,98.7,326.2z\"/>\r\n<path d=\"M509.2,306.9c0.1,0.3,0.1,0.7-0.4,0.8c-0.4,0-0.5-0.3-0.5-0.5c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3-0.1-0.7,0.4-0.8\r\n\tc0.4,0,0.5,0.3,0.5,0.6C508.8,305,509,305.9,509.2,306.9z\"/>\r\n<path d=\"M496.3,282c-0.4,0-0.8,0-0.8-0.3c0-0.4,0.3-0.5,0.6-0.5c1.1-0.3,2.2-0.5,3.3-0.7c0.3-0.1,0.6,0,0.7,0.4\r\n\tc0.1,0.2-0.1,0.4-0.4,0.5C498.5,281.5,497.4,281.8,496.3,282z\"/>\r\n<path d=\"M76.3,300.9c-0.2,1-0.4,1.9-0.6,2.8c-0.1,0.3-0.2,0.7-0.7,0.5c-0.4-0.1-0.3-0.4-0.3-0.7c0.2-0.9,0.4-1.8,0.6-2.7\r\n\tc0.1-0.3,0.1-0.9,0.7-0.7C76.5,300.3,76.3,300.7,76.3,300.9z\"/>\r\n<path d=\"M493.4,359.3c-0.8-0.3-2.2,0.4-2.2-0.7c0-0.8,1.4-0.4,2.1-0.3c0.8,0,2.2-0.4,2.2,0.6C495.4,359.6,494,359,493.4,359.3z\"/>\r\n<path d=\"M82.2,298.2c-0.2,0.2-0.3,0.4-0.4,0.4c-0.2,0-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2-0.1-0.5,0.1-0.6\r\n\tc0.1-0.1,0.4-0.1,0.5,0C80.7,296,81.5,297.1,82.2,298.2z\"/>\r\n<path d=\"M413.8,292.6c0.5,0.2,1.7-0.6,1.8,0.4c0.1,0.6-1.2,0.4-1.8,0.5c-0.3,0.1-0.6,0.1-0.9,0.1c-0.6-0.1-1.7,0.5-1.8-0.4\r\n\tc0-0.7,1.1-0.4,1.8-0.6C413.2,292.6,413.5,292.6,413.8,292.6z\"/>\r\n<path d=\"M141.5,290.3c-0.8-0.1-1.7-0.2-2.6-0.3c-0.3,0-0.8-0.1-0.7-0.5c0-0.4,0.5-0.4,0.8-0.4c0.9,0.1,1.8,0.2,2.7,0.3\r\n\tc0.4,0.1,1.1,0,1,0.7C142.5,290.5,142,290.3,141.5,290.3z\"/>\r\n<path d=\"M82.2,388.1c0.8,0.4,2.5-0.2,2.4,0.7c-0.1,1-1.6,0.3-2.4,0.3c-0.7,0-1.9,0.3-1.9-0.6C80.3,387.7,81.5,388.3,82.2,388.1z\"/>\r\n<path d=\"M130.4,340.2c0.2,0.5,0.1,0.7-0.2,0.8c-0.3,0.1-0.5-0.1-0.6-0.2c-0.6-0.9-1.2-1.9-1.8-2.8c-0.1-0.2-0.2-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C129.3,338.3,129.9,339.4,130.4,340.2z\"/>\r\n<path d=\"M379.5,389.3c0.8,0.3,2.2-0.4,2.2,0.6c0,0.8-1.4,0.4-2.2,0.3c-0.8,0-2.2,0.4-2.1-0.5C377.4,388.8,378.8,389.6,379.5,389.3z\"\r\n\t/>\r\n<path d=\"M428,292.3c-0.2,0-0.5,0-0.8,0c-0.3,0-0.7,0-0.6-0.4c0-0.2,0.3-0.4,0.5-0.4c1.2-0.1,2.4-0.2,3.6-0.3c0.3,0,0.6,0.1,0.6,0.4\r\n\tc0,0.4-0.4,0.4-0.6,0.4C429.7,292.1,428.9,292.2,428,292.3z\"/>\r\n<path d=\"M70.2,329.1c-0.2,1-0.4,2-0.7,2.9c-0.1,0.3-0.2,0.5-0.6,0.5c-0.4-0.1-0.4-0.4-0.4-0.6c0.2-1,0.4-1.9,0.6-2.9\r\n\tc0.1-0.3,0.2-0.7,0.6-0.6C70.4,328.4,70.2,328.8,70.2,329.1z\"/>\r\n<path d=\"M405.9,293.2c0.4,0,0.6-0.1,0.9-0.1c0.5,0,1.3-0.4,1.3,0.4c0.1,0.7-0.8,0.5-1.2,0.5c-0.8,0.1-1.7,0.2-2.5,0.2\r\n\tc-0.4,0-0.8,0-0.8-0.4c0-0.5,0.4-0.5,0.7-0.5C404.8,293.3,405.4,293.2,405.9,293.2z\"/>\r\n<path d=\"M134.1,289.3c-1-0.1-2-0.3-2.9-0.4c-0.3,0-0.6-0.2-0.6-0.5c0-0.5,0.4-0.5,0.8-0.4c0.9,0.1,1.9,0.2,2.8,0.4\r\n\tc0.4,0.1,1,0.1,0.9,0.6C134.9,289.6,134.3,289.2,134.1,289.3z\"/>\r\n<path d=\"M462.3,357.4c0.8,0.4,2.2-0.3,2.2,0.6c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.6C460.1,357,461.6,357.7,462.3,357.4z\"/>\r\n<path d=\"M486.6,287.5c-0.7,1.1-1.4,2.2-2.1,3.2c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2-0.1-0.4-0.3-0.3-0.5c0.6-1.1,1.3-2.1,1.9-3.1\r\n\tc0.1-0.2,0.4-0.2,0.6-0.1C486.5,287.1,486.5,287.3,486.6,287.5z\"/>\r\n<path d=\"M526.5,355.9c1,0.2,2,0.5,3,0.7c0.3,0.1,0.6,0.2,0.5,0.6c-0.1,0.3-0.4,0.3-0.7,0.3c-1-0.2-2.1-0.5-3.1-0.7\r\n\tc-0.3-0.1-0.8-0.2-0.6-0.6C525.7,355.7,526.1,355.8,526.5,355.9z\"/>\r\n<path d=\"M101.3,293.5c0.1,0.1,0.3,0.1,0.4,0.2c0.6,1,1.3,2,1.9,3c0.1,0.2,0.1,0.5-0.1,0.6c-0.1,0.1-0.4,0.1-0.5,0\r\n\tc-0.9-1-1.5-2.1-2.1-3.3C100.8,293.8,101,293.6,101.3,293.5z\"/>\r\n<path d=\"M126.4,288.3c-1-0.2-2.1-0.4-3.1-0.6c-0.2,0-0.5-0.3-0.5-0.4c0-0.3,0.3-0.4,0.6-0.4c1.1,0.1,2.1,0.3,3.2,0.4\r\n\tc0.4,0.1,0.7,0.2,0.7,0.6C127.3,288.4,126.8,288.2,126.4,288.3z\"/>\r\n<path d=\"M214.1,390.2c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C216.4,390.6,214.9,389.9,214.1,390.2z\"/>\r\n<path d=\"M70.2,324.6c0.2-0.9,0.4-1.8,0.6-2.7c0.1-0.3,0.2-0.7,0.7-0.6c0.4,0.1,0.3,0.4,0.3,0.7c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.2,0.7-0.7,0.6C70,325.3,70.2,324.9,70.2,324.6z\"/>\r\n<path d=\"M186.6,293.5c0.8,0.3,2.4-0.2,2.3,0.6c-0.1,1-1.6,0.4-2.4,0.3c-0.7,0-2,0.2-2-0.5C184.7,292.9,185.9,293.8,186.6,293.5z\"/>\r\n<path d=\"M390.1,295.1c-0.7-0.2-2,0.4-2-0.3c0-0.9,1.3-0.5,2-0.6c0.8,0,2.4-0.7,2.4,0.3C392.5,295.4,390.9,294.7,390.1,295.1z\"/>\r\n<path d=\"M465,322c-0.4-0.1-0.5-0.4-0.3-0.8c0.6-1,1.2-1.9,1.8-2.9c0.1-0.2,0.3-0.3,0.6-0.3c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.7,1.1-1.3,2.2-2,3.3C465.2,322,465.1,322,465,322z\"/>\r\n<path d=\"M468.6,286.3c0.4,0,0.9-0.2,1,0.3c0.1,0.5-0.3,0.5-0.7,0.6c-1,0.2-2,0.3-3,0.5c-0.3,0-0.8,0.2-0.9-0.3\r\n\tc-0.1-0.4,0.3-0.6,0.7-0.6C466.7,286.5,467.7,286.4,468.6,286.3z\"/>\r\n<path d=\"M473.7,286.3c-0.4,0-0.9,0.1-1-0.3c-0.1-0.4,0.4-0.5,0.7-0.6c1-0.2,2.1-0.4,3.1-0.5c0.3,0,0.6,0,0.7,0.3\r\n\tc0.1,0.4-0.3,0.5-0.5,0.5C475.7,286,474.6,286.2,473.7,286.3z\"/>\r\n<path d=\"M504.5,285.7c0,0.5,0.1,0.8-0.3,0.9c-0.4,0.1-0.5-0.1-0.6-0.4c-0.2-1-0.5-2-0.7-3.1c-0.1-0.3-0.1-0.6,0.3-0.7\r\n\tc0.4-0.1,0.5,0.2,0.6,0.4C504.1,283.8,504.3,284.8,504.5,285.7z\"/>\r\n<path d=\"M112.9,312.2c0.1,0.1,0.3,0.2,0.4,0.4c0.6,0.9,1.1,1.8,1.7,2.7c0.2,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0-0.5,0\r\n\tc-0.7-1.1-1.4-2.2-2-3.3C112.3,312.5,112.5,312.3,112.9,312.2z\"/>\r\n<path d=\"M492.8,314.8c-0.4-0.1-0.6-0.3-0.4-0.7c0.6-1,1.2-2,1.9-3c0.1-0.2,0.4-0.3,0.6-0.2c0.3,0.1,0.3,0.4,0.2,0.6\r\n\tc-0.6,1.1-1.3,2.1-1.9,3.1C493,314.7,492.9,314.7,492.8,314.8z\"/>\r\n<path d=\"M39.6,368.7c0.5,0.1,0.6,0.4,0.4,0.7c-0.6,1-1.2,1.9-1.8,2.9c-0.1,0.2-0.3,0.4-0.6,0.2c-0.2-0.1-0.4-0.3-0.3-0.5\r\n\tc0.5-1.1,1.1-2.2,1.9-3.2C39.3,368.8,39.4,368.7,39.6,368.7z\"/>\r\n<path d=\"M89.6,310.6c-0.1,0.2-0.1,0.4-0.2,0.5c-0.2,0.2-0.5,0.2-0.6-0.1c-0.7-1.1-1.7-2.1-1.9-3.5c0-0.1,0.4-0.3,0.4-0.2\r\n\tC88.5,308.2,88.8,309.6,89.6,310.6z\"/>\r\n<path d=\"M472.7,309.6c-0.5-0.1-0.6-0.4-0.3-0.7c0.6-1,1.2-1.9,1.8-2.9c0.1-0.1,0.4-0.3,0.6-0.2c0.2,0.1,0.3,0.3,0.2,0.5\r\n\tc-0.6,1.1-1.3,2.1-2,3.2C472.9,309.5,472.8,309.5,472.7,309.6z\"/>\r\n<path d=\"M499,305.1c-0.7,1.1-1.5,2.2-2.2,3.3c0,0.1-0.4,0.1-0.4,0c-0.1-0.2-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.1,0.4-0.2,0.6-0.2C498.8,304.7,498.9,304.9,499,305.1z\"/>\r\n<path d=\"M83.6,301.1c0.6,0.4,0.9,1,1.1,1.6c0.4,0.7,1.5,1.8,0.8,2.1c-1.1,0.5-1.1-1.1-1.7-1.7c-0.3-0.4-0.5-0.9-0.8-1.3\r\n\tC83,301.4,83.1,301.1,83.6,301.1z\"/>\r\n<path d=\"M107,303.6c-0.1-0.1-0.3-0.2-0.4-0.4c-0.6-0.9-1.1-1.8-1.7-2.7c-0.2-0.3-0.2-0.6,0.1-0.7c0.1-0.1,0.4,0,0.5,0.1\r\n\tc0.7,1.1,1.4,2.2,2,3.3C107.6,303.3,107.3,303.5,107,303.6z\"/>\r\n<path d=\"M543.9,382.1c-1.3,0.3-2.5,0.6-3.8,0.9c-0.3,0.1-0.6,0.1-0.7-0.3c-0.1-0.3,0.1-0.4,0.3-0.5c1.2-0.4,2.4-0.7,3.6-1\r\n\tC544,381.1,543.8,381.7,543.9,382.1C543.9,382.1,543.9,382.1,543.9,382.1z\"/>\r\n<path d=\"M482.8,293.7c-0.7,1.1-1.3,2.1-2,3.1c-0.1,0.2-0.4,0.3-0.6,0.1c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.3-2.1,2-3.1\r\n\tc0.1-0.2,0.4-0.2,0.6,0C482.7,293.4,482.7,293.6,482.8,293.7z\"/>\r\n<path d=\"M525.2,386.1c-0.4,0-0.8,0.1-0.9-0.4c0-0.4,0.4-0.5,0.7-0.6c1-0.2,2-0.3,3-0.5c0.3,0,0.6-0.1,0.7,0.3\r\n\tc0.1,0.5-0.3,0.5-0.6,0.6C527.1,385.8,526.1,386,525.2,386.1z\"/>\r\n<path d=\"M60.8,386.6c-1.2-0.3-2.5-0.2-3.6-0.9c-0.1,0,0-0.4,0-0.4c1.3-0.4,2.4,0.2,3.7,0.3c0.3,0,0.8,0.1,0.7,0.5\r\n\tC61.6,386.7,61.1,386.5,60.8,386.6z\"/>\r\n<path d=\"M322.8,356.4c-0.8-0.3-2.3,0.3-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.4,2.1,0.4C325,356.8,323.6,356.1,322.8,356.4z\"/>\r\n<path d=\"M374.7,295.7c-0.7-0.3-2.1,0.4-2.2-0.4c-0.1-0.9,1.3-0.5,2-0.5c0.8,0,2.3-0.7,2.4,0.4C377.1,296,375.5,295.4,374.7,295.7z\"\r\n\t/>\r\n<path d=\"M240.9,296.7c-0.7-0.3-2.1,0.3-2.1-0.5c0-1,1.4-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C243.1,297.1,241.7,296.4,240.9,296.7z\"/>\r\n<path d=\"M164,292.7c-0.7-0.1-1.4-0.1-2.1-0.2c-0.3,0-0.6-0.2-0.6-0.5c0-0.4,0.4-0.4,0.7-0.4c0.9,0.1,1.9,0.2,2.8,0.3\r\n\tc0.4,0.1,1.1-0.2,1,0.5c-0.1,0.6-0.7,0.4-1.2,0.3C164.4,292.8,164.2,292.7,164,292.7C164,292.7,164,292.7,164,292.7z\"/>\r\n<path d=\"M128.8,389.9c0.8,0.3,2.2-0.3,2.2,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.7,0-2.1,0.4-2.1-0.4C126.8,389.5,128.2,390.3,128.8,389.9z\"\r\n\t/>\r\n<path d=\"M210,295.8c-0.8-0.4-2.3,0.4-2.2-0.7c0.1-0.9,1.5-0.3,2.3-0.3c0.7,0,2.1-0.4,2,0.5C212.1,296.2,210.7,295.4,210,295.8z\"/>\r\n<path d=\"M507.7,299.8c0,0.3,0.1,0.7-0.3,0.7c-0.4,0.1-0.5-0.2-0.6-0.5c-0.2-1-0.5-2-0.7-3.1c-0.1-0.3,0-0.6,0.3-0.6\r\n\tc0.4-0.1,0.5,0.2,0.6,0.5C507.2,297.9,507.4,298.9,507.7,299.8z\"/>\r\n<path d=\"M480.1,390.2c-0.7-0.2-2,0.4-2-0.4c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.7,2.4,0.4C482.5,390.5,480.9,389.9,480.1,390.2z\"/>\r\n<path d=\"M272,296.1c0.8,0.3,2.2-0.2,2.1,0.5c0,1-1.3,0.5-2.1,0.5c-0.8,0-2.3,0.4-2.3-0.4C269.9,295.7,271.4,296.5,272,296.1z\"/>\r\n<path d=\"M93.4,317c-0.1,0.2-0.2,0.4-0.3,0.5c-0.2,0.1-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2,0-0.5,0.2-0.6\r\n\tc0.1-0.1,0.4,0,0.5,0.1C92,314.8,92.7,315.9,93.4,317z\"/>\r\n<path d=\"M441.5,391c-0.8-0.2-2.2,0.3-2.2-0.4c0-1,1.4-0.5,2.2-0.5c0.7,0,2.2-0.4,2.2,0.3C443.6,391.4,442.2,390.7,441.5,391z\"/>\r\n<path d=\"M45.6,383.3c-0.9-0.3-1.9-0.6-2.8-0.9c-0.3-0.1-0.7-0.2-0.6-0.7c0.1-0.4,0.6-0.3,0.9-0.2c1,0.3,1.9,0.6,2.9,0.9\r\n\tc0.3,0.1,0.7,0.2,0.6,0.6C46.4,383.4,46,383.3,45.6,383.3z\"/>\r\n<path d=\"M171.4,293.4c-0.8-0.3-2.4,0.2-2.3-0.6c0.1-1,1.6-0.4,2.4-0.3c0.7,0.1,2-0.3,1.9,0.6C173.3,293.9,172.1,293.2,171.4,293.4z\"\r\n\t/>\r\n<path d=\"M502.8,298.9c-0.7,1.1-1.4,2.1-2.1,3.2c-0.1,0.1-0.4,0.1-0.5,0c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C502.7,298.5,502.7,298.7,502.8,298.9z\"/>\r\n<path d=\"M502.5,388.8c-0.4-0.1-1.1,0.3-1.2-0.3c-0.1-0.6,0.6-0.5,1-0.6c0.2-0.1,0.5-0.1,0.7-0.1c0.9,0.2,2.4-0.8,2.6,0.3\r\n\tc0.1,0.8-1.7,0.4-2.6,0.6C502.9,388.8,502.7,388.8,502.5,388.8z\"/>\r\n<path d=\"M118.6,287c-1-0.2-1.9-0.3-2.9-0.5c-0.3-0.1-0.6-0.2-0.5-0.5c0.1-0.4,0.4-0.4,0.7-0.3c0.9,0.1,1.9,0.2,2.8,0.4\r\n\tc0.4,0.1,1.1,0,0.9,0.7C119.5,287.2,118.9,286.9,118.6,287z\"/>\r\n<path d=\"M245.3,388.5c0.7,0.2,2.1-0.3,2.1,0.4c0,1-1.3,0.5-2.1,0.5c-0.8,0-2.2,0.4-2.2-0.3C243.2,388.1,244.6,388.8,245.3,388.5z\"/>\r\n<path d=\"M520.2,386c0.4,0,1-0.2,1,0.4c0,0.4-0.4,0.4-0.8,0.5c-0.9,0.1-1.9,0.3-2.8,0.4c-0.3,0-0.8,0.1-0.9-0.3\r\n\tc-0.1-0.5,0.4-0.5,0.7-0.6C518.3,386.2,519.3,386.1,520.2,386z\"/>\r\n<path d=\"M90.5,389.8c-0.8-0.4-2.4,0.3-2.4-0.8c0-0.7,1.5-0.2,2.4-0.2c0.7,0.1,1.9-0.4,1.8,0.6C92.3,390.2,91.1,389.5,90.5,389.8z\"/>\r\n<path d=\"M351.6,296.4c-0.8-0.4-2.2,0.4-2.2-0.5c0-0.8,1.4-0.4,2.1-0.5c0.8,0,2.2-0.5,2.2,0.3C353.7,296.9,352.2,295.9,351.6,296.4z\"\r\n\t/>\r\n<path d=\"M382.1,295.4c-0.2,0-0.5,0.1-0.7,0c-0.4,0-1.1,0.3-1.1-0.4c0-0.7,0.7-0.4,1.1-0.5c0.9-0.1,1.8-0.1,2.7-0.2\r\n\tc0.4,0,0.8,0,0.8,0.4c0,0.5-0.4,0.5-0.8,0.5C383.4,295.3,382.7,295.3,382.1,295.4C382.1,295.3,382.1,295.4,382.1,295.4z\"/>\r\n<path d=\"M202.3,295.4c-0.8-0.3-2.4,0.3-2.3-0.6c0.1-1,1.6-0.4,2.4-0.3c0.7,0,2-0.4,1.9,0.6C204.3,295.8,203,295.2,202.3,295.4z\"/>\r\n<path d=\"M264.3,297.1c-0.8-0.3-2.3,0.4-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.3,2,0.4C266.3,297.5,265,296.7,264.3,297.1z\"/>\r\n<path d=\"M152.1,358c-0.7-0.3-2,0.5-2-0.5c-0.1-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.5,2.3,0.3C154.3,358.3,152.9,357.7,152.1,358z\"/>\r\n<path d=\"M485.6,359.1c-0.8-0.3-2.2,0.2-2.2-0.5c0.1-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2,0.5C487.6,359.5,486.3,358.8,485.6,359.1z\"\r\n\t/>\r\n<path d=\"M73.3,315.2c-0.2,1-0.4,1.9-0.7,2.9c0,0.2-0.3,0.4-0.4,0.4c-0.4,0-0.5-0.3-0.4-0.6c0.2-1,0.4-1.9,0.6-2.9\r\n\tc0.1-0.3,0.2-0.7,0.6-0.6C73.4,314.4,73.2,314.9,73.3,315.2z\"/>\r\n<path d=\"M73.7,387.4c0.9,0.1,1.8,0.2,2.7,0.3c0.3,0,0.6,0.1,0.6,0.5c0,0.4-0.4,0.4-0.7,0.4c-0.9,0-1.8-0.1-2.7-0.2\r\n\tc-0.4-0.1-1.1,0-1.1-0.6C72.6,387.1,73.3,387.4,73.7,387.4z\"/>\r\n<path d=\"M443.3,290.7c-0.5-0.1-1.2,0.3-1.2-0.4c0-0.5,0.6-0.4,1-0.5c0.9-0.1,1.9-0.2,2.8-0.3c0.3,0,0.6-0.1,0.7,0.3\r\n\tc0.1,0.5-0.2,0.5-0.6,0.6C445,290.5,444.1,290.6,443.3,290.7z\"/>\r\n<path d=\"M175.3,357.3c-0.7-0.2-2,0.4-2-0.4c0-0.9,1.2-0.5,1.9-0.5c0.8,0,2.3-0.6,2.4,0.4C177.6,357.6,176.1,357,175.3,357.3z\"/>\r\n<path d=\"M420.8,293c-0.7-0.2-1.7,0.4-1.7-0.4c-0.1-0.7,1-0.6,1.6-0.6c0.9,0,2.7-0.5,2.7,0.1C423.3,293.4,421.6,292.5,420.8,293z\"/>\r\n<path d=\"M418.1,390.9c-0.7-0.3-2,0.5-2-0.6c0-0.7,1.3-0.4,2-0.4c0.8,0.1,2.3-0.5,2.4,0.5C420.5,391.2,418.9,390.7,418.1,390.9z\"/>\r\n<path d=\"M155.6,291c0.7,0.2,2.5,0,2.3,0.6c-0.2,1.1-1.7,0.2-2.6,0.3c-0.2,0-0.5,0-0.7-0.1c-0.4-0.1-1,0-1-0.5c0-0.7,0.7-0.4,1.1-0.4\r\n\tC155,290.9,155.2,290.9,155.6,291z\"/>\r\n<path d=\"M470.2,358.6c-0.8-0.3-2.3,0.2-2.2-0.5c0.1-1,1.4-0.5,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C472.2,359,470.8,358.3,470.2,358.6z\"/>\r\n<path d=\"M217.8,296.1c-0.8-0.4-2.3,0.3-2.2-0.7c0.1-0.9,1.5-0.3,2.3-0.3c0.7,0,2-0.2,2,0.5C219.7,296.6,218.4,295.7,217.8,296.1z\"/>\r\n<path d=\"M128.7,358.7c-0.6-0.4-2,0.6-2-0.5c0-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.5,2.3,0.4C131.1,359,129.6,358.4,128.7,358.7z\"/>\r\n<path d=\"M423.6,357.7c-0.8-0.3-2.3,0.3-2.3-0.5c0-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.4C425.7,358.2,424.3,357.4,423.6,357.7z\"\r\n\t/>\r\n<path d=\"M167.6,390.9c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C169.8,391.3,168.4,390.6,167.6,390.9z\"/>\r\n<path d=\"M446.6,357c0.8,0.3,2.4-0.2,2.3,0.5c-0.1,1-1.5,0.4-2.4,0.4c-0.7,0-1.9,0.4-1.9-0.5C444.6,356.6,445.9,357.2,446.6,357z\"/>\r\n<path d=\"M426.2,391c-0.9-0.3-2.4,0.3-2.4-0.6c0-0.8,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.4C428.2,391.4,426.8,390.6,426.2,391z\"/>\r\n<path d=\"M346.2,356.7c-0.9-0.3-2.5,0.2-2.4-0.5c0.1-1,1.6-0.4,2.4-0.4c0.7,0,2-0.3,2,0.4C348.1,357.2,346.8,356.3,346.2,356.7z\"/>\r\n<path d=\"M395.1,389.6c0.7,0.3,2.1-0.4,2.1,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.5C392.9,389.3,394.3,389.8,395.1,389.6z\"\r\n\t/>\r\n<path d=\"M105.8,358.4c0.3,0,0.4,0,0.6,0c0.5,0.1,1.4-0.3,1.5,0.4c0,0.7-0.9,0.4-1.4,0.5c-0.2,0-0.4,0-0.5,0\r\n\tc-0.8-0.1-2.4,0.4-2.3-0.3C103.6,357.9,105.1,358.7,105.8,358.4z\"/>\r\n<path d=\"M392.4,356.3c0.8,0.3,2.3-0.2,2.3,0.5c-0.1,1-1.4,0.4-2.2,0.4c-0.7,0-2.1,0.5-2.1-0.4C390.4,355.8,391.8,356.6,392.4,356.3z\r\n\t\"/>\r\n<path d=\"M160,391c-0.8-0.2-2.2,0.3-2.2-0.5c0-1,1.3-0.5,2-0.5c0.8,0,2.2-0.4,2.2,0.3C162,391.5,160.5,390.5,160,391z\"/>\r\n<path d=\"M268.6,356.4c-0.8-0.3-2.3,0.4-2.3-0.5c0-0.8,1.5-0.4,2.3-0.4c0.7,0,2-0.3,2,0.4C270.6,356.8,269.3,356,268.6,356.4z\"/>\r\n<path d=\"M503.9,356c0.1-0.5-0.2-1.1,0.6-1.3c0.7-0.1,1.6-0.2,2.2,0.2c0.5,0.4,0,0.6-0.4,0.7c-0.6,0.1-1.2-0.1-1.4,0.7\r\n\tc-0.1,0.3,0,0.9-0.6,0.7C503.8,356.9,504,356.3,503.9,356z\"/>\r\n<path d=\"M307.2,356.4c-0.8-0.2-2.2,0.2-2.1-0.4c0-1,1.3-0.5,2.1-0.5c0.8,0,2.3-0.4,2.3,0.4C309.4,356.8,307.9,356,307.2,356.4z\"/>\r\n<path d=\"M229.7,356.7c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.3C231.8,357.1,230.4,356.4,229.7,356.7z\"\r\n\t/>\r\n<path d=\"M283.9,356.3c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C286.2,356.6,284.7,356.1,283.9,356.3z\"\r\n\t/>\r\n<path d=\"M198.6,357c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.4C200.7,357.3,199.4,356.7,198.6,357z\"/>\r\n<path d=\"M314.9,356.4c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.5C317.1,356.7,315.7,356.1,314.9,356.4z\"/>\r\n<path d=\"M299.4,356.4c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.5C301.6,356.7,300.2,356.1,299.4,356.4z\"/>\r\n<path d=\"M449.2,390.9c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.4C451.4,391.3,450,390.6,449.2,390.9z\"/>\r\n<path d=\"M260.7,389.3c-0.8-0.4-2.1,0.4-2.1-0.7c0-0.7,1.3-0.4,2-0.4c0.8,0,2.2-0.3,2.2,0.3C262.8,389.8,261.4,388.8,260.7,389.3z\"/>\r\n<path d=\"M328.2,296.8c-0.7-0.3-2,0.5-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.4C330.4,297.1,329,296.5,328.2,296.8z\"/>\r\n<path d=\"M276.2,356.4c-0.8-0.2-2.2,0.2-2.1-0.5c0-1,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.4C278.2,356.9,276.8,355.9,276.2,356.4z\"/>\r\n<path d=\"M369.3,357c-0.8-0.3-2.3,0.3-2.2-0.5c0.1-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.4,2.1,0.5C371.3,357.4,369.9,356.7,369.3,357z\"/>\r\n<path d=\"M487.5,324c-0.6,1-1.3,2.1-2,3.1c-0.1,0.1-0.3,0.2-0.5,0.1c-0.3-0.1-0.4-0.3-0.3-0.5c0.7-1.1,1.3-2.2,2.1-3.2\r\n\tC487,323.1,487.4,323.4,487.5,324z\"/>\r\n<path d=\"M515,335.9c-1-0.9-0.7-2.1-1.1-3.1c-0.1-0.4-0.2-1.2,0.2-1.1c1.3,0.6,0.8,2,1.2,3C515.5,335.1,515.7,335.5,515,335.9z\"/>\r\n<path d=\"M517,346.5c0-0.4-0.1-0.7,0.3-0.8c0.5-0.1,0.6,0.3,0.7,0.6c0.2,0.9,0.4,1.8,0.6,2.7c0.1,0.3,0.2,0.7-0.3,0.8\r\n\tc-0.5,0.1-0.6-0.2-0.7-0.6C517.4,348.3,517.2,347.3,517,346.5z\"/>\r\n<path d=\"M473.6,346c-0.3-0.1-0.5-0.3-0.4-0.5c0.6-1.1,1.3-2.2,2-3.3c0.1-0.1,0.3-0.1,0.5-0.1c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.6,1.1-1.3,2.1-1.9,3.1C473.9,345.9,473.7,345.9,473.6,346z\"/>\r\n<path d=\"M479.9,336.4c-0.7,1.1-1.4,2.2-2.2,3.3c0,0.1-0.4,0-0.5,0c-0.2-0.1-0.3-0.4-0.1-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.2,0.3-0.3,0.6-0.2C479.6,336,479.7,336.1,479.9,336.4z\"/>\r\n<path d=\"M512.3,320.9c0,0.4,0.1,0.7-0.3,0.8c-0.3,0.1-0.6-0.1-0.6-0.4c-0.3-1.1-0.5-2.1-0.7-3.2c-0.1-0.3,0.1-0.5,0.5-0.6\r\n\tc0.3,0,0.4,0.2,0.5,0.4C511.9,319,512.1,320,512.3,320.9z\"/>\r\n<path d=\"M452,343.6c-0.7,1.1-1.5,2.2-2.2,3.3c0,0.1-0.3,0-0.5,0c-0.3-0.1-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.2C451.8,343.2,451.9,343.4,452,343.6z\"/>\r\n<path d=\"M455.9,337.4c-0.7,1.1-1.4,2.2-2.1,3.3c-0.1,0.1-0.4,0.1-0.5,0c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C455.7,337,455.7,337.2,455.9,337.4z\"/>\r\n<path d=\"M483.6,330.2c-0.7,1-1.3,2.1-2,3.1c-0.1,0.2-0.4,0.2-0.6,0.1c-0.1-0.1-0.2-0.3-0.2-0.4c0.6-1.1,1.3-2.1,1.9-3.2\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C483.5,329.8,483.5,330,483.6,330.2z\"/>\r\n<path d=\"M513.8,327.8c0,0.5,0.1,0.9-0.4,1c-0.4,0.1-0.5-0.3-0.5-0.5c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3-0.1-0.6,0.3-0.7\r\n\tc0.5-0.1,0.6,0.3,0.7,0.6C513.5,326.1,513.7,327.1,513.8,327.8z\"/>\r\n<path class=\"st4\" d=\"M517,341.9c0,0.4,0.1,0.8-0.2,0.9c-0.5,0.1-0.6-0.2-0.7-0.6c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3,0-0.6,0.4-0.6\r\n\tc0.4-0.1,0.5,0.2,0.6,0.5C516.6,340.1,516.8,341.1,517,341.9z\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentNeckTapWiWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_text_service__ = __webpack_require__("./src/app/wi-page/mi-text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GarmentNeckTapWiWidgetComponent = (function () {
    function GarmentNeckTapWiWidgetComponent(miTextService) {
        this.miTextService = miTextService;
        this.selTag = 'TDC';
    }
    GarmentNeckTapWiWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miTextService.initWiData().then(function (value) {
            _this.getMiTextInfo(value);
        });
    };
    GarmentNeckTapWiWidgetComponent.prototype.getMiTextInfo = function (value) {
        var _this = this;
        this.neckTapItems = value.filter(function (i) { return i.tag === _this.selTag; });
        console.log(this.neckTapItems);
    };
    return GarmentNeckTapWiWidgetComponent;
}());
GarmentNeckTapWiWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-neck-tap-wi-widget',
        template: __webpack_require__("./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.html"),
        styles: [__webpack_require__("./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */]) === "function" && _a || Object])
], GarmentNeckTapWiWidgetComponent);

var _a;
//# sourceMappingURL=garment-neck-tap-wi-widget.component.js.map

/***/ }),

/***/ "./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-2\">\r\n  <div class=\"card-header\">\r\n    MI Attachment\r\n  </div>\r\n\r\n  <div class=\"card-block mt-2 pre-scrollable\" style=\"width:auto;height: 200px\">\r\n      <ul style=\"margin-left:-30px;\" >\r\n        <li style=\"float:left;list-style-type: none;margin:2px\"   *ngFor=\"let item of attachmentItems\" (click)=\"openDialog(item)\" >\r\n          <div *ngIf=\"item.tag == 'image'\"><img src=\"{{item.path}}\" height=\"90\" width=\"100\"></div>\r\n          <div *ngIf=\"item.tag == 'video'\"><video  width=\"100\" height=\"90\" controls><source src=\"{{item.path}}\" type=\"video/mp4\"></video></div>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAttachmentWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_video_view_video_view_component__ = __webpack_require__("./src/app/shared/video-view/video-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mi_attachment_service__ = __webpack_require__("./src/app/wi-page/mi-attachment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_image_view_image_view_component__ = __webpack_require__("./src/app/shared/image-view/image-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MiAttachmentWidgetComponent = (function () {
    function MiAttachmentWidgetComponent(dialog, attachmentService) {
        this.dialog = dialog;
        this.attachmentService = attachmentService;
    }
    MiAttachmentWidgetComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    MiAttachmentWidgetComponent.prototype.initData = function () {
        var _this = this;
        this.attachmentService.initData().then(function (value) {
            _this.attachmentItems = value;
        });
    };
    MiAttachmentWidgetComponent.prototype.openDialog = function (attachment) {
        if (attachment.tag === 'image') {
            this.openImageDialog(attachment);
        }
        else {
            this.openVideoDialog(attachment);
        }
    };
    MiAttachmentWidgetComponent.prototype.openVideoDialog = function (attachment) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__shared_video_view_video_view_component__["a" /* VideoViewComponent */], {
            width: '360px',
            height: '240px',
            data: { url: attachment.path },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MiAttachmentWidgetComponent.prototype.openImageDialog = function (attachment) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_image_view_image_view_component__["a" /* ImageViewComponent */], {
            width: '50%',
            height: '50%',
            data: { url: attachment.path }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    return MiAttachmentWidgetComponent;
}());
MiAttachmentWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mi-attachment-widget',
        template: __webpack_require__("./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.html"),
        styles: [__webpack_require__("./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__mi_attachment_service__["a" /* MiAttachmentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__mi_attachment_service__["a" /* MiAttachmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mi_attachment_service__["a" /* MiAttachmentService */]) === "function" && _b || Object])
], MiAttachmentWidgetComponent);

var _a, _b;
//# sourceMappingURL=mi-attachment-widget.component.js.map

/***/ }),

/***/ "./src/app/wi-page/mi-attachment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAttachmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiAttachmentService = (function () {
    function MiAttachmentService() {
    }
    MiAttachmentService.prototype.initData = function () {
        return Promise.resolve([
            { tag: 'image', path: 'assets/img/wi/Label.png', desc: 'Main Label' },
            { tag: 'image', path: 'assets/img/wi/Fabric.png', desc: 'Fabric' },
            { tag: 'image', path: 'assets/img/wi/SOP.jpg', desc: 'SOP' },
            { tag: 'image', path: 'assets/img/wi/neckTape.png', desc: 'NeckTape' },
            // { tag : 'image', path : 'assets/img/wi/Fabric.png', desc : 'Fabric'},
            // { tag : 'image', path : 'assets/img/wi/SOP.jpg', desc : 'SOP'},
            // { tag : 'image', path : 'assets/img/wi/Label.png', desc : 'Main Label'},
            // { tag : 'image', path : 'assets/img/wi/Fabric.png', desc : 'Fabric'},
            // { tag : 'image', path : 'assets/img/wi/SOP.jpg', desc : 'SOP'},
            { tag: 'video', path: 'assets/video/1.mp4', desc: 'Broken yarn due to certain fabrication' },
            { tag: 'video', path: 'assets/video/2.mp4', desc: 'Machine speed adjustment may need' },
        ]);
    };
    return MiAttachmentService;
}());
MiAttachmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MiAttachmentService);

//# sourceMappingURL=mi-attachment.service.js.map

/***/ }),

/***/ "./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    MI Information\r\n  </div>\r\n  <div class=\"card-block mt-2\">\r\n    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\r\n    <button type=\"button\" class=\"btn ml-2 btn-outline-primary\"   [ngClass]=\"{active:selTag.TDC}\" (click)=\"selTag.TDC=!selTag.TDC;curTag='TDC';getMiTextInfo()\">TDC</button>\r\n    <!-- Indicates a successful or positive action -->\r\n    <button type=\"button\" class=\"btn btn-outline-success\" [ngClass]=\"{active:selTag.QA}\" (click)=\"selTag.QA=!selTag.QA;curTag='QA';getMiTextInfo()\">QA</button>\r\n    <!-- Contextual button for informational alert messages -->\r\n    <button type=\"button\" class=\"btn btn-outline-info\" [ngClass]=\"{active:selTag.COL}\" (click)=\"selTag.COL=!selTag.COL;curTag='COL';getMiTextInfo()\">COL</button>\r\n    <!-- Indicates caution should be taken with this action -->\r\n    <button type=\"button\" class=\"btn btn-outline-warning\" [ngClass]=\"{active:selTag.Warning}\" (click)=\"selTag.Warning=!selTag.Warning;curTag='Warning';getMiTextInfo()\">Warning</button>\r\n  </div>\r\n  <div class=\"card-block mr-2 ml-2 mb-2 pre-scrollable \" style=\"width:auto;height: 210px\">\r\n    <div *ngIf=\"selTag.Warning\" class=\"mt-2\" title=\"Warning Infomation\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of warningItems\">\r\n          <div>\r\n            <img src=\"assets/svg/warning.svg\" class=\"float-left mr-2\" height=\"20px\">\r\n            <h6 style=\"color: red\">{{item.desc}}</h6>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"selTag.COL\" class=\"mt-2\" title=\"COL Infomation\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of colItems\"><h6>{{item.desc}}</h6></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"selTag.QA\" class=\"mt-2 mb-0\" title=\"QA Infomation\">\r\n      <table class=\"table table-bordered m-0\">\r\n        <thead>\r\n        <!-- <tr>\r\n           <th>Name</th>\r\n           <th>Desc</th>\r\n         </tr>-->\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of qaItems\">\r\n          <td class=\"h6\">{{item.name}}</td>\r\n          <td class=\"h6\">{{item.desc}}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div *ngIf=\"selTag.TDC\" class=\"mt-2\" id=\"tdcDiv\" style=\"position:relative; \">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of tdcItems\">\r\n          <div>\r\n            <span class=\"h6\"> {{item.name}}：</span>\r\n            <span *ngIf=\"item.path != null\"> <a href=\"javascript:void(0);\"  target=\"_blank\" (click)=\"openImageDialog(item)\">  {{item.desc}} </a> </span>\r\n            <span *ngIf=\"item.path == null\"> <a href=\"javascript:void(0);\" class=\"mitext-link\" target=\"_blank\" (click)=\"openImageDialog(item)\">  {{item.desc}} </a> </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mitext-link {\n  text-decoration: none;\n  color: black; }\n\n.btn.btn-outline-primary:hover {\n  color: #007bff;\n  background-color: transparent; }\n\n.btn.btn-outline-primary.active:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn.btn-outline-success:hover {\n  color: #28a745;\n  background-color: transparent; }\n\n.btn.btn-outline-success.active:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn.btn-outline-info:hover {\n  color: #17a2b8;\n  background-color: transparent; }\n\n.btn.btn-outline-info.active:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn.btn-outline-warning:hover {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn.btn-outline-warning.active:hover {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.25rem 0.75rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiTextInfoWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_text_service__ = __webpack_require__("./src/app/wi-page/mi-text.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_image_view_image_view_component__ = __webpack_require__("./src/app/shared/image-view/image-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MiTextInfoWidgetComponent = (function () {
    function MiTextInfoWidgetComponent(dialog, miTextService) {
        this.dialog = dialog;
        this.miTextService = miTextService;
        this.textInfoType = {
            'TDC': 'TDC',
            'QA': 'QA',
            'COL': 'COL',
            'WARNING': 'Warning'
        };
        this.selTag = {
            'TDC': true,
            'QA': false,
            'COL': false,
            'Warning': false
        };
    }
    MiTextInfoWidgetComponent.prototype.getSelectItem = function (tag) {
        return null;
    };
    MiTextInfoWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miTextService.initData().then(function (value) {
            _this.items = value;
            _this.tdcItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.TDC; });
            _this.qaItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.QA; });
            _this.colItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.COL; });
            _this.warningItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.WARNING; });
        });
    };
    MiTextInfoWidgetComponent.prototype.getMiTextInfo = function (object) {
        // console.log(this.selItems);
    };
    MiTextInfoWidgetComponent.prototype.openImageDialog = function (miTextInfo) {
        if (miTextInfo.path != null) {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_image_view_image_view_component__["a" /* ImageViewComponent */], {
                width: '50%',
                height: '50%',
                data: { url: miTextInfo.path }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
            });
        }
    };
    return MiTextInfoWidgetComponent;
}());
MiTextInfoWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mi-text-info-widget',
        template: __webpack_require__("./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.html"),
        styles: [__webpack_require__("./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_text_service__["a" /* MiTextService */]) === "function" && _b || Object])
], MiTextInfoWidgetComponent);

var _a, _b;
//# sourceMappingURL=mi-text-info-widget.component.js.map

/***/ }),

/***/ "./src/app/wi-page/mi-text.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiTextService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiTextService = (function () {
    function MiTextService() {
    }
    MiTextService.prototype.initData = function () {
        return Promise.resolve([
            { tag: 'TDC', name: '1.Collar Type', desc: 'Removeable Collar Stay Collar', path: 'assets/img/wi/neckTape.png' },
            { tag: 'TDC', name: '2.Band Buttonhole', desc: 'Horizontal', path: 'assets/img/wi/collar01.jpg' },
            { tag: 'TDC', name: '3.Band Shape', desc: 'Round', path: 'assets/img/wi/neckTape.png' },
            { tag: 'TDC', name: '4.Set Collar', desc: 'Edge stitch' },
            { tag: 'TDC', name: '5.Tape material', desc: 'Self Fabric Neck Tape' },
            { tag: 'TDC', name: '6.Thread Color', desc: '850-White' },
            { tag: 'QA', name: 'QA', desc: '0.3cm Corporate stripe piping ' },
            { tag: 'QA', name: 'QA', desc: '1.25cm from band tip edge' },
            { tag: 'COL', name: 'COL', desc: '1) Broken yarn due to certain fabrication' },
            { tag: 'COL', name: 'COL', desc: '2) Machine speed adjustment may need' },
            { tag: 'Warning', name: 'Warning1', desc: '100% PI focus to inspection broken yarn at armhole and side seam parts' },
            { tag: 'Warning', name: 'Warning2', desc: 'Machine speed adjustment may need' },
        ]);
    };
    MiTextService.prototype.getMiTexts = function (tag) {
        return null;
    };
    MiTextService.prototype.initWiData = function () {
        return Promise.resolve([
            { tag: 'TDC', name: 'Collar', desc: '5cm', xValue: 19, yValue: 319 },
            { tag: 'TDC', name: 'Collar', desc: '2.9cm', xValue: 80, yValue: 383 },
            { tag: 'TDC', name: 'Collar', desc: '0.5cm', xValue: 250, yValue: 273 },
            { tag: 'TDC', name: 'Collar', desc: '4.4cm', xValue: 220, yValue: 333 },
            { tag: 'TDC', name: 'Collar', desc: '3.5cm', xValue: 314, yValue: 383 },
            { tag: 'TDC', name: 'Collar', desc: '3.0cm', xValue: 548, yValue: 357 },
            { tag: 'TDC', name: 'Collar', desc: '0.5cm', xValue: 522, yValue: 417 },
            { tag: 'TDC', name: 'Collar', desc: '0.3cm', xValue: 492, yValue: 445 }
        ]);
    };
    return MiTextService;
}());
MiTextService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MiTextService);

//# sourceMappingURL=mi-text.service.js.map

/***/ }),

/***/ "./src/app/wi-page/wi-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__garment_neck_tap_app_garment_neck_tap_app_component__ = __webpack_require__("./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mi_text_info_widget_mi_text_info_widget_component__ = __webpack_require__("./src/app/wi-page/mi-text-info-widget/mi-text-info-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mi_attachment_widget_mi_attachment_widget_component__ = __webpack_require__("./src/app/wi-page/mi-attachment-widget/mi-attachment-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__garment_neck_tap_wi_widget_garment_neck_tap_wi_widget_component__ = __webpack_require__("./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'PCS-MI/wi', component: __WEBPACK_IMPORTED_MODULE_2__garment_neck_tap_app_garment_neck_tap_app_component__["a" /* GarmentNeckTapAppComponent */] },
];
var WiPageModule = (function () {
    function WiPageModule() {
    }
    return WiPageModule;
}());
WiPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__garment_neck_tap_app_garment_neck_tap_app_component__["a" /* GarmentNeckTapAppComponent */], __WEBPACK_IMPORTED_MODULE_5__mi_text_info_widget_mi_text_info_widget_component__["a" /* MiTextInfoWidgetComponent */], __WEBPACK_IMPORTED_MODULE_6__mi_attachment_widget_mi_attachment_widget_component__["a" /* MiAttachmentWidgetComponent */], __WEBPACK_IMPORTED_MODULE_7__garment_neck_tap_wi_widget_garment_neck_tap_wi_widget_component__["a" /* GarmentNeckTapWiWidgetComponent */]]
    })
], WiPageModule);

//# sourceMappingURL=wi-page.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map