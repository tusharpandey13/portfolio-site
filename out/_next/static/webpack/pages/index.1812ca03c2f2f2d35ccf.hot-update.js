/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Column.js":
/*!************************************!*\
  !*** ./pages/components/Column.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_tushar_src_repo_portfolio_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/tushar/src/repo/portfolio-site/pages/components/Column.js\",\n    _this = undefined;\n\nvar Column = function Column(props) {\n  var _props$colWidth, _props$width;\n\n  var colWidth = (_props$colWidth = props.colWidth) !== null && _props$colWidth !== void 0 ? _props$colWidth : 355;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col flex-nowrap tracking-[1px] font-basefont\\n                  transform-gpu transition-all opacity-0 \".concat(props.colId),\n    style: {\n      width: \"\".concat((_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 355, \"px\")\n    },\n    children: [props.imgId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"overflow-hidden\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"picture\", {\n        children: [props.avif && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"source\", {\n          srcSet: \"/img/\".concat(props.imgId, \".avif\"),\n          type: \"image/avif\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 28\n        }, _this), props.webp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"source\", {\n          srcSet: \"/img/\".concat(props.imgId, \".webp\"),\n          type: \"image/webp\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 28\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n          className: \"transition-all duration-500 ease-customtf transform bg-center bg-cover \\n                          scale-105 hover:scale-100\",\n          width: colWidth,\n          height: 9 / 16 * colWidth,\n          decoding: \"async\",\n          loading: \"lazy\",\n          src: \"/img/\".concat(props.imgId, \".jpg\"),\n          alt: \"Me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, _this), props.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex content-center items-center justify-between py-contentgapby2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"uppercase text-[14px] font-medium text-[#333] mt-[5px]\",\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: \"text-gray\",\n        children: [' ', ' '].concat((0,_home_tushar_src_repo_portfolio_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(42 - props.title.length))).map(function (e, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            children: \"-\"\n          }, \"dash\".concat(i), false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this), props.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      className: \"text-[12px] font-normal leading-[180%] select-text text-[rgba(0,0,0,0.85)] font-contentfont py-contentgapby2\",\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex flex-col select-text pt-contentgapby2 mb-[-7.5px]\",\n      children: props.elements\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\n\nvar _c;\n\n$RefreshReg$(_c, \"Column\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Db2x1bW4uanM/NTU0MCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJwcm9wcyIsImNvbFdpZHRoIiwiY29sSWQiLCJ3aWR0aCIsImltZ0lkIiwiYXZpZiIsIndlYnAiLCJ0aXRsZSIsIkFycmF5IiwibGVuZ3RoIiwibWFwIiwiZSIsImkiLCJkZXNjcmlwdGlvbiIsImVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN0QixNQUFNQyxRQUFRLHNCQUFHRCxLQUFLLENBQUNDLFFBQVQsNkRBQXFCLEdBQW5DO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLDZIQUM0Q0QsS0FBSyxDQUFDRSxLQURsRCxDQURYO0FBR0UsU0FBSyxFQUFFO0FBQUVDLFdBQUssNEJBQUtILEtBQUssQ0FBQ0csS0FBWCx1REFBb0IsR0FBcEI7QUFBUCxLQUhUO0FBQUEsZUFLR0gsS0FBSyxDQUFDSSxLQUFOLGlCQUNDO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFBQSxtQkFDR0osS0FBSyxDQUFDSyxJQUFOLGlCQUFjO0FBQVEsZ0JBQU0saUJBQVVMLEtBQUssQ0FBQ0ksS0FBaEIsVUFBZDtBQUE0QyxjQUFJLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEakIsRUFFR0osS0FBSyxDQUFDTSxJQUFOLGlCQUFjO0FBQVEsZ0JBQU0saUJBQVVOLEtBQUssQ0FBQ0ksS0FBaEIsVUFBZDtBQUE0QyxjQUFJLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGakIsZUFHRTtBQUNFLG1CQUFTLGdJQURYO0FBR0UsZUFBSyxFQUFFSCxRQUhUO0FBSUUsZ0JBQU0sRUFBRyxJQUFJLEVBQUwsR0FBV0EsUUFKckI7QUFLRSxrQkFBUSxFQUFDLE9BTFg7QUFNRSxpQkFBTyxFQUFDLE1BTlY7QUFPRSxhQUFHLGlCQUFVRCxLQUFLLENBQUNJLEtBQWhCLFNBUEw7QUFRRSxhQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixFQXVCR0osS0FBSyxDQUFDTyxLQUFOLGlCQUNDO0FBQUssZUFBUyxFQUFDLG1FQUFmO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFDLHdEQUFoQjtBQUFBLGtCQUEwRVAsS0FBSyxDQUFDTztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxrQkFDRyxDQUFDLEdBQUQsRUFBTSxHQUFOLGdKQUFjQyxLQUFLLENBQUMsS0FBS1IsS0FBSyxDQUFDTyxLQUFOLENBQVlFLE1BQWxCLENBQW5CLEdBQThDQyxHQUE5QyxDQUFrRCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDakQ7QUFBQTtBQUFBLDJCQUFrQkEsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUQ7QUFBQSxTQUFsRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkosRUFpQ0daLEtBQUssQ0FBQ2EsV0FBTixpQkFDQztBQUNFLGVBQVMsZ0hBRFg7QUFBQSxnQkFHR2IsS0FBSyxDQUFDYTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ0osZUF3Q0U7QUFBSyxlQUFTLEVBQUMsd0RBQWY7QUFBQSxnQkFBeUViLEtBQUssQ0FBQ2M7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQTlDRDs7S0FBTWYsTTtBQStDTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvQ29sdW1uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29sdW1uID0gcHJvcHMgPT4ge1xuICBjb25zdCBjb2xXaWR0aCA9IHByb3BzLmNvbFdpZHRoID8/IDM1NTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGZsZXgtbm93cmFwIHRyYWNraW5nLVsxcHhdIGZvbnQtYmFzZWZvbnRcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1ncHUgdHJhbnNpdGlvbi1hbGwgb3BhY2l0eS0wICR7cHJvcHMuY29sSWR9YH1cbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9wcy53aWR0aCA/PyAzNTV9cHhgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmltZ0lkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICB7cHJvcHMuYXZpZiAmJiA8c291cmNlIHNyY1NldD17YC9pbWcvJHtwcm9wcy5pbWdJZH0uYXZpZmB9IHR5cGU9J2ltYWdlL2F2aWYnIC8+fVxuICAgICAgICAgICAge3Byb3BzLndlYnAgJiYgPHNvdXJjZSBzcmNTZXQ9e2AvaW1nLyR7cHJvcHMuaW1nSWR9LndlYnBgfSB0eXBlPSdpbWFnZS93ZWJwJyAvPn1cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtY3VzdG9tdGYgdHJhbnNmb3JtIGJnLWNlbnRlciBiZy1jb3ZlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUtMTA1IGhvdmVyOnNjYWxlLTEwMGB9XG4gICAgICAgICAgICAgIHdpZHRoPXtjb2xXaWR0aH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsoOSAvIDE2KSAqIGNvbFdpZHRofVxuICAgICAgICAgICAgICBkZWNvZGluZz0nYXN5bmMnXG4gICAgICAgICAgICAgIGxvYWRpbmc9J2xhenknXG4gICAgICAgICAgICAgIHNyYz17YC9pbWcvJHtwcm9wcy5pbWdJZH0uanBnYH1cbiAgICAgICAgICAgICAgYWx0PSdNZSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7cHJvcHMudGl0bGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LWNvbnRlbnRnYXBieTInPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndXBwZXJjYXNlIHRleHQtWzE0cHhdIGZvbnQtbWVkaXVtIHRleHQtWyMzMzNdIG10LVs1cHhdJz57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5Jz5cbiAgICAgICAgICAgIHtbJyAnLCAnICcsIC4uLkFycmF5KDQyIC0gcHJvcHMudGl0bGUubGVuZ3RoKV0ubWFwKChlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17YGRhc2gke2l9YH0+LTwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Byb3BzLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsxMnB4XSBmb250LW5vcm1hbCBsZWFkaW5nLVsxODAlXSBzZWxlY3QtdGV4dCB0ZXh0LVtyZ2JhKDAsMCwwLDAuODUpXSBmb250LWNvbnRlbnRmb250IHB5LWNvbnRlbnRnYXBieTJgfVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc2VsZWN0LXRleHQgcHQtY29udGVudGdhcGJ5MiBtYi1bLTcuNXB4XSc+e3Byb3BzLmVsZW1lbnRzfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Column.js\n");

/***/ })

});