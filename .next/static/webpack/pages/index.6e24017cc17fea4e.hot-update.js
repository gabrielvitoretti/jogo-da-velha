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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.module.css */ \"./src/components/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameOption/gameOption */ \"./src/components/gameOption/gameOption.jsx\");\n/* harmony import */ var _gameInfo_gameInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameInfo/gameInfo */ \"./src/components/gameInfo/gameInfo.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar winnerTable = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Game() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(0)), gameState = ref[0], setGameState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPlayer = ref1[0], setCurrentPlayer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), winner = ref2[0], setWinner = ref2[1];\n    var handleClick = function(position) {\n        if (gameState[position] === 0 && winner === 0) {\n            var newGameState = _toConsumableArray(gameState);\n            newGameState[position] = currentPlayer;\n            setGameState(newGameState);\n        }\n    };\n    var verifyGame = function() {\n        winnerTable.forEach(function(line) {\n            var values = line.map(function(pos) {\n                return gameState[pos];\n            });\n            var sum = values.reduce(function(acumulado, total) {\n                return acumulado + total;\n            });\n            if (sum == 3 || sum == -1) setWinner(sum / 3);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentPlayer(currentPlayer * -1);\n        verifyGame();\n    }, [\n        gameState\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().gameContent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().game),\n                children: gameState.map(function(value, position) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameOption_gameOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        status: value,\n                        onClick: function() {\n                            return handleClick(position);\n                        }\n                    }, \"game-option-position-\".concat(position), false, {\n                        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameInfo_gameInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentPlayer: currentPlayer\n            }, void 0, false, {\n                fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielvitoretti/Estudos SejaDev/DEVGROWTH/Jogo da Velha/jogo-da-velha/src/components/game/game.jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n_s(Game, \"5FMk1k1Y2ePIXEUenqqpyHYMypQ=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVBnQixLQUFLLEVBQUVoQixRQUFRO2tDQUMzQixNQUFNLCtEQUFMYiw4REFBVTt3QkFFUDhCLE1BQU0sRUFBRUQsS0FBSzt3QkFDYkUsT0FBTyxFQUFFLFFBQVE7NEJBQUZuQixNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsUUFBUTs7dUJBRjNCLENBQXFCLHVCQUFXLE9BQVRBLFFBQVE7Ozs7Ozs7Ozs7O3dGQU90RFosMERBQVE7Z0JBQ0xPLGFBQWEsRUFBRUEsYUFBYTs7Ozs7Ozs7Ozs7O0FBSTVDLENBQUM7R0E5Q1FMLElBQUk7S0FBSkEsSUFBSTtBQWdEYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuanN4P2RlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgR2FtZU9wdGlvbiBmcm9tIFwiLi4vZ2FtZU9wdGlvbi9nYW1lT3B0aW9uXCJcbmltcG9ydCBHYW1lSW5mbyBmcm9tIFwiLi4vZ2FtZUluZm8vZ2FtZUluZm9cIlxuXG5cblxuXG5jb25zdCB3aW5uZXJUYWJsZSA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQgLDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdXG5dXG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG5cbiAgICBjb25zdCBbZ2FtZVN0YXRlLCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbCgwKSlcblxuICAgIGNvbnN0IFtjdXJyZW50UGxheWVyLCBzZXRDdXJyZW50UGxheWVyXSA9IHVzZVN0YXRlKDEpXG5cbiAgICBjb25zdFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKGdhbWVTdGF0ZVtwb3NpdGlvbl0gPT09IDAgJiYgd2lubmVyID09PSAwKXtcbiAgICAgICAgICAgIGxldCBuZXdHYW1lU3RhdGUgPSBbLi4uZ2FtZVN0YXRlXVxuICAgICAgICAgICAgbmV3R2FtZVN0YXRlW3Bvc2l0aW9uXSA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgICAgICAgIHNldEdhbWVTdGF0ZShuZXdHYW1lU3RhdGUpXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5R2FtZSA9ICgpID0+IHtcbiAgICAgICAgd2lubmVyVGFibGUuZm9yRWFjaCgobGluZSkgPT57XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBsaW5lLm1hcCgocG9zKSA9PiBnYW1lU3RhdGVbcG9zXSlcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHZhbHVlcy5yZWR1Y2UoKGFjdW11bGFkbywgdG90YWwpID0+IGFjdW11bGFkbyArIHRvdGFsKVxuICAgICAgICAgICAgaWYgKHN1bSA9PSAzIHx8IHN1bSA9PSAtMSkgc2V0V2lubmVyKHN1bSAvIDMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBsYXllcihjdXJyZW50UGxheWVyICogLTEpXG4gICAgICAgIHZlcmlmeUdhbWUoKVxuICAgIH0sIFtnYW1lU3RhdGVdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZUNvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0ZS5tYXAoICh2YWx1ZSwgcG9zaXRpb24pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVPcHRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2BnYW1lLW9wdGlvbi1wb3NpdGlvbi0ke3Bvc2l0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwb3NpdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdhbWVJbmZvIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXI9e2N1cnJlbnRQbGF5ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJHYW1lT3B0aW9uIiwiR2FtZUluZm8iLCJ3aW5uZXJUYWJsZSIsIkdhbWUiLCJBcnJheSIsImZpbGwiLCJnYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJjdXJyZW50UGxheWVyIiwic2V0Q3VycmVudFBsYXllciIsIndpbm5lciIsInNldFdpbm5lciIsImhhbmRsZUNsaWNrIiwicG9zaXRpb24iLCJuZXdHYW1lU3RhdGUiLCJ2ZXJpZnlHYW1lIiwiZm9yRWFjaCIsImxpbmUiLCJ2YWx1ZXMiLCJtYXAiLCJwb3MiLCJzdW0iLCJyZWR1Y2UiLCJhY3VtdWxhZG8iLCJ0b3RhbCIsImRpdiIsImNsYXNzTmFtZSIsImdhbWVDb250ZW50IiwiZ2FtZSIsInZhbHVlIiwic3RhdHVzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/game.jsx\n");

/***/ })

});