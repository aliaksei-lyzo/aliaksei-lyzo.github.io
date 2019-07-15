(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/LandingPage/LandingPage.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/components/LandingPage/LandingPage.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".landing___U0czS {\n  color: white;\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  justify-content: space-around;\n  align-items: center;\n  padding: 25px;\n  background-image: url(" + escape(__webpack_require__(/*! static/background-1.jpg */ "./src/static/background-1.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: calc(100vh - 89.25px);\n  margin-top: 89.25px; }\n\n.section___2xDLn {\n  color: black;\n  width: 300px;\n  height: 300px;\n  position: relative;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  font-weight: bold; }\n  .section___2xDLn h2 {\n    font-size: 5em; }\n  .section___2xDLn div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding: 10% 0; }\n", "", {"version":3,"sources":["D:/TRAINING PROJECTS/FNDTS/src/components/LandingPage/LandingPage.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;EACpB,cAAc;EACd,gDAA+C;EAC/C,6BAA6B;EAC7B,uBAAuB;EACvB,8BAA8B;EAC9B,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,2CAA2C;EAC3C,mBAAmB;EACnB,kBAAkB,EAAE;EACpB;IACE,eAAe,EAAE;EACnB;IACE,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,yCAAyC;YACjC,iCAAiC;IACzC,eAAe,EAAE","file":"LandingPage.scss","sourcesContent":[".landing {\n  color: white;\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  justify-content: space-around;\n  align-items: center;\n  padding: 25px;\n  background-image: url(static/background-1.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: calc(100vh - 89.25px);\n  margin-top: 89.25px; }\n\n.section {\n  color: black;\n  width: 300px;\n  height: 300px;\n  position: relative;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  font-weight: bold; }\n  .section h2 {\n    font-size: 5em; }\n  .section div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding: 10% 0; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"landing": "landing___U0czS",
	"section": "section___2xDLn"
};

/***/ }),

/***/ "./src/components/LandingPage/LandingPage.jsx":
/*!****************************************************!*\
  !*** ./src/components/LandingPage/LandingPage.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LandingPage/LandingPage.scss */ "./src/components/LandingPage/LandingPage.scss");
/* harmony import */ var components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var LandingPage = function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.landing
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "20+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "20+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0432\u0438\u0434\u043E\u0432 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u0443\u0441\u043B\u0443\u0433"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: components_LandingPage_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "20+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430"))));
};
/* propTypes declaration */


LandingPage.propTypes = {};
var _default = LandingPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LandingPage, "LandingPage", "D:\\TRAINING PROJECTS\\FNDTS\\src\\components\\LandingPage\\LandingPage.jsx");
  reactHotLoader.register(_default, "default", "D:\\TRAINING PROJECTS\\FNDTS\\src\\components\\LandingPage\\LandingPage.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/LandingPage/LandingPage.scss":
/*!*****************************************************!*\
  !*** ./src/components/LandingPage/LandingPage.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./LandingPage.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/LandingPage/LandingPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./LandingPage.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/LandingPage/LandingPage.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js!./LandingPage.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/LandingPage/LandingPage.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/LandingPage/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/LandingPage/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage */ "./src/components/LandingPage/LandingPage.jsx");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var _default = _LandingPage__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\TRAINING PROJECTS\\FNDTS\\src\\components\\LandingPage\\index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/static/background-1.jpg":
/*!*************************************!*\
  !*** ./src/static/background-1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-1.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nUGFnZS9MYW5kaW5nUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmdQYWdlL0xhbmRpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nUGFnZS9MYW5kaW5nUGFnZS5zY3NzPzAwYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYmFja2dyb3VuZC0xLmpwZyJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSIsInN0eWxlIiwibGFuZGluZyIsInNlY3Rpb24iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyx1R0FBb0Q7QUFDekUsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxxQkFBcUIsaUJBQWlCLDJCQUEyQixrQkFBa0IsdUJBQXVCLGtDQUFrQyx3QkFBd0Isa0JBQWtCLHFDQUFxQyxtQkFBTyxDQUFDLDhEQUF5QixRQUFRLGlDQUFpQywyQkFBMkIsa0NBQWtDLHdCQUF3QixFQUFFLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsdUJBQXVCLCtDQUErQyx1QkFBdUIsc0JBQXNCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLDBCQUEwQix5QkFBeUIsZUFBZSxnQkFBZ0IsK0NBQStDLCtDQUErQyxxQkFBcUIsRUFBRSxVQUFVLDZIQUE2SCxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxlQUFlLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLHdFQUF3RSxpQkFBaUIsMkJBQTJCLGtCQUFrQix1QkFBdUIsa0NBQWtDLHdCQUF3QixrQkFBa0IsbURBQW1ELGlDQUFpQywyQkFBMkIsa0NBQWtDLHdCQUF3QixFQUFFLGNBQWMsaUJBQWlCLGlCQUFpQixrQkFBa0IsdUJBQXVCLHVCQUF1QiwrQ0FBK0MsdUJBQXVCLHNCQUFzQixFQUFFLGlCQUFpQixxQkFBcUIsRUFBRSxrQkFBa0IseUJBQXlCLGVBQWUsZ0JBQWdCLCtDQUErQywrQ0FBK0MscUJBQXFCLEVBQUUscUJBQXFCOztBQUUzcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUNsQjtBQUFLLGFBQVMsRUFBRUMsOEVBQUssQ0FBQ0M7QUFBdEIsS0FDRTtBQUFLLGFBQVMsRUFBRUQsOEVBQUssQ0FBQ0U7QUFBdEIsS0FDRSx3RUFDRSw2RUFERixFQUVFLDBLQUZGLENBREYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFFRiw4RUFBSyxDQUFDRTtBQUF0QixLQUNFLHdFQUNFLDZFQURGLEVBRUUseU1BRkYsQ0FERixDQVBGLEVBYUU7QUFBSyxhQUFTLEVBQUVGLDhFQUFLLENBQUNFO0FBQXRCLEtBQ0Usd0VBQ0UsNkVBREYsRUFFRSwwSEFGRixDQURGLENBYkYsQ0FEa0I7QUFBQSxDQUFwQjtBQXVCQTs7O0FBQ0FILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QixFQUF4QjtlQUVlSixXO0FBQUE7Ozs7Ozs7Ozs7OzswQkExQlRBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hOLGNBQWMsbUJBQU8sQ0FBQyxzVUFBNEs7O0FBRWxNLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixzVUFBNEs7QUFDL0wsbUJBQW1CLG1CQUFPLENBQUMsc1VBQTRLOztBQUV2TSxvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7ZUFFZUEsb0Q7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmLGlCQUFpQixxQkFBdUIsc0IiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxhbmRpbmdfX19VMGN6UyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcInN0YXRpYy9iYWNrZ3JvdW5kLTEuanBnXCIpKSArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODkuMjVweCk7XFxuICBtYXJnaW4tdG9wOiA4OS4yNXB4OyB9XFxuXFxuLnNlY3Rpb25fX18yeERMbiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC5zZWN0aW9uX19fMnhETG4gaDIge1xcbiAgICBmb250LXNpemU6IDVlbTsgfVxcbiAgLnNlY3Rpb25fX18yeERMbiBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwJSAwOyB9XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6L1RSQUlOSU5HIFBST0pFQ1RTL0ZORFRTL3NyYy9jb21wb25lbnRzL0xhbmRpbmdQYWdlL0xhbmRpbmdQYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0RBQStDO0VBQy9DLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG9CQUFvQixFQUFFOztBQUV4QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBRTtFQUNwQjtJQUNFLGVBQWUsRUFBRTtFQUNuQjtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztZQUNqQyxpQ0FBaUM7SUFDekMsZUFBZSxFQUFFXCIsXCJmaWxlXCI6XCJMYW5kaW5nUGFnZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYW5kaW5nIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdGF0aWMvYmFja2dyb3VuZC0xLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDg5LjI1cHgpO1xcbiAgbWFyZ2luLXRvcDogODkuMjVweDsgfVxcblxcbi5zZWN0aW9uIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLnNlY3Rpb24gaDIge1xcbiAgICBmb250LXNpemU6IDVlbTsgfVxcbiAgLnNlY3Rpb24gZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAxMCUgMDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsYW5kaW5nXCI6IFwibGFuZGluZ19fX1UwY3pTXCIsXG5cdFwic2VjdGlvblwiOiBcInNlY3Rpb25fX18yeERMblwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICdjb21wb25lbnRzL0xhbmRpbmdQYWdlL0xhbmRpbmdQYWdlLnNjc3MnO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmd9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9ufT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj4yMCs8L2gyPlxuICAgICAgICA8cD7Rg9GB0L/QtdGI0L3Ri9GFINC/0YDQvtC10LrRgtC+0LI8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+MjArPC9oMj5cbiAgICAgICAgPHA+0LLQuNC00L7QsiDQvtC60LDQt9GL0LLQsNC10LzRi9GFINGD0YHQu9GD0LM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+MjArPC9oMj5cbiAgICAgICAgPHA+0LvQtdGCINC+0L/Ri9GC0LA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vKiBwcm9wVHlwZXMgZGVjbGFyYXRpb24gKi9cbkxhbmRpbmdQYWdlLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xhbmRpbmdQYWdlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTGFuZGluZ1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTGFuZGluZ1BhZ2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuL0xhbmRpbmdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYWNrZ3JvdW5kLTEuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==