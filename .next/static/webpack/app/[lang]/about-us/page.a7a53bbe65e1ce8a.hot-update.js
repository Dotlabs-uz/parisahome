"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/about-us/page",{

/***/ "(app-pages-browser)/./components/Vision.tsx":
/*!*******************************!*\
  !*** ./components/Vision.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_CustomEase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/CustomEase */ \"(app-pages-browser)/./node_modules/gsap/CustomEase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\ngsap_CustomEase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].create(\"cubic-text\", \"0.25, 1, 0.5, 1\");\nconst Vision = ()=>{\n    _s();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP)(()=>{\n        const titles = document.querySelectorAll(\".vision-title\");\n        const tl = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n            defaults: {\n                duration: 1\n            }\n        });\n        titles.forEach((title, index)=>{\n            const el = title.querySelectorAll(\"span\");\n            const delay = index * 0.08;\n            tl.to(el, {\n                y: 0,\n                duration: 1.5,\n                ease: \"cubic-text\",\n                scrollTrigger: {\n                    trigger: \".custom-container\",\n                    start: \"center top\",\n                    scrub: true,\n                    markers: true\n                }\n            }, delay);\n        });\n        return ()=>{};\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"custom-container h-screen flex items-center justify-center relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-96 max-md:w-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none pointer-events-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-full h-full\",\n                    src: \"/images/flower.svg\",\n                    width: 1000,\n                    height: 1000,\n                    alt: \"img\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-white/50 text-4xl max-md:text-3xl max-sm:text-xl text-center max-w-[800px] vision-title\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"\\xab\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"Наше\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"видение\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"—\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"переосмыслить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"потенциал\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"промышленного\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"сектора\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"посредством\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \" инноваций\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"и\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"оптимизации\\xbb\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Vision, \"VFzjMmoc5axVjyj8E2Q2cQd9phs=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP\n    ];\n});\n_c = Vision;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vision);\nvar _c;\n$RefreshReg$(_c, \"Vision\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVmlzaW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM4QjtBQUNMO0FBQ1k7QUFDYTtBQUMzQjtBQUNrQjtBQUV6Q0ksNENBQUlBLENBQUNFLGNBQWMsQ0FBQ0gsNkRBQWFBO0FBQ2pDRSx1REFBVUEsQ0FBQ0UsTUFBTSxDQUFDLGNBQWM7QUFDaEMsTUFBTUMsU0FBUzs7SUFDWE4sb0RBQU9BLENBQUM7UUFDSixNQUFNTyxTQUFTQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN6QyxNQUFNQyxLQUFLUiw0Q0FBSUEsQ0FBQ1MsUUFBUSxDQUFDO1lBQUVDLFVBQVU7Z0JBQUVDLFVBQVU7WUFBRTtRQUFFO1FBRXJETixPQUFPTyxPQUFPLENBQUMsQ0FBQ0MsT0FBT0M7WUFDbkIsTUFBTUMsS0FBS0YsTUFBTU4sZ0JBQWdCLENBQUM7WUFDbEMsTUFBTVMsUUFBUUYsUUFBUTtZQUV0Qk4sR0FBR1MsRUFBRSxDQUFDRixJQUFJO2dCQUNORyxHQUFHO2dCQUNIUCxVQUFVO2dCQUNWUSxNQUFNO2dCQUNOQyxlQUFlO29CQUNYQyxTQUFTO29CQUNUQyxPQUFPO29CQUNQQyxPQUFPO29CQUNQQyxTQUFTO2dCQUNiO1lBQ0osR0FBR1I7UUFDUDtRQUVBLE9BQU8sS0FBUTtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDOUIsa0RBQUtBO29CQUNGOEIsV0FBVTtvQkFDVkMsS0FBSztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNDO2dCQUFHTCxXQUFVOztrQ0FDViw4REFBQ007a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0E7d0JBQUtOLFdBQVU7a0NBQWE7Ozs7OztrQ0FDN0IsOERBQUNNO3dCQUFLTixXQUFVO2tDQUFhOzs7Ozs7a0NBQzdCLDhEQUFDTTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTt3QkFBS04sV0FBVTtrQ0FBYTs7Ozs7O2tDQUM3Qiw4REFBQ007a0NBQUs7Ozs7OztrQ0FDTiw4REFBQ0E7d0JBQUtOLFdBQVU7a0NBQWE7Ozs7OztvQkFBbUI7Ozs7Ozs7Ozs7Ozs7QUFJaEU7R0FyRE10Qjs7UUFDRk4sZ0RBQU9BOzs7S0FETE07QUF1RE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXNpb24udHN4P2NlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlR1NBUCB9IGZyb20gJ0Bnc2FwL3JlYWN0J1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgQ3VzdG9tRWFzZSBmcm9tICdnc2FwL0N1c3RvbUVhc2UnO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxyXG5DdXN0b21FYXNlLmNyZWF0ZSgnY3ViaWMtdGV4dCcsICcwLjI1LCAxLCAwLjUsIDEnKVxyXG5jb25zdCBWaXNpb24gPSAoKSA9PiB7XHJcbiAgICB1c2VHU0FQKCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpc2lvbi10aXRsZVwiKVxyXG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAxIH0gfSlcclxuXHJcbiAgICAgICAgdGl0bGVzLmZvckVhY2goKHRpdGxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IHRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gaW5kZXggKiAwLjA4XHJcblxyXG4gICAgICAgICAgICB0bC50byhlbCwge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBcImN1YmljLXRleHRcIixcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5jdXN0b20tY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiY2VudGVyIHRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcnViOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZGVsYXkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udGFpbmVyIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBtYXgtbWQ6dy04MCBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTEvMiBzZWxlY3Qtbm9uZSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9mbG93ZXIuc3ZnJ31cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSdpbWcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtd2hpdGUvNTAgdGV4dC00eGwgbWF4LW1kOnRleHQtM3hsIG1heC1zbTp0ZXh0LXhsIHRleHQtY2VudGVyIG1heC13LVs4MDBweF0gdmlzaW9uLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPsKrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz7QndCw0YjQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+0LLQuNC00LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7igJQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7Qv9C10YDQtdC+0YHQvNGL0YHQu9C40YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtC/0L7RgtC10L3RhtC40LDQuzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtC/0YDQvtC80YvRiNC70LXQvdC90L7Qs9C+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+0YHQtdC60YLQvtGA0LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7Qv9C+0YHRgNC10LTRgdGC0LLQvtC8PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz4g0LjQvdC90L7QstCw0YbQuNC5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+0Lg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPtC+0L/RgtC40LzQuNC30LDRhtC40LjCuzwvc3Bhbj4uXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpc2lvblxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUdTQVAiLCJTY3JvbGxUcmlnZ2VyIiwiZ3NhcCIsIkN1c3RvbUVhc2UiLCJyZWdpc3RlclBsdWdpbiIsImNyZWF0ZSIsIlZpc2lvbiIsInRpdGxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRsIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZm9yRWFjaCIsInRpdGxlIiwiaW5kZXgiLCJlbCIsImRlbGF5IiwidG8iLCJ5IiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJzY3J1YiIsIm1hcmtlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Vision.tsx\n"));

/***/ })

});