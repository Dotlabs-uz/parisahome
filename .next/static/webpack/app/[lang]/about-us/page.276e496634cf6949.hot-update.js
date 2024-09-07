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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_CustomEase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/CustomEase */ \"(app-pages-browser)/./node_modules/gsap/CustomEase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\ngsap_CustomEase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].create(\"cubic-text\", \"0.25, 1, 0.5, 1\");\nconst Vision = ()=>{\n    _s();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP)(()=>{\n        const titles = document.querySelectorAll(\".vision-title\");\n        const tl = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n            defaults: {\n                duration: 1\n            }\n        });\n        titles.forEach((title, index)=>{\n            const el = title.querySelectorAll(\"span\");\n            const delay = index * 0.08;\n            tl.to(el, {\n                y: 0,\n                duration: 1.5,\n                ease: \"cubic-text\",\n                scrollTrigger: {\n                    trigger: \".vision-section\",\n                    start: \"center top\",\n                    start: \"center bottom\",\n                    scrub: true,\n                    markers: true\n                }\n            }, delay);\n        });\n        return ()=>{};\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"custom-container vision-section h-screen flex items-center justify-center relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-96 max-md:w-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none pointer-events-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-full h-full\",\n                    src: \"/images/flower.svg\",\n                    width: 1000,\n                    height: 1000,\n                    alt: \"img\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-white/50 text-4xl max-md:text-3xl max-sm:text-xl text-center max-w-[800px] vision-title\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"\\xab\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"Наше\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"видение\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"—\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"переосмыслить\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"потенциал\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"промышленного\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"сектора\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"посредством\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"инноваций\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"и\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-block translate-y-full pb-1.5 pt-6 will-change-transform\",\n                            children: \"оптимизации\\xbb\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\Vision.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Vision, \"VFzjMmoc5axVjyj8E2Q2cQd9phs=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP\n    ];\n});\n_c = Vision;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vision);\nvar _c;\n$RefreshReg$(_c, \"Vision\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVmlzaW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM4QjtBQUNMO0FBQ1k7QUFDYTtBQUMzQjtBQUNrQjtBQUV6Q0ksNENBQUlBLENBQUNFLGNBQWMsQ0FBQ0gsNkRBQWFBO0FBQ2pDRSx1REFBVUEsQ0FBQ0UsTUFBTSxDQUFDLGNBQWM7QUFDaEMsTUFBTUMsU0FBUzs7SUFDWE4sb0RBQU9BLENBQUM7UUFDSixNQUFNTyxTQUFTQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN6QyxNQUFNQyxLQUFLUiw0Q0FBSUEsQ0FBQ1MsUUFBUSxDQUFDO1lBQUVDLFVBQVU7Z0JBQUVDLFVBQVU7WUFBRTtRQUFFO1FBRXJETixPQUFPTyxPQUFPLENBQUMsQ0FBQ0MsT0FBT0M7WUFDbkIsTUFBTUMsS0FBS0YsTUFBTU4sZ0JBQWdCLENBQUM7WUFDbEMsTUFBTVMsUUFBUUYsUUFBUTtZQUV0Qk4sR0FBR1MsRUFBRSxDQUFDRixJQUFJO2dCQUNORyxHQUFHO2dCQUNIUCxVQUFVO2dCQUNWUSxNQUFNO2dCQUNOQyxlQUFlO29CQUNYQyxTQUFTO29CQUNUQyxPQUFPO29CQUNQQSxPQUFPO29CQUNQQyxPQUFPO29CQUNQQyxTQUFTO2dCQUNiO1lBQ0osR0FBR1I7UUFDUDtRQUVBLE9BQU8sS0FBUTtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDOUIsa0RBQUtBO29CQUNGOEIsV0FBVTtvQkFDVkMsS0FBSztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNDO2dCQUFHTCxXQUFVOztrQ0FDViw4REFBQ007d0JBQUtOLFdBQVU7a0NBQ1osNEVBQUNNOzRCQUFLTixXQUFVO3NDQUFrRTs7Ozs7Ozs7Ozs7a0NBSXRGLDhEQUFDTTt3QkFBS04sV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUtOLFdBQVU7c0NBQWtFOzs7Ozs7Ozs7OztrQ0FJdEYsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNaLDRFQUFDTTs0QkFBS04sV0FBVTtzQ0FBa0U7Ozs7Ozs7Ozs7O2tDQUl0Riw4REFBQ007d0JBQUtOLFdBQVU7a0NBQ1osNEVBQUNNOzRCQUFLTixXQUFVO3NDQUFrRTs7Ozs7Ozs7Ozs7a0NBSXRGLDhEQUFDTTt3QkFBS04sV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUtOLFdBQVU7c0NBQWtFOzs7Ozs7Ozs7OztrQ0FJdEYsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNaLDRFQUFDTTs0QkFBS04sV0FBVTtzQ0FBa0U7Ozs7Ozs7Ozs7O2tDQUl0Riw4REFBQ007d0JBQUtOLFdBQVU7a0NBQ1osNEVBQUNNOzRCQUFLTixXQUFVO3NDQUFrRTs7Ozs7Ozs7Ozs7a0NBSXRGLDhEQUFDTTt3QkFBS04sV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUtOLFdBQVU7c0NBQWtFOzs7Ozs7Ozs7OztrQ0FJdEYsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNaLDRFQUFDTTs0QkFBS04sV0FBVTtzQ0FBa0U7Ozs7Ozs7Ozs7O2tDQUl0Riw4REFBQ007d0JBQUtOLFdBQVU7a0NBQ1osNEVBQUNNOzRCQUFLTixXQUFVO3NDQUFrRTs7Ozs7Ozs7Ozs7a0NBSXRGLDhEQUFDTTt3QkFBS04sV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUtOLFdBQVU7c0NBQWtFOzs7Ozs7Ozs7OztrQ0FJdEYsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNaLDRFQUFDTTs0QkFBS04sV0FBVTtzQ0FBa0U7Ozs7Ozs7Ozs7O29CQUcvRTs7Ozs7Ozs7Ozs7OztBQUl2QjtHQXRHTXRCOztRQUNGTixnREFBT0E7OztLQURMTTtBQXdHTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Zpc2lvbi50c3g/Y2U2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VHU0FQIH0gZnJvbSAnQGdzYXAvcmVhY3QnXHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXHJcbmltcG9ydCBDdXN0b21FYXNlIGZyb20gJ2dzYXAvQ3VzdG9tRWFzZSc7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXHJcbkN1c3RvbUVhc2UuY3JlYXRlKCdjdWJpYy10ZXh0JywgJzAuMjUsIDEsIDAuNSwgMScpXHJcbmNvbnN0IFZpc2lvbiA9ICgpID0+IHtcclxuICAgIHVzZUdTQVAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlzaW9uLXRpdGxlXCIpXHJcbiAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6IHsgZHVyYXRpb246IDEgfSB9KVxyXG5cclxuICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGl0bGUucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcclxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBpbmRleCAqIDAuMDhcclxuXHJcbiAgICAgICAgICAgIHRsLnRvKGVsLCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICAgICAgICAgIGVhc2U6IFwiY3ViaWMtdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnZpc2lvbi1zZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiY2VudGVyIHRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcImNlbnRlciBib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICBzY3J1YjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRhaW5lciB2aXNpb24tc2VjdGlvbiBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgbWF4LW1kOnctODAgYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXktMS8yIC10cmFuc2xhdGUteC0xLzIgc2VsZWN0LW5vbmUgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Jy9pbWFnZXMvZmxvd2VyLnN2Zyd9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD0naW1nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlLzUwIHRleHQtNHhsIG1heC1tZDp0ZXh0LTN4bCBtYXgtc206dGV4dC14bCB0ZXh0LWNlbnRlciBtYXgtdy1bODAwcHhdIHZpc2lvbi10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1tYi0xLjUgLW10LTYgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1ib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRyYW5zbGF0ZS15LWZ1bGwgcGItMS41IHB0LTYgd2lsbC1jaGFuZ2UtdHJhbnNmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgwqtcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1tYi0xLjUgLW10LTYgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1ib3R0b20gdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdHJhbnNsYXRlLXktZnVsbCBwYi0xLjUgcHQtNiB3aWxsLWNoYW5nZS10cmFuc2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQndCw0YjQtVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0cmFuc2xhdGUteS1mdWxsIHBiLTEuNSBwdC02IHdpbGwtY2hhbmdlLXRyYW5zZm9ybSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCy0LjQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSctbWItMS41IC1tdC02IGlubGluZS1ibG9jayBvdmVyZmxvdy1oaWRkZW4gYWxpZ24tYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0cmFuc2xhdGUteS1mdWxsIHBiLTEuNSBwdC02IHdpbGwtY2hhbmdlLXRyYW5zZm9ybSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAlFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdHJhbnNsYXRlLXktZnVsbCBwYi0xLjUgcHQtNiB3aWxsLWNoYW5nZS10cmFuc2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQv9C10YDQtdC+0YHQvNGL0YHQu9C40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdHJhbnNsYXRlLXktZnVsbCBwYi0xLjUgcHQtNiB3aWxsLWNoYW5nZS10cmFuc2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQv9C+0YLQtdC90YbQuNCw0LtcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1tYi0xLjUgLW10LTYgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1ib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRyYW5zbGF0ZS15LWZ1bGwgcGItMS41IHB0LTYgd2lsbC1jaGFuZ2UtdHJhbnNmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtCz0L5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1tYi0xLjUgLW10LTYgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1ib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRyYW5zbGF0ZS15LWZ1bGwgcGItMS41IHB0LTYgd2lsbC1jaGFuZ2UtdHJhbnNmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0YHQtdC60YLQvtGA0LBcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1tYi0xLjUgLW10LTYgaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1ib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRyYW5zbGF0ZS15LWZ1bGwgcGItMS41IHB0LTYgd2lsbC1jaGFuZ2UtdHJhbnNmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0L/QvtGB0YDQtdC00YHRgtCy0L7QvFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0cmFuc2xhdGUteS1mdWxsIHBiLTEuNSBwdC02IHdpbGwtY2hhbmdlLXRyYW5zZm9ybSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC40L3QvdC+0LLQsNGG0LjQuVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdHJhbnNsYXRlLXktZnVsbCBwYi0xLjUgcHQtNiB3aWxsLWNoYW5nZS10cmFuc2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQuFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nLW1iLTEuNSAtbXQtNiBpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWJvdHRvbSB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0cmFuc2xhdGUteS1mdWxsIHBiLTEuNSBwdC02IHdpbGwtY2hhbmdlLXRyYW5zZm9ybSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC+0L/RgtC40LzQuNC30LDRhtC40LjCu1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj4uXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpc2lvblxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUdTQVAiLCJTY3JvbGxUcmlnZ2VyIiwiZ3NhcCIsIkN1c3RvbUVhc2UiLCJyZWdpc3RlclBsdWdpbiIsImNyZWF0ZSIsIlZpc2lvbiIsInRpdGxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRsIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZm9yRWFjaCIsInRpdGxlIiwiaW5kZXgiLCJlbCIsImRlbGF5IiwidG8iLCJ5IiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJzY3J1YiIsIm1hcmtlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Vision.tsx\n"));

/***/ })

});