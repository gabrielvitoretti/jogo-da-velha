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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.module.css */ \"./src/components/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameOption/gameOption */ \"./src/components/gameOption/gameOption.jsx\");\n/* harmony import */ var _gameInfo_gameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameInfo/gameInfo */ \"./src/components/gameInfo/gameInfo.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar winnerTable = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Game() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(0)), gameState = ref[0], setGameState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPlayer = ref1[0], setCurrentPlayer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), winner = ref2[0], setWinner = ref2[1];\n    var Warning = function() {\n        alert(\"Teste\");\n    };\n    var handleClick = function(position) {\n        if (gameState[position] === 0 && winner === 0) {\n            var newGameState = _toConsumableArray(gameState);\n            newGameState[position] = currentPlayer;\n            setGameState(newGameState);\n        }\n    };\n    var verifyGame = function() {\n        winnerTable.forEach(function(line) {\n            var values = line.map(function(pos) {\n                return gameState[pos];\n            });\n            var sum = values.reduce(function(acumulado, total) {\n                return acumulado + total;\n            });\n            if (sum == 3 || sum == -1) setWinner(sum / 3);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentPlayer(currentPlayer * -1);\n        verifyGame();\n    }, [\n        gameState\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().gameContent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().game),\n                children: gameState.map(function(value, position) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        status: value,\n                        onClick: function() {\n                            return handleClick(position);\n                        }\n                    }, \"game-option-position-\".concat(position), false, {\n                        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameInfo_gameInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentPlayer: currentPlayer\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this));\n}\n_s(Game, \"5FMk1k1Y2ePIXEUenqqpyHYMypQ=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDVztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0MsR0FBSyxDQUFDSyxXQUFXLEdBQUcsQ0FBQztJQUNqQixDQUFDO0FBQUEsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUEsQ0FBQztJQUNULENBQUM7QUFBQSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQSxDQUFDO0lBQ1QsQ0FBQztBQUFBLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFBLENBQUM7SUFDVCxDQUFDO0FBQUEsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUEsQ0FBQztJQUNULENBQUM7QUFBQSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQSxDQUFDO0lBQ1QsQ0FBQztBQUFBLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFBLENBQUM7SUFDVCxDQUFDO0FBQUEsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUEsQ0FBQztJQUNULENBQUM7QUFBQSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQSxDQUFDO0FBQ2IsQ0FBQztTQUVRQyxJQUFJLEdBQUcsQ0FBQzs7O0lBRWIsR0FBSyxDQUE2Qk4sR0FBMEIsR0FBMUJBLCtDQUFRLENBQUNPLEtBQUssQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxDQUFDLElBQW5EQyxTQUFTLEdBQWtCVCxHQUEwQixLQUExQ1UsWUFBWSxHQUFJVixHQUEwQjtJQUU1RCxHQUFLLENBQXFDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Q1csYUFBYSxHQUFzQlgsSUFBVyxLQUEvQlksZ0JBQWdCLEdBQUlaLElBQVc7SUFFckQsR0FBYSxDQUFjQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEvQmEsTUFBTSxHQUFlYixJQUFXLEtBQXhCYyxTQUFTLEdBQUlkLElBQVc7SUFFdEMsR0FBSyxDQUFDZSxPQUFPLEdBQUcsUUFDbkIsR0FEd0IsQ0FBQztRQUNsQkMsS0FBSyxDQUFDLENBQU87SUFDakIsQ0FBQztJQUNELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7UUFDL0IsRUFBRSxFQUFFVCxTQUFTLENBQUNTLFFBQVEsTUFBTSxDQUFDLElBQUlMLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUNNLFlBQVksc0JBQU9WLFNBQVM7WUFDaENVLFlBQVksQ0FBQ0QsUUFBUSxJQUFJUCxhQUFhO1lBQ3RDRCxZQUFZLENBQUNTLFlBQVk7UUFDNUIsQ0FBQztJQUNOLENBQUM7SUFFRCxHQUFLLENBQUNDLFVBQVUsR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQ3RCZixXQUFXLENBQUNnQixPQUFPLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUksQ0FBQztZQUMxQixHQUFLLENBQUNDLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHO2dCQUFLaEIsTUFBTSxDQUFOQSxTQUFTLENBQUNnQixHQUFHOztZQUM5QyxHQUFLLENBQUNDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFQQyxTQUFTLEVBQUVDLEtBQUs7Z0JBQUtELE1BQU0sQ0FBTkEsU0FBUyxHQUFHQyxLQUFLOztZQUNqRSxFQUFFLEVBQUVILEdBQUcsSUFBSSxDQUFDLElBQUlBLEdBQUcsS0FBSyxDQUFDLEVBQUVaLFNBQVMsQ0FBQ1ksR0FBRyxHQUFHLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFFRHpCLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JXLGdCQUFnQixDQUFDRCxhQUFhLElBQUksQ0FBQztRQUNuQ1MsVUFBVTtJQUNkLENBQUMsRUFBRSxDQUFDWDtRQUFBQSxTQUFTO0lBQUEsQ0FBQztJQUNkLE1BQU0sNkVBQ0RxQixDQUFHO1FBQUNDLFNBQVMsRUFBRTdCLHFFQUFrQjs7d0ZBQzdCNEIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFN0IsOERBQVc7MEJBRW5CTyxTQUFTLENBQUNlLEdBQUcsQ0FBRSxRQUFRTixDQUFQZ0IsS0FBSyxFQUFFaEIsUUFBUTtrQ0FDM0IsTUFBTSwrREFBTGYsOERBQVU7d0JBRVBnQyxNQUFNLEVBQUVELEtBQUs7d0JBQ2JFLE9BQU8sRUFBRSxRQUFROzRCQUFGbkIsTUFBTSxDQUFOQSxXQUFXLENBQUNDLFFBQVE7O3VCQUYzQixDQUFxQix1QkFBVyxPQUFUQSxRQUFROzs7Ozs7Ozs7Ozt3RkFPdERkLDBEQUFRO2dCQUNMTyxhQUFhLEVBQUVBLGFBQWE7Ozs7Ozs7Ozs7OztBQUk1QyxDQUFDO0dBakRRTCxJQUFJO0tBQUpBLElBQUk7QUFtRGIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmpzeD9kZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9nYW1lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEdhbWVPcHRpb24gZnJvbSBcIi4uL2dhbWVPcHRpb24vZ2FtZU9wdGlvblwiXG5pbXBvcnQgR2FtZUluZm8gZnJvbSBcIi4uL2dhbWVJbmZvL2dhbWVJbmZvXCJcblxuXG5cblxuY29uc3Qgd2lubmVyVGFibGUgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzAsIDMsIDZdLFxuICAgIFsxLCA0ICw3XSxcbiAgICBbMiwgNSwgOF0sXG4gICAgWzAsIDQsIDhdLFxuICAgIFsyLCA0LCA2XVxuXVxuXG5mdW5jdGlvbiBHYW1lKCkge1xuXG4gICAgY29uc3QgW2dhbWVTdGF0ZSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKEFycmF5KDkpLmZpbGwoMCkpXG5cbiAgICBjb25zdCBbY3VycmVudFBsYXllciwgc2V0Q3VycmVudFBsYXllcl0gPSB1c2VTdGF0ZSgxKVxuXG4gICAgY29uc3Rbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoMClcblxuICAgIGNvbnN0IFdhcm5pbmcgPSAoKSA9PntcbiAgICAgICAgYWxlcnQoXCJUZXN0ZVwiKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBpZiAoZ2FtZVN0YXRlW3Bvc2l0aW9uXSA9PT0gMCAmJiB3aW5uZXIgPT09IDApe1xuICAgICAgICAgICAgbGV0IG5ld0dhbWVTdGF0ZSA9IFsuLi5nYW1lU3RhdGVdXG4gICAgICAgICAgICBuZXdHYW1lU3RhdGVbcG9zaXRpb25dID0gY3VycmVudFBsYXllclxuICAgICAgICAgICAgc2V0R2FtZVN0YXRlKG5ld0dhbWVTdGF0ZSlcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZnlHYW1lID0gKCkgPT4ge1xuICAgICAgICB3aW5uZXJUYWJsZS5mb3JFYWNoKChsaW5lKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGxpbmUubWFwKChwb3MpID0+IGdhbWVTdGF0ZVtwb3NdKVxuICAgICAgICAgICAgY29uc3Qgc3VtID0gdmFsdWVzLnJlZHVjZSgoYWN1bXVsYWRvLCB0b3RhbCkgPT4gYWN1bXVsYWRvICsgdG90YWwpXG4gICAgICAgICAgICBpZiAoc3VtID09IDMgfHwgc3VtID09IC0xKSBzZXRXaW5uZXIoc3VtIC8gMylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGxheWVyKGN1cnJlbnRQbGF5ZXIgKiAtMSlcbiAgICAgICAgdmVyaWZ5R2FtZSgpXG4gICAgfSwgW2dhbWVTdGF0ZV0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lQ29udGVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXRlLm1hcCggKHZhbHVlLCBwb3NpdGlvbikgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2FtZU9wdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7YGdhbWUtb3B0aW9uLXBvc2l0aW9uLSR7cG9zaXRpb259YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHBvc2l0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8R2FtZUluZm8gXG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXllcj17Y3VycmVudFBsYXllcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkdhbWVPcHRpb24iLCJHYW1lSW5mbyIsIndpbm5lclRhYmxlIiwiR2FtZSIsIkFycmF5IiwiZmlsbCIsImdhbWVTdGF0ZSIsInNldEdhbWVTdGF0ZSIsImN1cnJlbnRQbGF5ZXIiLCJzZXRDdXJyZW50UGxheWVyIiwid2lubmVyIiwic2V0V2lubmVyIiwiV2FybmluZyIsImFsZXJ0IiwiaGFuZGxlQ2xpY2siLCJwb3NpdGlvbiIsIm5ld0dhbWVTdGF0ZSIsInZlcmlmeUdhbWUiLCJmb3JFYWNoIiwibGluZSIsInZhbHVlcyIsIm1hcCIsInBvcyIsInN1bSIsInJlZHVjZSIsImFjdW11bGFkbyIsInRvdGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2FtZUNvbnRlbnQiLCJnYW1lIiwidmFsdWUiLCJzdGF0dXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/game.jsx\n");

/***/ })

});