"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _store_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/slice */ \"./src/store/slice/index.ts\");\n\n\n\nconst baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({\n    baseUrl: \"http://localhost:3000/\",\n    prepareHeaders: (headers, param)=>{\n        let { getState  } = param;\n        const token = getState().auth.token;\n        token && headers.set(\"authorization\", \"Bearer \".concat(token));\n        //  headers.set(\"Content-Type\", \"application/json\");\n        headers.set(\"Accept\", \"application/json\");\n        return headers;\n    }\n});\nconst baseQueryWithInterceptor = async (args, api, extraOptions)=>{\n    var _result_error;\n    const authState = api.getState();\n    let result = await baseQuery(args, api, extraOptions);\n    if ((result === null || result === void 0 ? void 0 : (_result_error = result.error) === null || _result_error === void 0 ? void 0 : _result_error.status) === 401) {\n        api.dispatch((0,_store_slice__WEBPACK_IMPORTED_MODULE_1__.setCredentials)({\n            token: null,\n            user: null\n        }));\n    }\n    return result;\n};\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({\n    baseQuery: baseQueryWithInterceptor,\n    extractRehydrationInfo (action, param) {\n        let { reducerPath  } = param;\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    endpoints: (build)=>({\n        })\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9zQztBQUNPO0FBQ0U7QUFFL0MsTUFBTUksWUFBWUgsNEVBQWNBLENBQUM7SUFDL0JJLFNBQVM7SUFDVEMsZ0JBQWdCLENBQUNDLGlCQUEwQjtZQUFqQixFQUFFQyxTQUFRLEVBQUU7UUFDcEMsTUFBTUMsUUFBUSxXQUEwQkMsSUFBSSxDQUFDRCxLQUFLO1FBQ2xEQSxTQUFTRixRQUFRSSxHQUFHLENBQUMsaUJBQWlCLFVBQWdCLE9BQU5GO1FBQ2hELG9EQUFvRDtRQUNwREYsUUFBUUksR0FBRyxDQUFDLFVBQVU7UUFDdEIsT0FBT0o7SUFDVDtBQUNGO0FBRUEsTUFBTUssMkJBQWlGLE9BQ3JGQyxNQUNBQyxLQUNBQyxlQUNHO1FBS0NDO0lBSkosTUFBTUMsWUFBaUJILElBQUlOLFFBQVE7SUFFbkMsSUFBSVEsU0FBUyxNQUFNWixVQUFVUyxNQUFNQyxLQUFLQztJQUV4QyxJQUFJQyxDQUFBQSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxPQUFRRSxLQUFLLGNBQWJGLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRyxNQUFGLE1BQWEsS0FBSztRQUNqQ0wsSUFBSU0sUUFBUSxDQUFDakIsNERBQWNBLENBQUM7WUFBRU0sT0FBTyxJQUFJO1lBQUVZLE1BQU0sSUFBSTtRQUFDO0lBQ3hELENBQUM7SUFFRCxPQUFPTDtBQUNUO0FBRU8sTUFBTUYsTUFBTWQsdUVBQVNBLENBQUM7SUFDM0JJLFdBQVdRO0lBQ1hVLHdCQUF1QkMsTUFBTSxFQUFFLEtBQWUsRUFBRTtZQUFqQixFQUFFQyxZQUFXLEVBQUUsR0FBZjtRQUM3QixJQUFJRCxPQUFPRSxJQUFJLEtBQUt2Qix1REFBT0EsRUFBRTtZQUMzQixPQUFPcUIsT0FBT0csT0FBTyxDQUFDRixZQUFZO1FBQ3BDLENBQUM7SUFDSDtJQUNBRyxXQUFXLENBQUNDLFFBQVc7UUFFdkI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cz9jY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL3N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQmFzZVF1ZXJ5Rm4sXHJcbiAgY3JlYXRlQXBpLFxyXG4gIEZldGNoQXJncyxcclxuICBmZXRjaEJhc2VRdWVyeSxcclxuICBGZXRjaEJhc2VRdWVyeUVycm9yLFxyXG59IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IHNldENyZWRlbnRpYWxzIH0gZnJvbSBcIkAvc3RvcmUvc2xpY2VcIjtcclxuXHJcbmNvbnN0IGJhc2VRdWVyeSA9IGZldGNoQmFzZVF1ZXJ5KHtcclxuICBiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcclxuICBwcmVwYXJlSGVhZGVyczogKGhlYWRlcnMsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSAoZ2V0U3RhdGUoKSBhcyBSb290U3RhdGUpLmF1dGgudG9rZW47XHJcbiAgICB0b2tlbiAmJiBoZWFkZXJzLnNldChcImF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke3Rva2VufWApO1xyXG4gICAgLy8gIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgYmFzZVF1ZXJ5V2l0aEludGVyY2VwdG9yOiBCYXNlUXVlcnlGbjxGZXRjaEFyZ3MsIHVua25vd24sIEZldGNoQmFzZVF1ZXJ5RXJyb3I+ID0gYXN5bmMgKFxyXG4gIGFyZ3MsXHJcbiAgYXBpLFxyXG4gIGV4dHJhT3B0aW9uc1xyXG4pID0+IHtcclxuICBjb25zdCBhdXRoU3RhdGU6IGFueSA9IGFwaS5nZXRTdGF0ZSgpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0gYXdhaXQgYmFzZVF1ZXJ5KGFyZ3MsIGFwaSwgZXh0cmFPcHRpb25zKTtcclxuXHJcbiAgaWYgKHJlc3VsdD8uZXJyb3I/LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICBhcGkuZGlzcGF0Y2goc2V0Q3JlZGVudGlhbHMoeyB0b2tlbjogbnVsbCwgdXNlcjogbnVsbCB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgYmFzZVF1ZXJ5OiBiYXNlUXVlcnlXaXRoSW50ZXJjZXB0b3IsXHJcbiAgZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyhhY3Rpb24sIHsgcmVkdWNlclBhdGggfSkge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFtyZWR1Y2VyUGF0aF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIC8vIG9taXR0ZWRcclxuICB9KSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIkhZRFJBVEUiLCJzZXRDcmVkZW50aWFscyIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJwcmVwYXJlSGVhZGVycyIsImhlYWRlcnMiLCJnZXRTdGF0ZSIsInRva2VuIiwiYXV0aCIsInNldCIsImJhc2VRdWVyeVdpdGhJbnRlcmNlcHRvciIsImFyZ3MiLCJhcGkiLCJleHRyYU9wdGlvbnMiLCJyZXN1bHQiLCJhdXRoU3RhdGUiLCJlcnJvciIsInN0YXR1cyIsImRpc3BhdGNoIiwidXNlciIsImV4dHJhY3RSZWh5ZHJhdGlvbkluZm8iLCJhY3Rpb24iLCJyZWR1Y2VyUGF0aCIsInR5cGUiLCJwYXlsb2FkIiwiZW5kcG9pbnRzIiwiYnVpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/index.ts\n"));

/***/ })

});