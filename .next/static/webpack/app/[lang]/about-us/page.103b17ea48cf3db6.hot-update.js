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

/***/ "(app-pages-browser)/./components/HorizontalScroll.tsx":
/*!*****************************************!*\
  !*** ./components/HorizontalScroll.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst arr = [\n    {\n        years: \"2014\",\n        title: \"Наше наследие\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные\"\n    },\n    {\n        years: \"2017\",\n        title: \"Начало производства\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    }\n];\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst HorizontalScroll = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeDot, setActiveDot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let ctx = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].context(()=>{\n            const totalSections = arr.length;\n            gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(sectionRef.current, {\n                x: ()=>\"-\".concat(100 * (totalSections - 1), \"vw\"),\n                ease: \"none\",\n                scrollTrigger: {\n                    trigger: triggerRef.current,\n                    start: \"top top\",\n                    end: ()=>\"+=\".concat(window.innerWidth * totalSections),\n                    scrub: 0.6,\n                    pin: true,\n                    onUpdate: (self)=>{\n                        const progress = self.progress * (totalSections - 1);\n                        const index = Math.round(progress);\n                        setActiveDot(index);\n                    }\n                }\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".progress\", {\n                width: \"100%\",\n                scrollTrigger: {\n                    trigger: triggerRef.current,\n                    start: \"top left\",\n                    scrub: 1.0\n                }\n            });\n        }, sectionRef);\n        return ()=>ctx.revert();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-section-outer\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: triggerRef,\n                className: \"relative scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-yellow h-full w-0 progress\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined),\n                            arr.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11\",\n                                    style: {\n                                        left: \"\".concat(index / arr.length * 100, \"%\")\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-1 px-2 rounded-md border \".concat(activeDot === index ? \"bg-yellow border-yellow\" : \"border-white\", \" \").concat(activeDot === index ? \"text-green\" : \"text-white\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-nowrap\",\n                                                children: arr[index].title.toLowerCase()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block w-2 h-2 rounded-full \".concat(activeDot === index ? \"bg-yellow\" : \"bg-white\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: sectionRef,\n                        className: \"scroll-section-inner text-white\",\n                        children: arr.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-section \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"custom-container h-full flex max-md:flex-col gap-20 items-center justify-around lg:justify-between py-40 max-md:py-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xl mb-10\",\n                                                    children: item.years\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-5xl mb-3\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"max-w-[430px] text-[17px] leading-6\",\n                                                    children: item.dcr\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"max-w-md w-full flower\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                className: \"w-full h-full\",\n                                                src: \"/images/flower.svg\",\n                                                width: 1000,\n                                                height: 1000,\n                                                alt: \"img\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(HorizontalScroll, \"ffJvFs2oimFgQn4rfKZFMJpc/yk=\");\n_c = HorizontalScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HorizontalScroll);\nvar _c;\n$RefreshReg$(_c, \"HorizontalScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFNjcm9sbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dCO0FBQ3VCO0FBQ2hCO0FBQ3FCO0FBRXBELE1BQU1NLE1BQU07SUFDUjtRQUFFQyxPQUFPO1FBQVFDLE9BQU87UUFBaUJDLEtBQUs7SUFBMk87SUFDelI7UUFBRUYsT0FBTztRQUFRQyxPQUFPO1FBQXVCQyxLQUFLO0lBQW1JO0lBQ3ZMO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0lBQy9LO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0NBQ2xMO0FBRURULDRDQUFJQSxDQUFDVSxjQUFjLENBQUNULDBEQUFhQTtBQUVqQyxNQUFNVSxtQkFBbUI7O0lBQ3JCLE1BQU1DLGFBQWFQLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJYSxNQUFNaEIsNENBQUlBLENBQUNpQixPQUFPLENBQUM7WUFDbkIsTUFBTUMsZ0JBQWdCWixJQUFJYSxNQUFNO1lBQ2hDbkIsNENBQUlBLENBQUNvQixFQUFFLENBQUNSLFdBQVdTLE9BQU8sRUFBRTtnQkFDeEJDLEdBQUcsSUFBTSxJQUE4QixPQUExQixNQUFPSixDQUFBQSxnQkFBZ0IsSUFBRztnQkFDdkNLLE1BQU07Z0JBQ05DLGVBQWU7b0JBQ1hDLFNBQVNaLFdBQVdRLE9BQU87b0JBQzNCSyxPQUFPO29CQUNQQyxLQUFLLElBQU0sS0FBdUMsT0FBbENDLE9BQU9DLFVBQVUsR0FBR1g7b0JBQ3BDWSxPQUFPO29CQUNQQyxLQUFLO29CQUNMQyxVQUFVLENBQUNDO3dCQUNQLE1BQU1DLFdBQVdELEtBQUtDLFFBQVEsR0FBSWhCLENBQUFBLGdCQUFnQjt3QkFDbEQsTUFBTWlCLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0g7d0JBQ3pCbkIsYUFBYW9CO29CQUNqQjtnQkFDSjtZQUNKO1lBRUFuQyw0Q0FBSUEsQ0FBQ29CLEVBQUUsQ0FBQyxhQUFhO2dCQUNqQmtCLE9BQU87Z0JBQ1BkLGVBQWU7b0JBQ1hDLFNBQVNaLFdBQVdRLE9BQU87b0JBQzNCSyxPQUFPO29CQUNQSSxPQUFPO2dCQUNYO1lBQ0o7UUFDSixHQUFHbEI7UUFFSCxPQUFPLElBQU1JLElBQUl1QixNQUFNO0lBQzNCLEdBQUcsRUFBRTtJQUVMLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUUsS0FBSzdCO2dCQUFZNEIsV0FBVTs7a0NBQzVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7NEJBQ2RuQyxJQUFJcUMsR0FBRyxDQUFDLENBQUNDLEdBQUdULHNCQUNULDhEQUFDSztvQ0FFR0MsV0FBWTtvQ0FDWkksT0FBTzt3Q0FBRUMsTUFBTSxHQUFnQyxPQUE3QixRQUFVeEMsSUFBSWEsTUFBTSxHQUFLLEtBQUk7b0NBQUc7O3NEQUVsRCw4REFBQ3FCOzRDQUNHQyxXQUFXLDhCQUFrRzNCLE9BQXBFQSxjQUFjcUIsUUFBUSw0QkFBNEIsZ0JBQWUsS0FBcUQsT0FBbERyQixjQUFjcUIsUUFBUSxlQUFlO3NEQUVsSiw0RUFBQ1k7Z0RBQUVOLFdBQVU7MERBQW1DbkMsR0FBRyxDQUFDNkIsTUFBTSxDQUFDM0IsS0FBSyxDQUFDd0MsV0FBVzs7Ozs7Ozs7Ozs7c0RBRWhGLDhEQUFDQzs0Q0FBS1IsV0FBVyw4QkFBNkUsT0FBL0MzQixjQUFjcUIsUUFBUSxjQUFjOzs7Ozs7O21DQVQ5RUE7Ozs7Ozs7Ozs7O2tDQWNqQiw4REFBQ0s7d0JBQUlFLEtBQUs5Qjt3QkFBWTZCLFdBQVU7a0NBRXhCbkMsSUFBSXFDLEdBQUcsQ0FBQyxDQUFDTyxNQUFNZixzQkFDWCw4REFBQ0s7Z0NBQWdCQyxXQUFVOzBDQUN2Qiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNNO29EQUFFTixXQUFVOzhEQUFpQlMsS0FBSzNDLEtBQUs7Ozs7Ozs4REFDeEMsOERBQUM0QztvREFBR1YsV0FBVTs4REFBaUJTLEtBQUsxQyxLQUFLOzs7Ozs7OERBQ3pDLDhEQUFDdUM7b0RBQUVOLFdBQVU7OERBQXVDUyxLQUFLekMsR0FBRzs7Ozs7Ozs7Ozs7O3NEQUdoRSw4REFBQytCOzRDQUFJQyxXQUFVO3NEQUNYLDRFQUFDdkMsa0RBQUtBO2dEQUNGdUMsV0FBVTtnREFDVlcsS0FBSztnREFDTGQsT0FBTztnREFDUGUsUUFBUTtnREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBZFZuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCMUM7R0F6Rk14QjtLQUFBQTtBQTJGTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFNjcm9sbC50c3g/MjJkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGFyciA9IFtcclxuICAgIHsgeWVhcnM6IFwiMjAxNFwiLCB0aXRsZTogXCLQndCw0YjQtSDQvdCw0YHQu9C10LTQuNC1XCIsIGRjcjogXCLQn9C+0LvQvtGC0LXQvdGG0LAsINC60L7RgtC+0YDRi9C1INCy0L/QtdGH0LDRgtC70Y/RjtGCISBQYXJpc2EgSG9tZSDQsdGL0LvQsCDQvtGB0L3QvtCy0LDQvdCwINCyIDIwMDkg0LPQvtC00YMsINCd0LDRiNCwINC60L7QvNC/0LDQvdC40Y8g0YLQsNC60LbQtSDQuNC30LLQtdGB0YLQvdCwLCDQutCw0Log0J7QntCeJ1NhbSBSYWZvYXQgVGV4dGlsZScuINCSINC90LDRh9Cw0LvQtSDRjdGC0LAg0LrQvtC80L/QsNC90LjRjyDQvdCw0YfQsNC70LAg0L/RgNC+0LjQt9Cy0L7QtNC40YLRjCDQv9C70Y7RiS4g0KEgMjAwOSDQs9C+0LTQsCDQntCe0J4nU2FtIFJhZm9hdCDQotC10LrRgdGC0LjQu9GMJyDQvtCx0LXRgdC/0LXRh9C40LLQsNC7INC80LXRgdGC0L3Ri9C1XCIgfSxcclxuICAgIHsgeWVhcnM6IFwiMjAxN1wiLCB0aXRsZTogXCLQndCw0YfQsNC70L4g0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstCwXCIsIGRjcjogXCLQn9C+0LvQvtGC0LXQvdGG0LAsINC60L7RgtC+0YDRi9C1INCy0L/QtdGH0LDRgtC70Y/RjtGCISBQYXJpc2EgSG9tZSDQsdGL0LvQsCDQvtGB0L3QvtCy0LDQvdCwINCyIDIwMDkg0LPQvtC00YMsINCd0LDRiNCwINC60L7QvNC/0LDQvdC40Y8g0YLQsNC60LbQtSDQuNC30LLQtdGB0YLQvdCwLCDQutCw0Log0J7QntCeJ1NhbSBSYWZvYXQgVGV4dGlsZScuXCIgfSxcclxuICAgIHsgeWVhcnM6IFwiMjAyMFwiLCB0aXRsZTogXCLQktGA0LXQvNGPINGA0L7RgdGC0LBcIiwgZGNyOiBcItCf0L7Qu9C+0YLQtdC90YbQsCwg0LrQvtGC0L7RgNGL0LUg0LLQv9C10YfQsNGC0LvRj9GO0YIhIFBhcmlzYSBIb21lINCx0YvQu9CwINC+0YHQvdC+0LLQsNC90LAg0LIgMjAwOSDQs9C+0LTRgywg0J3QsNGI0LAg0LrQvtC80L/QsNC90LjRjyDRgtCw0LrQttC1INC40LfQstC10YHRgtC90LAsINC60LDQuiDQntCe0J4nU2FtIFJhZm9hdCBUZXh0aWxlJy5cIiB9LFxyXG4gICAgeyB5ZWFyczogXCIyMDIwXCIsIHRpdGxlOiBcItCS0YDQtdC80Y8g0YDQvtGB0YLQsFwiLCBkY3I6IFwi0J/QvtC70L7RgtC10L3RhtCwLCDQutC+0YLQvtGA0YvQtSDQstC/0LXRh9Cw0YLQu9GP0Y7RgiEgUGFyaXNhIEhvbWUg0LHRi9C70LAg0L7RgdC90L7QstCw0L3QsCDQsiAyMDA5INCz0L7QtNGDLCDQndCw0YjQsCDQutC+0LzQv9Cw0L3QuNGPINGC0LDQutC20LUg0LjQt9Cy0LXRgdGC0L3QsCwg0LrQsNC6INCe0J7QnidTYW0gUmFmb2F0IFRleHRpbGUnLlwiIH1cclxuXTtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5jb25zdCBIb3Jpem9udGFsU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbYWN0aXZlRG90LCBzZXRBY3RpdmVEb3RdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxTZWN0aW9ucyA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGdzYXAudG8oc2VjdGlvblJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgICAgICAgICB4OiAoKSA9PiBgLSR7MTAwICogKHRvdGFsU2VjdGlvbnMgLSAxKX12d2AsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogKCkgPT4gYCs9JHt3aW5kb3cuaW5uZXJXaWR0aCAqIHRvdGFsU2VjdGlvbnN9YCxcclxuICAgICAgICAgICAgICAgICAgICBzY3J1YjogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzICogKHRvdGFsU2VjdGlvbnMgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKHByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRG90KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3NhcC50byhcIi5wcm9ncmVzc1wiLCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlclJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCBsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NydWI6IDEuMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBzZWN0aW9uUmVmKVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gY3R4LnJldmVydCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvbi1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RyaWdnZXJSZWZ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC0xIGFic29sdXRlIGJvdHRvbS0xMCBtYXgtbWQ6Ym90dG9tLTUgbGVmdC0wIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93IGgtZnVsbCB3LTAgcHJvZ3Jlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Fyci5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkb3QtY29udGFpbmVyIG1heC1tZDpoaWRkZW4gZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgLXRvcC0xMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogYCR7KGluZGV4IC8gKGFyci5sZW5ndGgpKSAqIDEwMH0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0xIHB4LTIgcm91bmRlZC1tZCBib3JkZXIgJHthY3RpdmVEb3QgPT09IGluZGV4ID8gJ2JnLXllbGxvdyBib3JkZXIteWVsbG93JyA6ICdib3JkZXItd2hpdGUnfSAke2FjdGl2ZURvdCA9PT0gaW5kZXggPyAndGV4dC1ncmVlbicgOiAndGV4dC13aGl0ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ub3dyYXBcIj57YXJyW2luZGV4XS50aXRsZS50b0xvd2VyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BibG9jayB3LTIgaC0yIHJvdW5kZWQtZnVsbCAke2FjdGl2ZURvdCA9PT0gaW5kZXggPyAnYmcteWVsbG93JyA6ICdiZy13aGl0ZSd9YH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2VjdGlvblJlZn0gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb24taW5uZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb24gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRhaW5lciBoLWZ1bGwgZmxleCBtYXgtbWQ6ZmxleC1jb2wgZ2FwLTIwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBsZzpqdXN0aWZ5LWJldHdlZW4gcHktNDAgbWF4LW1kOnB5LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWItMTBcIj57aXRlbS55ZWFyc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNXhsIG1iLTNcIj57aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LVs0MzBweF0gdGV4dC1bMTdweF0gbGVhZGluZy02XCI+e2l0ZW0uZGNyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIGZsb3dlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvZmxvd2VyLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsU2Nyb2xsO1xyXG4iXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiYXJyIiwieWVhcnMiLCJ0aXRsZSIsImRjciIsInJlZ2lzdGVyUGx1Z2luIiwiSG9yaXpvbnRhbFNjcm9sbCIsInNlY3Rpb25SZWYiLCJ0cmlnZ2VyUmVmIiwiYWN0aXZlRG90Iiwic2V0QWN0aXZlRG90IiwiY3R4IiwiY29udGV4dCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJ0byIsImN1cnJlbnQiLCJ4IiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2NydWIiLCJwaW4iLCJvblVwZGF0ZSIsInNlbGYiLCJwcm9ncmVzcyIsImluZGV4IiwiTWF0aCIsInJvdW5kIiwid2lkdGgiLCJyZXZlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJfIiwic3R5bGUiLCJsZWZ0IiwicCIsInRvTG93ZXJDYXNlIiwic3BhbiIsIml0ZW0iLCJoMiIsInNyYyIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HorizontalScroll.tsx\n"));

/***/ })

});