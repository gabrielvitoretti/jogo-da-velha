"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/gameOption/gameOption.jsx":
/*!**************************************************!*\
  !*** ./src/components/gameOption/gameOption.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameOption_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOption.module.css */ \"./src/components/gameOption/gameOption.module.css\");\n/* harmony import */ var _gameOption_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gameOption_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/icon */ \"./src/components/icons/icon.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GameIcon = function(param) {\n    var iconName = param.iconName;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        iconName: iconName,\n        size: \"25px\"\n    }, void 0, false, {\n        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/gameOption/gameOption.jsx\",\n        lineNumber: 5,\n        columnNumber: 34\n    }, _this);\n};\n_c = GameIcon;\nfunction GameOption(param) {\n    var status = param.status;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_gameOption_module_css__WEBPACK_IMPORTED_MODULE_2___default().gameOption),\n        children: [\n            status === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                iconName: \"circle\",\n                size: \"25px\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/gameOption/gameOption.jsx\",\n                lineNumber: 13,\n                columnNumber: 29\n            }, this),\n            status === -1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                iconName: \"x\",\n                size: \"25px\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/gameOption/gameOption.jsx\",\n                lineNumber: 16,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/gameOption/gameOption.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n}\n_c1 = GameOption;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOption);\nvar _c, _c1;\n$RefreshReg$(_c, \"GameIcon\");\n$RefreshReg$(_c1, \"GameOption\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lT3B0aW9uL2dhbWVPcHRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ1o7O0FBR2hDLEdBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVE7UUFBTkMsUUFBUSxTQUFSQSxRQUFRO2tCQUFNLE1BQU1BLENBQUFBLDZEQUFBQSxDQUFMRixtREFBSTtRQUFDRSxRQUFRLEVBQUVBLFFBQVE7UUFBRUMsSUFBSSxFQUFDLENBQU07Ozs7Ozs7S0FBaEVGLFFBQVE7U0FHTEcsVUFBVSxDQUFFLEtBQVEsRUFBRSxDQUFDO1FBQVZDLE1BQU0sR0FBUCxLQUFRLENBQVBBLE1BQU07SUFFeEIsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUVSLDBFQUFpQjs7WUFFN0JNLE1BQU0sS0FBSyxDQUFDLGdGQUFLTCxtREFBSTtnQkFBQ0UsUUFBUSxFQUFDLENBQVE7Z0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7WUFHbkRFLE1BQU0sTUFBTSxDQUFDLGdGQUFLTCxtREFBSTtnQkFBQ0UsUUFBUSxFQUFDLENBQUc7Z0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7QUFLM0QsQ0FBQztNQWJRQyxVQUFVO0FBZW5CLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWVPcHRpb24vZ2FtZU9wdGlvbi5qc3g/MGVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWVPcHRpb24ubW9kdWxlLmNzc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvbnMvaWNvblwiXG5cblxuY29uc3QgR2FtZUljb24gPSAoe2ljb25OYW1lfSkgPT4gPEljb24gaWNvbk5hbWU9e2ljb25OYW1lfSBzaXplPVwiMjVweFwiIC8+IFxuXG5cbmZ1bmN0aW9uIEdhbWVPcHRpb24oIHtzdGF0dXN9ICl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVPcHRpb259PiBcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhdHVzID09PSAxICYmIDxJY29uIGljb25OYW1lPVwiY2lyY2xlXCIgc2l6ZT1cIjI1cHhcIiAvPlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1cyA9PT0gLTEgJiYgPEljb24gaWNvbk5hbWU9XCJ4XCIgc2l6ZT1cIjI1cHhcIiAvPlxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lT3B0aW9uIl0sIm5hbWVzIjpbInN0eWxlcyIsIkljb24iLCJHYW1lSWNvbiIsImljb25OYW1lIiwic2l6ZSIsIkdhbWVPcHRpb24iLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/gameOption/gameOption.jsx\n");

/***/ })

});