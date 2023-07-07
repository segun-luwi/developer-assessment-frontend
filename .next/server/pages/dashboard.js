/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./node_modules/next/font/google/target.css?{\"path\":\"src\\\\components\\\\layout.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"montserrat\"}":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/font/google/target.css?{"path":"src\\components\\layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"],"weight":["400","300","400","500","600","700","800","900"]}],"variableName":"montserrat"} ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Montserrat_8753a2', '__Montserrat_Fallback_8753a2'\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_8753a2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9mb250L2dvb2dsZS90YXJnZXQuY3NzP3tcInBhdGhcIjpcInNyY1xcXFxjb21wb25lbnRzXFxcXGxheW91dC50c3hcIixcImltcG9ydFwiOlwiTW9udHNlcnJhdFwiLFwiYXJndW1lbnRzXCI6W3tcInN1YnNldHNcIjpbXCJsYXRpblwiXSxcIndlaWdodFwiOltcIjQwMFwiLFwiMzAwXCIsXCI0MDBcIixcIjUwMFwiLFwiNjAwXCIsXCI3MDBcIixcIjgwMFwiLFwiOTAwXCJdfV0sXCJ2YXJpYWJsZU5hbWVcIjpcIm1vbnRzZXJyYXRcIn0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFdBQVcsMEZBQTBGO0FBQ3JHO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtYXNzZXNzbWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/YzQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdHlsZVwiOiB7XCJmb250RmFtaWx5XCI6XCInX19Nb250c2VycmF0Xzg3NTNhMicsICdfX01vbnRzZXJyYXRfRmFsbGJhY2tfODc1M2EyJ1wiLFwiZm9udFN0eWxlXCI6XCJub3JtYWxcIn0sXG5cdFwiY2xhc3NOYW1lXCI6IFwiX19jbGFzc05hbWVfODc1M2EyXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/font/google/target.css?{\"path\":\"src\\\\components\\\\layout.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"montserrat\"}\n");

/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainLayout\": () => (/* binding */ MainLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_300_400_500_600_700_800_900_variableName_montserrat___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\components\\\\layout.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"montserrat\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\components\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_300_400_500_600_700_800_900_variableName_montserrat___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_300_400_500_600_700_800_900_variableName_montserrat___WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst MainLayout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (next_font_google_target_css_path_src_components_layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_300_400_500_600_700_800_900_variableName_montserrat___WEBPACK_IMPORTED_MODULE_1___default().className),\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\components\\\\layout.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdNQTtBQUNBQztBQUtDLE1BQU1DLGFBQWEsQ0FBQyxFQUFFQyxTQUFRLEVBQWlELEdBQUs7SUFDekYscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVdKLHVOQUFvQjtzQkFBR0U7Ozs7Ozs7QUFHN0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1hc3Nlc3NtZW50Ly4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hM2EyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyLCBNb250c2VycmF0IH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcclxuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuY29uc3QgbW9udHNlcnJhdCA9IE1vbnRzZXJyYXQoe1xyXG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxyXG4gIHdlaWdodDogW1wiNDAwXCIsIFwiMzAwXCIsIFwiNDAwXCIsIFwiNTAwXCIsIFwiNjAwXCIsIFwiNzAwXCIsIFwiODAwXCIsIFwiOTAwXCJdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48eyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IH0+KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttb250c2VycmF0LmNsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImludGVyIiwibW9udHNlcnJhdCIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout.tsx\n");

/***/ }),

/***/ "./src/hooks/reduxHooks.ts":
/*!*********************************!*\
  !*** ./src/hooks/reduxHooks.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcmVkdXhIb29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZFO0FBRzdFLDJFQUEyRTtBQUNwRSxNQUFNRSxpQkFBaUIsSUFBTUYsd0RBQVdBLEdBQWdCO0FBQ3hELE1BQU1HLGlCQUFrREYsb0RBQVdBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtYXNzZXNzbWVudC8uL3NyYy9ob29rcy9yZWR1eEhvb2tzLnRzP2E2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuXHJcbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxyXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcbiJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/reduxHooks.ts\n");

/***/ }),

/***/ "./src/pages/dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/dashboard/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/reduxHooks */ \"./src/hooks/reduxHooks.ts\");\n\n\n\n\n\n\n\nconst Index = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const auth = (0,_hooks_reduxHooks__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)((state)=>state.auth);\n    const user = auth.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Dev - Dashboard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col w-full min-h-screen bg-[#271B43]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-3xl mx-auto w-full mt-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-center text-2xl text-white mb-4\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-md shadow-sm py-7 px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-2xl font-bold text-slate-700\",\n                                    children: [\n                                        \"name: \",\n                                        user?.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-2xl font-bold text-slate-700\",\n                                    children: [\n                                        \"email: \",\n                                        user?.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nIndex.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.MainLayout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\dev\\\\final\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 49\n    }, undefined);\nIndex.getInitialProps = _store__WEBPACK_IMPORTED_MODULE_3__.wrapper.getInitialPageProps(()=>()=>{});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRVc7QUFDTjtBQUNNO0FBQ1M7QUFFRztBQUdwRCxNQUFNTSxRQUE0QixJQUFNO0lBQ3RDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNSyxPQUFPSCxpRUFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNRCxJQUFJO0lBQ2pELE1BQU1FLE9BQU9GLEtBQUtFLElBQUk7SUFFdEIscUJBQ0U7OzBCQUNFLDhEQUFDVixrREFBSUE7MEJBQ0gsNEVBQUNXOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7Z0JBQUtDLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQXVDOzs7Ozs7c0NBRXJELDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFJRCxXQUFVOzt3Q0FBb0M7d0NBQU9ILE1BQU1NOzs7Ozs7OzhDQUNoRSw4REFBQ0Y7b0NBQUlELFdBQVU7O3dDQUFvQzt3Q0FBUUgsTUFBTU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdFO0FBRUFYLE1BQU1ZLFNBQVMsR0FBRyxDQUFDQyxxQkFBNkIsOERBQUNmLDBEQUFVQTtrQkFBRWU7Ozs7OztBQUU3RGIsTUFBTWMsZUFBZSxHQUFHbEIsK0RBQTJCLENBQUMsSUFBTSxJQUFNLENBQUM7QUFFakUsaUVBQWVJLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtYXNzZXNzbWVudC8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4P2Y1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3MvcmVkdXhIb29rc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvdHlwZXMvYXV0aE1vZGVsXCI7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2VXaXRoTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IHVzZXIgPSBhdXRoLnVzZXIgYXMgVXNlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5EZXYgLSBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1bIzI3MUI0M11cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHctZnVsbCBtdC0xMFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIHRleHQtd2hpdGUgbWItNFwiPkRhc2hib2FyZDwvaDM+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1zbSBweS03IHB4LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS03MDBcIj5uYW1lOiB7dXNlcj8ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS03MDBcIj5lbWFpbDoge3VzZXI/LmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRMYXlvdXQgPSAocGFnZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiA8TWFpbkxheW91dD57cGFnZX08L01haW5MYXlvdXQ+O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gd3JhcHBlci5nZXRJbml0aWFsUGFnZVByb3BzKCgpID0+ICgpID0+IHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0Iiwid3JhcHBlciIsInVzZVJvdXRlciIsIk1haW5MYXlvdXQiLCJ1c2VBcHBTZWxlY3RvciIsIkluZGV4Iiwicm91dGVyIiwiYXV0aCIsInN0YXRlIiwidXNlciIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwibmFtZSIsImVtYWlsIiwiZ2V0TGF5b3V0IiwicGFnZSIsImdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.tsx\n");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/slice */ \"./src/store/slice/index.ts\");\n\n\n\nconst baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n    baseUrl: \"http://localhost:3000/\",\n    prepareHeaders: (headers, { getState  })=>{\n        const token = getState().auth.token;\n        token && headers.set(\"authorization\", `Bearer ${token}`);\n        //  headers.set(\"Content-Type\", \"application/json\");\n        headers.set(\"Accept\", \"application/json\");\n        return headers;\n    }\n});\nconst baseQueryWithInterceptor = async (args, api, extraOptions)=>{\n    const authState = api.getState();\n    let result = await baseQuery(args, api, extraOptions);\n    if (result?.error?.status === 401) {\n        api.dispatch((0,_store_slice__WEBPACK_IMPORTED_MODULE_2__.setCredentials)({\n            token: null,\n            user: null\n        }));\n    }\n    return result;\n};\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: baseQueryWithInterceptor,\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    endpoints: (build)=>({\n        })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT3NDO0FBQ087QUFDRTtBQUUvQyxNQUFNSSxZQUFZSCw0RUFBY0EsQ0FBQztJQUMvQkksU0FBUztJQUNUQyxnQkFBZ0IsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFRLEVBQUUsR0FBSztRQUN6QyxNQUFNQyxRQUFRLFdBQTBCQyxJQUFJLENBQUNELEtBQUs7UUFDbERBLFNBQVNGLFFBQVFJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVGLE1BQU0sQ0FBQztRQUN2RCxvREFBb0Q7UUFDcERGLFFBQVFJLEdBQUcsQ0FBQyxVQUFVO1FBQ3RCLE9BQU9KO0lBQ1Q7QUFDRjtBQUVBLE1BQU1LLDJCQUFpRixPQUNyRkMsTUFDQUMsS0FDQUMsZUFDRztJQUNILE1BQU1DLFlBQWlCRixJQUFJTixRQUFRO0lBRW5DLElBQUlTLFNBQVMsTUFBTWIsVUFBVVMsTUFBTUMsS0FBS0M7SUFFeEMsSUFBSUUsUUFBUUMsT0FBT0MsV0FBVyxLQUFLO1FBQ2pDTCxJQUFJTSxRQUFRLENBQUNqQiw0REFBY0EsQ0FBQztZQUFFTSxPQUFPLElBQUk7WUFBRVksTUFBTSxJQUFJO1FBQUM7SUFDeEQsQ0FBQztJQUVELE9BQU9KO0FBQ1Q7QUFFTyxNQUFNSCxNQUFNZCx1RUFBU0EsQ0FBQztJQUMzQkksV0FBV1E7SUFDWFUsd0JBQXVCQyxNQUFNLEVBQUUsRUFBRUMsWUFBVyxFQUFFLEVBQUU7UUFDOUMsSUFBSUQsT0FBT0UsSUFBSSxLQUFLdkIsdURBQU9BLEVBQUU7WUFDM0IsT0FBT3FCLE9BQU9HLE9BQU8sQ0FBQ0YsWUFBWTtRQUNwQyxDQUFDO0lBQ0g7SUFDQUcsV0FBVyxDQUFDQyxRQUFXO1FBRXZCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1hc3Nlc3NtZW50Ly4vc3JjL3NlcnZpY2VzL2luZGV4LnRzP2NjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICBCYXNlUXVlcnlGbixcclxuICBjcmVhdGVBcGksXHJcbiAgRmV0Y2hBcmdzLFxyXG4gIGZldGNoQmFzZVF1ZXJ5LFxyXG4gIEZldGNoQmFzZVF1ZXJ5RXJyb3IsXHJcbn0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgc2V0Q3JlZGVudGlhbHMgfSBmcm9tIFwiQC9zdG9yZS9zbGljZVwiO1xyXG5cclxuY29uc3QgYmFzZVF1ZXJ5ID0gZmV0Y2hCYXNlUXVlcnkoe1xyXG4gIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxyXG4gIHByZXBhcmVIZWFkZXJzOiAoaGVhZGVycywgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IChnZXRTdGF0ZSgpIGFzIFJvb3RTdGF0ZSkuYXV0aC50b2tlbjtcclxuICAgIHRva2VuICYmIGhlYWRlcnMuc2V0KFwiYXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7dG9rZW59YCk7XHJcbiAgICAvLyAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5zZXQoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBiYXNlUXVlcnlXaXRoSW50ZXJjZXB0b3I6IEJhc2VRdWVyeUZuPEZldGNoQXJncywgdW5rbm93biwgRmV0Y2hCYXNlUXVlcnlFcnJvcj4gPSBhc3luYyAoXHJcbiAgYXJncyxcclxuICBhcGksXHJcbiAgZXh0cmFPcHRpb25zXHJcbikgPT4ge1xyXG4gIGNvbnN0IGF1dGhTdGF0ZTogYW55ID0gYXBpLmdldFN0YXRlKCk7XHJcblxyXG4gIGxldCByZXN1bHQgPSBhd2FpdCBiYXNlUXVlcnkoYXJncywgYXBpLCBleHRyYU9wdGlvbnMpO1xyXG5cclxuICBpZiAocmVzdWx0Py5lcnJvcj8uc3RhdHVzID09PSA0MDEpIHtcclxuICAgIGFwaS5kaXNwYXRjaChzZXRDcmVkZW50aWFscyh7IHRva2VuOiBudWxsLCB1c2VyOiBudWxsIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcclxuICBiYXNlUXVlcnk6IGJhc2VRdWVyeVdpdGhJbnRlcmNlcHRvcixcclxuICBleHRyYWN0UmVoeWRyYXRpb25JbmZvKGFjdGlvbiwgeyByZWR1Y2VyUGF0aCB9KSB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkW3JlZHVjZXJQYXRoXTtcclxuICAgIH1cclxuICB9LFxyXG4gIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgLy8gb21pdHRlZFxyXG4gIH0pLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiSFlEUkFURSIsInNldENyZWRlbnRpYWxzIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInByZXBhcmVIZWFkZXJzIiwiaGVhZGVycyIsImdldFN0YXRlIiwidG9rZW4iLCJhdXRoIiwic2V0IiwiYmFzZVF1ZXJ5V2l0aEludGVyY2VwdG9yIiwiYXJncyIsImFwaSIsImV4dHJhT3B0aW9ucyIsImF1dGhTdGF0ZSIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ1c2VyIiwiZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyIsImFjdGlvbiIsInJlZHVjZXJQYXRoIiwidHlwZSIsInBheWxvYWQiLCJlbmRwb2ludHMiLCJidWlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/index.ts\n");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ \"./src/services/index.ts\");\n/* harmony import */ var _slice_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice/authSlice */ \"./src/store/slice/authSlice.ts\");\n/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-cookie-wrapper */ \"next-redux-cookie-wrapper\");\n/* harmony import */ var next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _slice_authSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    [_services__WEBPACK_IMPORTED_MODULE_2__.api.reducerPath]: _services__WEBPACK_IMPORTED_MODULE_2__.api.reducer\n});\nconst makeStore = (0,next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_4__.wrapMakeStore)(()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: combinedReducer,\n        middleware: (gDM)=>gDM().concat(_services__WEBPACK_IMPORTED_MODULE_2__.api.middleware).prepend((0,next_redux_cookie_wrapper__WEBPACK_IMPORTED_MODULE_4__.nextReduxCookieMiddleware)({\n                subtrees: [\n                    {\n                        subtree: \"auth\"\n                    }\n                ]\n            }))\n    }));\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRTtBQUNoQjtBQUNsQjtBQUNXO0FBQ3lDO0FBRXJGLE1BQU1PLGtCQUFrQlAsaUVBQWVBLENBQUM7SUFDdENRLE1BQU1KLHdEQUFXQTtJQUNqQixDQUFDRCxzREFBZSxDQUFDLEVBQUVBLGtEQUFXO0FBQ2hDO0FBRU8sTUFBTVEsWUFBWUwsd0VBQWFBLENBQUMsSUFDckNMLGdFQUFjQSxDQUFDO1FBQ2JTLFNBQVNIO1FBQ1RLLFlBQVksQ0FBQ0MsTUFDWEEsTUFDR0MsTUFBTSxDQUFDWCxxREFBYyxFQUNyQlksT0FBTyxDQUNOVixvRkFBeUJBLENBQUM7Z0JBQ3hCVyxVQUFVO29CQUFDO3dCQUFFQyxTQUFTO29CQUFPO2lCQUFFO1lBQ2pDO0lBRVIsSUFDQTtBQU1LLE1BQU1DLFVBQVVoQixpRUFBYUEsQ0FBV1MsV0FBVztJQUFFUSxPQUFPLElBQUk7QUFBQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2LWFzc2Vzc21lbnQvLi9zcmMvc3RvcmUvaW5kZXgudHM/Y2VlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIkAvc2VydmljZXNcIjtcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gXCIuL3NsaWNlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyBuZXh0UmVkdXhDb29raWVNaWRkbGV3YXJlLCB3cmFwTWFrZVN0b3JlIH0gZnJvbSBcIm5leHQtcmVkdXgtY29va2llLXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXV0aDogYXV0aFJlZHVjZXIsXHJcbiAgW2FwaS5yZWR1Y2VyUGF0aF06IGFwaS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSB3cmFwTWFrZVN0b3JlKCgpID0+XHJcbiAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjogY29tYmluZWRSZWR1Y2VyLFxyXG4gICAgbWlkZGxld2FyZTogKGdETSkgPT5cclxuICAgICAgZ0RNKClcclxuICAgICAgICAuY29uY2F0KGFwaS5taWRkbGV3YXJlKVxyXG4gICAgICAgIC5wcmVwZW5kKFxyXG4gICAgICAgICAgbmV4dFJlZHV4Q29va2llTWlkZGxld2FyZSh7XHJcbiAgICAgICAgICAgIHN1YnRyZWVzOiBbeyBzdWJ0cmVlOiBcImF1dGhcIiB9XSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlW1wiZ2V0U3RhdGVcIl0+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlW1wiZGlzcGF0Y2hcIl07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImFwaSIsImF1dGhSZWR1Y2VyIiwibmV4dFJlZHV4Q29va2llTWlkZGxld2FyZSIsIndyYXBNYWtlU3RvcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJhdXRoIiwicmVkdWNlclBhdGgiLCJyZWR1Y2VyIiwibWFrZVN0b3JlIiwibWlkZGxld2FyZSIsImdETSIsImNvbmNhdCIsInByZXBlbmQiLCJzdWJ0cmVlcyIsInN1YnRyZWUiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ }),

/***/ "./src/store/slice/authSlice.ts":
/*!**************************************!*\
  !*** ./src/store/slice/authSlice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectCurrentUser\": () => (/* binding */ selectCurrentUser),\n/* harmony export */   \"setCredentials\": () => (/* binding */ setCredentials)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState: {\n        token: null,\n        user: null\n    },\n    reducers: {\n        setCredentials: (state, action)=>{\n            state.token = action.payload.token;\n            state.user = action.payload.user;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE, (state, action)=>({\n                ...state,\n                // @ts-ignore\n                ...action.payload.auth\n            }));\n    }\n});\nconst { setCredentials  } = slice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);\nconst selectCurrentUser = (state)=>state.auth.user;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2UvYXV0aFNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEQ7QUFDakI7QUFTN0MsTUFBTUUsUUFBUUYsNkRBQVdBLENBQUM7SUFDeEJHLE1BQU07SUFDTkMsY0FBYztRQUFFQyxPQUFPLElBQUk7UUFBRUMsTUFBTSxJQUFJO0lBQUM7SUFDeENDLFVBQVU7UUFDUkMsZ0JBQWdCLENBQUNDLE9BQU9DLFNBQXFDO1lBQzNERCxNQUFNSixLQUFLLEdBQUdLLE9BQU9DLE9BQU8sQ0FBQ04sS0FBSztZQUNsQ0ksTUFBTUgsSUFBSSxHQUFHSSxPQUFPQyxPQUFPLENBQUNMLElBQUk7UUFDbEM7SUFDRjtJQUNBTSxlQUFlLENBQUNDLFVBQVk7UUFDMUJBLFFBQVFDLE9BQU8sQ0FBQ2IsdURBQU9BLEVBQUUsQ0FBQ1EsT0FBT0MsU0FBWTtnQkFDM0MsR0FBR0QsS0FBSztnQkFDUixhQUFhO2dCQUNiLEdBQUdDLE9BQU9DLE9BQU8sQ0FBQ0ksSUFBSTtZQUN4QjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUVQLGVBQWMsRUFBRSxHQUFHTixNQUFNYyxPQUFPLENBQUM7QUFDaEQsaUVBQWVkLE1BQU1lLE9BQU8sRUFBQztBQUN0QixNQUFNQyxvQkFBb0IsQ0FBQ1QsUUFBcUJBLE1BQU1NLElBQUksQ0FBQ1QsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2LWFzc2Vzc21lbnQvLi9zcmMvc3RvcmUvc2xpY2UvYXV0aFNsaWNlLnRzP2ZiY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvdHlwZXMvYXV0aE1vZGVsXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoU3RhdGUgPSB7XHJcbiAgdXNlcjogVXNlciB8IG51bGw7XHJcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBzbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGU6IHsgdG9rZW46IG51bGwsIHVzZXI6IG51bGwgfSBhcyBBdXRoU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldENyZWRlbnRpYWxzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBdXRoU3RhdGU+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoSFlEUkFURSwgKHN0YXRlLCBhY3Rpb24pID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmF1dGgsXHJcbiAgICB9KSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRDcmVkZW50aWFscyB9ID0gc2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgc2xpY2UucmVkdWNlcjtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEN1cnJlbnRVc2VyID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiSFlEUkFURSIsInNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwidXNlciIsInJlZHVjZXJzIiwic2V0Q3JlZGVudGlhbHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhdXRoIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJzZWxlY3RDdXJyZW50VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slice/authSlice.ts\n");

/***/ }),

/***/ "./src/store/slice/index.ts":
/*!**********************************!*\
  !*** ./src/store/slice/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authSlice */ \"./src/store/slice/authSlice.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _authSlice__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _authSlice__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtYXNzZXNzbWVudC8uL3NyYy9zdG9yZS9zbGljZS9pbmRleC50cz9mNGQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2F1dGhTbGljZVwiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/slice/index.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next-redux-cookie-wrapper":
/*!********************************************!*\
  !*** external "next-redux-cookie-wrapper" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-cookie-wrapper");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/dashboard/index.tsx"));
module.exports = __webpack_exports__;

})();