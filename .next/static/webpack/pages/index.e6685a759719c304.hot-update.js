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

/***/ "./src/components/game/game.jsx":
/*!**************************************!*\
  !*** ./src/components/game/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.module.css */ \"./src/components/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameOption/gameOption */ \"./src/components/gameOption/gameOption.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Game() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(0)), gameState = ref[0], setGameState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPlayer = ref1[0], setCurrentPlayer = ref1[1];\n    var handleClick = function(position) {\n        var newGameState = _toConsumableArray(gameState);\n        newGameState[position] = currentPlayer;\n        setCurrentPlayer = currentPlayer * -1;\n    };\n    console.log(gameState);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_3___default().game),\n        children: gameState.map(function(value, position) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: value,\n                onClick: function() {\n                    return handleClick(position);\n                }\n            }, \"game-option-position-\".concat(position), false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                lineNumber: 26,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this));\n}\n_s(Game, \"fob2tJuCWYGYOMIBHfu85fCGw7Y=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFTTtBQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FJeENHLElBQUksR0FBRyxDQUFDOzs7SUFFYixHQUFLLENBQTZCSCxHQUEwQixHQUExQkEsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRUMsSUFBSSxDQUFDLENBQUMsSUFBbkRDLFNBQVMsR0FBa0JOLEdBQTBCLEtBQTFDTyxZQUFZLEdBQUlQLEdBQTBCO0lBRTVELEdBQUssQ0FBcUNBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdDUSxhQUFhLEdBQXNCUixJQUFXLEtBQS9CUyxnQkFBZ0IsR0FBSVQsSUFBVztJQUVyRCxHQUFLLENBQUNVLFdBQVcsR0FBRyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1FBQy9CLEdBQUcsQ0FBQ0MsWUFBWSxzQkFBT04sU0FBUztRQUNoQ00sWUFBWSxDQUFDRCxRQUFRLElBQUlILGFBQWE7UUFDdENDLGdCQUFnQixHQUFJRCxhQUFhLElBQUksQ0FBQztJQUUxQyxDQUFDO0lBRURLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixTQUFTO0lBQ3JCLE1BQU0sNkVBQ0RTLENBQUc7UUFBQ0MsU0FBUyxFQUFFZiw4REFBVztrQkFFbkJLLFNBQVMsQ0FBQ1ksR0FBRyxDQUFFLFFBQVFQLENBQVBRLEtBQUssRUFBRVIsUUFBUTswQkFDM0IsTUFBTSwrREFBTFQsOERBQVU7Z0JBRVBrQixNQUFNLEVBQUVELEtBQUs7Z0JBQ2JFLE9BQU8sRUFBRSxRQUFRO29CQUFGWCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsUUFBUTs7ZUFGM0IsQ0FBcUIsdUJBQVcsT0FBVEEsUUFBUTs7Ozs7Ozs7Ozs7QUFVL0QsQ0FBQztHQTdCUVIsSUFBSTtLQUFKQSxJQUFJO0FBK0JiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZS5qc3g/ZGU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2FtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBHYW1lT3B0aW9uIGZyb20gXCIuLi9nYW1lT3B0aW9uL2dhbWVPcHRpb25cIlxuXG5cblxuZnVuY3Rpb24gR2FtZSgpIHtcblxuICAgIGNvbnN0IFtnYW1lU3RhdGUsIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKDApKVxuXG4gICAgY29uc3QgW2N1cnJlbnRQbGF5ZXIsIHNldEN1cnJlbnRQbGF5ZXJdID0gdXNlU3RhdGUoMSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGxldCBuZXdHYW1lU3RhdGUgPSBbLi4uZ2FtZVN0YXRlXVxuICAgICAgICBuZXdHYW1lU3RhdGVbcG9zaXRpb25dID0gY3VycmVudFBsYXllclxuICAgICAgICBzZXRDdXJyZW50UGxheWVyID0gKGN1cnJlbnRQbGF5ZXIgKiAtMSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZ2FtZVN0YXRlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlLm1hcCggKHZhbHVlLCBwb3NpdGlvbikgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lT3B0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2BnYW1lLW9wdGlvbi1wb3NpdGlvbi0ke3Bvc2l0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socG9zaXRpb24pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJHYW1lT3B0aW9uIiwiR2FtZSIsIkFycmF5IiwiZmlsbCIsImdhbWVTdGF0ZSIsInNldEdhbWVTdGF0ZSIsImN1cnJlbnRQbGF5ZXIiLCJzZXRDdXJyZW50UGxheWVyIiwiaGFuZGxlQ2xpY2siLCJwb3NpdGlvbiIsIm5ld0dhbWVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lIiwibWFwIiwidmFsdWUiLCJzdGF0dXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/game.jsx\n");

/***/ })

});