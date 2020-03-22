(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\login.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5Cantho%5CClassStuff%5CHW%5CProjects%5CProject3%5Cpayhub%5Cpages%5Clogin.js!./":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5Cantho%5CClassStuff%5CHW%5CProjects%5CProject3%5Cpayhub%5Cpages%5Clogin.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/login", function() {
      var mod = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
      if(true) {
        module.hot.accept(/*! ./pages/login.js */ "./pages/login.js", function() {
          if(!next.router.components["/login"]) return
          var updatedPage = __webpack_require__(/*! ./pages/login.js */ "./pages/login.js")
          next.router.update("/login", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Login() {
  return __jsx("div", null, __jsx("form", {
    action: "/login",
    method: "post",
    id: "login"
  }, __jsx("div", null, __jsx("div", null, __jsx("span", null, __jsx("i", null))), __jsx("input", {
    type: "text",
    id: "username",
    placeholder: "username"
  })), __jsx("div", null, __jsx("div", null, __jsx("span", null, __jsx("i", null))), __jsx("input", {
    type: "password",
    id: "password",
    placeholder: "password"
  })), __jsx("div", null, __jsx("input", {
    type: "checkbox"
  }), "Remember Me"), __jsx("div", null, __jsx("input", {
    type: "submit",
    defaultValue: "Login"
  }))));
}
;

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5Cantho%5CClassStuff%5CHW%5CProjects%5CProject3%5Cpayhub%5Cpages%5Clogin.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5Cantho%5CClassStuff%5CHW%5CProjects%5CProject3%5Cpayhub%5Cpages%5Clogin.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5Cantho%5CClassStuff%5CHW%5CProjects%5CProject3%5Cpayhub%5Cpages%5Clogin.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=login.js.map