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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sewing_page_sewing_page_module__ = __webpack_require__("./src/app/sewing-page/sewing-page.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__wi_page_wi_page_module__["a" /* WiPageModule */],
            __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_module__["a" /* LandingPageModule */],
            __WEBPACK_IMPORTED_MODULE_6__sewing_page_sewing_page_module__["a" /* SewingPageModule */],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_widget_info_widget_component__ = __webpack_require__("./src/app/landing-page/info-widget/info-widget.component.ts");

var BaseWidget = (function () {
    function BaseWidget(dialog) {
        this.dialog = dialog;
    }
    BaseWidget.prototype.showMore = function () {
        console.log(this.data);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__info_widget_info_widget_component__["a" /* InfoWidgetComponent */], {
            width: '80%',
            height: '80%',
        });
        dialogRef.componentInstance.data = this.data;
        // dialogRef.componentInstance.dialogRef = dialogRef;
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    return BaseWidget;
}());

//# sourceMappingURL=base-widget.js.map

/***/ }),

/***/ "./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\"\r\n     [style.height.px]=\"data.height\" [style.opacity]=\"data.active?1:0.4\" class=\"card\">\r\n  <div class=\"emi-svg-pic\">\r\n    <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         viewBox=\"0 0 340 291.08\">\r\n      <defs>\r\n        <style>.cls-1 {\r\n          fill: url(#未命名的渐变_9);\r\n        }\r\n\r\n        .cls-2, .cls-3 {\r\n          fill: none;\r\n        }\r\n\r\n        .cls-2, .cls-3, .cls-4 {\r\n          stroke: #fff;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .cls-3 {\r\n          stroke-dasharray: 0.92 3.67;\r\n        }\r\n\r\n        .cls-4 {\r\n          fill: #68ddd5;\r\n        }\r\n\r\n        .cls-5 {\r\n          font-size: 35.76px;\r\n          font-family: SegoeUI, Segoe UI;\r\n        }\r\n\r\n        .cls-5, .cls-6 {\r\n          fill: #fff;\r\n        }\r\n\r\n        .cls-6 {\r\n          opacity: 0.2;\r\n        }</style>\r\n        <linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#68ead0\"/>\r\n          <stop offset=\"1\" stop-color=\"#4ca2ef\"/>\r\n        </linearGradient>\r\n      </defs>\r\n      <title>eMI</title>\r\n      <path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/>\r\n      <path class=\"cls-2\"\r\n            d=\"M76.53,85.55A20.57,20.57,0,1,0,56,106.13a15.07,15.07,0,0,0,8.23-2.06l12.34,12.34L64.19,128.76A15.07,15.07,0,0,0,56,126.7a20.58,20.58,0,1,0,20.57,20.58,15.1,15.1,0,0,0-2-8.23L86.83,126.7s24.24,31.13,36,36c4.75,2,20.58,0,20.58,0L74.49,93.78a15.1,15.1,0,0,0,2-8.23M56,95.84A10.28,10.28,0,1,1,66.25,85.55,10.32,10.32,0,0,1,56,95.84m0,61.72a10.28,10.28,0,1,1,10.28-10.28A10.32,10.32,0,0,1,56,157.56M143.4,70.12m-55.48,46.2a2.45,2.45,0,1,1-2.45-2.45A2.45,2.45,0,0,1,87.92,116.33Z\"/>\r\n      <polyline class=\"cls-2\"\r\n                points=\"109.12 188.65 109.12 120.09 156.08 116.33 156.08 116.41 109.12 112.66 109.12 44.09\"/>\r\n      <line class=\"cls-2\" x1=\"160.97\" y1=\"116.41\" x2=\"161.47\" y2=\"116.41\"/>\r\n      <line class=\"cls-3\" x1=\"165.14\" y1=\"116.41\" x2=\"181.65\" y2=\"116.41\"/>\r\n      <line class=\"cls-2\" x1=\"183.49\" y1=\"116.41\" x2=\"183.99\" y2=\"116.41\"/>\r\n      <path class=\"cls-4\" d=\"M143.4,70.12s-15.82-2-20.58,0C112.74,74.3,92,101,92,101l10.29,10.28Z\"/>\r\n      <text class=\"cls-5\" transform=\"translate(35.63 246.21)\">Cutting Info</text>\r\n      <path class=\"cls-6\"\r\n            d=\"M320,50.09,289.89,20a1.81,1.81,0,0,1,1.28-3.09h30.08a1.81,1.81,0,0,1,1.81,1.81V48.82A1.81,1.81,0,0,1,320,50.09Z\"/>\r\n    </svg>\r\n  </div>\r\n  <app-info-widget [data]=\"data\"></app-info-widget>\r\n  <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CuttingProcessWidgetComponent = (function (_super) {
    __extends(CuttingProcessWidgetComponent, _super);
    function CuttingProcessWidgetComponent(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        return _this;
    }
    CuttingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return CuttingProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CuttingProcessWidgetComponent.prototype, "data", void 0);
CuttingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cutting-process-widget',
        template: __webpack_require__("./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/cutting-process-widget/cutting-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], CuttingProcessWidgetComponent);

var _a;
//# sourceMappingURL=cutting-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\"\r\n     [style.height.px]=\"data.height\" [style.opacity]=\"data.active?1:0.4\" class=\"card\">\r\n  <div class=\"emi-svg-pic\">\r\n    <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         viewBox=\"0 0 340 291.08\">\r\n      <defs>\r\n        <style>.cls-1 {\r\n          fill: url(#未命名的渐变_9);\r\n        }\r\n\r\n        .cls-2 {\r\n          font-size: 35.76px;\r\n          font-family: SegoeUI, Segoe UI;\r\n        }\r\n\r\n        .cls-2, .cls-6 {\r\n          fill: #fff;\r\n        }\r\n\r\n        .cls-3 {\r\n          fill: #68ddd5;\r\n        }\r\n\r\n        .cls-3, .cls-4, .cls-5 {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .cls-3, .cls-5 {\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n        }\r\n\r\n        .cls-4 {\r\n          fill: #93c3f1;\r\n          stroke-miterlimit: 10;\r\n        }\r\n\r\n        .cls-5 {\r\n          fill: none;\r\n        }\r\n\r\n        .cls-6 {\r\n          opacity: 0.2;\r\n        }</style>\r\n        <linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#68ead0\"/>\r\n          <stop offset=\"1\" stop-color=\"#4ca2ef\"/>\r\n        </linearGradient>\r\n      </defs>\r\n      <title>eMI</title>\r\n      <path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/>\r\n      <text class=\"cls-2\" transform=\"translate(35.63 246.21)\">Embroidery info</text>\r\n      <path class=\"cls-3\"\r\n            d=\"M52.19,60.37c2.8,2.8,90.48,101.27,90.48,101.27l14.94,21.12S41.62,79,37.58,75A10.33,10.33,0,0,1,52.19,60.37Z\"/>\r\n      <path class=\"cls-4\"\r\n            d=\"M48,67.87c1.47,1.47,4.91,6.21,4.11,7s-5.55-2.64-7-4.11-2-3.31-1.21-4.11S46.52,66.4,48,67.87Z\"/>\r\n      <path class=\"cls-5\" d=\"M57,62c22.91-11.07,37.09,12.4,54.52,2.48,21-11.93,44.11,13.82,44.11,13.82\"/>\r\n      <path class=\"cls-5\" d=\"M43.87,110.2S29,87.38,47.83,68.51\"/>\r\n      <path class=\"cls-6\"\r\n            d=\"M319.94,50.17,289.85,20.09A1.81,1.81,0,0,1,291.13,17h30.08A1.81,1.81,0,0,1,323,18.81V48.9A1.81,1.81,0,0,1,319.94,50.17Z\"/>\r\n    </svg>\r\n  </div>\r\n  <app-info-widget [data]=\"data\"></app-info-widget>\r\n  <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmbroideryProcessWidgetComponent = (function (_super) {
    __extends(EmbroideryProcessWidgetComponent, _super);
    function EmbroideryProcessWidgetComponent(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        return _this;
    }
    EmbroideryProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return EmbroideryProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EmbroideryProcessWidgetComponent.prototype, "data", void 0);
EmbroideryProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-embroidery-process-widget',
        template: __webpack_require__("./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/embroidery-process-widget/embroidery-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], EmbroideryProcessWidgetComponent);

var _a;
//# sourceMappingURL=embroidery-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\" [style.height.px]=\"data.height\"  [style.opacity]=\"data.active?1:0.4\" class=\"card\">\r\n    <div class=\"emi-svg-pic\">\r\n      <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 340 291.08\"><defs><style>.cls-1{fill:url(#未命名的渐变_9);}.cls-2{font-size:35.76px;font-family:SegoeUI, Segoe UI;}.cls-2,.cls-5{fill:#fff;}.cls-3{fill:none;}.cls-3,.cls-4{stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-4{fill:#68ead0;}.cls-5{opacity:0.2;}</style><linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#68ead0\"/><stop offset=\"1\" stop-color=\"#4ca2ef\"/></linearGradient></defs><title>eMI</title><path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/><text class=\"cls-2\" transform=\"translate(45.57 246.21)\">Finishing Info</text><path class=\"cls-3\" d=\"M168.92,109.91c-1,0-41.57.37-43.3.52h0c-45.95,4.17-63,24-80.12,61.54a4.13,4.13,0,0,0,3.75,5.83H190a4.14,4.14,0,0,0,4.12-4.34L188.86,70.24a4.13,4.13,0,0,0-4.12-3.91h-90a4.12,4.12,0,0,0-4.12,4.12V86.26a4.12,4.12,0,0,0,4.12,4.12H151\"/><path class=\"cls-4\" d=\"M146.5,155.81H103.86a4.12,4.12,0,0,0,0,8.25H146.5a4.12,4.12,0,0,0,0-8.25Z\"/><path class=\"cls-3\" d=\"M157,159.93a4.12,4.12,0,0,0,4.12,4.12h9.23a4.12,4.12,0,0,0,0-8.25h-9.23A4.12,4.12,0,0,0,157,159.93Z\"/><path class=\"cls-5\" d=\"M319.74,50.09,289.66,20a1.81,1.81,0,0,1,1.28-3.09H321a1.81,1.81,0,0,1,1.81,1.81V48.82A1.81,1.81,0,0,1,319.74,50.09Z\"/></svg>\r\n    </div>\r\n    <app-info-widget [data]=\"data\"></app-info-widget>\r\n    <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinishingProcessWidgetComponent = (function (_super) {
    __extends(FinishingProcessWidgetComponent, _super);
    function FinishingProcessWidgetComponent(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        return _this;
    }
    FinishingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return FinishingProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FinishingProcessWidgetComponent.prototype, "data", void 0);
FinishingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-finishing-process-widget',
        template: __webpack_require__("./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/finishing-process-widget/finishing-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], FinishingProcessWidgetComponent);

var _a;
//# sourceMappingURL=finishing-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"emi-svg-line\" #viewport>\r\n  <ng-container # *ngIf=\"loading; else loaded\">\r\n    <md-spinner style=\"width: 100%;\r\n\theight: 100%;\r\n\tpadding: 15em;\"></md-spinner>\r\n  </ng-container>\r\n  <ng-template #loaded>\r\n    <div [ngSwitch]=\"p.processType\" *ngFor=\"let p of processS\" style=\"position: absolute\" [style.left.px]=\"p.x\"\r\n         [style.top.px]=\"p.y\">\r\n      <app-sew-process-widget [data]=\"p\" *ngSwitchCase=\"4\"></app-sew-process-widget>\r\n      <app-cutting-process-widget [data]=\"p\" *ngSwitchCase=\"0\"></app-cutting-process-widget>\r\n      <app-embroidery-process-widget [data]=\"p\" *ngSwitchCase=\"1\"></app-embroidery-process-widget>\r\n      <app-print-process-widget [data]=\"p\" *ngSwitchCase=\"3\"></app-print-process-widget>\r\n      <app-washing-process-widget [data]=\"p\" *ngSwitchCase=\"2\"></app-washing-process-widget>\r\n      <app-finishing-process-widget [data]=\"p\" *ngSwitchCase=\"5\"></app-finishing-process-widget>\r\n      <div *ngSwitchDefault>ooh your component is missing!</div>\r\n    </div>\r\n    <svg width=\"100%\" height=\"100%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <g app-svg-link *ngFor=\"let link of linkPaths\" [link]=\"link\"></g>\r\n    </svg>\r\n  </ng-template>\r\n</div>\r\n<app-order-search (order)=\"fetch($event)\"></app-order-search>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emi-svg-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #f6f6f6;\n  margin-top: 36px;\n  height: calc(100% - 35px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/home-view/home-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_service__ = __webpack_require__("./src/app/landing-page/landing.service.ts");
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
    function HomeViewComponent(landingService) {
        this.landingService = landingService;
        this.loading = false;
    }
    HomeViewComponent.prototype.resizeHandle = function (event) {
        this.updateLayout();
    };
    HomeViewComponent.prototype.updateLayout = function () {
        var unitW = this.viewPort.nativeElement.clientWidth / 5;
        var unitH = this.viewPort.nativeElement.clientHeight / 2;
        var gap = 20;
        this.processS[0].x = unitW * (1 - 1) + gap;
        this.processS[0].y = unitH / 2;
        this.processS[0].width = unitW - gap * 2;
        this.processS[0].height = unitH;
        this.processS[1].x = unitW * (2 - 1) + gap;
        this.processS[1].y = 0;
        this.processS[1].width = unitW - gap * 2;
        this.processS[1].height = unitH - gap;
        this.processS[2].x = unitW * (2 - 1) + gap;
        this.processS[2].y = unitH;
        this.processS[2].width = unitW - gap * 2;
        this.processS[2].height = unitH - gap;
        this.processS[3].x = unitW * (3 - 1) + gap;
        this.processS[3].y = unitH / 2;
        this.processS[3].width = unitW - gap * 2;
        this.processS[3].height = unitH;
        this.processS[4].x = unitW * (4 - 1) + gap;
        this.processS[4].y = unitH / 2;
        this.processS[4].width = unitW - gap * 2;
        this.processS[4].height = unitH;
        this.processS[5].x = unitW * (5 - 1) + gap;
        this.processS[5].y = unitH / 2;
        this.processS[5].width = unitW - gap * 2;
        this.processS[5].height = unitH;
        this.linkPaths = [
            this.extracted(this.processS[0], this.processS[1], true),
            this.extracted(this.processS[0], this.processS[2], true),
            this.extracted(this.processS[1], this.processS[3], false),
            this.extracted(this.processS[2], this.processS[3], true),
            this.extracted(this.processS[3], this.processS[4], true),
            this.extracted(this.processS[4], this.processS[5], true),
        ];
    };
    HomeViewComponent.prototype.ngOnInit = function () {
    };
    HomeViewComponent.prototype.fetch = function (order) {
        var _this = this;
        this.loading = true;
        this.landingService.getProcessInfos(order).then(function (value) {
            _this.processS = value;
            _this.loading = false;
            _this.updateLayout();
        }).catch(function (reason) {
            _this.loading = false;
            alert(reason);
        });
    };
    HomeViewComponent.prototype.extracted = function (p2, p1, active) {
        return {
            fx: p2.x + p2.width,
            fy: p2.y + p2.height / 2,
            tx: p1.x - 10,
            ty: p1.y + p1.height / 2,
            active: active
        };
    };
    return HomeViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('viewport'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], HomeViewComponent.prototype, "viewPort", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomeViewComponent.prototype, "resizeHandle", null);
HomeViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-view',
        template: __webpack_require__("./src/app/landing-page/home-view/home-view.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/home-view/home-view.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__landing_service__["a" /* LandingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__landing_service__["a" /* LandingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__landing_service__["a" /* LandingService */]) === "function" && _b || Object])
], HomeViewComponent);

var _a, _b;
//# sourceMappingURL=home-view.component.js.map

/***/ }),

/***/ "./src/app/landing-page/info-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InfoFilterPipe = (function () {
    function InfoFilterPipe() {
    }
    InfoFilterPipe.prototype.transform = function (value, args) {
        return value.filter(function (value2) { return value2.type === args; });
    };
    return InfoFilterPipe;
}());
InfoFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'infoFilter'
    })
], InfoFilterPipe);

//# sourceMappingURL=info-filter.pipe.js.map

/***/ }),

/***/ "./src/app/landing-page/info-widget/info-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block emi-alert-info\">\r\n  <div class=\"card-text\" *ngFor=\"let info of (data.infos | infoFilter : 'alert')\">\r\n    <svg version=\"1.1\" id=\"图层_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n   width=\"15px\" height=\"15px\" viewBox=\"0 0 8.552 7.92\" enable-background=\"new 0 0 8.552 7.92\" xml:space=\"preserve\">\r\n<path fill=\"red\" d=\"M4.276,5.17c-0.168,0-0.245-0.135-0.245-0.305V2.123c0-0.168,0.077-0.305,0.245-0.305\r\n  c0.168,0,0.246,0.137,0.246,0.305v2.743C4.521,5.035,4.444,5.17,4.276,5.17 M3.919,6.238c0,0.197,0.16,0.357,0.357,0.357\r\n  s0.358-0.16,0.358-0.357S4.473,5.881,4.276,5.881S3.919,6.041,3.919,6.238\"/>\r\n<path fill=\"red\" d=\"M8.377,6.402L5.134,0.595C4.923,0.217,4.609,0,4.274,0s-0.649,0.217-0.86,0.595l-3.24,5.807\r\n  c-0.209,0.375-0.23,0.76-0.058,1.055C0.289,7.751,0.635,7.92,1.065,7.92h6.421c0.432,0,0.777-0.169,0.949-0.463\r\n  C8.607,7.162,8.588,6.778,8.377,6.402 M8.072,7.154c-0.18,0.322-0.521,0.329-0.908,0.329H1.389c-0.388,0-0.686-0.019-0.841-0.28\r\n  C0.392,6.94,0.636,6.468,0.825,6.133l2.802-4.967c0.189-0.337,0.346-0.707,0.647-0.707c0.301,0,0.405,0.276,0.595,0.612l2.857,5.061\r\n  C7.914,6.468,8.219,6.889,8.072,7.154\"/>\r\n</svg>\r\n    {{info.desc}}\r\n  </div>\r\n</div>\r\n<div class=\"card-block emi-nor-info\">\r\n  <div class=\"card-text\" *ngFor=\"let info of (data.infos | infoFilter : 'normal'); let i = index\">\r\n    {{i+1}}) {{info.desc}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/info-widget/info-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/landing-page/info-widget/info-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_filter_pipe__ = __webpack_require__("./src/app/landing-page/info-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoWidgetComponent = (function () {
    function InfoWidgetComponent() {
    }
    InfoWidgetComponent.prototype.ngOnInit = function () {
    };
    return InfoWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], InfoWidgetComponent.prototype, "data", void 0);
InfoWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-widget',
        template: __webpack_require__("./src/app/landing-page/info-widget/info-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/info-widget/info-widget.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__info_filter_pipe__["a" /* InfoFilterPipe */]]
    })
], InfoWidgetComponent);

//# sourceMappingURL=info-widget.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_filter_pipe__ = __webpack_require__("./src/app/landing-page/info-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_widget_info_widget_component__ = __webpack_require__("./src/app/landing-page/info-widget/info-widget.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_view_home_view_component__["a" /* HomeViewComponent */], __WEBPACK_IMPORTED_MODULE_3__order_search_order_search_component__["a" /* OrderSearchComponent */], __WEBPACK_IMPORTED_MODULE_6__sew_process_widget_sew_process_widget_component__["a" /* SewProcessWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__svg_link_svg_link_component__["a" /* SvgLinkComponent */], __WEBPACK_IMPORTED_MODULE_8__cutting_process_widget_cutting_process_widget_component__["a" /* CuttingProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_9__print_process_widget_print_process_widget_component__["a" /* PrintProcessWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_10__embroidery_process_widget_embroidery_process_widget_component__["a" /* EmbroideryProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_11__washing_process_widget_washing_process_widget_component__["a" /* WashingProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_12__finishing_process_widget_finishing_process_widget_component__["a" /* FinishingProcessWidgetComponent */], __WEBPACK_IMPORTED_MODULE_13__info_filter_pipe__["a" /* InfoFilterPipe */], __WEBPACK_IMPORTED_MODULE_14__info_widget_info_widget_component__["a" /* InfoWidgetComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__info_widget_info_widget_component__["a" /* InfoWidgetComponent */]]
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
            { id: 'S17Z15265', url: 'path/to/his1' },
            { id: 'S17Z15264', url: 'path/to/his1' },
            { id: 'S17Z15079', url: 'path/to/his1' },
            { id: 'S17Z15051', url: 'path/to/his1' },
            { id: 'S17Z15034', url: 'path/to/his1' },
        ]);
    };
    LandingService.prototype.getProcessInfos = function (id) {
        if (id === '') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: []
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: []
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: []
                }
            ]); }, 1000); });
        }
        if (id === 'S17Z15265') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Broken Yarn risk 100% in White color'
                        },
                        {
                            type: 'alert',
                            desc: 'Please double confirm the fabric full test was done before cut production'
                        },
                        {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!'
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement)'
                        }
                    ]
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Broken Yarn risk 100% in White color '
                        },
                        {
                            type: 'alert',
                            desc: 'Sewing and inline QA strengthen inspection before washing and after washing '
                        },
                        {
                            type: 'alert',
                            desc: 'Machine speed adjustment may need'
                        },
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        }, {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !! '
                        }, {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !! '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !! '
                        },
                    ]
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is "TAILORED PROGRAM" - New NOS Program starts from 2017, used same Trims as Regular order !! REPEAT OF S17U00549 !!'
                        },
                        { type: 'normal', desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !!' },
                        {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !!'
                        },
                        { type: 'normal', desc: 'Changed to use "Regular Fit" label.' },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                }
            ]); }, 1000); });
        }
        if (id === 'S17Z15264') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Alert: Fabric bleeding issues not 100% Guaranteed'
                        },
                        {
                            type: 'alert',
                            desc: 'Alert: Fabric shading issues'
                        },
                        {
                            type: 'alert',
                            desc: 'Actions: QA to verify fabric shades of same marker fabric'
                        },
                        {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!'
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement)'
                        }
                    ]
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        }, {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !! '
                        }, {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !! '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Alert: Risk fabric of color bleeding'
                        },
                        {
                            type: 'alert',
                            desc: 'Action: QA 100% check of the garment color bleeding issues'
                        },
                        {
                            type: 'normal',
                            desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !! '
                        },
                    ]
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is "TAILORED PROGRAM" - New NOS Program starts from 2017, used same Trims as Regular order !! REPEAT OF S17U00549 !!'
                        },
                        { type: 'normal', desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !!' },
                        {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !!'
                        },
                        { type: 'normal', desc: 'Changed to use "Regular Fit" label.' },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                }
            ]); }, 1000); });
        }
        if (id === 'S17Z15079') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!'
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement)'
                        }
                    ]
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        }, {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !! '
                        }, {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !! '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !! '
                        },
                    ]
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Alert : Puckering issues on White color'
                        },
                        {
                            type: 'alert',
                            desc: 'Action : Remove the “Mappi” process for white 100% cotton dobby fabric'
                        },
                        {
                            type: 'normal',
                            desc: 'This is "TAILORED PROGRAM" - New NOS Program starts from 2017, used same Trims as Regular order !! REPEAT OF S17U00549 !!'
                        },
                        { type: 'normal', desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !!' },
                        {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !!'
                        },
                        { type: 'normal', desc: 'Changed to use "Regular Fit" label.' },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                }
            ]); }, 1000); });
        }
        if (id === 'S17Z15051') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!'
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement)'
                        }
                    ]
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Alert: Potential seam slippage at armhole, side seam, set cuff, set sleeve placket and back yoke'
                        },
                        {
                            type: 'alert',
                            desc: 'Action : COL Recommended action:' +
                                '  i.Increase seam allowance to 3/8;' +
                                '  ii.Overlock with 3 thread-overlock; ' +
                                '  iii.Add tape/interlining'
                        },
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        },
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        }, {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !! '
                        }, {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !! '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !! '
                        },
                    ]
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is "TAILORED PROGRAM" - New NOS Program starts from 2017, used same Trims as Regular order !! REPEAT OF S17U00549 !!'
                        },
                        { type: 'normal', desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !!' },
                        {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !!'
                        },
                        { type: 'normal', desc: 'Changed to use "Regular Fit" label.' },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                }
            ]); }, 1000); });
        }
        if (id === 'S17Z15034') {
            return new Promise(function (resolve) { return setTimeout(function (args) { return resolve([
                {
                    x: 20,
                    y: 145,
                    width: 150,
                    height: 300,
                    processType: 0,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !!'
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement)'
                        }
                    ]
                },
                {
                    x: 200,
                    y: 0,
                    width: 250,
                    height: 300,
                    processType: 1,
                    active: false,
                    infos: []
                },
                {
                    x: 600,
                    y: 145,
                    width: 350,
                    height: 300,
                    processType: 3,
                    active: true,
                    infos: []
                },
                {
                    x: 200,
                    y: 280,
                    width: 250,
                    height: 300,
                    processType: 4,
                    active: true,
                    infos: [
                        {
                            type: 'alert',
                            desc: 'Alert: Potential buttonhole breakage'
                        },
                        {
                            type: 'alert',
                            desc: 'Action: COL Recommended Action\n' +
                                '  i.Testing sewing and hand-pulling of the placket/buttonhole to confirm yarn strength of the herringbone tape'
                        },
                        {
                            type: 'normal',
                            desc: 'To use Ascolite machine & Synthetic thread to wrap buttons. Pls wrap button after gmt dipping !! '
                        }, {
                            type: 'normal',
                            desc: 'New Corporate Stripe Piping EAP# 665022879X along inside collarband for this order !! '
                        }, {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !! '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use "Regular Fit" label. '
                        }, {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                },
                {
                    x: 400,
                    y: 145,
                    width: 250,
                    height: 300,
                    processType: 2,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !! '
                        },
                    ]
                },
                {
                    x: 800,
                    y: 145,
                    width: 450,
                    height: 300,
                    processType: 5,
                    active: true,
                    infos: [
                        {
                            type: 'normal',
                            desc: 'This is "TAILORED PROGRAM" - New NOS Program starts from 2017, used same Trims as Regular order !! REPEAT OF S17U00549 !!'
                        },
                        { type: 'normal', desc: 'This is WRINKLE FREE ORDER (NON TAPE) order !!' },
                        {
                            type: 'normal',
                            desc: 'Added "vanity label" at under french front placket. The Label need to be turned out after gmt folded !!'
                        },
                        { type: 'normal', desc: 'Changed to use "Regular Fit" label.' },
                        {
                            type: 'normal',
                            desc: 'Changed to use EAP#220007017X (I-Board, printed with "Regular Fit" + Measurement).'
                        }
                    ]
                }
            ]); }, 1000); });
        }
    };
    LandingService.prototype.getProposalOrders = function (state) {
        var value = [
            { id: 'S17Z15265', color: 'color1' },
            { id: 'S17Z15264', color: 'color2' },
            { id: 'S17Z15079', color: 'color3' },
            { id: 'S17Z15051', color: 'color3' },
            { id: 'S17Z15034', color: 'color3' },
        ];
        return Promise.resolve(value.filter(function (value2) { return value2.id.startsWith(state); }));
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

module.exports = "<div style=\"width: 100%;display: block;z-index: 9999\">\r\n  <span style=\"margin-left: 30px;font-size: x-large;\">POC ({{currentOrder}})</span>\r\n  <svg class=\"emi-search-icon\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 250.313 250.313\" style=\"enable-background:new 0 0 250.313 250.313;\" xml:space=\"preserve\">\r\n    <g id=\"Search\">\r\n      <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76\r\n        c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911\r\n        c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38\r\n        c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146\r\n        c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236\r\n        C170.146,140.044,140.043,170.146,102.911,170.146z\"/>\r\n    </g>\r\n  </svg>\r\n  <form style=\"float: right\">\r\n    <div class=\"input-group\">\r\n      <input mdInput type=\"text\" class=\"form-control emi-search-input\" placeholder=\"Search order here\"\r\n             [mdAutocomplete]=\"auto\"\r\n             [formControl]=\"stateCtrl\">\r\n      <md-autocomplete #auto=\"mdAutocomplete\">\r\n        <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.id\">\r\n          <span>{{ state.id }}</span>\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

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
        this.order = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.typed = false;
        var that = this;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null).throttleTime(500).distinctUntilChanged().debounceTime(200)
            .switchMap(function (state) {
            if (state) {
                that.typed = true;
            }
            else {
                that.typed = false;
            }
            return state ? _this.landingService.getProposalOrders(state) : Promise.resolve(_this.hisStates.slice());
        });
        this.filteredStates.debounceTime(3000).distinctUntilChanged().subscribe(function (value) {
            if (that.typed) {
                if (value.length > 0) {
                    that.currentOrder = value[0].id;
                    _this.order.emit(value[0].id);
                }
            }
            else {
                _this.order.emit('');
            }
        });
    }
    OrderSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.landingService.getHistoryOrders().then(function (value) { return _this.hisStates = value; });
    };
    return OrderSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], OrderSearchComponent.prototype, "order", void 0);
OrderSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-search',
        template: __webpack_require__("./src/app/landing-page/order-search/order-search.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/order-search/order-search.component.sass")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__landing_service__["a" /* LandingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__landing_service__["a" /* LandingService */]) === "function" && _a || Object])
], OrderSearchComponent);

var _a;
//# sourceMappingURL=order-search.component.js.map

/***/ }),

/***/ "./src/app/landing-page/print-process-widget/print-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\"\r\n     [style.height.px]=\"data.height\" [style.opacity]=\"data.active?1:0.4\" class=\"card\">\r\n  <div class=\"emi-svg-pic\">\r\n    <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         viewBox=\"0 0 340 291.08\">\r\n      <defs>\r\n        <style>.cls-1 {\r\n          fill: url(#未命名的渐变_9);\r\n        }\r\n\r\n        .cls-2 {\r\n          font-size: 35.76px;\r\n          font-family: SegoeUI, Segoe UI;\r\n        }\r\n\r\n        .cls-2, .cls-5 {\r\n          fill: #fff;\r\n        }\r\n\r\n        .cls-3 {\r\n          fill: none;\r\n        }\r\n\r\n        .cls-3, .cls-4 {\r\n          stroke: #fff;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .cls-4 {\r\n          fill: #68ddd5;\r\n        }\r\n\r\n        .cls-5 {\r\n          opacity: 0.2;\r\n        }</style>\r\n        <linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#68ead0\"/>\r\n          <stop offset=\"1\" stop-color=\"#4ca2ef\"/>\r\n        </linearGradient>\r\n      </defs>\r\n      <title>eMI</title>\r\n      <path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/>\r\n      <text class=\"cls-2\" transform=\"translate(35.63 246.21)\">Print info</text>\r\n      <ellipse class=\"cls-3\" cx=\"52.65\" cy=\"112.62\" rx=\"17.52\" ry=\"20.46\"\r\n               transform=\"translate(-43.15 33.39) rotate(-25.35)\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M164.73,58.68C160,48.24,149.49,42.85,140.55,46.89,139.79,47.24,44,94,44,94l0,.07c8.71-4,19.6.92,24.41,11.06,4.57,9.64,2,20.54-5.66,25.22,5.85-2.93,92.84-46.54,93.71-46.94C165.48,79.35,169.46,69.11,164.73,58.68Z\"/>\r\n      <ellipse class=\"cls-3\" cx=\"52.65\" cy=\"112.62\" rx=\"6.68\" ry=\"7.8\"\r\n               transform=\"translate(-43.15 33.39) rotate(-25.35)\"/>\r\n      <ellipse class=\"cls-3\" cx=\"52.65\" cy=\"158.66\" rx=\"17.52\" ry=\"20.46\"\r\n               transform=\"translate(-62.87 37.83) rotate(-25.35)\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M163.8,102.08c-4.73-10.44-15.44-14.49-24.38-10.44C138.67,92,44,140,44,140l0,.07c8.71-4,19.6.92,24.41,11.06,4.53,9.56,2,20.37-5.46,25.11l49.51-26.17,34.33-34.33c.94,2.86,1.16,11,1.2,15.57,5.12-2.7,8.32-4.38,8.48-4.45C165.48,122.84,168.53,112.52,163.8,102.08Z\"/>\r\n      <ellipse class=\"cls-3\" cx=\"52.65\" cy=\"158.66\" rx=\"6.68\" ry=\"7.8\"\r\n               transform=\"translate(-62.87 37.83) rotate(-25.35)\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M148.07,158v-3.49L109.61,193c7.14-3.43,40.63-19.59,45.43-22.41C161.16,167,148,174.32,148.07,158Z\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M132.2,95.29l-9.84,5L90.29,132.34a33.73,33.73,0,0,1,6.48,13.52l43.42-43.42A34.36,34.36,0,0,0,132.2,95.29Z\"/>\r\n      <path class=\"cls-4\" d=\"M80.28,121.63c0,.7-.11,1.39-.11,2.09a34.27,34.27,0,0,1,10.12,8.62l32.06-32.06Z\"/>\r\n      <path class=\"cls-4\"\r\n            d=\"M140.19,102.44,96.77,145.86a33.55,33.55,0,0,1,.84,7.42l-.12,11.86,49.37-49.37A33.73,33.73,0,0,0,140.19,102.44Z\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M146.86,115.77,97.49,165.13l-.11,11v6.2a25.77,25.77,0,0,0,.06,2.8l50.62-50.62S148.2,119.83,146.86,115.77Z\"/>\r\n      <path class=\"cls-4\" d=\"M148.07,134.56,97.44,185.18c.62,8.67,5.82,10.87,10.82,8.48l1.34-.65,38.46-38.46Z\"/>\r\n      <path class=\"cls-5\"\r\n            d=\"M319.94,52,289.85,21.94a1.81,1.81,0,0,1,1.28-3.09h30.08A1.81,1.81,0,0,1,323,20.66V50.75A1.81,1.81,0,0,1,319.94,52Z\"/>\r\n    </svg>\r\n  </div>\r\n  <app-info-widget [data]=\"data\"></app-info-widget>\r\n  <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/print-process-widget/print-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintProcessWidgetComponent = (function (_super) {
    __extends(PrintProcessWidgetComponent, _super);
    function PrintProcessWidgetComponent(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        return _this;
    }
    PrintProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    return PrintProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PrintProcessWidgetComponent.prototype, "data", void 0);
PrintProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-print-process-widget',
        template: __webpack_require__("./src/app/landing-page/print-process-widget/print-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/print-process-widget/print-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object])
], PrintProcessWidgetComponent);

var _a;
//# sourceMappingURL=print-process-widget.component.js.map

/***/ }),

/***/ "./src/app/landing-page/sew-process-widget/sew-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\"\r\n     [style.height.px]=\"data.height\" [style.opacity]=\"data.active?1:0.4\" class=\"card\">\r\n  <a (click)=\"jump()\" class=\"emi-svg-pic\">\r\n    <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 340 291.08\">\r\n      <defs>\r\n        <style>.cls-1 {\r\n          fill: url(#未命名的渐变_9);\r\n        }\r\n\r\n        .cls-2 {\r\n          font-size: 35.76px;\r\n          font-family: SegoeUI, Segoe UI;\r\n        }\r\n\r\n        .cls-2, .cls-5 {\r\n          fill: #fff;\r\n        }\r\n\r\n        .cls-3 {\r\n          fill: none;\r\n        }\r\n\r\n        .cls-3, .cls-4 {\r\n          stroke: #fff;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .cls-4 {\r\n          fill: #68ddd5;\r\n        }\r\n\r\n        .cls-5 {\r\n          opacity: 0.2;\r\n        }</style>\r\n        <linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#68ead0\"/>\r\n          <stop offset=\"1\" stop-color=\"#4ca2ef\"/>\r\n        </linearGradient>\r\n      </defs>\r\n      <title>eMI</title>\r\n      <path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/>\r\n      <text class=\"cls-2\" transform=\"translate(45.57 246.21)\">Sewing Info</text>\r\n      <path class=\"cls-3\"\r\n            d=\"M78.23,96.05a1.94,1.94,0,0,0,1.93-1.94V86.77a1.93,1.93,0,1,0-3.87,0v7.34a1.94,1.94,0,0,0,1.94,1.94Zm0,0\"/>\r\n      <path class=\"cls-3\"\r\n            d=\"M77.71,148.49h4.41V140a15,15,0,0,0,12-14.66v-8h38.69v0s12-.32,11.76,11.31l-10.19,38.07h66.4l-1.59-6.31L191.31,93.3V90.46a15,15,0,0,0-15-15H163.8a14.86,14.86,0,0,0-9.09,3.14l-64.55.87a14.86,14.86,0,0,0-11.06-5H76.32a15,15,0,0,0-15,15v35.83A14.93,14.93,0,0,0,75.19,140.2v19.17h2.51Z\"/>\r\n      <path class=\"cls-3\" d=\"M169.54,85.6A18.57,18.57,0,1,1,151,104.17,18.57,18.57,0,0,1,169.54,85.6Z\"/>\r\n      <path class=\"cls-3\" d=\"M76.29,86.77a1.93,1.93,0,1,1,3.87,0v7.34a1.93,1.93,0,1,1-3.87,0Z\"/>\r\n      <path class=\"cls-3\" d=\"M76.29,103a1.93,1.93,0,0,1,3.87,0v7.36a1.93,1.93,0,1,1-3.87,0Z\"/>\r\n      <path class=\"cls-4\" d=\"M169.54,118.1a14.31,14.31,0,1,0-14.31-14.3,14.31,14.31,0,0,0,14.31,14.3Zm0,0\"/>\r\n      <path class=\"cls-4\"\r\n            d=\"M211.94,167.84H98.88a4.27,4.27,0,0,0-4-2.9H77.71v0H75.19v0H59.66a4.24,4.24,0,0,0-4,2.9H49.26a3.93,3.93,0,1,0,0,7.87H211.94a3.93,3.93,0,1,0,0-7.87Zm0,0\"/>\r\n      <line class=\"cls-3\" x1=\"77.46\" y1=\"66.42\" x2=\"77.46\" y2=\"74.38\"/>\r\n      <line class=\"cls-3\" x1=\"169.54\" y1=\"66.42\" x2=\"169.54\" y2=\"74.38\"/>\r\n      <path class=\"cls-5\"\r\n            d=\"M319.87,50.09,289.79,20a1.81,1.81,0,0,1,1.28-3.09h30.08A1.81,1.81,0,0,1,323,18.73V48.82A1.81,1.81,0,0,1,319.87,50.09Z\"/>\r\n    </svg>\r\n  </a>\r\n  <app-info-widget [data]=\"data\"></app-info-widget>\r\n  <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/sew-process-widget/sew-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SewProcessWidgetComponent = (function (_super) {
    __extends(SewProcessWidgetComponent, _super);
    function SewProcessWidgetComponent(dialog, router) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.router = router;
        return _this;
    }
    SewProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    SewProcessWidgetComponent.prototype.jump = function () {
        if (this.data.active) {
            this.router.navigateByUrl('PCS-MI/sewing');
        }
    };
    return SewProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SewProcessWidgetComponent.prototype, "data", void 0);
SewProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sew-process-widget',
        template: __webpack_require__("./src/app/landing-page/sew-process-widget/sew-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/sew-process-widget/sew-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SewProcessWidgetComponent);

var _a, _b;
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
    __metadata("design:type", Object)
], SvgLinkComponent.prototype, "link", void 0);
SvgLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-svg-link]',
        template: __webpack_require__("./src/app/landing-page/svg-link/svg-link.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/svg-link/svg-link.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], SvgLinkComponent);

//# sourceMappingURL=svg-link.component.js.map

/***/ }),

/***/ "./src/app/landing-page/washing-process-widget/washing-process-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"data.width\"\r\n     [style.height.px]=\"data.height\" [style.opacity]=\"data.active?1:0.4\" [style.opacity]=\"data.active?1:0.4\"\r\n     class=\"card\">\r\n  <a (click)=\"jump()\" class=\"emi-svg-pic\">\r\n    <svg width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" id=\"图层_1\" data-name=\"图层 1\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         viewBox=\"0 0 340 291.08\">\r\n      <defs>\r\n        <style>.cls-1 {\r\n          fill: url(#未命名的渐变_9);\r\n        }\r\n\r\n        .cls-2 {\r\n          font-size: 35.76px;\r\n          font-family: SegoeUI, Segoe UI;\r\n        }\r\n\r\n        .cls-2, .cls-6 {\r\n          fill: #fff;\r\n        }\r\n\r\n        .cls-3 {\r\n          letter-spacing: -0.04em;\r\n        }\r\n\r\n        .cls-4 {\r\n          fill: none;\r\n        }\r\n\r\n        .cls-4, .cls-5 {\r\n          stroke: #fff;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-width: 2px;\r\n        }\r\n\r\n        .cls-5 {\r\n          fill: #68ddd5;\r\n        }\r\n\r\n        .cls-6 {\r\n          opacity: 0.2;\r\n        }</style>\r\n        <linearGradient id=\"未命名的渐变_9\" x1=\"13.69\" y1=\"-7.85\" x2=\"326.31\" y2=\"304.77\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#68ead0\"/>\r\n          <stop offset=\"1\" stop-color=\"#4ca2ef\"/>\r\n        </linearGradient>\r\n      </defs>\r\n      <title>eMI</title>\r\n      <path class=\"cls-1\" d=\"M330.07,0H9.93A10,10,0,0,0,0,9.93V291.08H340V9.93A10,10,0,0,0,330.07,0Z\"/>\r\n      <text class=\"cls-2\" transform=\"translate(45.57 246.21)\">\r\n        <tspan class=\"cls-3\">W</tspan>\r\n        <tspan x=\"32.01\" y=\"0\">ashing Info</tspan>\r\n      </text>\r\n      <polyline class=\"cls-4\" points=\"194.13 74.81 169.29 177.8 69.95 177.8 45.12 74.81\"/>\r\n      <path class=\"cls-4\"\r\n            d=\"M187.51,102.26a22.28,22.28,0,0,0-13.83-4.8c-7.4,0-11.15,9.13-18,9.13s-10.62-9.13-18-9.13-11.15,9.13-18,9.13-10.62-9.13-18-9.13-11.15,9.13-18,9.13-10.62-9.13-18-9.13a22.28,22.28,0,0,0-13.83,4.8\"/>\r\n      <circle class=\"cls-5\" cx=\"94.39\" cy=\"120.01\" r=\"3.2\"/>\r\n      <circle class=\"cls-5\" cx=\"91.19\" cy=\"151.79\" r=\"3.2\"/>\r\n      <circle class=\"cls-5\" cx=\"77.9\" cy=\"138.7\" r=\"4.3\"/>\r\n      <path class=\"cls-6\"\r\n            d=\"M319.78,50.09,289.7,20A1.81,1.81,0,0,1,291,16.92h30.08a1.81,1.81,0,0,1,1.81,1.81V48.82A1.81,1.81,0,0,1,319.78,50.09Z\"/>\r\n    </svg>\r\n  </a>\r\n  <app-info-widget [data]=\"data\"></app-info-widget>\r\n  <div class=\"card-footer text-muted text-center\" (click)=\"showMore()\">Show more</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing-page/washing-process-widget/washing-process-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none;\n  border-left: #fff; }\n\n.emi-svg-pic {\n  width: 100%;\n  height: 50%; }\n\n.emi-alert-info {\n  background-color: #ff8f68;\n  color: red; }\n\n.card-block.emi-nor-info .card-text {\n  margin-bottom: 1em;\n  background-color: aliceblue; }\n\n.card {\n  overflow: scroll;\n  box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WashingProcessWidgetComponent = (function (_super) {
    __extends(WashingProcessWidgetComponent, _super);
    function WashingProcessWidgetComponent(dialog, router) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.router = router;
        return _this;
    }
    WashingProcessWidgetComponent.prototype.ngOnInit = function () {
    };
    WashingProcessWidgetComponent.prototype.jump = function () {
        if (this.data.active) {
            this.router.navigateByUrl('PCS-MI/wi');
        }
    };
    return WashingProcessWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_widget__["a" /* BaseWidget */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WashingProcessWidgetComponent.prototype, "data", void 0);
WashingProcessWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-washing-process-widget',
        template: __webpack_require__("./src/app/landing-page/washing-process-widget/washing-process-widget.component.html"),
        styles: [__webpack_require__("./src/app/landing-page/washing-process-widget/washing-process-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], WashingProcessWidgetComponent);

var _a, _b;
//# sourceMappingURL=washing-process-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-info-widget.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  overflow-y: hidden; }\n\n.mitext-link {\n  text-decoration: none;\n  color: black; }\n\n.btn.btn-outline-primary:hover {\n  color: #007bff;\n  background-color: transparent; }\n\n.btn.btn-outline-primary.active:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.btn.btn-outline-success:hover {\n  color: #28a745;\n  background-color: transparent; }\n\n.btn.btn-outline-success.active:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn.btn-outline-info:hover {\n  color: #17a2b8;\n  background-color: transparent; }\n\n.btn.btn-outline-info.active:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn.btn-outline-warning:hover {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn.btn-outline-warning.active:hover {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.25rem 0.75rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n\n/*Shirt Component Style*/\n.st0 {\n  fill: none;\n  stroke: #525252;\n  stroke-width: 0.5;\n  cursor: pointer; }\n\n.st1 {\n  fill: #ffffff;\n  stroke: #525252;\n  stroke-width: 0.5;\n  cursor: pointer; }\n\n.st2 {\n  fill: #ffffff;\n  stroke: #525252;\n  stroke-width: 0.25;\n  cursor: pointer; }\n\n.st3, .st4, .st5 {\n  fill: #ffffff;\n  stroke: #525252;\n  stroke-width: 0.5;\n  cursor: pointer; }\n\n.st6 {\n  fill: #ffffff;\n  stroke: #1EE0DB;\n  cursor: pointer; }\n\n.st7 {\n  border: solid;\n  border-color: #525252;\n  fill: #373f62;\n  cursor: pointer; }\n\n.st8 {\n  fill: none; }\n\n.st9 {\n  fill: #fafbff; }\n\n.st10 {\n  font-family: 'MyriadPro-Regular'; }\n\n.st11 {\n  font-size: 24px; }\n\n.st12, .st13, .st14, .st15 {\n  fill: #ffffff;\n  stroke: #525252;\n  stroke-width: 0.5;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/sewing-page/sewing-info-widget/sewing-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  style=\"height: 570px\">\r\n  <div class=\"card-header\">\r\n    Sewing Information\r\n  </div>\r\n  <div class=\"card-block mt-2\" style=\"padding:10px\">\r\n\r\n    <!-- Indicates a successful or positive action -->\r\n    <button type=\"button\" class=\"btn btn-outline-success\" [ngClass]=\"{active:selTag.Comment}\" (click)=\"selTag.Comment=!selTag.Comment;curTag='Comment';getMiTextInfo()\">TDC</button>\r\n    <button type=\"button\" class=\"btn btn-outline-warning\" [ngClass]=\"{active:selTag.Warning}\" (click)=\"selTag.Warning=!selTag.Warning;curTag='Warning';getMiTextInfo()\">COL&Warning</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-block mr-2 ml-2 mb-2 pre-scrollable \" style=\"width:auto;max-height: 500px\">\r\n    <div *ngIf=\"selTag.Warning\" class=\"mt-2\" title=\"Warning Infomation\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of warningItems\" style=\"background-color: #ff8f68\">\r\n          <div>\r\n            <img src=\"PCS-MI/assets/svg/warning.svg\" class=\"float-left mr-2\" height=\"20px\">\r\n            <h6 style=\"color: red\">{{item.desc}}</h6>\r\n          </div>\r\n        </li>\r\n        <li class=\"list-group-item\" *ngFor=\"let item of colItems\" >\r\n        <img src=\"PCS-MI/assets/svg/alertinfo.svg\" class=\"float-left mr-2\" height=\"20px\">\r\n        <h6 style=\"color: #17a2b8\">{{item.desc}}</h6>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"selTag.Comment\" class=\"mt-2\" title=\"Comment/Remarks\" style=\"height:450px\">\r\n      <ul class=\"list-group\" style=\"height:450px\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of commentItems\"><h6>{{item.desc}}</h6></li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sewing-page/sewing-info-widget/sewing-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SewingInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wi_page_mi_text_service__ = __webpack_require__("./src/app/wi-page/mi-text.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SewingInfoComponent = (function () {
    function SewingInfoComponent(miTextService) {
        this.miTextService = miTextService;
        this.textInfoType = {
            'TDC': 'TDC',
            'QA': 'QA',
            'COL': 'COL',
            'WARNING': 'Warning',
            'Comment': 'Comment',
        };
        this.selTag = {
            'TDC': false,
            'QA': false,
            'COL': false,
            'Warning': false,
            'Comment': true
        };
    }
    SewingInfoComponent.prototype.getSelectItem = function (tag) {
        return null;
    };
    SewingInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miTextService.initData().then(function (value) {
            _this.items = value;
            _this.tdcItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.TDC; });
            _this.qaItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.QA; });
            _this.colItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.COL; });
            _this.warningItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.WARNING; });
            _this.commentItems = _this.items.filter(function (i) { return i.tag === _this.textInfoType.Comment; });
        });
    };
    SewingInfoComponent.prototype.getMiTextInfo = function (object) {
        // console.log(this.selItems);
    };
    return SewingInfoComponent;
}());
SewingInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sewing-info',
        template: __webpack_require__("./src/app/sewing-page/sewing-info-widget/sewing-info.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__wi_page_mi_text_service__["a" /* MiTextService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wi_page_mi_text_service__["a" /* MiTextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wi_page_mi_text_service__["a" /* MiTextService */]) === "function" && _a || Object])
], SewingInfoComponent);

var _a;
//# sourceMappingURL=sewing-info.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SewingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sewing_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sewing_svgshirts_widget_garment_patch_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-patch-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sewing_svgshirts_widget_garment_collar_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-collar-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sewing_svgshirts_widget_garment_shoulder_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-shoulder-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sewing_svgshirts_widget_garment_frontplacket_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-frontplacket-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sewing_svgshirts_widget_garment_leftfrontpanel_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-leftfrontpanel-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sewing_svgshirts_widget_garment_rightfrontpanel_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-rightfrontpanel-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sewing_svgshirts_widget_garment_hem_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-hem-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sewing_svgshirts_widget_garment_leftcuff_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-leftcuff-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sewing_svgshirts_widget_garment_sleeves_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-sleeves-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sewing_svgshirts_widget_garment_sleeveplacket_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-sleeveplacket-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sewing_svgshirts_widget_garment_rightcuff_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-rightcuff-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sewing_info_widget_sewing_info_component__ = __webpack_require__("./src/app/sewing-page/sewing-info-widget/sewing-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*import local components*/














var routes = [
    { path: 'PCS-MI/sewing', component: __WEBPACK_IMPORTED_MODULE_6__sewing_widget_component__["a" /* SewingWidgetComponent */] },
];
var SewingPageModule = (function () {
    function SewingPageModule() {
    }
    return SewingPageModule;
}());
SewingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__sewing_info_widget_sewing_info_component__["a" /* SewingInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["a" /* GarmentPartWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sewing_widget_component__["a" /* SewingWidgetComponent */],
            /*import garment*/
            __WEBPACK_IMPORTED_MODULE_7__sewing_svgshirts_widget_garment_patch_widget_component__["a" /* GarmentPatchWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sewing_svgshirts_widget_garment_sleeveplacket_widget_component__["a" /* GarmentSleeveplacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sewing_svgshirts_widget_garment_collar_widget_component__["a" /* GarmentCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sewing_svgshirts_widget_garment_shoulder_widget_component__["a" /* GarmentShoulderWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sewing_svgshirts_widget_garment_leftfrontpanel_widget_component__["a" /* GarmentLeftFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sewing_svgshirts_widget_garment_rightfrontpanel_widget_component__["a" /* GarmentRightfrontpanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sewing_svgshirts_widget_garment_frontplacket_widget_component__["a" /* GarmentFrontPlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sewing_svgshirts_widget_garment_hem_widget_component__["a" /* GarmentHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sewing_svgshirts_widget_garment_leftcuff_widget_component__["a" /* GarmentLeftCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sewing_svgshirts_widget_garment_sleeves_widget_component__["a" /* GarmentSleevesWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_17__sewing_svgshirts_widget_garment_rightcuff_widget_component__["a" /* GarmentRightcuffWidgetComponent */],
            /*import local mock component*/
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["g" /* LocalGarmentCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["p" /* LocalGarmentSleevePlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["o" /* LocalGarmentShoulderWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["h" /* LocalGarmentFrontPlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["k" /* LocalGarmentLeftFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["i" /* LocalGarmentHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["n" /* LocalGarmentRightFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["j" /* LocalGarmentLeftCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["q" /* LocalGarmentSleevesWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["m" /* LocalGarmentRightCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["l" /* LocalGarmentPatchWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["d" /* LocalGarmentBackPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["c" /* LocalGarmentBackHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["f" /* LocalGarmentBackYokeWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["b" /* LocalGarmentBackCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["e" /* LocalGarmentBackSleevesWidgetComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__sewing_info_widget_sewing_info_component__["a" /* SewingInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sewing_svgshirts_widget_garment_patch_widget_component__["a" /* GarmentPatchWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sewing_svgshirts_widget_garment_sleeveplacket_widget_component__["a" /* GarmentSleeveplacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sewing_svgshirts_widget_garment_collar_widget_component__["a" /* GarmentCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sewing_svgshirts_widget_garment_shoulder_widget_component__["a" /* GarmentShoulderWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sewing_svgshirts_widget_garment_leftfrontpanel_widget_component__["a" /* GarmentLeftFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sewing_svgshirts_widget_garment_rightfrontpanel_widget_component__["a" /* GarmentRightfrontpanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sewing_svgshirts_widget_garment_frontplacket_widget_component__["a" /* GarmentFrontPlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sewing_svgshirts_widget_garment_hem_widget_component__["a" /* GarmentHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sewing_svgshirts_widget_garment_leftcuff_widget_component__["a" /* GarmentLeftCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sewing_svgshirts_widget_garment_sleeves_widget_component__["a" /* GarmentSleevesWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_17__sewing_svgshirts_widget_garment_rightcuff_widget_component__["a" /* GarmentRightcuffWidgetComponent */],
            /*Local Mock*/
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["l" /* LocalGarmentPatchWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["j" /* LocalGarmentLeftCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["p" /* LocalGarmentSleevePlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["g" /* LocalGarmentCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["o" /* LocalGarmentShoulderWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["h" /* LocalGarmentFrontPlacketWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["i" /* LocalGarmentHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["n" /* LocalGarmentRightFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["k" /* LocalGarmentLeftFrontPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["q" /* LocalGarmentSleevesWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["m" /* LocalGarmentRightCuffWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["d" /* LocalGarmentBackPanelWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["c" /* LocalGarmentBackHemWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["f" /* LocalGarmentBackYokeWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["b" /* LocalGarmentBackCollarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sewing_svgshirts_widget_garment_part_widget_component__["e" /* LocalGarmentBackSleevesWidgetComponent */]
        ],
        providers: [],
        bootstrap: []
    })
], SewingPageModule);

//# sourceMappingURL=sewing-page.module.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-collar-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentCollarWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentCollarWidgetComponent = (function (_super) {
    __extends(GarmentCollarWidgetComponent, _super);
    function GarmentCollarWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentCollarWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentCollarWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-collar-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n  <g id=\"collar\">\n\t  <g id=\"g3599_3_\" transform=\"translate(433.0977,664.7261)\">\n\t  \t<path id=\"path3601_3_\" inkscape:connector-curvature=\"0\" class=\"st0\" d=\"M-24.2-612.5c4.3,13.1,8.6,26.3,13,39.4\n\t\t\tc-1.8,2.6-4.3,6.5-7.2,11.5c-3.7,6.3-4.9,9.2-6.9,12.8c-4.2,7.6-8.4,12.2-16.6,21.1c-4.4,4.7-10.3,10.7-17.9,17.2\n\t\t\tc-7.1-16.2-14.2-32.4-21.4-48.6c25.8-22.4,46.7-38.3,54.1-47.4c1.3-1.6,2.2-3,2.6-4.4c3.3-11.3-23.7-14.6-23.7-14.6l-52.9-0.7\n\t\t\tc-37.9-2.6-37.5,17-37.5,17c10,17.8,56.6,50,56.6,50C-89-544.1-96-529-103.1-514c-7.3-5.8-15.8-13.6-24.1-23.8\n\t\t\tc-11.3-13.8-18.4-27.3-22.9-37.7c3.9-11.8,7.7-23.6,11.6-35.4\"/>\n\t</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentCollarWidgetComponent);

//# sourceMappingURL=garment-collar-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-frontplacket-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentFrontPlacketWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentFrontPlacketWidgetComponent = (function (_super) {
    __extends(GarmentFrontPlacketWidgetComponent, _super);
    function GarmentFrontPlacketWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentFrontPlacketWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentFrontPlacketWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-frontplacket-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"front_placket\">\n        <path class=\"st0\" d=\"M343,158.5c-4.3-2.6-8.7-5.2-13-7.8c7.2-15.1,14.4-30.2,21.6-45.2c7.1,15.4,14.3,30.7,21.4,46.1\n\t\tc-3.6,2-7.1,4-10.7,5.9c0.8,20.1,1.4,40.4,1.9,60.9c0.6,25.6,1,50.8,1.1,75.6c0,0,0,0,0,0c0,24.4,0.2,41.6,0.3,43.9\n\t\tc0.1,12,0,70.3-0.7,235.6c-3.8-2.1-9.2-5.6-14.3-11.3c-5.6-6.3-8.6-12.6-10.2-16.7C341.3,416.5,342.1,287.5,343,158.5z\"/>\n        <path class=\"st1\" d=\"M352.5,323.3\"/>\n      </g>\n     </svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentFrontPlacketWidgetComponent);

//# sourceMappingURL=garment-frontplacket-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-hem-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentHemWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentHemWidgetComponent = (function (_super) {
    __extends(GarmentHemWidgetComponent, _super);
    function GarmentHemWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentHemWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentHemWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-hem-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n <g id=\"hem\">\n\t<path class=\"st0\" d=\"M340.4,545.9c1.5,3.9,8,19.4,25.4,28.3c15.8,8.1,30.6,5.8,35,4.9c-5.1,14.2-11,35.9-10.8,62.7\n\t\tc0.1,18,2.9,33.3,6,45c-11.1-9.6-29.3-27.9-42.2-56.4C337.4,594,338.8,561.1,340.4,545.9z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentHemWidgetComponent);

//# sourceMappingURL=garment-hem-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-leftcuff-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentLeftCuffWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentLeftCuffWidgetComponent = (function (_super) {
    __extends(GarmentLeftCuffWidgetComponent, _super);
    function GarmentLeftCuffWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentLeftCuffWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentLeftCuffWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-leftcuff-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n<g id=\"leftcuff\">\n\t<path class=\"st0\" d=\"M130.3,589.3c2.5,15.7,4.9,31.3,7.4,47c6-2.2,16.2-5.2,29.2-4.8c13.7,0.5,24.1,4.5,30,7.3\n\t\tc-1.8-14.4-3.6-28.9-5.3-43.3c-9.2-2.7-18.5-5.5-27.7-8.2C152.6,588,141.4,588.6,130.3,589.3z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentLeftCuffWidgetComponent);

//# sourceMappingURL=garment-leftcuff-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-leftfrontpanel-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentLeftFrontPanelWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentLeftFrontPanelWidgetComponent = (function (_super) {
    __extends(GarmentLeftFrontPanelWidgetComponent, _super);
    function GarmentLeftFrontPanelWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentLeftFrontPanelWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentLeftFrontPanelWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-leftfrontpanel-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"leftfront\">\n\t<path class=\"st0\" d=\"M200.8,160.4c33.7-12.9,67.3-25.8,101-38.8c4.8,6.4,11.7,14.4,21.4,22c7,5.6,13.7,9.7,19.6,12.8\n\t\tc-0.8,70.9-1.4,141.9-2,212.8c-0.9,105.8-1.5,211.7-2,317.5c-15.4,3.5-30.9,7.1-46.3,10.6c-7.5,1.6-26.4,4.6-48.3-3\n\t\tc-22-7.6-34.5-21.5-39.1-27.2c-2.8-37.1-3.5-76.4-1.3-117.6c0.3-6.5,0.8-13,1.2-19.4c7.5-1.9,1.4-293.3,2-292.4c0,0,0,0,0,0\n\t\tc-2.1-20.6-3.4-36.4-3.8-41.6C202.3,186.2,201.5,174.2,200.8,160.4z\"/>\n</g>\n     </svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentLeftFrontPanelWidgetComponent);

//# sourceMappingURL=garment-leftfrontpanel-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentPartWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LocalGarmentCollarWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LocalGarmentShoulderWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LocalGarmentFrontPlacketWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LocalGarmentLeftFrontPanelWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LocalGarmentRightFrontPanelWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LocalGarmentHemWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LocalGarmentLeftCuffWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LocalGarmentSleevesWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LocalGarmentRightCuffWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LocalGarmentSleevePlacketWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LocalGarmentPatchWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LocalGarmentBackPanelWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LocalGarmentBackHemWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LocalGarmentBackYokeWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalGarmentBackCollarWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LocalGarmentBackSleevesWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GarmentPartWidgetComponent = (function () {
    function GarmentPartWidgetComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.mappings = {
            'collar': LocalGarmentCollarWidgetComponent,
            'shoulder': LocalGarmentShoulderWidgetComponent,
            'frontplacket': LocalGarmentFrontPlacketWidgetComponent,
            'leftfrontpanel': LocalGarmentLeftFrontPanelWidgetComponent,
            'rightfrontpanel': LocalGarmentRightFrontPanelWidgetComponent,
            'hem': LocalGarmentHemWidgetComponent,
            'leftcuff': LocalGarmentLeftCuffWidgetComponent,
            'sleeves': LocalGarmentSleevesWidgetComponent,
            'rightcuff': LocalGarmentRightCuffWidgetComponent,
            'sleeveplacket': LocalGarmentSleevePlacketWidgetComponent,
            'patch': LocalGarmentPatchWidgetComponent,
            'backpanel': LocalGarmentBackPanelWidgetComponent,
            'backhem': LocalGarmentBackHemWidgetComponent,
            'backyoke': LocalGarmentBackYokeWidgetComponent,
            'backcollar': LocalGarmentBackCollarWidgetComponent,
            'backsleeve': LocalGarmentBackSleevesWidgetComponent
        };
    }
    GarmentPartWidgetComponent.prototype.getComponentType = function (typeName) {
        return this.mappings[typeName];
    };
    GarmentPartWidgetComponent.prototype.ngOnInit = function () {
        if (this.type) {
            var componentType = this.getComponentType(this.type);
            // note: componentType must be declared within module.entryComponents
            var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.container.createComponent(factory);
            // set component context
            var instance = this.componentRef.instance;
            instance.context = this.context;
        }
    };
    GarmentPartWidgetComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    return GarmentPartWidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object)
], GarmentPartWidgetComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GarmentPartWidgetComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GarmentPartWidgetComponent.prototype, "context", void 0);
GarmentPartWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-part',
        template: "\n    <div style=\"pointer-events: none\"> \n      <div style=\"pointer-events: none\"\n           #container></div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object])
], GarmentPartWidgetComponent);

/*PassingMI(MIindex){...}*/
/*Local Garment Component - Collar  */
var LocalGarmentCollarWidgetComponent = (function (_super) {
    __extends(LocalGarmentCollarWidgetComponent, _super);
    function LocalGarmentCollarWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentCollarWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentCollarWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-collar-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" \n           height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"pointer-events:none;enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n  <g id=\"collar\">\n\t  <g id=\"g3599_3_\" transform=\"translate(433.0977,664.7261)\">\n\t  \t<path id=\"path3601_3_\" inkscape:connector-curvature=\"0\" class=\"st0\" d=\"M-24.2-612.5c4.3,13.1,8.6,26.3,13,39.4\n\t\t\tc-1.8,2.6-4.3,6.5-7.2,11.5c-3.7,6.3-4.9,9.2-6.9,12.8c-4.2,7.6-8.4,12.2-16.6,21.1c-4.4,4.7-10.3,10.7-17.9,17.2\n\t\t\tc-7.1-16.2-14.2-32.4-21.4-48.6c25.8-22.4,46.7-38.3,54.1-47.4c1.3-1.6,2.2-3,2.6-4.4c3.3-11.3-23.7-14.6-23.7-14.6l-52.9-0.7\n\t\t\tc-37.9-2.6-37.5,17-37.5,17c10,17.8,56.6,50,56.6,50C-89-544.1-96-529-103.1-514c-7.3-5.8-15.8-13.6-24.1-23.8\n\t\t\tc-11.3-13.8-18.4-27.3-22.9-37.7c3.9-11.8,7.7-23.6,11.6-35.4\"/>\n\t</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentCollarWidgetComponent);

/*Local Garment Component - Shoulder*/
var LocalGarmentShoulderWidgetComponent = (function (_super) {
    __extends(LocalGarmentShoulderWidgetComponent, _super);
    function LocalGarmentShoulderWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentShoulderWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentShoulderWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-front-body-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n       <g id=\"shoulder\">\n\t    <path class=\"st0\" d=\"M422.3,91.7c30.8,12.4,61.6,24.8,92.5,37.2c-1,5.1-1.7,10.8-1.8,17c-0.1,1.9-0.1,3.8,0,5.5\n\t\t  c-35-11.4-70.1-22.9-105.1-34.3c2.4-4.5,4.7-8.9,7.1-13.4C417.4,99.7,419.9,95.7,422.3,91.7z\"/>\n\t    <path class=\"st0\" d=\"M283,89.7c-16.7,8.5-33.5,17-50.2,25.5c-12.1,6.1-24.1,12.2-36.2,18.3c1.4,9.7,2.8,19.4,4.2,29.1\n\t\t  c33.7-13.7,67.3-27.3,101-41c-3.2-4.3-6.6-9.3-9.8-14.8C288.3,100.8,285.4,95,283,89.7z\"/>\n\t    <path class=\"st1\" d=\"M259.5,288.2\"/>\n    </g>\n      </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0;\n    }\n  "]
    })
], LocalGarmentShoulderWidgetComponent);

/*Local Garment Component - Front Placket*/
var LocalGarmentFrontPlacketWidgetComponent = (function (_super) {
    __extends(LocalGarmentFrontPlacketWidgetComponent, _super);
    function LocalGarmentFrontPlacketWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentFrontPlacketWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentFrontPlacketWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-frontplacket-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"front_placket\">\n        <path class=\"st0\" d=\"M343,158.5c-4.3-2.6-8.7-5.2-13-7.8c7.2-15.1,14.4-30.2,21.6-45.2c7.1,15.4,14.3,30.7,21.4,46.1\n\t\tc-3.6,2-7.1,4-10.7,5.9c0.8,20.1,1.4,40.4,1.9,60.9c0.6,25.6,1,50.8,1.1,75.6c0,0,0,0,0,0c0,24.4,0.2,41.6,0.3,43.9\n\t\tc0.1,12,0,70.3-0.7,235.6c-3.8-2.1-9.2-5.6-14.3-11.3c-5.6-6.3-8.6-12.6-10.2-16.7C341.3,416.5,342.1,287.5,343,158.5z\"/>\n        <path class=\"st1\" d=\"M352.5,323.3\"/>\n      </g>\n     </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentFrontPlacketWidgetComponent);

/*Local Garment Component - Left Front Panel*/
var LocalGarmentLeftFrontPanelWidgetComponent = (function (_super) {
    __extends(LocalGarmentLeftFrontPanelWidgetComponent, _super);
    function LocalGarmentLeftFrontPanelWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentLeftFrontPanelWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentLeftFrontPanelWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-leftfrontpanel-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"leftfront\">\n\t<path class=\"st0\" d=\"M200.8,160.4c33.7-12.9,67.3-25.8,101-38.8c4.8,6.4,11.7,14.4,21.4,22c7,5.6,13.7,9.7,19.6,12.8\n\t\tc-0.8,70.9-1.4,141.9-2,212.8c-0.9,105.8-1.5,211.7-2,317.5c-15.4,3.5-30.9,7.1-46.3,10.6c-7.5,1.6-26.4,4.6-48.3-3\n\t\tc-22-7.6-34.5-21.5-39.1-27.2c-2.8-37.1-3.5-76.4-1.3-117.6c0.3-6.5,0.8-13,1.2-19.4c7.5-1.9,1.4-293.3,2-292.4c0,0,0,0,0,0\n\t\tc-2.1-20.6-3.4-36.4-3.8-41.6C202.3,186.2,201.5,174.2,200.8,160.4z\"/>\n</g>\n     </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentLeftFrontPanelWidgetComponent);

/*Local Garment Component - Right Front Panel*/
var LocalGarmentRightFrontPanelWidgetComponent = (function (_super) {
    __extends(LocalGarmentRightFrontPanelWidgetComponent, _super);
    function LocalGarmentRightFrontPanelWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentRightFrontPanelWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentRightFrontPanelWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-rightfrontpanel-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n      <g id=\"rightfront\">\n        <path class=\"st0\" d=\"M513,151.4c-35-11.4-70.1-22.9-105.1-34.3c-3.8,6-9.2,13.3-16.8,20.6c-10.4,10-20.9,16.1-28.6,19.8\n\t\tc1.7,73.8,2.7,147.5,3.3,221.3c0.7,101.3,0.4,202.7-1,304c23.2,5.6,42.9,7.7,57,8.6c21.8,1.3,33.8,2.1,48.3-3\n\t\tc22-7.6,34.5-21.5,39.1-27.2c2.8-37.1,3.5-76.4,1.3-117.6c-0.3-6.5-0.8-13-1.2-19.4c-7.5-1.9-1.4-293.3-2-292.4c0,0,0,0,0,0\n\t\tc2.7-26,3.8-41.6,3.8-41.6C511.7,180.5,512.5,167.3,513,151.4z\"/>\n      </g>\n      </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentRightFrontPanelWidgetComponent);

/*Local Garment Component - Left Hem Panel*/
var LocalGarmentHemWidgetComponent = (function (_super) {
    __extends(LocalGarmentHemWidgetComponent, _super);
    function LocalGarmentHemWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentHemWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentHemWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-hem-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n <g id=\"hem\">\n\t<path class=\"st0\" d=\"M340.4,545.9c1.5,3.9,8,19.4,25.4,28.3c15.8,8.1,30.6,5.8,35,4.9c-5.1,14.2-11,35.9-10.8,62.7\n\t\tc0.1,18,2.9,33.3,6,45c-11.1-9.6-29.3-27.9-42.2-56.4C337.4,594,338.8,561.1,340.4,545.9z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentHemWidgetComponent);

/*Local Garment Component - Left Cuff*/
var LocalGarmentLeftCuffWidgetComponent = (function (_super) {
    __extends(LocalGarmentLeftCuffWidgetComponent, _super);
    function LocalGarmentLeftCuffWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentLeftCuffWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentLeftCuffWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-leftcuff-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n<g id=\"leftcuff\">\n\t<path class=\"st0\" d=\"M130.3,589.3c2.5,15.7,4.9,31.3,7.4,47c6-2.2,16.2-5.2,29.2-4.8c13.7,0.5,24.1,4.5,30,7.3\n\t\tc-1.8-14.4-3.6-28.9-5.3-43.3c-9.2-2.7-18.5-5.5-27.7-8.2C152.6,588,141.4,588.6,130.3,589.3z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentLeftCuffWidgetComponent);

/* Local Garment Component - Sleeves*/
var LocalGarmentSleevesWidgetComponent = (function (_super) {
    __extends(LocalGarmentSleevesWidgetComponent, _super);
    function LocalGarmentSleevesWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentSleevesWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentSleevesWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-sleeves-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"sleeves\">\n        <path class=\"st0\" d=\"M195.8,133.2c-18.7,45-37,98.9-50.3,161c-25.3,117.6-23.2,220.3-15.2,295.1c6.7-1.7,16.3-3.3,27.9-2.6\n          c14.9,1,26.4,5.4,33.3,8.8c5.7-66.2,11.4-132.4,17.1-198.7c3.1-52.9,3.3-112.1-2.2-176.5C203.8,189.7,200.1,160.7,195.8,133.2z\"/>\n        <path class=\"st1\" d=\"M544,173.4c8.1,16,13.5,33.3,24.1,67.2c5.8,18.6,10,32,15,51c9.4,35.6,14.8,64.5,17.5,80\n          c5.4,31.2,10.5,70.8,12.5,117c-9,24.1-20.2,50.4-34,78c-13.5,26.9-27.4,51-40.9,72.3c-6.3-5.3-13.3-10.8-21.1-16.3\n          c-12.3-8.6-24.2-15.5-35-21c13.3-30.7,26.7-61.3,40-92c7.5-20.7,15-41.5,22.6-62.2c-12.9-38.3-25.8-76.6-38.7-114.8\n          c0.4-33.5,0.8-67.1,1.2-100.6c1.6-18.8,3.3-37.6,4.9-56.5c0.9-15.5,1.8-31.1,2.7-46.6C528.4,145.3,537.7,160.8,544,173.4z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentSleevesWidgetComponent);

/*Local Garment Component - Right Cuff*/
var LocalGarmentRightCuffWidgetComponent = (function (_super) {
    __extends(LocalGarmentRightCuffWidgetComponent, _super);
    function LocalGarmentRightCuffWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentRightCuffWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentRightCuffWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-rightcuff-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n<g id=\"rightcuff\">\n<path class=\"st0\" d=\"M482.1,601.5c-6.4,9.8-12.9,19.6-19.3,29.3c3.7,5.7,11.4,15.9,24.7,24c13.9,8.4,27,10.4,33.8,11\nc5.6-9,11.3-18,16.9-27C519.5,626.4,500.8,613.9,482.1,601.5z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentRightCuffWidgetComponent);

/*Local Garment Component - Sleeve Placket*/
var LocalGarmentSleevePlacketWidgetComponent = (function (_super) {
    __extends(LocalGarmentSleevePlacketWidgetComponent, _super);
    function LocalGarmentSleevePlacketWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentSleevePlacketWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentSleevePlacketWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-sleeveplacket-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n      <g id=\"sleeveplacket\">\n<path class=\"st0\" d=\"M504.2,614.8c12.3-19.5,24.6-39.1,36.9-58.6c5-3.4,10-6.9,15-10.3c-1.8,8.4-3.5,16.8-5.3,25.2\nc-11.2,17.2-22.5,34.3-33.7,51.5C512.8,619.9,508.5,617.4,504.2,614.8z\"/>\n</g>\n      </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentSleevePlacketWidgetComponent);

/*Local Garment Component - Patch*/
var LocalGarmentPatchWidgetComponent = (function (_super) {
    __extends(LocalGarmentPatchWidgetComponent, _super);
    function LocalGarmentPatchWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentPatchWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentPatchWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-patch-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"50 -200 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"pocket\">\n<g>\n  <path class=\"st0\" d=\"M481.5,222.2c-24.8-0.2-49.7-0.3-74.5-0.5c-0.4,2.9-0.8,5.8-1.2,8.7c13.4,2.8,26.8,5.5,40.2,8.3\nc12.6-2.4,25.2-4.8,37.8-7.3C483,228.4,482.3,225.3,481.5,222.2z M445,236c-6.4,0-6.4-10,0-10C451.5,226,451.5,236,445,236z\"/>\n<path class=\"st1\" d=\"M409.5,231.7c12.2,2.4,24.3,4.7,36.5,7.1c10.8-2.1,21.7-4.2,32.5-6.3c-0.8,15.1-1.6,30.2-2.3,45.3\nc-2.7,4.1-5.6,6.7-7.7,8.3c-3.5,2.7-6.7,4.1-10.2,5.7c-2.8,1.2-4.8,2.1-7.7,2.7c-3.9,0.8-7.3,0.5-9.5,0.2\nc-5.9-0.8-10.4-2.5-13.3-3.8c-1.6-0.7-4-1.8-6.7-3.8c-4.4-3.2-7.1-6.7-8.7-9.2C411.4,262.5,410.5,247.1,409.5,231.7z\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentPatchWidgetComponent);

/*Local Garment Component Back - BackPanel*/
var LocalGarmentBackPanelWidgetComponent = (function (_super) {
    __extends(LocalGarmentBackPanelWidgetComponent, _super);
    function LocalGarmentBackPanelWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentBackPanelWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentBackPanelWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-backpanel-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"150 -100 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"backpanel\">\n<g>\n <path class=\"st0\" d=\"M676.3,648\"/>\n<path class=\"st1\" d=\"M464.7,318c-0.2-26.4-0.4-52.9-0.7-79.3\"/>\n<path class=\"st1\" d=\"M485,238.2c0,26.8,0,53.6,0,80.3\"/>\n<path id=\"back\" class=\"st1\" d=\"M308,245.8c3.3,73.8,5.3,150.1,5.7,228.6c0.4,87.2-1.3,171.6-4.7,253.1c29.9,12.9,89.8,34.4,169,33.9\n\tc78.9-0.5,138.3-22.5,168-35.7c-3.6-81.5-5.3-166.6-4.6-254.8c0.7-78.1,3.2-153.5,7.3-226.3c-54.1-3.5-112.5-5.6-174.7-5.3\n\tC415,239.6,359.6,242,308,245.8z\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentBackPanelWidgetComponent);

/*Local Garment Component Back - BackHem*/
var LocalGarmentBackHemWidgetComponent = (function (_super) {
    __extends(LocalGarmentBackHemWidgetComponent, _super);
    function LocalGarmentBackHemWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentBackHemWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentBackHemWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-backhem-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"150 -100 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"backpanel\">\n<g>\n<path class=\"st1\" d=\"M308.7,796.7c29.3,14.6,88.4,39.1,166.7,38.7c80.6-0.5,140.9-27.3,170-42.7c0.2-22.3,0.4-44.7,0.7-67\n\tc-33.5,14.6-93.7,35.8-171.3,35.7c-74.5-0.1-132.5-19.8-165.7-33.9C308.9,750.5,308.8,773.6,308.7,796.7z\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentBackHemWidgetComponent);

/*Local Garment Component Back - BackYoke*/
var LocalGarmentBackYokeWidgetComponent = (function (_super) {
    __extends(LocalGarmentBackYokeWidgetComponent, _super);
    function LocalGarmentBackYokeWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentBackYokeWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentBackYokeWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-backyoke-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"150 -100 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"backyoke\">\n<g>\n<path id=\"yoke\" class=\"st0\" d=\"M297,195.3c3.7,17.2,7.3,34.4,11,51.7c51.4-4.9,107.9-8,168.7-8c62.6,0,120.6,3.2,173.3,8.3\n\tc2.8-17.2,5.7-34.5,8.5-51.7c-13.9-8.1-29.8-16.4-47.9-24.3c-21.6-9.3-41.7-16.1-59.7-21c-29.7-6.8-84.1-15.1-149,0\n\tC355.1,161.3,319.6,180.5,297,195.3z\"/>\n<path class=\"st1\" d=\"M290,739.3\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentBackYokeWidgetComponent);

/*Back Garmnet Component Back - BackCollar*/
var LocalGarmentBackCollarWidgetComponent = (function (_super) {
    __extends(LocalGarmentBackCollarWidgetComponent, _super);
    function LocalGarmentBackCollarWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentBackCollarWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentBackCollarWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-backcollar-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"150 -100 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"backcollar\">\n<g>\n<g id=\"collar\">\n\t<path class=\"st0\" d=\"M405,148.3c19.4-3.8,43.3-6.9,70.7-7c28.4-0.2,53.1,2.9,73,6.7c-2.9-5.9-5.8-12.1-8.7-18.7\n\t\tc-2.9-6.8-5.6-13.3-8-19.7c-13.4-3.1-30.1-5.7-49.3-6c-26.3-0.4-48.4,3.6-64.6,7.9c-2.3,5.5-4.5,11.3-6.7,17.4\n\t\tC409,135.7,406.9,142.1,405,148.3z\"/>\n\t<path class=\"st1\" d=\"M605.7,224\"/>\n</g>\n<path class=\"st0\" d=\"M477.6,137.2c-2.2,0-3.9-1.8-3.9-3.9s1.8-3.9,3.9-3.9c2.2,0,3.9,1.8,3.9,3.9S479.7,137.2,477.6,137.2z\"/>\n<path class=\"st2\" d=\"M290,739.3\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentBackCollarWidgetComponent);

/*Back Garmnet Component Back - BackSleeves*/
var LocalGarmentBackSleevesWidgetComponent = (function (_super) {
    __extends(LocalGarmentBackSleevesWidgetComponent, _super);
    function LocalGarmentBackSleevesWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LocalGarmentBackSleevesWidgetComponent;
}(GarmentPartWidgetComponent));
LocalGarmentBackSleevesWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-local-garment-backsleeves-widget',
        template: "\n    <div >\n      <svg  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"150 -100 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"backcollar\">\n<g>\n<g id=\"collar\">\n<path class=\"st0\" d=\"M676.3,648\"/>\n<path class=\"st1\" d=\"M295.3,200.7c6.9,32.6,12.9,70.2,16,112c2.9,38.1,2.9,73.1,1.3,104c-12.9,34.2-25.8,68.4-38.7,102.7\n\tc13.6,32.7,27.1,65.3,40.7,98c-1.8,30.2-3.6,60.4-5.3,90.7c-4.5,3.4-9.2,7.1-14,11.3c-5.5,4.8-10.3,9.5-14.7,14\n\tc-24.4-31.5-42.2-59.8-54.7-81.3c-26.7-46.2-29.8-63.5-30.7-75.3c-1-13.9,1.5-14.3,3.3-51.3c1.4-29.2,0.3-38,1-60.6\n\tc0.6-18,2.3-43.8,7.7-75.4c13.7-31.5,28.2-63.5,43.3-96C265.5,261.6,280.4,230.7,295.3,200.7z\"/>\n<path class=\"st1\" d=\"M231.3,614.7c15-33.9,30-67.8,45.1-101.7\"/>\n<path class=\"st1\" d=\"M660.7,196.7c-7.2,30-15.9,74.1-20,128c-4.8,63.6-0.9,111,2,146.7c6.8,84,13.7,175.8,22,289.3\n\tc0.2,15.8,0.4,31.6,0.7,47.3c23.8,2,47.6,4,71.3,6c2.4-39,4.3-90.9,3.3-152c-0.8-51.8-2.2-123-14.7-208.7\n\tC715.9,388.1,697.8,299.4,660.7,196.7z\"/>\n<path class=\"st1\" d=\"M308.8,774c-9.4-13.6-18.7-27.1-28.1-40.7\"/>\n<path class=\"st1\" d=\"M290,739.3\"/>\n<path class=\"st2\" d=\"M284.8,743.4c7.7-7.6,15.5-15.2,23.2-22.7\"/>\n</g>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], LocalGarmentBackSleevesWidgetComponent);

var _a, _b;
//# sourceMappingURL=garment-part-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-patch-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentPatchWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentPatchWidgetComponent = (function (_super) {
    __extends(GarmentPatchWidgetComponent, _super);
    function GarmentPatchWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentPatchWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentPatchWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-patch-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n\n<g id=\"pocket\">\n<g>\n  <path class=\"st0\" d=\"M481.5,222.2c-24.8-0.2-49.7-0.3-74.5-0.5c-0.4,2.9-0.8,5.8-1.2,8.7c13.4,2.8,26.8,5.5,40.2,8.3\nc12.6-2.4,25.2-4.8,37.8-7.3C483,228.4,482.3,225.3,481.5,222.2z M445,236c-6.4,0-6.4-10,0-10C451.5,226,451.5,236,445,236z\"/>\n<path class=\"st1\" d=\"M409.5,231.7c12.2,2.4,24.3,4.7,36.5,7.1c10.8-2.1,21.7-4.2,32.5-6.3c-0.8,15.1-1.6,30.2-2.3,45.3\nc-2.7,4.1-5.6,6.7-7.7,8.3c-3.5,2.7-6.7,4.1-10.2,5.7c-2.8,1.2-4.8,2.1-7.7,2.7c-3.9,0.8-7.3,0.5-9.5,0.2\nc-5.9-0.8-10.4-2.5-13.3-3.8c-1.6-0.7-4-1.8-6.7-3.8c-4.4-3.2-7.1-6.7-8.7-9.2C411.4,262.5,410.5,247.1,409.5,231.7z\"/>\n</g>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentPatchWidgetComponent);

//# sourceMappingURL=garment-patch-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-rightcuff-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentRightcuffWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentRightcuffWidgetComponent = (function (_super) {
    __extends(GarmentRightcuffWidgetComponent, _super);
    function GarmentRightcuffWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentRightcuffWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentRightcuffWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-rightcuff-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n<g id=\"rightcuff\">\n<path class=\"st0\" d=\"M482.1,601.5c-6.4,9.8-12.9,19.6-19.3,29.3c3.7,5.7,11.4,15.9,24.7,24c13.9,8.4,27,10.4,33.8,11\nc5.6-9,11.3-18,16.9-27C519.5,626.4,500.8,613.9,482.1,601.5z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentRightcuffWidgetComponent);

//# sourceMappingURL=garment-rightcuff-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-rightfrontpanel-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentRightfrontpanelWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentRightfrontpanelWidgetComponent = (function (_super) {
    __extends(GarmentRightfrontpanelWidgetComponent, _super);
    function GarmentRightfrontpanelWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentRightfrontpanelWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentRightfrontpanelWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-rightfrontpanel-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n      <g id=\"rightfront\">\n        <path class=\"st0\" d=\"M513,151.4c-35-11.4-70.1-22.9-105.1-34.3c-3.8,6-9.2,13.3-16.8,20.6c-10.4,10-20.9,16.1-28.6,19.8\n\t\tc1.7,73.8,2.7,147.5,3.3,221.3c0.7,101.3,0.4,202.7-1,304c23.2,5.6,42.9,7.7,57,8.6c21.8,1.3,33.8,2.1,48.3-3\n\t\tc22-7.6,34.5-21.5,39.1-27.2c2.8-37.1,3.5-76.4,1.3-117.6c-0.3-6.5-0.8-13-1.2-19.4c-7.5-1.9-1.4-293.3-2-292.4c0,0,0,0,0,0\n\t\tc2.7-26,3.8-41.6,3.8-41.6C511.7,180.5,512.5,167.3,513,151.4z\"/>\n      </g>\n      </svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentRightfrontpanelWidgetComponent);

//# sourceMappingURL=garment-rightfrontpanel-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-shoulder-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentShoulderWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentShoulderWidgetComponent = (function (_super) {
    __extends(GarmentShoulderWidgetComponent, _super);
    function GarmentShoulderWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentShoulderWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentShoulderWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-shoulder-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n      <g id=\"shoulder\">\n\t   <path class=\"st0\" d=\"M422.3,91.7c30.8,12.4,61.6,24.8,92.5,37.2c-1,5.1-1.7,10.8-1.8,17c-0.1,1.9-0.1,3.8,0,5.5\n\t  \tc-35-11.4-70.1-22.9-105.1-34.3c2.4-4.5,4.7-8.9,7.1-13.4C417.4,99.7,419.9,95.7,422.3,91.7z\"/>\n\t    <path class=\"st0\" d=\"M283,89.7c-16.7,8.5-33.5,17-50.2,25.5c-12.1,6.1-24.1,12.2-36.2,18.3c1.4,9.7,2.8,19.4,4.2,29.1\n\t\t  c33.7-13.7,67.3-27.3,101-41c-3.2-4.3-6.6-9.3-9.8-14.8C288.3,100.8,285.4,95,283,89.7z\"/>\n\t    <path class=\"st1\" d=\"M259.5,288.2\"/>\n</g>\n      </svg>\n    </div>\n  ",
        styles: ["\n      :host {\n          position: fixed;\n          top: 0;\n          left: 0\n      }  \n   "]
    })
], GarmentShoulderWidgetComponent);

//# sourceMappingURL=garment-shoulder-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-sleeveplacket-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentSleeveplacketWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentSleeveplacketWidgetComponent = (function (_super) {
    __extends(GarmentSleeveplacketWidgetComponent, _super);
    function GarmentSleeveplacketWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentSleeveplacketWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentSleeveplacketWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-sleeveplacket-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n      <g id=\"sleeveplacket\">\n<path class=\"st0\" d=\"M504.2,614.8c12.3-19.5,24.6-39.1,36.9-58.6c5-3.4,10-6.9,15-10.3c-1.8,8.4-3.5,16.8-5.3,25.2\nc-11.2,17.2-22.5,34.3-33.7,51.5C512.8,619.9,508.5,617.4,504.2,614.8z\"/>\n</g>\n      </svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], GarmentSleeveplacketWidgetComponent);

//# sourceMappingURL=garment-sleeveplacket-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-svgshirts-widget/garment-sleeves-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarmentSleevesWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__ = __webpack_require__("./src/app/sewing-page/sewing-svgshirts-widget/garment-part-widget.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GarmentSleevesWidgetComponent = (function (_super) {
    __extends(GarmentSleevesWidgetComponent, _super);
    function GarmentSleevesWidgetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GarmentSleevesWidgetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__garment_part_widget_component__["a" /* GarmentPartWidgetComponent */]));
GarmentSleevesWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-sleeves-widget',
        template: "\n    <div>\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1000px\" height=\"630px\" viewBox=\"0 0 1000 1052.4\" style=\"enable-background:new 0 0 1000 1052.4;\" xml:space=\"preserve\">\n        <g id=\"sleeves\">\n        <path class=\"st0\" d=\"M195.8,133.2c-18.7,45-37,98.9-50.3,161c-25.3,117.6-23.2,220.3-15.2,295.1c6.7-1.7,16.3-3.3,27.9-2.6\n          c14.9,1,26.4,5.4,33.3,8.8c5.7-66.2,11.4-132.4,17.1-198.7c3.1-52.9,3.3-112.1-2.2-176.5C203.8,189.7,200.1,160.7,195.8,133.2z\"/>\n        <path class=\"st1\" d=\"M544,173.4c8.1,16,13.5,33.3,24.1,67.2c5.8,18.6,10,32,15,51c9.4,35.6,14.8,64.5,17.5,80\n          c5.4,31.2,10.5,70.8,12.5,117c-9,24.1-20.2,50.4-34,78c-13.5,26.9-27.4,51-40.9,72.3c-6.3-5.3-13.3-10.8-21.1-16.3\n          c-12.3-8.6-24.2-15.5-35-21c13.3-30.7,26.7-61.3,40-92c7.5-20.7,15-41.5,22.6-62.2c-12.9-38.3-25.8-76.6-38.7-114.8\n          c0.4-33.5,0.8-67.1,1.2-100.6c1.6-18.8,3.3-37.6,4.9-56.5c0.9-15.5,1.8-31.1,2.7-46.6C528.4,145.3,537.7,160.8,544,173.4z\"/>\n</g>\n</svg>\n    </div>\n  ",
        styles: ["\n    :host {\n      position: fixed;\n      top: 0;\n      left: 0\n    }\n  "]
    })
], GarmentSleevesWidgetComponent);

//# sourceMappingURL=garment-sleeves-widget.component.js.map

/***/ }),

/***/ "./src/app/sewing-page/sewing-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 40px\">\r\n  <button type=\"button\" class=\"btn btn-outline-info float-left mr-5\" (click)=\"jump()\" >POC</button>\r\n  <h3 style=\"margin-left:50px;margin-bottom:0px;margin-top:5px;font-weight: 100; alignment: center\">Sewing</h3>\r\n</div>\r\n\r\n<div style=\"height:650px;width:100%;background-color: whitesmoke\">\r\n<div style=\"float:left;z-index: 1 ; border:1px darkgrey; border-radius: 5px\">\r\n\r\n  <div style=\"background-color:white;margin:50px;margin-top:30px;margin-right:10px;border: 1px black;border-radius:5px;height:570px;width:550px;display:block\">\r\n  <button class=\"btn btn-outline-info\" style=\"border:none; margin:30px;margin-bottom:0px;pointer-events: auto;\"\r\n          (click)=\" showHide = !showHide\"><img style=\"height:40px\" src=\"http://www.newdesignfile.com/postpic/2015/07/change-management-icon_356734.png\"/></button>\r\n  </div>\r\n\r\n<div  class=\"svg\" *ngIf=\"!showHide\">\r\n  <app-garment-part  *ngFor=\"let part of garmentPartsFront\" type=\"{{part}}\"></app-garment-part>\r\n</div>\r\n\r\n<div class=\"svg\" *ngIf=\"showHide\">\r\n  <app-garment-part *ngFor=\"let part of garmentPartsBack\" type=\"{{part}}\"></app-garment-part>\r\n</div>\r\n</div>\r\n\r\n\r\n<div style=\"float:left;width:550px;z-index: 2\">\r\n<!-- Info Box Session-->\r\n  <div class=\"info\" style=\"margin:10px;margin-top:30px\"><app-sewing-info></app-sewing-info></div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sewing-page/sewing-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SewingWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SewingWidgetComponent = (function () {
    function SewingWidgetComponent(router) {
        this.router = router;
        this.garmentPartsFront = [
            'collar', 'shoulder',
            'frontplacket', 'leftfrontpanel', 'rightfrontpanel',
            'hem', 'leftcuff', 'sleeves', 'rightcuff', 'sleeveplacket', 'patch'
        ]; // load garment parts for this order from service
        this.garmentPartsBack = [
            'backpanel', 'backhem', 'backyoke', 'backcollar', 'backsleeve'
        ]; // load garment parts for this order from service
    }
    SewingWidgetComponent.prototype.ngOnInit = function () {
    };
    SewingWidgetComponent.prototype.jump = function () {
        this.router.navigateByUrl('PCS-MI/home');
    };
    return SewingWidgetComponent;
}());
SewingWidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sewing',
        template: __webpack_require__("./src/app/sewing-page/sewing-widget.component.html"),
        styles: [__webpack_require__("./src/app/sewing-page/sewing-info-widget.sass")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SewingWidgetComponent);

var _a;
//# sourceMappingURL=sewing-widget.component.js.map

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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\" style=\"width: 100%;display: block;z-index: 9999\">\r\n    <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"jump()\">POC</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\" >\r\n      <div>\r\n        <div class=\"card-block\">\r\n          <h3 align=\"center\">Collar WI Details </h3>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <app-garment-neck-tap-wi-widget></app-garment-neck-tap-wi-widget>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <app-mi-text-info-widget></app-mi-text-info-widget>\r\n      <app-mi-attachment-widget></app-mi-attachment-widget>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    function GarmentNeckTapAppComponent(router) {
        this.router = router;
    }
    GarmentNeckTapAppComponent.prototype.ngOnInit = function () {
    };
    GarmentNeckTapAppComponent.prototype.jump = function () {
        this.router.navigateByUrl('PCS-MI/home');
    };
    return GarmentNeckTapAppComponent;
}());
GarmentNeckTapAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-garment-neck-tap-app',
        template: __webpack_require__("./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.html"),
        styles: [__webpack_require__("./src/app/wi-page/garment-neck-tap-app/garment-neck-tap-app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], GarmentNeckTapAppComponent);

var _a;
//# sourceMappingURL=garment-neck-tap-app.component.js.map

/***/ }),

/***/ "./src/app/wi-page/garment-neck-tap-wi-widget/garment-neck-tap-wi-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n  viewBox=\"0 100 600 600\" style=\"enable-background:new 0 100 600 600;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.wi-text-st0{ stroke:#000000;stroke-miterlimit:10;}\r\n</style>\r\n\r\n  <text xmlns=\"http://www.w3.org/2000/svg\"\r\n        xml:space=\"preserve\"\r\n        class=\"wi-text-st0\"\r\n        *ngFor=\"let item of neckTapItems\"\r\n        [attr.y]=\"item.yValue\"  [attr.x]=\"item.xValue\">{{item.desc}}</text>\r\n\r\n<path d=\"M482.1,259.3c-1.3,5.4-1,10.8-0.1,16.2c0.3,1.6,1.5,0.9,2.2,0.7c1.6-0.4,2-0.1,1.3,1.4c-0.5,1.1-0.8,2.2-1.2,3.4\r\n\tc1.6,0.2,3-0.3,4.4-0.6c4.8-1,9.7-2,14.5-3.1c1.5-0.4,2-0.1,2.3,1.3c3.2,14.9,6.6,29.8,9.8,44.6c2.1,9.4,4.2,18.8,5.8,28.3\r\n\tc0.3,1.9,1.2,2.4,3,2.6c5.9,0.5,11.3,2.4,16,5.7c6.7,4.7,10.5,11.1,13.1,18.3c0.4,1.2-0.3,1.7-1.3,2.2c-4.6,2.2-9.5,3.7-14.5,5\r\n\tc-12.2,3-24.8,4.5-37.4,5.5c-0.8,0.1-1.7,0.1-2.5,0.2c-0.2,0.8,0.5,0.9,0.9,1.2c4.4,2.8,8.8,5.6,13.1,8.5c1.1,0.8,1.7,0.6,2.4-0.5\r\n\tc1.3-1.8,1.3-1.8,2.4,0.2c0.9,1.6,1.7,3.3,2.7,4.9c0.6,1,0.6,1.5-0.9,1.4c-2.3-0.3-4.6-0.5-7-0.7c-1-0.1-1.4-0.3-0.7-1.2\r\n\tc0.3-0.3,0.5-0.7,0.8-1.1c0.5-0.6,0.5-1.1-0.2-1.5c-5.5-3.5-11-7.1-16.5-10.6c-0.5-0.3-1-0.4-1.5-0.3c-16.8,1.1-33.7,1.2-50.6,1.4\r\n\tc-0.2,0-0.5,0-1.2,0.1c1.6,0.5,2.9,0.4,4.1,0.4c0.8,0,1.3,0.1,0.7,1c-1.3,2.3-1.3,2.3,1.2,3.7c13.6,7.6,27.3,15.2,40.9,22.8\r\n\tc2.3,1.3,1.9,1.4,3.3-0.7c0.2-0.4,0.4-0.8,1.1-1c1.5,2.4,3.1,4.9,4.8,7.6c-2.1,0-4,0-5.8,0c-0.5,0-1.1,0-1.6-0.1\r\n\tc-2.5-0.1-2.6-0.2-1.2-2.1c0.9-1.3,0-1.6-0.9-2.1c-11.2-6.3-22.4-12.5-33.7-18.8c-2.9-1.6-5.8-3.1-8.6-4.8c-1.4-0.8-2.2-0.8-2.8,0.7\r\n\tc-0.2,0.4-0.6,0.8-1.1,1.6c-1.2-2-2.5-3.7-3.4-5.6c-1.1-2.2-2.6-2.9-5.2-2.9c-33.3,0-66.7-1-100-1.6c-12.4-0.2-24.8,0-37.2,0\r\n\tc-55.9,0-111.7,2.6-167.6,1.9c-21.6-0.3-43.2-1-64.6-4.3c-9.9-1.5-19.8-3.5-28.9-7.7c-2.2-1-2.3-1.2-1.5-3.3\r\n\tc2.7-7,6.6-13.2,13.2-17.6c4.1-2.8,8.7-4.4,13.7-5.2c1.4-0.2,1.6-0.7,1.2-1.8c-0.7-1.9-1.3-3.9-2-5.9c-0.4-1.1-0.1-1.3,1.1-1.1\r\n\tc2.7,0.6,2.5,0.6,3-2c4.2-19,8.3-37.9,12.5-56.9c0.5-2.2,0.5-2.2-1.9-2.6c-1.4-0.2-1.4-0.6-0.5-1.5c1.7-1.7,3.3-3.5,4.9-5.3\r\n\tc0.7-0.8,1.4-1,2.5-0.7c17.8,4.2,35.8,7.1,53.9,9.5c13,1.7,26,3,39,4.1c25.3,2.1,50.7,3.3,76.2,3.8c10.1,0.2,20.2,0.3,30.3,0.4\r\n\tc16.6,0.1,33.3,0,49.9-0.2c1.6,0,2.8-1.3,2.7-2.7c0-0.6-0.5-0.7-1-0.8c-10.4-3.4-20.8-6.7-31.1-10.1c-1.5-0.5-1.5,0.5-1.9,1.3\r\n\tc-0.7,1.8-0.7,1.8-2.1,0.4c-1.5-1.6-3-3.1-4.6-4.7c-0.6-0.6-0.7-1,0.4-1.1c2.5-0.4,5.1-0.8,7.6-1.2c0.8-0.1,1.1,0.1,0.8,0.9\r\n\tc-0.7,2.6-0.7,2.6,2.1,3.5c9.4,3,18.7,6.1,28.1,9.1c2.9,1,2.4,0.9,3.3-1.5c0.1-0.3,0.3-0.6,0.6-1.2c2.2,2.3,4.4,4.5,6.6,6.8\r\n\tc-1.3,0.7-2.8,0.4-4.2,1.2c48.1-1.1,95.6-3.9,143-12.2c-1.1-1.3-2-2.4-2.9-3.4c-0.7-0.8-0.8-1.2,0.5-1.3c0.4,0,0.7-0.2,1.1-0.2\r\n\tc1.3,0,1.6-0.6,1.4-1.7c-0.9-5.3-1-10.7,0.1-16C480.9,259.3,481.5,259.3,482.1,259.3z M55.3,356.7c-0.5,0.1-1,0.3-1.5,0.4\r\n\tc-2.1,0.5-4,1.3-5.5,2.7c-0.1,0-0.2,0-0.3,0c-1.8,1-3.7,2-4.7,3.9c0-0.1,0.1-0.1,0.1-0.1c-0.8,0.3-1.4,0.8-1.9,1.4\r\n\tc-3.4,3.7-5.7,7.9-7.5,12.4c-0.5,1.3-0.4,1.9,1,2.6c6,2.7,12.4,4.3,18.9,5.8c1,0.2,1.1-0.2,0.9-1c-0.6-1.7-1.2-3.5-1.8-5.2\r\n\tc-0.8-2.4-0.8-2.4,1.8-2c1.3,0.2,1.5-0.5,1.7-1.4c0.2-1.2,0.1-1-0.7-1.6c-0.7-0.5-1.3-0.3-1.9-0.6c-1.2-0.5-2.2-1.1-3.4,0.2\r\n\tc0.4-1.9,0.9-3.7,1.4-5.4c0.2-0.6,1.3-1.2,1.4-1c0.5,0.9,1,0.9,1.7,0.3c0.4,1.1,1.8-0.7,2.1,0.7c0.1,0.3,0.5,0.2,0.6,0\r\n\tc0.7-1.4,1-2.9,1-4.4c0-1.2-1.5-0.8-2.3-1c-1.2-0.3-1.1-0.7-0.4-1.4c1.4-1.5,3-2.9,4.1-4.6c1.1-1.7,2.5-2.2,4.4-2.1\r\n\tc0.5,0,1.3-0.3,1.4,0.4c0.1,0.8-0.7,0.5-1.2,0.6c-0.4,0.1-0.8,0.1-1.2,0.1c-1.2,0-1.6,0.5-1.1,1.6c0.6,1.6,1.2,3.3,1.7,4.9\r\n\tc0.7,2,0.7,2.1-1.5,1.7c-1.4-0.3-1.8,0.1-2.2,1.4c-0.4,1.5-0.1,2.7,0.7,4c0.5,0.3,1.1-1.8,1.6,0.1c0,0.1,0.4,0.2,0.4,0.1\r\n\tc0.9-0.7,1.8,1.6,2.6-0.1c0.1,0.1,0.2,0.3,0.3,0.3c1,0.3,2,1,3,0.1c2,2.6-0.1,4.9-0.5,7.7c-0.7-0.9-0.5-2.7-2-1.3\r\n\tc-0.2-0.2-0.3-0.4-0.5-0.4c-0.7-0.1-1.3-0.9-1.7-0.8c-1.7,0.3-3.4,0-5-0.2c-0.4-0.1-0.9-0.2-1.1,0.5c-0.5,1.9-0.4,2.1,1.7,2.5\r\n\tc1.8,0.4,1.8,0.4,0.6,1.8c-1.3,1.5-2.6,3-4,4.5c-0.9,1-1.1,1.4,0.6,1.7c14.5,2.7,29.3,3.8,44,4.6c24.6,1.2,49.2,0.9,73.8,0.7\r\n\tc38.6-0.3,77.3-2.3,115.9-1.5c0.7,0,1.4,0.1,2-0.8c-0.9-0.1-1.6-0.1-2.3-0.1c-0.4,0-1,0.1-1-0.4c0-0.7,0.7-0.5,1.1-0.5\r\n\tc1.5,0.1,1.3-0.5,0.7-1.4c-0.7-1-1.3-2.1-2-3.2c-1-1.6-1-1.7,1.1-1.6c1.6,0,2.1-0.4,2-1.9c-0.2-5.7-0.2-11.3-0.3-17\r\n\tc0-2.8,0-2.8-2.9-3c-0.8-0.1-1-0.2-0.7-1c0.4-1.1,2-1.9,0.8-3.4c0,0,0.2-0.3,0.3-0.4c1.6-0.1,1.8-1.5,2.4-2.4\r\n\tc0.7-1.2,1.1-0.9,1.6,0.1c1.1,1.8,2.2,3.6,3.3,5.4c1,1.6,1,1.7-1,1.6c-1.8-0.1-2.1,0.6-2,2c0.2,5.8,0.2,11.5,0.3,17.3\r\n\tc0,2.4,0,2.5,2.6,2.5c1.3,0,1.2,0.5,0.7,1.3c-0.8,1.3-1.5,2.5-2.2,3.8c-0.2,0.4-0.7,0.9,0.3,1.1c0.4,0.1,1-0.1,0.9,0.5\r\n\tc-0.1,0.5-0.6,0.4-1,0.4c-0.4,0.1-1-0.2-1.3,0.5c0.6,0.3,1.3,0.2,1.9,0.2c11.7-0.3,23.5-0.2,35.2,0c34.7,0.7,69.4,1.7,104.1,1.7\r\n\tc18.2,0,36.4-0.1,54.5-1.2c0.7,0,1.4,0.1,2.1-0.4c-0.6-0.4-0.8-0.9-1.7-0.5c-1.1,0.5-2.5,0.3-3.7,0.4c-0.3,0-0.7,0-0.7-0.3\r\n\tc-0.1-0.5,0.3-0.5,0.7-0.6c1-0.1,2-0.2,3-0.3c-0.3-0.9-1.1-1.1-1.6-1.5c-11-7.1-22-14.1-33.1-21.2c-2.8-1.8-2.8-1.8-4.8,0.6\r\n\tc-0.1,0.1-0.3,0.2-0.6,0.4c-1.5-2.7-2.9-5.3-4.5-8.3c3.1,0.3,5.7,0.6,8.4,0.8c1.4,0.1,2,0.4,0.8,1.6c-1.4,1.3-0.8,2.1,0.6,3\r\n\tc11.6,7.4,23.2,14.8,34.7,22.2c2.3,1.5,4.4,2.8,7.4,2c0.2,0,0.4,0,0.5,0c0.3,0,0.6,0.1,0.6,0.4c0,0.3-0.3,0.4-0.6,0.5\r\n\tc-0.7,0.1-1.5,0-2.2,0.4c0.4,0.6,0.9,0.4,1.4,0.4c13.8-1,27.6-2.5,41.1-5.9c2.1-0.5,4.3-1,6.2-2l-0.1,0.1c0.9,0.1,1.7-0.4,2.6-0.7\r\n\tc0.3-0.1,0.5-0.2,0.6-0.5c0.2-1,2.9-2.7,3.8-2.3c0.4,0.2,0.8,1.2,1.3,0.2c0.3-0.6,0-1.5-0.7-1.9c-2-1-2.6-2.2-1.8-4.2\r\n\tc0.1-0.2,0-0.4-0.1-0.6c-1.9-3.5-4.1-6.7-7.6-9.6c0.2,0.5,0.3,0.7,0.4,0.8c0.2,0.5,1.3,0.9,0.6,1.4c-0.6,0.4-1-0.6-1.4-0.9\r\n\tc-1.1-0.8-1.2-2.2-1.9-3.1c-1.2-1.4-3.1-2.1-5-2.8c0.7,0.6,1.6,1,2.4,1.5c0.2,0.1,0.3,0.3,0.3,0.5c0,0.1-0.2,0.3-0.3,0.3\r\n\tc-0.5,0.1-3.9-1.8-3.7-2.2c0.4-1.1-0.6-1.1-1.1-1.3c-4.1-1.4-8.4-1.9-12.8-2.1c-28.3-0.9-56.7-1.6-85.1-2\r\n\tc-46.1-0.6-92.1-1-138.2-1.5c-0.8,0-2.2,0.3-2.2-0.4c0.1-1,1.5-0.5,2.2-0.5c37.6,0.4,75.3,0.8,112.9,1.2c1.6,0,3-0.2,4.5-0.8\r\n\tc14.2-5.9,28.4-11.8,42.5-17.8c1.1-0.4,2.3-0.7,2.9-1.8c0.1-0.3,0.4-0.5,0.7-0.3c0.9,0.6,1.6,0,2.3-0.3c8.7-3.6,17.4-7.2,26-10.8\r\n\tc1-0.4,1.9-0.8,2.4-1.9c0.1-0.3,0.6-0.9,0.9-0.4c0.7,1,1.3,0.3,1.9,0.1c4.5-1.8,9-3.7,13.4-5.6c1.5-0.6,3.6-1,4.4-2.1\r\n\tc0.9-1.2-0.3-3.1-0.6-4.6c-1.9-8.6-3.8-17.2-5.6-25.7c-0.2-0.7-0.2-1.4-1.4-1.1c-3.8,0.9-7.7,1.7-11.5,2.5c-0.9,0.2-1.3,0.6-1.4,1.6\r\n\tc0.4,0,0.7-0.1,1.1-0.1c0.4,0,1.1-0.4,1.2,0.2c0.2,0.6-0.6,0.5-1,0.7c-1,0.3-2.3,0.2-2.9,1.3c-0.1,0.2-0.3,0.3-0.6,0.2\r\n\tc-0.3-0.2-0.2-0.4-0.2-0.7c-0.1-1,1.4-1.4,1.3-2.6c-1.6,0.3-3.1,0.5-4.6,0.9c-0.5,0.1-0.8,0.5-0.8,1c-0.1,0.7,0.5,0.4,0.9,0.5\r\n\tc0.2,0,0.5,0.1,0.5,0.4c0,0.3-0.2,0.4-0.4,0.4c-1.1,0.3-2.3,0.6-3.5,0.6c-0.2,0-0.5,0-0.5-0.3c0-0.1,0.1-0.3,0.2-0.4\r\n\tc0.2-0.3,1.3-0.1,0.8-0.9c-0.4-0.7-1.1-0.5-1.8-0.4c-1.8,0.3-3.5,0.7-5.3,1c-25.6,4.2-51.5,6.9-77.5,8.6\r\n\tc-24.7,1.6-49.3,2.5-74.1,2.7c-9.4,0.1-18.8,0.1-28.2,0.1c-1.4,0-1.7,0.3-1,1.5c1,1.5,1.8,3.1,2.9,4.6c0.8,1.2,0.6,1.7-1,1.5\r\n\tc-1.9-0.2-2.3,0.6-2.2,2.2c0.2,11.4,0.3,22.7,0.4,34.1c0,2.5,0,2.5,2.6,2.6c0.7,0,1.5,0,0.9,1c-1.4,2.4-2.7,4.7-4.3,7.4\r\n\tc-1.5-2.5-2.8-4.8-4.3-6.9c-0.8-1.2-0.4-1.6,1-1.4c1.8,0.2,2.3-0.4,2.3-2.1c-0.2-11.3-0.3-22.6-0.4-33.9c0-2.6,0-2.6-2.8-2.8\r\n\tc-0.9-0.1-1.2-0.3-0.7-1.1c1-1.6,1.9-3.3,2.9-5c1-1.7,1-1.7-1-1.7c-14.2,0-28.5,0-42.7-0.4c-15.2-0.4-30.4-0.9-45.5-1.8\r\n\tc-16-0.9-32-2.2-47.9-3.8c-15.3-1.6-30.5-3.6-45.6-6.2c-9.1-1.6-18.1-3.3-27-5.4c-1.7-0.4-2-0.1-1.5,1.4c0.5,1.7,1.1,3.4,1.7,5.1\r\n\tc0.5,1.3,0.1,1.6-1.3,1.3c-0.7-0.2-1.7-0.7-2.1,0.1c-0.6,1.3-0.9,2.7-0.6,4.2c0.5-1,0.8-2.1,1.1-3.1c0.1-0.3,0.1-0.6,0.5-0.6\r\n\tc0.3,0,0.5,0.1,0.5,0.4c-0.1,1.3,0,2.9-0.9,3.6c-1,0.7-0.5,1.1-0.3,1.6c0.1,0.2,0.2,0.4-0.1,0.6c-0.3,0.2-0.5,0.1-0.8-0.1\r\n\tc-0.2-0.2-0.2-0.7-0.8-0.6c-1.7,4.7-4.2,17.7-3.6,18.5c0.6-0.5,0.4-1.3,0.6-1.9c0.1-0.4,0.1-1.1,0.7-1c0.8,0.1,0.4,0.9,0.3,1.2\r\n\tc-0.8,1.9,0.2,2.6,2,3.4c14.3,5.9,28.5,11.9,42.8,17.7c1.6,0.6,3,2,5,1.4c0.1,0,0.4,0.2,0.5,0.4c0.5,1,1.6,1.3,2.6,1.7\r\n\tc14.2,5.9,28.5,11.9,42.7,17.8c1.5,0.6,3,0.9,4.7,0.9c38.5-0.4,77.1-0.8,115.6-1.2c0.5,0,1,0,1.4,0c0.3,0,0.5,0.1,0.5,0.4\r\n\tc0,0.3-0.2,0.4-0.5,0.4c-0.7,0-1.4,0.1-2.2,0.1c-62.9,0.7-125.9,1-188.8,2.6c-9.5,0.2-19,0.3-28.5,0.9c-2.2,0.1-4.4,0.1-6.6,0.1\r\n\tc-0.3,0-0.7,0-0.7-0.3c-0.1-0.5,0.3-0.5,0.7-0.5c1-0.1,1.9-0.1,2.9-0.1c14.3-0.4,28.6-0.8,42.9-1.2c0.7,0,1.9,0.5,1.8-1.1\r\n\tc-0.1-0.6,0.7-0.4,0.8,0c0.4,1.2,1.4,1,2.3,1c16.9-0.3,33.9-0.6,50.8-0.9c0.6,0,1.2,0.2,1.7-0.2c-0.3-0.6-0.9-0.7-1.4-0.9\r\n\tc-2.9-1.3-5.9-2.5-8.8-3.7c-10.1-4.2-20.2-8.4-30.3-12.6c-0.5-0.2-1.1-0.9-1.5-0.2c-0.7,1.3-1.2,0.6-1.4-0.1c-0.4-1-1.3-1.5-2.3-1.9\r\n\tc-8.5-3.5-17-7.1-25.5-10.6c-0.5-0.2-0.9-0.5-1.4-0.4c-0.1,0.4,0.2,0.7,0.4,0.9c0.3,0.5,1.1,1.2,0.4,1.6c-0.8,0.5-0.8-0.6-1.3-1\r\n\tc-1-0.9-1-2.4-2.4-3c-6.5-2.7-13-5.3-19.5-8.1c-1.2-0.5-1.7-0.3-1.9,0.9c-2.4,10.9-4.8,21.8-7.1,32.7c-0.1,0.4-0.4,1,0.5,1.3\r\n\tc0.6-0.9,0.6-2,0.9-3c0.1-0.4,0.1-1.1,0.7-1c0.7,0.1,0.3,0.7,0.3,1.1c-0.1,0.6-0.2,1.2-0.4,1.8c-0.2,0.8-0.5,1.5,0.8,1.8\r\n\tc1,0.2,0.4,0.8,0.1,1.1c-1.8,1.5-2.5,3.4-2.8,5.4c-0.2,1-0.7,1.3-1.7,1.4C60.4,355.3,57.7,355.6,55.3,356.7z M414.4,351.2\r\n\tc0.9,0.4,1.6,0.3,2.2,0.3c16.5,0.3,33,0.5,49.5,0.9c2.1,0,3.3-0.3,4.1-2.1c0.3-0.7,0.8-2.1,1.5-1.7c1,0.6-0.3,1.5-0.7,2.2\r\n\tc-0.9,1.7-1,1.7,1.2,1.8c15.4,0.4,30.8,0.8,46.3,1.3c2.1,0.1,2.1,0.1,1.7-1.9c-1.8-8.9-3.7-17.9-5.5-26.8c-0.9-4.4-2-8.8-3-13.2\r\n\tc-0.1-0.4,0-1.2-0.9-0.9c-0.7,0.2-0.5,0.7-0.4,1.2c0.1,0.5,0.2,1.1,0.4,1.6c0.1,0.3,0.2,0.7-0.3,0.8c-0.5,0.1-0.6-0.2-0.7-0.6\r\n\tc-0.1-0.3-0.3-0.6-0.3-1c0-1.7-0.9-1.4-2.1-0.9c-5.2,2.2-10.4,4.3-15.5,6.5c-1,0.4-2,0.8-2.4,1.9c-0.1,0.4-0.6,0.8-0.9,0.4\r\n\tc-0.8-0.9-1.4-0.2-2,0c-8.4,3.5-16.8,7-25.2,10.5c-1.4,0.6-2.9,1-3.5,2.6c-0.1,0.4-0.9,0.8-1,0.3c-0.4-1.7-1.3-0.5-1.7-0.3\r\n\tc-13.1,5.4-26.1,10.8-39.1,16.3C415.6,350.6,415.1,350.8,414.4,351.2z M64.7,373.7c0.4,0,0.5,0.2,0.6,0.4c0.8,0.6,0.8-0.3,1.2-0.5\r\n\tc0.3-0.2,0.4-0.6,0.1-0.9c-0.8,1.1-1.5-1.1-2.3-0.1c-0.2,0.2-0.4,0.1-0.6-0.1c-0.2-0.3-0.3-0.9-0.8-0.4c-0.3,0.3-0.7,0.7-0.6,1.1\r\n\tc0.1,0.6,0.6,0.1,0.8,0.3C63.7,373.9,64.2,374.5,64.7,373.7z M57.3,371.6c0-0.4-1.3-1.1-1.7-0.9c-0.4,0.2-0.6,0.6-0.9-0.1\r\n\tc-0.3-0.8-0.7-0.2-1,0c-0.3,0.2-0.9,0.3-0.7,0.8c0.3,0.7,0.6,0,1-0.1c0.3,0,0.4,0.2,0.5,0.3c0.5,0.6,1.7-0.2,2.1,0.7\r\n\tC56.9,372.3,57.2,372,57.3,371.6z\"/>\r\n<path class=\"st1\" d=\"M55.1,335.3c-0.2,0.5-0.1,1.1-0.8,0.7c-1-0.5-1.9-1.1-2.9-1.6c-0.3-0.2-0.4-0.5-0.2-0.9c0.2-0.4,0.6-0.3,0.9-0.1\r\n\tC53.1,334,54.3,334.4,55.1,335.3z\"/>\r\n<path d=\"M55.3,356.7c1,0.1,2.5-0.9,2.7,0c0.3,1-1.5,0.8-2.4,1.1c-0.5,0.2-1.9,1.5-1.8-0.6C54.4,357,54.9,356.8,55.3,356.7z\"/>\r\n<path d=\"M48.4,359.8c0.9-0.3,1.8-1.5,2.5-0.6c0.5,0.6-1.2,0.8-1.8,1.4c0,0-0.1,0.1-0.1,0.1c-0.6,0.2-1.2,1.2-1.8,0.6\r\n\tc-0.6-0.6,0.6-1,0.9-1.5C48.2,359.8,48.3,359.8,48.4,359.8z\"/>\r\n<path d=\"M43.4,363.6c0.4-0.3,0.8-0.8,1.2-0.4c0.5,0.5-0.2,0.8-0.4,1.1c-0.4,0.5-0.9,0.9-1.3,1.4c-0.4,0.3-0.7,1.1-1.2,0.7\r\n\tc-0.6-0.4,0.1-0.9,0.4-1.2c0.5-0.6,1-1.1,1.5-1.6C43.5,363.6,43.4,363.6,43.4,363.6z\"/>\r\n<path d=\"M527.8,376.2c-3.5,0-6.2-2.6-6.2-5.8c0-3.2,2.8-5.8,6.3-5.8c3.4,0,6.2,2.6,6.3,5.8C534.1,373.6,531.3,376.2,527.8,376.2z\"/>\r\n<path d=\"M38.7,380.8c-1.3-0.5-2.7-1.1-4.1-1.6c-0.3-0.1-0.3-0.5-0.2-0.7c0.1-0.3,0.1-0.5,0.3-0.8c0.5-0.8,0.5-2.6,1.4-2.4\r\n\tc1.1,0.4-0.2,1.5-0.4,2.4c-0.2,0.8,0.3,1,0.8,1.2c0.8,0.4,1.6,0.7,2.4,1.1c0.2,0.1,0.4,0.3,0.3,0.5C39.2,380.8,39,380.8,38.7,380.8z\r\n\t\"/>\r\n<path d=\"M506.8,292.5c-0.8,1.3-1.5,2.3-2.3,3.4c-0.1,0.1-0.3,0.1-0.5,0c-0.3-0.1-0.4-0.4-0.2-0.5c1.6-1.7,1.2-3.6,0.6-5.5\r\n\tc0-0.2,0.1-0.4,0.3-0.5c0.2-0.2,0.5,0,0.6,0.2C505.7,290.6,505.6,291.8,506.8,292.5z\"/>\r\n<path d=\"M95.3,282.9c-0.2,0.7,1.2,1.5,0.3,1.9c-0.8,0.4-0.9-0.9-1.4-1.4c-0.3-0.4-0.5-0.9-1-1.1c-0.4-0.1-1.1-0.2-0.7-0.8\r\n\tc0.3-0.4,0.9-0.7,1.4-0.3c0.5,0.4,1.2,0.5,1.8,0.7c0.4,0.2,1.3,0,1.2,0.7C96.7,283.4,95.9,282.5,95.3,282.9z\"/>\r\n<path d=\"M287.5,296.2c0.8,0.3,2.3-0.3,2.3,0.5c0,1-1.4,0.5-2.2,0.5c-0.8,0-2.3,0.5-2.2-0.5C285.3,295.8,286.8,296.7,287.5,296.2z\"/>\r\n<path d=\"M363.9,389c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.4-2.2-0.4C361.8,388.5,363.2,389.3,363.9,389z\"/>\r\n<path d=\"M253.2,388.4c0.7,0.2,2-0.4,2,0.4c0,0.9-1.2,0.5-1.9,0.5c-0.9,0-2.4,0.6-2.4-0.4C250.8,388.1,252.4,388.6,253.2,388.4z\"/>\r\n<path d=\"M336.2,296.7c-0.9-0.3-2.4,0.4-2.4-0.5c0-0.9,1.5-0.5,2.3-0.5c0.7,0,2.2-0.5,2.1,0.4C338.2,297.2,336.8,296.2,336.2,296.7z\"\r\n\t/>\r\n<path d=\"M457.1,389.8c0.7,0.2,2.1-0.4,2.1,0.5c0,0.9-1.4,0.5-2.1,0.5c-0.8,0-2.3,0.5-2.3-0.4C454.9,389.5,456.3,390.1,457.1,389.8z\"\r\n\t/>\r\n<path d=\"M402.6,390.7c-0.7-0.3-2,0.4-2-0.6c0-0.7,1.3-0.4,2-0.4c0.9,0.1,2.4-0.5,2.4,0.5C405,391.1,403.4,390.5,402.6,390.7z\"/>\r\n<path d=\"M248.8,295.9c0.7,0.3,2.1-0.4,2.2,0.6c0,0.8-1.4,0.4-2.2,0.3c-0.8,0-2.2,0.4-2.2-0.6C246.6,295.5,248,296.1,248.8,295.9z\"/>\r\n<path d=\"M358.7,296.2c-0.4-0.1-1.7,0.4-1.7-0.3c0-1,1.3-0.4,2-0.5c0.5-0.1,1.1,0,1.6,0c0.4,0,1-0.1,1,0.4c0,0.5-0.6,0.5-1,0.5\r\n\tC360.1,296.2,359.5,296.2,358.7,296.2z\"/>\r\n<path d=\"M384.8,356.2c0.8,0.3,2.2-0.3,2.2,0.5c0,1-1.4,0.5-2.2,0.5c-0.8,0-2.2,0.4-2.2-0.4C382.6,355.7,384,356.5,384.8,356.2z\"/>\r\n<path d=\"M297.2,297c-0.7-0.3-2.2,0.4-2.1-0.4c0-1.1,1.4-0.5,2.2-0.5c0.8,0,2.2-0.5,2.2,0.4C299.5,297.4,298,296.7,297.2,297z\"/>\r\n<path d=\"M136.5,358.5c-0.8-0.2-2,0.4-2.1-0.5c0-0.8,1.3-0.5,2-0.5c0.8,0,2.4-0.4,2.3,0.3C138.7,358.9,137.2,358,136.5,358.5z\"/>\r\n<path d=\"M361.6,356.9c-0.8-0.3-2.3,0.4-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.5C363.7,357.3,362.3,356.6,361.6,356.9z\"\r\n\t/>\r\n<path d=\"M477.7,357.8c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.3-2.1-0.5C475.6,357.4,476.9,358.1,477.7,357.8z\"\r\n\t/>\r\n<path d=\"M454.7,358.2c-0.8-0.3-2.3,0.3-2.3-0.7c0-0.8,1.4-0.4,2.2-0.3c0.8,0,2.2-0.5,2.2,0.5C456.7,358.6,455.3,357.9,454.7,358.2z\"\r\n\t/>\r\n<path d=\"M136.7,390c0.7,0.3,2.2-0.4,2.1,0.5c0,1-1.4,0.5-2.2,0.5c-0.7,0-2.1,0.5-2.1-0.5C134.6,389.6,135.9,390.2,136.7,390z\"/>\r\n<path d=\"M438.9,356.9c0.8,0.3,2.3-0.4,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.8,0-2.2,0.4-2.1-0.4C436.8,356.4,438.2,357.2,438.9,356.9z\"\r\n\t/>\r\n<path d=\"M320.5,295.8c0.8,0.3,2.2-0.4,2.2,0.5c0,0.9-1.4,0.4-2.1,0.5c-0.8,0-2.3,0.4-2.3-0.4C318.3,295.4,319.8,296.3,320.5,295.8z\"\r\n\t/>\r\n<path d=\"M252.9,356.5c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.4,2.2,0.3C255.1,356.9,253.7,356.2,252.9,356.5z\"\r\n\t/>\r\n<path d=\"M400.3,357.4c-0.8-0.2-2.3,0.3-2.2-0.4c0.1-1,1.4-0.5,2.2-0.5c0.8,0,2.2-0.3,2.2,0.4C402.4,357.9,401,357.1,400.3,357.4z\"/>\r\n<path d=\"M330.3,355.4c0.9,0.3,2.4-0.4,2.4,0.6c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C328.3,355,329.7,355.8,330.3,355.4z\"/>\r\n<path d=\"M113.2,389.6c0.9,0.3,2.4-0.3,2.3,0.6c0,0.8-1.5,0.4-2.3,0.4c-0.7,0-2,0.3-2-0.4C111.3,389.1,112.6,390.1,113.2,389.6z\"/>\r\n<path d=\"M304.8,297c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.6,2-0.5c0.8,0,2.4-0.5,2.4,0.4C307.2,297.4,305.6,296.7,304.8,297z\"/>\r\n<path d=\"M309.9,389.1c-0.9-0.3-2.3,0.4-2.3-0.6c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.5,2.2,0.5C312,389.5,310.5,388.8,309.9,389.1z\"/>\r\n<path d=\"M268.7,388.2c0.7,0.3,2-0.4,2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8-0.1-2.3,0.6-2.4-0.5C266.3,387.9,267.9,388.4,268.7,388.2z\"/>\r\n<path d=\"M387.1,389.4c0.8,0.3,2.3-0.3,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.2,0.4-2.1-0.4C385,389,386.4,389.7,387.1,389.4z\"/>\r\n<path d=\"M214.2,355.8c0.8,0.4,2.1-0.4,2.2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8,0-2.3,0.4-2.3-0.4C212,355.3,213.5,356.3,214.2,355.8z\"/>\r\n<path d=\"M237.5,389.7c-0.8-0.2-2.2,0.3-2.2-0.4c0-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.5,2.1,0.4C239.7,390.1,238.3,389.4,237.5,389.7z\"/>\r\n<path d=\"M348.4,388.7c0.8,0.3,2.3-0.4,2.3,0.5c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C346.3,388.2,347.7,388.9,348.4,388.7z\"\r\n\t/>\r\n<path d=\"M343.6,296.6c-0.7-0.3-2,0.5-2-0.6c0-0.7,1.3-0.4,2-0.4c0.9,0,2.3-0.6,2.4,0.4C346,296.8,344.4,296.3,343.6,296.6z\"/>\r\n<path d=\"M97.7,389.1c0.9,0.3,2.4-0.2,2.3,0.7c-0.1,0.9-1.5,0.3-2.3,0.3c-0.7,0-2.1,0.3-2-0.5C95.8,388.5,97.1,389.5,97.7,389.1z\"/>\r\n<path d=\"M520.3,356.2c-0.9-0.3-2.3,0.2-2.3-0.6c0.1-1,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C522.2,356.7,520.9,355.9,520.3,356.2z\"\r\n\t/>\r\n<path d=\"M245.1,356.6c-0.7-0.3-2.1,0.5-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.4,2.2,0.4C247.3,356.9,245.9,356.3,245.1,356.6z\"\r\n\t/>\r\n<path d=\"M353.8,356.8c-0.7-0.3-2.2,0.3-2.2-0.5c0.1-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.5C355.9,357.2,354.5,356.6,353.8,356.8\r\n\tz\"/>\r\n<path d=\"M433.9,391c-0.8-0.2-2.2,0.3-2.2-0.5c0-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.5,2.1,0.4C436,391.4,434.6,390.7,433.9,391z\"/>\r\n<path d=\"M152.3,390c0.7,0.3,2-0.5,2,0.6c0,0.7-1.3,0.4-2,0.4c-0.8,0-2.3,0.5-2.3-0.4C150,389.6,151.5,390.3,152.3,390z\"/>\r\n<path d=\"M464.6,390.7c-0.8-0.3-2,0.4-2-0.5c0-0.8,1.3-0.5,2-0.4c0.8,0,2.3-0.4,2.3,0.3C466.8,391.1,465.3,390.3,464.6,390.7z\"/>\r\n<path d=\"M410.4,390.9c-0.7-0.3-2,0.4-2-0.6c0-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.4,2.3,0.4C412.7,391.2,411.2,390.6,410.4,390.9z\"/>\r\n<path d=\"M183.2,390.8c-0.8-0.2-2.1,0.3-2.1-0.5c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.4,2.3,0.4C185.3,391.2,183.8,390.3,183.2,390.8z\"\r\n\t/>\r\n<path d=\"M175.4,390.8c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.3C177.6,391.3,176.2,390.5,175.4,390.8z\"\r\n\t/>\r\n<path d=\"M121.2,390.9c-0.8-0.4-2.2,0.3-2.2-0.6c0-0.8,1.4-0.4,2.2-0.4c0.8,0,2.2-0.3,2.2,0.4C123.3,391.4,121.9,390.4,121.2,390.9z\"\r\n\t/>\r\n<path d=\"M371.8,390.2c-0.8-0.3-2.2,0.3-2.2-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C373.9,390.5,372.4,389.9,371.8,390.2z\"\r\n\t/>\r\n<path d=\"M225.5,295.3c0.7,0.3,2.2-0.4,2.2,0.7c0,0.7-1.4,0.3-2.2,0.3c-0.8,0-2.2,0.5-2.2-0.5C223.3,294.9,224.7,295.6,225.5,295.3z\"\r\n\t/>\r\n<path d=\"M97.6,359.6c-0.7-0.3-1.9,0.4-1.9-0.5c0-0.7,1.2-0.5,1.8-0.4c0.9,0,2.5-0.5,2.5,0.3C100,360,98.5,359.2,97.6,359.6z\"/>\r\n<path d=\"M367,296.1c-0.8-0.4-2.1,0.4-2.2-0.5c0-0.9,1.4-0.5,2.1-0.5c0.8,0,2.3-0.5,2.3,0.4C369.2,296.4,367.7,295.6,367,296.1z\"/>\r\n<path d=\"M397.7,294.7c-0.7-0.2-1.9,0.3-1.9-0.4c-0.1-0.8,1.1-0.6,1.7-0.6c0.9,0,2.6-0.6,2.6,0.3C400.2,295,398.4,294.2,397.7,294.7z\r\n\t\"/>\r\n<path d=\"M312.9,296.9c-0.8-0.3-2.3,0.4-2.3-0.5c0-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.4C315,297.3,313.6,296.6,312.9,296.9z\"/>\r\n<path d=\"M325.3,389.2c-0.8-0.3-2.2,0.3-2.2-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.3-0.4,2.3,0.4C327.4,389.7,326,388.8,325.3,389.2z\"/>\r\n<path d=\"M122.8,327.8c0.1,0.5,0.1,0.7-0.2,0.7c-0.3,0.1-0.5,0-0.6-0.2c-0.6-1-1.2-1.9-1.8-2.9c-0.1-0.2-0.2-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C121.6,325.9,122.2,326.9,122.8,327.8z\"/>\r\n<path d=\"M112.8,359.1c0.1,0-0.1,0-0.4,0c-0.5,0-1.3,0.2-1.3-0.4c0-0.7,0.8-0.4,1.3-0.5c0.8-0.1,1.7-0.1,2.5-0.1c0.3,0,0.7,0,0.7,0.4\r\n\tc0.1,0.5-0.4,0.5-0.7,0.5C114.3,359.1,113.8,359.1,112.8,359.1z\"/>\r\n<path d=\"M206.4,356.9c-0.8-0.3-2.1,0.3-2.1-0.5c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C208.6,357.4,207.1,356.5,206.4,356.9z\"/>\r\n<path d=\"M276.3,388.1c0.7,0.2,2.1-0.2,2,0.4c0,0.9-1.3,0.5-2,0.5c-0.8,0-2.3,0.4-2.3-0.4C274.1,387.7,275.6,388.4,276.3,388.1z\"/>\r\n<path d=\"M144.4,358.2c-0.7-0.3-2.1,0.4-2.1-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.1-0.6,2.2,0.4C146.6,358.4,145.1,358,144.4,358.2z\"/>\r\n<path d=\"M317.6,388.1c0.7,0.3,2.1-0.4,2.1,0.6c0,0.8-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.4-2.1-0.4C315.4,387.7,316.8,388.4,317.6,388.1z\"\r\n\t/>\r\n<path d=\"M256.4,297c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.8,1.4-0.4,2.1-0.3c0.8,0,2.2-0.5,2.2,0.5C258.6,297.3,257.2,296.8,256.4,297z\"/>\r\n<path d=\"M105.8,390.5c-0.8-0.3-2.3,0.3-2.3-0.7c0-0.8,1.4-0.3,2.2-0.3c0.7,0,2.1-0.4,2.1,0.5C107.8,390.8,106.5,390.2,105.8,390.5z\"\r\n\t/>\r\n<path d=\"M431.3,357.8c-0.7-0.3-2.1,0.3-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C433.5,358.1,432,357.6,431.3,357.8z\"/>\r\n<path d=\"M198.7,389.5c0.8,0.3,2.2-0.4,2.2,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.4-2.2-0.3C196.6,389,198.1,390,198.7,389.5z\"/>\r\n<path d=\"M356.3,389.8c-0.8-0.3-2.2,0.4-2.2-0.6c0-0.8,1.4-0.3,2.2-0.3c0.8,0,2.2-0.4,2.2,0.4C358.4,390.3,357.1,389.6,356.3,389.8z\"\r\n\t/>\r\n<path d=\"M408,357.5c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C410.2,357.9,408.7,357.3,408,357.5z\"/>\r\n<path d=\"M279.8,296.2c0.7,0.3,2.1-0.4,2.1,0.5c0,0.9-1.4,0.5-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.5C277.6,295.9,279,296.5,279.8,296.2z\"/>\r\n<path d=\"M301.8,389.1c-0.7-0.2-2,0.3-2-0.5c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.6,2.4,0.5C304.2,389.5,302.6,388.9,301.8,389.1z\"/>\r\n<path d=\"M167.8,356.5c0.7,0.2,2-0.4,2,0.5c0,0.8-1.3,0.5-2,0.5c-0.8,0-2.3,0.5-2.3-0.3C165.6,356,167.1,356.9,167.8,356.5z\"/>\r\n<path d=\"M71.4,355c0.8,0.2,2.1-0.3,2.1,0.5c0,1-1.3,0.6-2,0.6c-0.8,0-2.3,0.5-2.3-0.4C69.2,354.6,70.7,355.3,71.4,355z\"/>\r\n<path d=\"M377,356c0.8,0.4,2.2-0.3,2.2,0.6c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.3-2.2-0.4C375,355.5,376.4,356.5,377,356z\"/>\r\n<path d=\"M134.5,346.7c-0.1,0.2-0.1,0.4-0.3,0.5c-0.2,0.2-0.5,0.1-0.6-0.1c-0.6-1-1.3-2-1.9-3c-0.1-0.2-0.1-0.4,0.1-0.6\r\n\tc0.2-0.1,0.5-0.1,0.6,0.1C133.2,344.6,133.8,345.7,134.5,346.7z\"/>\r\n<path d=\"M191,357c-0.8-0.3-2.2,0.4-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2-0.5,2,0.5C193.1,357.3,191.8,356.8,191,357z\"/>\r\n<path d=\"M186,356.6c-1.8,0.7-3.3,0.4-4.6,0.4c-0.2,0-0.3-0.3-0.5-0.4c0.2-0.1,0.3-0.4,0.5-0.4C182.7,356.3,184.1,355.9,186,356.6z\"\r\n\t/>\r\n<path d=\"M89.9,359.8c-0.7-0.2-1.9,0.4-1.9-0.5c0-0.8,1.3-0.4,2-0.4c0.8,0,2.4-0.4,2.3,0.3C92.2,360.2,90.7,359.5,89.9,359.8z\"/>\r\n<path d=\"M415.9,357.7c-0.9-0.3-2.3,0.4-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.5C418,358,416.6,357.3,415.9,357.7z\"/>\r\n<path d=\"M451.1,289.7c-0.6,0-1.3,0.4-1.4-0.4c-0.1-0.6,0.7-0.4,1.1-0.5c0.8-0.2,1.6-0.2,2.5-0.3c0.4,0,0.9-0.2,1,0.3\r\n\tc0.1,0.6-0.5,0.5-0.8,0.6C452.7,289.5,451.8,289.6,451.1,289.7z\"/>\r\n<path d=\"M146.8,290c1,0.1,2,0.2,3,0.4c0.4,0,0.7,0.2,0.6,0.6c-0.1,0.4-0.4,0.3-0.7,0.3c-1.1-0.1-2.1-0.2-3.2-0.4\r\n\tc-0.3,0-0.8-0.1-0.7-0.6C146,289.9,146.5,290,146.8,290z\"/>\r\n<path d=\"M194.6,295c-0.8-0.3-2.3,0.3-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.3,2,0.6C196.6,295.4,195.3,294.8,194.6,295z\"/>\r\n<path d=\"M233.2,295.5c0.8,0.3,2.2-0.3,2.2,0.5c-0.1,1-1.4,0.5-2.2,0.4c-0.7,0-2.1,0.4-2.1-0.5C231.1,295.1,232.5,295.8,233.2,295.5z\r\n\t\"/>\r\n<path d=\"M109,306c0.1,0.1,0.3,0.2,0.5,0.3c0.6,0.9,1.1,1.8,1.7,2.7c0.2,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0.1-0.5,0\r\n\tc-0.7-1.1-1.4-2.2-2.1-3.3C108.5,306.3,108.6,306,109,306z\"/>\r\n<path d=\"M108.3,341.9c0.1,0.4,0.1,0.7-0.2,0.7c-0.2,0-0.5-0.1-0.6-0.2c-0.6-0.9-1.2-1.9-1.7-2.9c-0.2-0.3-0.1-0.5,0.2-0.7\r\n\tc0.3-0.1,0.5,0,0.6,0.2C107.2,340,107.8,341,108.3,341.9z\"/>\r\n<path d=\"M79,355.9c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.6,2-0.6c0.8,0,2.2-0.5,2.2,0.5C81.2,356.3,79.8,355.6,79,355.9z\"/>\r\n<path d=\"M84.8,357.9c-0.3,0.6,0.5,1.8-0.4,1.8c-1.1,0-0.6-1.2-0.6-1.9c0-0.7-0.6-2,0.6-2C85.1,355.8,84.5,357.1,84.8,357.9z\"/>\r\n<path d=\"M237.4,355.6c0.8,0.2,2.2-0.3,2.1,0.5c0,1-1.3,0.5-2,0.5c-0.8,0-2.3,0.4-2.3-0.4C235.3,355.1,236.8,356,237.4,355.6z\"/>\r\n<path d=\"M260.6,356.4c-0.7-0.3-2,0.4-2-0.6c0-0.8,1.3-0.4,2-0.4c0.8,0,2.3-0.4,2.3,0.4C262.8,356.8,261.3,356,260.6,356.4z\"/>\r\n<path d=\"M472.2,390.5c-0.1,0-0.3,0-0.6,0c-0.5-0.1-1.3,0.2-1.3-0.4c0-0.6,0.8-0.4,1.3-0.5c0.8-0.1,1.7-0.1,2.5-0.1\r\n\tc0.3,0,0.6,0,0.7,0.4c0.1,0.5-0.4,0.5-0.7,0.5C473.6,390.4,473,390.4,472.2,390.5z\"/>\r\n<path d=\"M338.2,356.6c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C340.4,357.1,339,356.3,338.2,356.6z\"/>\r\n<path d=\"M222,355.8c0.7,0.2,2.1-0.3,2,0.4c0,0.9-1.3,0.5-2.1,0.5c-0.8,0-2.2,0.4-2.2-0.4C219.8,355.4,221.3,356,222,355.8z\"/>\r\n<path d=\"M121.2,358.9c-0.8-0.2-2.2,0.3-2.1-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C123.2,359.4,121.8,358.4,121.2,358.9z\"\r\n\t/>\r\n<path d=\"M501,358.5c0.7,0.3,2.1-0.4,2.1,0.6c0,0.7-1.4,0.3-2.2,0.3c-0.7,0-2.1,0.4-2.1-0.5C498.9,358,500.3,358.7,501,358.5z\"/>\r\n<path d=\"M532.7,384.7c-0.4,0-0.7,0.1-0.8-0.3c-0.1-0.5,0.3-0.5,0.6-0.6c1-0.2,2.1-0.4,3.1-0.7c0.3-0.1,0.6-0.1,0.7,0.3\r\n\tc0.1,0.4-0.2,0.6-0.6,0.6C534.7,384.3,533.7,384.5,532.7,384.7z\"/>\r\n<path d=\"M510.5,388.1c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.6,0-0.7-0.3c-0.1-0.5,0.3-0.5,0.7-0.6c1.1-0.1,2.1-0.2,3.2-0.3\r\n\tc0.3,0,0.6,0,0.7,0.3c0.1,0.5-0.3,0.5-0.6,0.6C512.1,387.9,511.3,388,510.5,388.1z\"/>\r\n<path d=\"M283.9,389.2c-0.7-0.3-2.1,0.4-2.1-0.6c0-0.8,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C286.1,389.6,284.7,388.9,283.9,389.2z\"\r\n\t/>\r\n<path d=\"M332.9,388.3c0.8,0.3,2.3-0.4,2.3,0.6c0,0.9-1.5,0.4-2.3,0.4c-0.7,0-2.1,0.4-2.1-0.5C330.8,387.9,332.2,388.6,332.9,388.3z\"\r\n\t/>\r\n<path d=\"M340.9,389.5c-0.8-0.3-2.4,0.3-2.3-0.5c0.1-1,1.6-0.4,2.4-0.4c0.7,0,1.9-0.4,1.9,0.5C342.9,389.8,341.7,389.3,340.9,389.5z\"\r\n\t/>\r\n<path d=\"M229.8,389.9c-0.8-0.3-2.2,0.4-2.2-0.5c0-0.9,1.4-0.5,2.1-0.5c0.8,0,2.2-0.6,2.2,0.4C231.9,390.2,230.5,389.5,229.8,389.9z\"\r\n\t/>\r\n<path d=\"M221.8,390c-0.7-0.2-2,0.3-2-0.4c0-0.9,1.3-0.5,2-0.5c0.8,0,2.2-0.5,2.2,0.4C224.1,390.4,222.6,389.8,221.8,390z\"/>\r\n<path d=\"M206.5,390.4c-0.8-0.2-2.2,0.3-2.2-0.4c0-0.9,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C208.6,390.9,207.1,389.9,206.5,390.4z\"\r\n\t/>\r\n<path d=\"M144.5,391c-0.8-0.3-2.2,0.3-2.2-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.4C146.6,391.4,145.2,390.7,144.5,391z\"/>\r\n<path d=\"M85.8,279.7c1.1,0.2,2,0.5,3,0.7c0.4,0.1,0.7,0.3,0.5,0.7c-0.1,0.3-0.5,0.3-0.8,0.2c-1-0.2-1.9-0.4-2.9-0.7\r\n\tc-0.3-0.1-0.8-0.2-0.7-0.6C85,279.5,85.5,279.7,85.8,279.7z\"/>\r\n<path d=\"M110,345c0.1,0.1,0.3,0.2,0.4,0.4c0.6,0.9,1.1,1.8,1.6,2.7c0.1,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0-0.5,0\r\n\tc-0.8-1-1.5-2.1-2-3.3C109.4,345.3,109.6,345.1,110,345z\"/>\r\n<path d=\"M478.4,299.4c0.5,0.1,0.6,0.4,0.3,0.8c-0.6,1-1.2,1.9-1.8,2.9c-0.1,0.1-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.2-0.3-0.5\r\n\tc0.6-1.1,1.3-2.2,2-3.3C478.2,299.5,478.3,299.5,478.4,299.4z\"/>\r\n<path d=\"M512.5,355.9c-0.8-0.3-2.3,0.3-2.3-0.6c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2-0.4,2,0.6C514.5,356.2,513.2,355.7,512.5,355.9z\"/>\r\n<path d=\"M461.1,328.3c-0.5-0.1-0.5-0.4-0.3-0.8c0.6-1,1.2-1.9,1.8-2.8c0.1-0.2,0.3-0.4,0.6-0.3c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.7,1.1-1.3,2.2-2,3.3C461.4,328.3,461.2,328.2,461.1,328.3z\"/>\r\n<path d=\"M179.3,294c-0.8-0.2-2.5,0.2-2.4-0.6c0.2-1.1,1.7-0.2,2.6-0.4c0.1,0,0.2,0,0.4,0c0.5,0.2,1.5-0.2,1.4,0.6\r\n\tc-0.1,0.7-1,0.2-1.5,0.3C179.6,294,179.5,294,179.3,294z\"/>\r\n<path d=\"M53.1,385.1c-0.9-0.2-1.9-0.4-2.9-0.7c-0.3-0.1-0.6-0.2-0.6-0.5c0.1-0.5,0.5-0.4,0.8-0.4c1,0.2,2,0.4,3,0.7\r\n\tc0.3,0.1,0.8,0.2,0.6,0.6C53.9,385.3,53.4,385.1,53.1,385.1z\"/>\r\n<path d=\"M76.3,296.4c0.2-0.9,0.4-1.9,0.7-2.9c0.1-0.3,0.2-0.5,0.6-0.5c0.4,0.1,0.4,0.4,0.3,0.6c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.1,0.7-0.6,0.6C76.1,297.2,76.3,296.8,76.3,296.4z\"/>\r\n<path d=\"M190.8,390.7c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C193.1,391,191.6,390.4,190.8,390.7z\"/>\r\n<path d=\"M159.8,357.7c-0.7-0.2-2.1,0.3-2-0.4c0-0.9,1.3-0.5,2-0.5c0.8,0,2.2-0.4,2.2,0.3C162,358.1,160.5,357.5,159.8,357.7z\"/>\r\n<path d=\"M437.9,290.3c0.3,0,0.9-0.2,1,0.3c0.1,0.6-0.5,0.5-0.9,0.6c-0.9,0.1-1.9,0.2-2.8,0.3c-0.3,0-0.8,0.1-0.9-0.3\r\n\tc-0.1-0.4,0.3-0.5,0.7-0.6C436,290.6,436.9,290.4,437.9,290.3z\"/>\r\n<path d=\"M67.1,338.7c0.2-0.9,0.4-1.9,0.7-2.9c0.1-0.3,0.2-0.6,0.6-0.5c0.4,0.1,0.4,0.4,0.3,0.7c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.2,0.7-0.6,0.6C66.9,339.5,67.1,339.1,67.1,338.7z\"/>\r\n<path d=\"M104.7,335.9c-0.2,0.2-0.2,0.4-0.3,0.4c-0.2,0.2-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2,0-0.5,0.2-0.6\r\n\tc0.1,0,0.4,0,0.5,0.1C103.3,333.7,104,334.8,104.7,335.9z\"/>\r\n<path d=\"M118.9,321.5c0.2,0.5,0.1,0.7-0.2,0.8c-0.3,0.1-0.5,0-0.6-0.2c-0.6-0.9-1.2-1.9-1.8-2.9c-0.1-0.2-0.1-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C117.7,319.6,118.4,320.7,118.9,321.5z\"/>\r\n<path d=\"M547.7,370c-0.1,0.2-0.2,0.4-0.3,0.5c-0.2,0.1-0.5,0.1-0.6-0.1c-0.7-1-1.3-2-2-2.9c-0.1-0.2-0.1-0.5,0.1-0.6\r\n\tc0.1-0.1,0.4-0.1,0.5,0C546.2,367.9,546.9,369,547.7,370z\"/>\r\n<path d=\"M471.2,312.4c-0.7,1.1-1.4,2.2-2.1,3.3c-0.2,0.2-0.4,0.2-0.6,0c-0.2-0.2-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C471.1,312.1,471.1,312.2,471.2,312.4z\"/>\r\n<path d=\"M65.9,386.4c0.9,0.1,1.8,0.2,2.7,0.4c0.4,0,0.8,0.1,0.7,0.5c0,0.4-0.5,0.4-0.8,0.4c-0.9-0.1-1.8-0.2-2.7-0.3\r\n\tc-0.4-0.1-1.1,0-1-0.7C64.9,386.2,65.5,386.4,65.9,386.4z\"/>\r\n<path d=\"M458.2,288.8c-0.4,0-0.8,0.1-0.8-0.4c0-0.3,0.3-0.4,0.6-0.5c1.1-0.2,2.1-0.4,3.2-0.5c0.4-0.1,0.8-0.1,0.8,0.4\r\n\tc0,0.3-0.3,0.4-0.6,0.5C460.3,288.4,459.3,288.6,458.2,288.8z\"/>\r\n<path d=\"M99.3,291.2c-0.1-0.1-0.3-0.2-0.4-0.3c-0.6-0.9-1.2-1.9-1.8-2.8c-0.1-0.2-0.2-0.4,0-0.6c0.2-0.2,0.5-0.2,0.6,0\r\n\tc0.7,1.1,1.4,2.2,2,3.2C99.9,290.8,99.7,291.1,99.3,291.2z\"/>\r\n<path d=\"M108.5,284.3c1,0.2,2,0.4,3,0.6c0.3,0.1,0.8,0.1,0.6,0.6c-0.1,0.4-0.5,0.3-0.9,0.3c-1-0.2-2-0.3-3-0.5\r\n\tc-0.3-0.1-0.8-0.2-0.6-0.6C107.7,284.2,108.2,284.4,108.5,284.3z\"/>\r\n<path d=\"M100.9,282.9c1,0.2,2,0.4,2.9,0.6c0.3,0.1,0.8,0.1,0.6,0.6c-0.1,0.4-0.6,0.3-0.9,0.3c-1-0.2-2-0.3-2.9-0.5\r\n\tc-0.3-0.1-0.8-0.1-0.6-0.6C100.1,282.8,100.6,282.9,100.9,282.9z\"/>\r\n<path d=\"M98.7,326.2c0.6,0.3,0.9,0.9,1.1,1.4c0.3,0.8,1.8,1.7,0.8,2.3c-0.6,0.4-1-1.2-1.6-1.9c-0.3-0.4-0.5-0.9-0.7-1.3\r\n\tC98.1,326.5,98.3,326.3,98.7,326.2z\"/>\r\n<path d=\"M509.2,306.9c0.1,0.3,0.1,0.7-0.4,0.8c-0.4,0-0.5-0.3-0.5-0.5c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3-0.1-0.7,0.4-0.8\r\n\tc0.4,0,0.5,0.3,0.5,0.6C508.8,305,509,305.9,509.2,306.9z\"/>\r\n<path d=\"M496.3,282c-0.4,0-0.8,0-0.8-0.3c0-0.4,0.3-0.5,0.6-0.5c1.1-0.3,2.2-0.5,3.3-0.7c0.3-0.1,0.6,0,0.7,0.4\r\n\tc0.1,0.2-0.1,0.4-0.4,0.5C498.5,281.5,497.4,281.8,496.3,282z\"/>\r\n<path d=\"M76.3,300.9c-0.2,1-0.4,1.9-0.6,2.8c-0.1,0.3-0.2,0.7-0.7,0.5c-0.4-0.1-0.3-0.4-0.3-0.7c0.2-0.9,0.4-1.8,0.6-2.7\r\n\tc0.1-0.3,0.1-0.9,0.7-0.7C76.5,300.3,76.3,300.7,76.3,300.9z\"/>\r\n<path d=\"M493.4,359.3c-0.8-0.3-2.2,0.4-2.2-0.7c0-0.8,1.4-0.4,2.1-0.3c0.8,0,2.2-0.4,2.2,0.6C495.4,359.6,494,359,493.4,359.3z\"/>\r\n<path d=\"M82.2,298.2c-0.2,0.2-0.3,0.4-0.4,0.4c-0.2,0-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2-0.1-0.5,0.1-0.6\r\n\tc0.1-0.1,0.4-0.1,0.5,0C80.7,296,81.5,297.1,82.2,298.2z\"/>\r\n<path d=\"M413.8,292.6c0.5,0.2,1.7-0.6,1.8,0.4c0.1,0.6-1.2,0.4-1.8,0.5c-0.3,0.1-0.6,0.1-0.9,0.1c-0.6-0.1-1.7,0.5-1.8-0.4\r\n\tc0-0.7,1.1-0.4,1.8-0.6C413.2,292.6,413.5,292.6,413.8,292.6z\"/>\r\n<path d=\"M141.5,290.3c-0.8-0.1-1.7-0.2-2.6-0.3c-0.3,0-0.8-0.1-0.7-0.5c0-0.4,0.5-0.4,0.8-0.4c0.9,0.1,1.8,0.2,2.7,0.3\r\n\tc0.4,0.1,1.1,0,1,0.7C142.5,290.5,142,290.3,141.5,290.3z\"/>\r\n<path d=\"M82.2,388.1c0.8,0.4,2.5-0.2,2.4,0.7c-0.1,1-1.6,0.3-2.4,0.3c-0.7,0-1.9,0.3-1.9-0.6C80.3,387.7,81.5,388.3,82.2,388.1z\"/>\r\n<path d=\"M130.4,340.2c0.2,0.5,0.1,0.7-0.2,0.8c-0.3,0.1-0.5-0.1-0.6-0.2c-0.6-0.9-1.2-1.9-1.8-2.8c-0.1-0.2-0.2-0.4,0.1-0.6\r\n\tc0.2-0.2,0.5-0.2,0.6,0C129.3,338.3,129.9,339.4,130.4,340.2z\"/>\r\n<path d=\"M379.5,389.3c0.8,0.3,2.2-0.4,2.2,0.6c0,0.8-1.4,0.4-2.2,0.3c-0.8,0-2.2,0.4-2.1-0.5C377.4,388.8,378.8,389.6,379.5,389.3z\"\r\n\t/>\r\n<path d=\"M428,292.3c-0.2,0-0.5,0-0.8,0c-0.3,0-0.7,0-0.6-0.4c0-0.2,0.3-0.4,0.5-0.4c1.2-0.1,2.4-0.2,3.6-0.3c0.3,0,0.6,0.1,0.6,0.4\r\n\tc0,0.4-0.4,0.4-0.6,0.4C429.7,292.1,428.9,292.2,428,292.3z\"/>\r\n<path d=\"M70.2,329.1c-0.2,1-0.4,2-0.7,2.9c-0.1,0.3-0.2,0.5-0.6,0.5c-0.4-0.1-0.4-0.4-0.4-0.6c0.2-1,0.4-1.9,0.6-2.9\r\n\tc0.1-0.3,0.2-0.7,0.6-0.6C70.4,328.4,70.2,328.8,70.2,329.1z\"/>\r\n<path d=\"M405.9,293.2c0.4,0,0.6-0.1,0.9-0.1c0.5,0,1.3-0.4,1.3,0.4c0.1,0.7-0.8,0.5-1.2,0.5c-0.8,0.1-1.7,0.2-2.5,0.2\r\n\tc-0.4,0-0.8,0-0.8-0.4c0-0.5,0.4-0.5,0.7-0.5C404.8,293.3,405.4,293.2,405.9,293.2z\"/>\r\n<path d=\"M134.1,289.3c-1-0.1-2-0.3-2.9-0.4c-0.3,0-0.6-0.2-0.6-0.5c0-0.5,0.4-0.5,0.8-0.4c0.9,0.1,1.9,0.2,2.8,0.4\r\n\tc0.4,0.1,1,0.1,0.9,0.6C134.9,289.6,134.3,289.2,134.1,289.3z\"/>\r\n<path d=\"M462.3,357.4c0.8,0.4,2.2-0.3,2.2,0.6c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.6C460.1,357,461.6,357.7,462.3,357.4z\"/>\r\n<path d=\"M486.6,287.5c-0.7,1.1-1.4,2.2-2.1,3.2c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2-0.1-0.4-0.3-0.3-0.5c0.6-1.1,1.3-2.1,1.9-3.1\r\n\tc0.1-0.2,0.4-0.2,0.6-0.1C486.5,287.1,486.5,287.3,486.6,287.5z\"/>\r\n<path d=\"M526.5,355.9c1,0.2,2,0.5,3,0.7c0.3,0.1,0.6,0.2,0.5,0.6c-0.1,0.3-0.4,0.3-0.7,0.3c-1-0.2-2.1-0.5-3.1-0.7\r\n\tc-0.3-0.1-0.8-0.2-0.6-0.6C525.7,355.7,526.1,355.8,526.5,355.9z\"/>\r\n<path d=\"M101.3,293.5c0.1,0.1,0.3,0.1,0.4,0.2c0.6,1,1.3,2,1.9,3c0.1,0.2,0.1,0.5-0.1,0.6c-0.1,0.1-0.4,0.1-0.5,0\r\n\tc-0.9-1-1.5-2.1-2.1-3.3C100.8,293.8,101,293.6,101.3,293.5z\"/>\r\n<path d=\"M126.4,288.3c-1-0.2-2.1-0.4-3.1-0.6c-0.2,0-0.5-0.3-0.5-0.4c0-0.3,0.3-0.4,0.6-0.4c1.1,0.1,2.1,0.3,3.2,0.4\r\n\tc0.4,0.1,0.7,0.2,0.7,0.6C127.3,288.4,126.8,288.2,126.4,288.3z\"/>\r\n<path d=\"M214.1,390.2c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2-0.5c0.8,0,2.3-0.5,2.3,0.4C216.4,390.6,214.9,389.9,214.1,390.2z\"/>\r\n<path d=\"M70.2,324.6c0.2-0.9,0.4-1.8,0.6-2.7c0.1-0.3,0.2-0.7,0.7-0.6c0.4,0.1,0.3,0.4,0.3,0.7c-0.2,1-0.4,1.9-0.6,2.9\r\n\tc-0.1,0.3-0.2,0.7-0.7,0.6C70,325.3,70.2,324.9,70.2,324.6z\"/>\r\n<path d=\"M186.6,293.5c0.8,0.3,2.4-0.2,2.3,0.6c-0.1,1-1.6,0.4-2.4,0.3c-0.7,0-2,0.2-2-0.5C184.7,292.9,185.9,293.8,186.6,293.5z\"/>\r\n<path d=\"M390.1,295.1c-0.7-0.2-2,0.4-2-0.3c0-0.9,1.3-0.5,2-0.6c0.8,0,2.4-0.7,2.4,0.3C392.5,295.4,390.9,294.7,390.1,295.1z\"/>\r\n<path d=\"M465,322c-0.4-0.1-0.5-0.4-0.3-0.8c0.6-1,1.2-1.9,1.8-2.9c0.1-0.2,0.3-0.3,0.6-0.3c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.7,1.1-1.3,2.2-2,3.3C465.2,322,465.1,322,465,322z\"/>\r\n<path d=\"M468.6,286.3c0.4,0,0.9-0.2,1,0.3c0.1,0.5-0.3,0.5-0.7,0.6c-1,0.2-2,0.3-3,0.5c-0.3,0-0.8,0.2-0.9-0.3\r\n\tc-0.1-0.4,0.3-0.6,0.7-0.6C466.7,286.5,467.7,286.4,468.6,286.3z\"/>\r\n<path d=\"M473.7,286.3c-0.4,0-0.9,0.1-1-0.3c-0.1-0.4,0.4-0.5,0.7-0.6c1-0.2,2.1-0.4,3.1-0.5c0.3,0,0.6,0,0.7,0.3\r\n\tc0.1,0.4-0.3,0.5-0.5,0.5C475.7,286,474.6,286.2,473.7,286.3z\"/>\r\n<path d=\"M504.5,285.7c0,0.5,0.1,0.8-0.3,0.9c-0.4,0.1-0.5-0.1-0.6-0.4c-0.2-1-0.5-2-0.7-3.1c-0.1-0.3-0.1-0.6,0.3-0.7\r\n\tc0.4-0.1,0.5,0.2,0.6,0.4C504.1,283.8,504.3,284.8,504.5,285.7z\"/>\r\n<path d=\"M112.9,312.2c0.1,0.1,0.3,0.2,0.4,0.4c0.6,0.9,1.1,1.8,1.7,2.7c0.2,0.3,0.2,0.5-0.1,0.7c-0.1,0.1-0.4,0-0.5,0\r\n\tc-0.7-1.1-1.4-2.2-2-3.3C112.3,312.5,112.5,312.3,112.9,312.2z\"/>\r\n<path d=\"M492.8,314.8c-0.4-0.1-0.6-0.3-0.4-0.7c0.6-1,1.2-2,1.9-3c0.1-0.2,0.4-0.3,0.6-0.2c0.3,0.1,0.3,0.4,0.2,0.6\r\n\tc-0.6,1.1-1.3,2.1-1.9,3.1C493,314.7,492.9,314.7,492.8,314.8z\"/>\r\n<path d=\"M39.6,368.7c0.5,0.1,0.6,0.4,0.4,0.7c-0.6,1-1.2,1.9-1.8,2.9c-0.1,0.2-0.3,0.4-0.6,0.2c-0.2-0.1-0.4-0.3-0.3-0.5\r\n\tc0.5-1.1,1.1-2.2,1.9-3.2C39.3,368.8,39.4,368.7,39.6,368.7z\"/>\r\n<path d=\"M89.6,310.6c-0.1,0.2-0.1,0.4-0.2,0.5c-0.2,0.2-0.5,0.2-0.6-0.1c-0.7-1.1-1.7-2.1-1.9-3.5c0-0.1,0.4-0.3,0.4-0.2\r\n\tC88.5,308.2,88.8,309.6,89.6,310.6z\"/>\r\n<path d=\"M472.7,309.6c-0.5-0.1-0.6-0.4-0.3-0.7c0.6-1,1.2-1.9,1.8-2.9c0.1-0.1,0.4-0.3,0.6-0.2c0.2,0.1,0.3,0.3,0.2,0.5\r\n\tc-0.6,1.1-1.3,2.1-2,3.2C472.9,309.5,472.8,309.5,472.7,309.6z\"/>\r\n<path d=\"M499,305.1c-0.7,1.1-1.5,2.2-2.2,3.3c0,0.1-0.4,0.1-0.4,0c-0.1-0.2-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.1,0.4-0.2,0.6-0.2C498.8,304.7,498.9,304.9,499,305.1z\"/>\r\n<path d=\"M83.6,301.1c0.6,0.4,0.9,1,1.1,1.6c0.4,0.7,1.5,1.8,0.8,2.1c-1.1,0.5-1.1-1.1-1.7-1.7c-0.3-0.4-0.5-0.9-0.8-1.3\r\n\tC83,301.4,83.1,301.1,83.6,301.1z\"/>\r\n<path d=\"M107,303.6c-0.1-0.1-0.3-0.2-0.4-0.4c-0.6-0.9-1.1-1.8-1.7-2.7c-0.2-0.3-0.2-0.6,0.1-0.7c0.1-0.1,0.4,0,0.5,0.1\r\n\tc0.7,1.1,1.4,2.2,2,3.3C107.6,303.3,107.3,303.5,107,303.6z\"/>\r\n<path d=\"M543.9,382.1c-1.3,0.3-2.5,0.6-3.8,0.9c-0.3,0.1-0.6,0.1-0.7-0.3c-0.1-0.3,0.1-0.4,0.3-0.5c1.2-0.4,2.4-0.7,3.6-1\r\n\tC544,381.1,543.8,381.7,543.9,382.1C543.9,382.1,543.9,382.1,543.9,382.1z\"/>\r\n<path d=\"M482.8,293.7c-0.7,1.1-1.3,2.1-2,3.1c-0.1,0.2-0.4,0.3-0.6,0.1c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.3-2.1,2-3.1\r\n\tc0.1-0.2,0.4-0.2,0.6,0C482.7,293.4,482.7,293.6,482.8,293.7z\"/>\r\n<path d=\"M525.2,386.1c-0.4,0-0.8,0.1-0.9-0.4c0-0.4,0.4-0.5,0.7-0.6c1-0.2,2-0.3,3-0.5c0.3,0,0.6-0.1,0.7,0.3\r\n\tc0.1,0.5-0.3,0.5-0.6,0.6C527.1,385.8,526.1,386,525.2,386.1z\"/>\r\n<path d=\"M60.8,386.6c-1.2-0.3-2.5-0.2-3.6-0.9c-0.1,0,0-0.4,0-0.4c1.3-0.4,2.4,0.2,3.7,0.3c0.3,0,0.8,0.1,0.7,0.5\r\n\tC61.6,386.7,61.1,386.5,60.8,386.6z\"/>\r\n<path d=\"M322.8,356.4c-0.8-0.3-2.3,0.3-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.4,2.1,0.4C325,356.8,323.6,356.1,322.8,356.4z\"/>\r\n<path d=\"M374.7,295.7c-0.7-0.3-2.1,0.4-2.2-0.4c-0.1-0.9,1.3-0.5,2-0.5c0.8,0,2.3-0.7,2.4,0.4C377.1,296,375.5,295.4,374.7,295.7z\"\r\n\t/>\r\n<path d=\"M240.9,296.7c-0.7-0.3-2.1,0.3-2.1-0.5c0-1,1.4-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C243.1,297.1,241.7,296.4,240.9,296.7z\"/>\r\n<path d=\"M164,292.7c-0.7-0.1-1.4-0.1-2.1-0.2c-0.3,0-0.6-0.2-0.6-0.5c0-0.4,0.4-0.4,0.7-0.4c0.9,0.1,1.9,0.2,2.8,0.3\r\n\tc0.4,0.1,1.1-0.2,1,0.5c-0.1,0.6-0.7,0.4-1.2,0.3C164.4,292.8,164.2,292.7,164,292.7C164,292.7,164,292.7,164,292.7z\"/>\r\n<path d=\"M128.8,389.9c0.8,0.3,2.2-0.3,2.2,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.7,0-2.1,0.4-2.1-0.4C126.8,389.5,128.2,390.3,128.8,389.9z\"\r\n\t/>\r\n<path d=\"M210,295.8c-0.8-0.4-2.3,0.4-2.2-0.7c0.1-0.9,1.5-0.3,2.3-0.3c0.7,0,2.1-0.4,2,0.5C212.1,296.2,210.7,295.4,210,295.8z\"/>\r\n<path d=\"M507.7,299.8c0,0.3,0.1,0.7-0.3,0.7c-0.4,0.1-0.5-0.2-0.6-0.5c-0.2-1-0.5-2-0.7-3.1c-0.1-0.3,0-0.6,0.3-0.6\r\n\tc0.4-0.1,0.5,0.2,0.6,0.5C507.2,297.9,507.4,298.9,507.7,299.8z\"/>\r\n<path d=\"M480.1,390.2c-0.7-0.2-2,0.4-2-0.4c0-0.9,1.3-0.5,1.9-0.5c0.8,0,2.3-0.7,2.4,0.4C482.5,390.5,480.9,389.9,480.1,390.2z\"/>\r\n<path d=\"M272,296.1c0.8,0.3,2.2-0.2,2.1,0.5c0,1-1.3,0.5-2.1,0.5c-0.8,0-2.3,0.4-2.3-0.4C269.9,295.7,271.4,296.5,272,296.1z\"/>\r\n<path d=\"M93.4,317c-0.1,0.2-0.2,0.4-0.3,0.5c-0.2,0.1-0.5,0-0.6-0.2c-0.6-1-1.2-2-1.8-3c-0.1-0.2,0-0.5,0.2-0.6\r\n\tc0.1-0.1,0.4,0,0.5,0.1C92,314.8,92.7,315.9,93.4,317z\"/>\r\n<path d=\"M441.5,391c-0.8-0.2-2.2,0.3-2.2-0.4c0-1,1.4-0.5,2.2-0.5c0.7,0,2.2-0.4,2.2,0.3C443.6,391.4,442.2,390.7,441.5,391z\"/>\r\n<path d=\"M45.6,383.3c-0.9-0.3-1.9-0.6-2.8-0.9c-0.3-0.1-0.7-0.2-0.6-0.7c0.1-0.4,0.6-0.3,0.9-0.2c1,0.3,1.9,0.6,2.9,0.9\r\n\tc0.3,0.1,0.7,0.2,0.6,0.6C46.4,383.4,46,383.3,45.6,383.3z\"/>\r\n<path d=\"M171.4,293.4c-0.8-0.3-2.4,0.2-2.3-0.6c0.1-1,1.6-0.4,2.4-0.3c0.7,0.1,2-0.3,1.9,0.6C173.3,293.9,172.1,293.2,171.4,293.4z\"\r\n\t/>\r\n<path d=\"M502.8,298.9c-0.7,1.1-1.4,2.1-2.1,3.2c-0.1,0.1-0.4,0.1-0.5,0c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C502.7,298.5,502.7,298.7,502.8,298.9z\"/>\r\n<path d=\"M502.5,388.8c-0.4-0.1-1.1,0.3-1.2-0.3c-0.1-0.6,0.6-0.5,1-0.6c0.2-0.1,0.5-0.1,0.7-0.1c0.9,0.2,2.4-0.8,2.6,0.3\r\n\tc0.1,0.8-1.7,0.4-2.6,0.6C502.9,388.8,502.7,388.8,502.5,388.8z\"/>\r\n<path d=\"M118.6,287c-1-0.2-1.9-0.3-2.9-0.5c-0.3-0.1-0.6-0.2-0.5-0.5c0.1-0.4,0.4-0.4,0.7-0.3c0.9,0.1,1.9,0.2,2.8,0.4\r\n\tc0.4,0.1,1.1,0,0.9,0.7C119.5,287.2,118.9,286.9,118.6,287z\"/>\r\n<path d=\"M245.3,388.5c0.7,0.2,2.1-0.3,2.1,0.4c0,1-1.3,0.5-2.1,0.5c-0.8,0-2.2,0.4-2.2-0.3C243.2,388.1,244.6,388.8,245.3,388.5z\"/>\r\n<path d=\"M520.2,386c0.4,0,1-0.2,1,0.4c0,0.4-0.4,0.4-0.8,0.5c-0.9,0.1-1.9,0.3-2.8,0.4c-0.3,0-0.8,0.1-0.9-0.3\r\n\tc-0.1-0.5,0.4-0.5,0.7-0.6C518.3,386.2,519.3,386.1,520.2,386z\"/>\r\n<path d=\"M90.5,389.8c-0.8-0.4-2.4,0.3-2.4-0.8c0-0.7,1.5-0.2,2.4-0.2c0.7,0.1,1.9-0.4,1.8,0.6C92.3,390.2,91.1,389.5,90.5,389.8z\"/>\r\n<path d=\"M351.6,296.4c-0.8-0.4-2.2,0.4-2.2-0.5c0-0.8,1.4-0.4,2.1-0.5c0.8,0,2.2-0.5,2.2,0.3C353.7,296.9,352.2,295.9,351.6,296.4z\"\r\n\t/>\r\n<path d=\"M382.1,295.4c-0.2,0-0.5,0.1-0.7,0c-0.4,0-1.1,0.3-1.1-0.4c0-0.7,0.7-0.4,1.1-0.5c0.9-0.1,1.8-0.1,2.7-0.2\r\n\tc0.4,0,0.8,0,0.8,0.4c0,0.5-0.4,0.5-0.8,0.5C383.4,295.3,382.7,295.3,382.1,295.4C382.1,295.3,382.1,295.4,382.1,295.4z\"/>\r\n<path d=\"M202.3,295.4c-0.8-0.3-2.4,0.3-2.3-0.6c0.1-1,1.6-0.4,2.4-0.3c0.7,0,2-0.4,1.9,0.6C204.3,295.8,203,295.2,202.3,295.4z\"/>\r\n<path d=\"M264.3,297.1c-0.8-0.3-2.3,0.4-2.2-0.5c0-0.9,1.5-0.4,2.3-0.4c0.7,0,2.1-0.3,2,0.4C266.3,297.5,265,296.7,264.3,297.1z\"/>\r\n<path d=\"M152.1,358c-0.7-0.3-2,0.5-2-0.5c-0.1-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.5,2.3,0.3C154.3,358.3,152.9,357.7,152.1,358z\"/>\r\n<path d=\"M485.6,359.1c-0.8-0.3-2.2,0.2-2.2-0.5c0.1-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2,0.5C487.6,359.5,486.3,358.8,485.6,359.1z\"\r\n\t/>\r\n<path d=\"M73.3,315.2c-0.2,1-0.4,1.9-0.7,2.9c0,0.2-0.3,0.4-0.4,0.4c-0.4,0-0.5-0.3-0.4-0.6c0.2-1,0.4-1.9,0.6-2.9\r\n\tc0.1-0.3,0.2-0.7,0.6-0.6C73.4,314.4,73.2,314.9,73.3,315.2z\"/>\r\n<path d=\"M73.7,387.4c0.9,0.1,1.8,0.2,2.7,0.3c0.3,0,0.6,0.1,0.6,0.5c0,0.4-0.4,0.4-0.7,0.4c-0.9,0-1.8-0.1-2.7-0.2\r\n\tc-0.4-0.1-1.1,0-1.1-0.6C72.6,387.1,73.3,387.4,73.7,387.4z\"/>\r\n<path d=\"M443.3,290.7c-0.5-0.1-1.2,0.3-1.2-0.4c0-0.5,0.6-0.4,1-0.5c0.9-0.1,1.9-0.2,2.8-0.3c0.3,0,0.6-0.1,0.7,0.3\r\n\tc0.1,0.5-0.2,0.5-0.6,0.6C445,290.5,444.1,290.6,443.3,290.7z\"/>\r\n<path d=\"M175.3,357.3c-0.7-0.2-2,0.4-2-0.4c0-0.9,1.2-0.5,1.9-0.5c0.8,0,2.3-0.6,2.4,0.4C177.6,357.6,176.1,357,175.3,357.3z\"/>\r\n<path d=\"M420.8,293c-0.7-0.2-1.7,0.4-1.7-0.4c-0.1-0.7,1-0.6,1.6-0.6c0.9,0,2.7-0.5,2.7,0.1C423.3,293.4,421.6,292.5,420.8,293z\"/>\r\n<path d=\"M418.1,390.9c-0.7-0.3-2,0.5-2-0.6c0-0.7,1.3-0.4,2-0.4c0.8,0.1,2.3-0.5,2.4,0.5C420.5,391.2,418.9,390.7,418.1,390.9z\"/>\r\n<path d=\"M155.6,291c0.7,0.2,2.5,0,2.3,0.6c-0.2,1.1-1.7,0.2-2.6,0.3c-0.2,0-0.5,0-0.7-0.1c-0.4-0.1-1,0-1-0.5c0-0.7,0.7-0.4,1.1-0.4\r\n\tC155,290.9,155.2,290.9,155.6,291z\"/>\r\n<path d=\"M470.2,358.6c-0.8-0.3-2.3,0.2-2.2-0.5c0.1-1,1.4-0.5,2.2-0.4c0.7,0,2.1-0.4,2.1,0.5C472.2,359,470.8,358.3,470.2,358.6z\"/>\r\n<path d=\"M217.8,296.1c-0.8-0.4-2.3,0.3-2.2-0.7c0.1-0.9,1.5-0.3,2.3-0.3c0.7,0,2-0.2,2,0.5C219.7,296.6,218.4,295.7,217.8,296.1z\"/>\r\n<path d=\"M128.7,358.7c-0.6-0.4-2,0.6-2-0.5c0-0.7,1.3-0.4,2-0.4c0.8,0,2.3-0.5,2.3,0.4C131.1,359,129.6,358.4,128.7,358.7z\"/>\r\n<path d=\"M423.6,357.7c-0.8-0.3-2.3,0.3-2.3-0.5c0-0.9,1.5-0.4,2.2-0.4c0.7,0,2.1-0.4,2.1,0.4C425.7,358.2,424.3,357.4,423.6,357.7z\"\r\n\t/>\r\n<path d=\"M167.6,390.9c-0.7-0.2-2,0.3-2-0.4c0-1,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.3C169.8,391.3,168.4,390.6,167.6,390.9z\"/>\r\n<path d=\"M446.6,357c0.8,0.3,2.4-0.2,2.3,0.5c-0.1,1-1.5,0.4-2.4,0.4c-0.7,0-1.9,0.4-1.9-0.5C444.6,356.6,445.9,357.2,446.6,357z\"/>\r\n<path d=\"M426.2,391c-0.9-0.3-2.4,0.3-2.4-0.6c0-0.8,1.5-0.4,2.3-0.4c0.7,0,2.1-0.5,2.1,0.4C428.2,391.4,426.8,390.6,426.2,391z\"/>\r\n<path d=\"M346.2,356.7c-0.9-0.3-2.5,0.2-2.4-0.5c0.1-1,1.6-0.4,2.4-0.4c0.7,0,2-0.3,2,0.4C348.1,357.2,346.8,356.3,346.2,356.7z\"/>\r\n<path d=\"M395.1,389.6c0.7,0.3,2.1-0.4,2.1,0.5c0,0.9-1.4,0.4-2.1,0.4c-0.8,0-2.2,0.5-2.2-0.5C392.9,389.3,394.3,389.8,395.1,389.6z\"\r\n\t/>\r\n<path d=\"M105.8,358.4c0.3,0,0.4,0,0.6,0c0.5,0.1,1.4-0.3,1.5,0.4c0,0.7-0.9,0.4-1.4,0.5c-0.2,0-0.4,0-0.5,0\r\n\tc-0.8-0.1-2.4,0.4-2.3-0.3C103.6,357.9,105.1,358.7,105.8,358.4z\"/>\r\n<path d=\"M392.4,356.3c0.8,0.3,2.3-0.2,2.3,0.5c-0.1,1-1.4,0.4-2.2,0.4c-0.7,0-2.1,0.5-2.1-0.4C390.4,355.8,391.8,356.6,392.4,356.3z\r\n\t\"/>\r\n<path d=\"M160,391c-0.8-0.2-2.2,0.3-2.2-0.5c0-1,1.3-0.5,2-0.5c0.8,0,2.2-0.4,2.2,0.3C162,391.5,160.5,390.5,160,391z\"/>\r\n<path d=\"M268.6,356.4c-0.8-0.3-2.3,0.4-2.3-0.5c0-0.8,1.5-0.4,2.3-0.4c0.7,0,2-0.3,2,0.4C270.6,356.8,269.3,356,268.6,356.4z\"/>\r\n<path d=\"M503.9,356c0.1-0.5-0.2-1.1,0.6-1.3c0.7-0.1,1.6-0.2,2.2,0.2c0.5,0.4,0,0.6-0.4,0.7c-0.6,0.1-1.2-0.1-1.4,0.7\r\n\tc-0.1,0.3,0,0.9-0.6,0.7C503.8,356.9,504,356.3,503.9,356z\"/>\r\n<path d=\"M307.2,356.4c-0.8-0.2-2.2,0.2-2.1-0.4c0-1,1.3-0.5,2.1-0.5c0.8,0,2.3-0.4,2.3,0.4C309.4,356.8,307.9,356,307.2,356.4z\"/>\r\n<path d=\"M229.7,356.7c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.4,2.2,0.3C231.8,357.1,230.4,356.4,229.7,356.7z\"\r\n\t/>\r\n<path d=\"M283.9,356.3c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.9,1.4-0.4,2.1-0.4c0.8,0,2.2-0.5,2.2,0.5C286.2,356.6,284.7,356.1,283.9,356.3z\"\r\n\t/>\r\n<path d=\"M198.6,357c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.4C200.7,357.3,199.4,356.7,198.6,357z\"/>\r\n<path d=\"M314.9,356.4c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.5C317.1,356.7,315.7,356.1,314.9,356.4z\"/>\r\n<path d=\"M299.4,356.4c-0.7-0.3-2,0.4-2-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.5C301.6,356.7,300.2,356.1,299.4,356.4z\"/>\r\n<path d=\"M449.2,390.9c-0.7-0.3-2.1,0.4-2.1-0.5c0-0.8,1.4-0.4,2.1-0.4c0.7,0,2.1-0.5,2.1,0.4C451.4,391.3,450,390.6,449.2,390.9z\"/>\r\n<path d=\"M260.7,389.3c-0.8-0.4-2.1,0.4-2.1-0.7c0-0.7,1.3-0.4,2-0.4c0.8,0,2.2-0.3,2.2,0.3C262.8,389.8,261.4,388.8,260.7,389.3z\"/>\r\n<path d=\"M328.2,296.8c-0.7-0.3-2,0.5-2.1-0.5c0-0.8,1.4-0.4,2.2-0.4c0.7,0,2.1-0.5,2.1,0.4C330.4,297.1,329,296.5,328.2,296.8z\"/>\r\n<path d=\"M276.2,356.4c-0.8-0.2-2.2,0.2-2.1-0.5c0-1,1.3-0.5,2.1-0.5c0.8,0,2.2-0.4,2.2,0.4C278.2,356.9,276.8,355.9,276.2,356.4z\"/>\r\n<path d=\"M369.3,357c-0.8-0.3-2.3,0.3-2.2-0.5c0.1-1,1.4-0.5,2.2-0.5c0.7,0,2.1-0.4,2.1,0.5C371.3,357.4,369.9,356.7,369.3,357z\"/>\r\n<path d=\"M487.5,324c-0.6,1-1.3,2.1-2,3.1c-0.1,0.1-0.3,0.2-0.5,0.1c-0.3-0.1-0.4-0.3-0.3-0.5c0.7-1.1,1.3-2.2,2.1-3.2\r\n\tC487,323.1,487.4,323.4,487.5,324z\"/>\r\n<path d=\"M515,335.9c-1-0.9-0.7-2.1-1.1-3.1c-0.1-0.4-0.2-1.2,0.2-1.1c1.3,0.6,0.8,2,1.2,3C515.5,335.1,515.7,335.5,515,335.9z\"/>\r\n<path d=\"M517,346.5c0-0.4-0.1-0.7,0.3-0.8c0.5-0.1,0.6,0.3,0.7,0.6c0.2,0.9,0.4,1.8,0.6,2.7c0.1,0.3,0.2,0.7-0.3,0.8\r\n\tc-0.5,0.1-0.6-0.2-0.7-0.6C517.4,348.3,517.2,347.3,517,346.5z\"/>\r\n<path d=\"M473.6,346c-0.3-0.1-0.5-0.3-0.4-0.5c0.6-1.1,1.3-2.2,2-3.3c0.1-0.1,0.3-0.1,0.5-0.1c0.3,0.1,0.4,0.3,0.3,0.5\r\n\tc-0.6,1.1-1.3,2.1-1.9,3.1C473.9,345.9,473.7,345.9,473.6,346z\"/>\r\n<path d=\"M479.9,336.4c-0.7,1.1-1.4,2.2-2.2,3.3c0,0.1-0.4,0-0.5,0c-0.2-0.1-0.3-0.4-0.1-0.6c0.6-1,1.2-2,1.8-3\r\n\tc0.1-0.2,0.3-0.3,0.6-0.2C479.6,336,479.7,336.1,479.9,336.4z\"/>\r\n<path d=\"M512.3,320.9c0,0.4,0.1,0.7-0.3,0.8c-0.3,0.1-0.6-0.1-0.6-0.4c-0.3-1.1-0.5-2.1-0.7-3.2c-0.1-0.3,0.1-0.5,0.5-0.6\r\n\tc0.3,0,0.4,0.2,0.5,0.4C511.9,319,512.1,320,512.3,320.9z\"/>\r\n<path d=\"M452,343.6c-0.7,1.1-1.5,2.2-2.2,3.3c0,0.1-0.3,0-0.5,0c-0.3-0.1-0.2-0.4-0.1-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.2C451.8,343.2,451.9,343.4,452,343.6z\"/>\r\n<path d=\"M455.9,337.4c-0.7,1.1-1.4,2.2-2.1,3.3c-0.1,0.1-0.4,0.1-0.5,0c-0.2-0.1-0.3-0.4-0.2-0.6c0.6-1,1.2-2,1.9-3\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C455.7,337,455.7,337.2,455.9,337.4z\"/>\r\n<path d=\"M483.6,330.2c-0.7,1-1.3,2.1-2,3.1c-0.1,0.2-0.4,0.2-0.6,0.1c-0.1-0.1-0.2-0.3-0.2-0.4c0.6-1.1,1.3-2.1,1.9-3.2\r\n\tc0.1-0.2,0.4-0.3,0.6-0.1C483.5,329.8,483.5,330,483.6,330.2z\"/>\r\n<path d=\"M513.8,327.8c0,0.5,0.1,0.9-0.4,1c-0.4,0.1-0.5-0.3-0.5-0.5c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3-0.1-0.6,0.3-0.7\r\n\tc0.5-0.1,0.6,0.3,0.7,0.6C513.5,326.1,513.7,327.1,513.8,327.8z\"/>\r\n<path class=\"st4\" d=\"M517,341.9c0,0.4,0.1,0.8-0.2,0.9c-0.5,0.1-0.6-0.2-0.7-0.6c-0.2-1-0.4-1.9-0.6-2.9c-0.1-0.3,0-0.6,0.4-0.6\r\n\tc0.4-0.1,0.5,0.2,0.6,0.5C516.6,340.1,516.8,341.1,517,341.9z\"/>\r\n</svg>\r\n"

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

module.exports = "<div class=\"card mt-2\">\r\n  <div class=\"card-header\">\r\n    MI Attachment\r\n  </div>\r\n\r\n  <div class=\"card-block mt-2 pre-scrollable\" style=\"width:auto;height: 125px\">\r\n      <ul style=\"margin-left:-30px;\" >\r\n        <li style=\"float:left;list-style-type: none;margin:2px\"   *ngFor=\"let item of attachmentItems\" (click)=\"openDialog(item)\" >\r\n          <div *ngIf=\"item.tag == 'image'\"><img src=\"{{item.path}}\" height=\"90\" width=\"100\"></div>\r\n          <div *ngIf=\"item.tag == 'video'\"><video  width=\"100\" height=\"90\" controls><source src=\"{{item.path}}\" type=\"video/mp4\"></video></div>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n\r\n</div>\r\n"

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
            { tag: 'image', path: 'PCS-MI/assets/img/wi/Label.png', desc: 'Main Label' },
            { tag: 'image', path: 'PCS-MI/assets/img/wi/Fabric.png', desc: 'Fabric' },
            { tag: 'image', path: 'PCS-MI/assets/img/wi/SOP.jpg', desc: 'SOP' },
            { tag: 'image', path: 'PCS-MI/assets/img/wi/neckTape.png', desc: 'NeckTape' },
            // { tag : 'image', path : 'assets/img/wi/Fabric.png', desc : 'Fabric'},
            // { tag : 'image', path : 'assets/img/wi/SOP.jpg', desc : 'SOP'},
            // { tag : 'image', path : 'assets/img/wi/Label.png', desc : 'Main Label'},
            // { tag : 'image', path : 'assets/img/wi/Fabric.png', desc : 'Fabric'},
            // { tag : 'image', path : 'assets/img/wi/SOP.jpg', desc : 'SOP'},
            // { tag : 'video', path : 'assets/video/1.mp4', desc : 'Broken yarn due to certain fabrication'},
            { tag: 'video', path: 'PCS-MI/assets/video/2.mp4', desc: 'Machine speed adjustment may need' },
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    MI Information\r\n  </div>\r\n  <div class=\"card-block mt-2\">\r\n    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\r\n    <button type=\"button\" class=\"btn ml-2 btn-outline-primary\"   [ngClass]=\"{active:selTag.TDC}\" (click)=\"selTag.TDC=!selTag.TDC;getMiTextInfo()\">TDC</button>\r\n    <!-- Indicates a successful or positive action -->\r\n    <button type=\"button\" class=\"btn btn-outline-success\" [ngClass]=\"{active:selTag.QA}\" (click)=\"selTag.QA=!selTag.QA;getMiTextInfo()\">QA</button>\r\n    <!-- Contextual button for informational alert messages -->\r\n    <!--<button type=\"button\" class=\"btn btn-outline-info\" [ngClass]=\"{active:selTag.COL}\" (click)=\"selTag.COL=!selTag.COL;getMiTextInfo()\">COL</button>-->\r\n    <!-- Indicates caution should be taken with this action -->\r\n    <button type=\"button\" class=\"btn btn-outline-warning\" [ngClass]=\"{active:selTag.Warning}\" (click)=\"selTag.Warning=!selTag.Warning;getMiTextInfo()\">Warning</button>\r\n  </div>\r\n  <div class=\"card-block mr-2 ml-2 pre-scrollable \" style=\"width:auto;height: 325px\">\r\n    <div class=\"mt-2 mb-0\" *ngIf=\"selTag.Warning\" >\r\n      <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let item of warningItems\" style=\"background-color: #ff8f68\">\r\n              <img src=\"PCS-MI/assets/svg/warning.svg\" class=\"float-left mr-2\" height=\"20px\">\r\n              <h6 style=\"color: red\">{{item.desc}}</h6>\r\n          </li>\r\n          <!--<li class=\"list-group-item\" *ngFor=\"let item of colItems\" >-->\r\n              <!--<img src=\"assets/svg/alertinfo.svg\" class=\"float-left mr-2\" height=\"20px\">-->\r\n              <!--<h6 style=\"color: #17a2b8\">{{item.desc}}</h6>-->\r\n          <!--</li>-->\r\n      </ul>\r\n    </div>\r\n\r\n   <!-- <div *ngIf=\"selTag.COL\" class=\"mt-2\" title=\"COL Infomation\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of colItems\">\r\n          <div>\r\n            <img src=\"assets/svg/alertinfo.svg\" class=\"float-left mr-2\" height=\"20px\">\r\n            <h6 style=\"color: #17a2b8\">{{item.desc}}</h6>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>-->\r\n\r\n    <div *ngIf=\"selTag.QA\" class=\"mt-2 mb-0\" title=\"QA Infomation\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of qaItems\"><h6>{{item.name}}：<span class=\"ml-2\">{{item.desc}}</span></h6></li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"selTag.TDC\" class=\"mt-2 mb-2\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let item of tdcItems\">\r\n          <div>\r\n            <span class=\"h6\"> {{item.name}}：</span>\r\n            <span *ngIf=\"item.path != null\"> <a href=\"javascript:void(0);\"  target=\"_blank\" (click)=\"openImageDialog(item)\">  {{item.desc}} </a> </span>\r\n            <span *ngIf=\"item.path == null\"> <a href=\"javascript:void(0);\" class=\"mitext-link\" target=\"_blank\" (click)=\"openImageDialog(item)\">  {{item.desc}} </a> </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            'QA': true,
            'COL': false,
            'Warning': true
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
            { tag: 'TDC', name: '1.Self Fabric Neck Tape', desc: 'Self Fabric Neck Tape', path: 'PCS-MI/assets/img/wi/neckTape.png' },
            { tag: 'TDC', name: '2.Thread Color', desc: 'Horizontal' },
            { tag: 'TDC', name: '3.SPI', desc: '14' },
            { tag: 'TDC', name: '4.Speed', desc: '2800rpm' },
            { tag: 'TDC', name: '5.Tension', desc: '8 / Thread : 80' },
            // { tag : 'TDC', name : '5.Tape material', desc : 'Self Fabric Neck Tape'},
            // { tag : 'TDC', name : '6.Thread Color', desc : '850-White'},
            { tag: 'QA', name: 'Defect', desc: '0.3cm Corporate stripe piping (EAP# 665022879X) along inside collar band' },
            { tag: 'QA', name: 'Risk', desc: ' leave 1.25cm from band tip edge' },
            { tag: 'Warning', name: 'Warning1', desc: '100% PI focus to inspection broken yarn at armhole and side seam parts' },
            { tag: 'Warning', name: 'Warning2', desc: 'Machine speed adjustment may need' },
            { tag: 'COL', name: 'COL', desc: ' Broken Yarn risk 100% in White color' },
            { tag: 'COL', name: 'COL', desc: ' Sewing and inline QA strengthen inspection before washing and after washing' },
            { tag: 'Comment', name: 'Comment1', desc: 'Buttonhole quality: approved with density 147 (thread PP803 = 140tkt) ' +
                    '(Refer approved mock up)Remark: if have major change in fabric type (example from poplin to linen),' +
                    ' fty then need to do the testing before start bulk sewing.' },
            { tag: 'Comment', name: 'Comment2', desc: 'Need to wrap buttons by using Ascolite Machine with Synthetic thread (10 times), ' +
                    'Buttoning 3mm then wrapping (refer approved mock up). ' },
            { tag: 'Comment', name: 'Comment3', desc: 'Collarband buttonhole: machine set at 3mm bigger than' +
                    ' body buttonhole (for button thickness 3.5mm), after sewn is about 2mm measuring.(approx. 19mm from edge to edge)' },
            { tag: 'Comment', name: 'Comment4', desc: 'Cuff buttonhole remain as body buttonhole (unchanged)' },
            { tag: 'Comment', name: 'Comment5', desc: 'Neckband buttonhole with contrast density that approved ' +
                    'by Mr. Rob on 10/17/14 :Stitches : 145 Width : 185' },
            { tag: 'Comment', name: 'Comment6', desc: 'Collar stay pocket width - s/b bigger than collar ' +
                    'stay by 1.5mm to 2mm, should NOT more than 2mm !' },
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes),
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