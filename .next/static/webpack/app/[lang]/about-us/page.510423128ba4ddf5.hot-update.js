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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst arr = [\n    {\n        years: \"2014\",\n        title: \"Наше наследие\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные\"\n    },\n    {\n        years: \"2017\",\n        title: \"Начало производства\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    }\n];\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst HorizontalScroll = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeDot, setActiveDot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const totalSections = arr.length;\n        const pin = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(sectionRef.current, {\n            translateX: 0\n        }, {\n            translateX: \"-300vw\",\n            ease: \"none\",\n            duration: 1,\n            scrollTrigger: {\n                trigger: triggerRef.current,\n                start: \"top top\",\n                end: \"2000 top\",\n                scrub: 0.6,\n                pin: true,\n                onUpdate: (self)=>{\n                    const progress = self.progress * (arr.length - 1);\n                    const index = Math.round(progress); // Округляем прогресс для более точного переключения\n                    setActiveDot(index);\n                }\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(\".progress\", {\n            width: \"100%\",\n            scrollTrigger: {\n                trigger: \".scroll-section-outer\",\n                start: \"top left\",\n                scrub: 1.0\n            }\n        });\n        return ()=>{\n            pin.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-section-outer\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: triggerRef,\n                className: \"relative scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-yellow h-full w-0 progress\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined),\n                            arr.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11\",\n                                    style: {\n                                        left: \"\".concat(index / (arr.length - 1) * 100, \"%\")\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-1 px-2 rounded-md border \".concat(activeDot === index ? \"bg-yellow border-yellow text-green\" : \"border-white text-white\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium whitespace-nowrap\",\n                                                children: arr[index].title.toLowerCase()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block w-2 h-2 rounded-full \".concat(activeDot >= index ? \"bg-yellow\" : \"bg-white\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: sectionRef,\n                        className: \"scroll-section-inner text-white\",\n                        children: arr.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-section \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"custom-container h-full flex max-md:flex-col gap-20 items-center justify-around lg:justify-between py-40 max-md:py-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xl mb-10\",\n                                                    children: item.years\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-5xl mb-3\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"max-w-[430px] text-[17px] leading-6\",\n                                                    children: item.dcr\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"max-w-md w-full flower\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                className: \"w-full h-full\",\n                                                src: \"/images/flower.svg\",\n                                                width: 1000,\n                                                height: 1000,\n                                                alt: \"img\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(HorizontalScroll, \"ffJvFs2oimFgQn4rfKZFMJpc/yk=\");\n_c = HorizontalScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HorizontalScroll);\nvar _c;\n$RefreshReg$(_c, \"HorizontalScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFNjcm9sbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dCO0FBQ3VCO0FBQ2hCO0FBQ3FCO0FBRXBELE1BQU1NLE1BQU07SUFDUjtRQUFFQyxPQUFPO1FBQVFDLE9BQU87UUFBaUJDLEtBQUs7SUFBMk87SUFDelI7UUFBRUYsT0FBTztRQUFRQyxPQUFPO1FBQXVCQyxLQUFLO0lBQW1JO0lBQ3ZMO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0lBQy9LO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0NBQ2xMO0FBRURULDRDQUFJQSxDQUFDVSxjQUFjLENBQUNULDBEQUFhQTtBQUVqQyxNQUFNVSxtQkFBbUI7O0lBQ3JCLE1BQU1DLGFBQWFQLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxnQkFBZ0JWLElBQUlXLE1BQU07UUFDaEMsTUFBTUMsTUFBTWxCLDRDQUFJQSxDQUFDbUIsTUFBTSxDQUNuQlAsV0FBV1EsT0FBTyxFQUNsQjtZQUFFQyxZQUFZO1FBQUUsR0FDaEI7WUFDSUEsWUFBWTtZQUNaQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsZUFBZTtnQkFDWEMsU0FBU1osV0FBV08sT0FBTztnQkFDM0JNLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xDLE9BQU87Z0JBQ1BWLEtBQUs7Z0JBQ0xXLFVBQVUsQ0FBQ0M7b0JBQ1AsTUFBTUMsV0FBV0QsS0FBS0MsUUFBUSxHQUFJekIsQ0FBQUEsSUFBSVcsTUFBTSxHQUFHO29CQUMvQyxNQUFNZSxRQUFRQyxLQUFLQyxLQUFLLENBQUNILFdBQVcsb0RBQW9EO29CQUN4RmhCLGFBQWFpQjtnQkFDakI7WUFDSjtRQUNKO1FBR0poQyw0Q0FBSUEsQ0FBQ21DLEVBQUUsQ0FBQyxhQUFhO1lBQ2pCQyxPQUFPO1lBQ1BaLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BFLE9BQU87WUFDWDtRQUNKO1FBRUEsT0FBTztZQUNIVixJQUFJbUIsSUFBSTtRQUNaO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJRSxLQUFLM0I7Z0JBQVkwQixXQUFVOztrQ0FDNUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs0QkFDZGpDLElBQUltQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR1Ysc0JBQ1QsOERBQUNNO29DQUVHQyxXQUFVO29DQUNWSSxPQUFPO3dDQUFFQyxNQUFNLEdBQW9DLE9BQWpDLFFBQVV0QyxDQUFBQSxJQUFJVyxNQUFNLEdBQUcsS0FBTSxLQUFJO29DQUFHOztzREFFdEQsOERBQUNxQjs0Q0FBSUMsV0FBVyw4QkFBcUgsT0FBdkZ6QixjQUFja0IsUUFBUSx1Q0FBdUM7c0RBQ3ZHLDRFQUFDYTtnREFBRU4sV0FBVTswREFDUmpDLEdBQUcsQ0FBQzBCLE1BQU0sQ0FBQ3hCLEtBQUssQ0FBQ3NDLFdBQVc7Ozs7Ozs7Ozs7O3NEQUdyQyw4REFBQ0M7NENBQUtSLFdBQVcsOEJBQTRFLE9BQTlDekIsYUFBYWtCLFFBQVEsY0FBYzs7Ozs7OzttQ0FUN0VBOzs7Ozs7Ozs7OztrQ0FjakIsOERBQUNNO3dCQUFJRSxLQUFLNUI7d0JBQVkyQixXQUFVO2tDQUV4QmpDLElBQUltQyxHQUFHLENBQUMsQ0FBQ08sTUFBTWhCLHNCQUNYLDhEQUFDTTtnQ0FBZ0JDLFdBQVU7MENBQ3ZCLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ007b0RBQUVOLFdBQVU7OERBQWlCUyxLQUFLekMsS0FBSzs7Ozs7OzhEQUN4Qyw4REFBQzBDO29EQUFHVixXQUFVOzhEQUFpQlMsS0FBS3hDLEtBQUs7Ozs7Ozs4REFDekMsOERBQUNxQztvREFBRU4sV0FBVTs4REFBdUNTLEtBQUt2QyxHQUFHOzs7Ozs7Ozs7Ozs7c0RBR2hFLDhEQUFDNkI7NENBQUlDLFdBQVU7c0RBQ1gsNEVBQUNyQyxrREFBS0E7Z0RBQ0ZxQyxXQUFVO2dEQUNWVyxLQUFLO2dEQUNMZCxPQUFPO2dEQUNQZSxRQUFRO2dEQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFkVnBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEIxQztHQTlGTXJCO0tBQUFBO0FBZ0dOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3Jpem9udGFsU2Nyb2xsLnRzeD8yMmQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYXJyID0gW1xyXG4gICAgeyB5ZWFyczogXCIyMDE0XCIsIHRpdGxlOiBcItCd0LDRiNC1INC90LDRgdC70LXQtNC40LVcIiwgZGNyOiBcItCf0L7Qu9C+0YLQtdC90YbQsCwg0LrQvtGC0L7RgNGL0LUg0LLQv9C10YfQsNGC0LvRj9GO0YIhIFBhcmlzYSBIb21lINCx0YvQu9CwINC+0YHQvdC+0LLQsNC90LAg0LIgMjAwOSDQs9C+0LTRgywg0J3QsNGI0LAg0LrQvtC80L/QsNC90LjRjyDRgtCw0LrQttC1INC40LfQstC10YHRgtC90LAsINC60LDQuiDQntCe0J4nU2FtIFJhZm9hdCBUZXh0aWxlJy4g0JIg0L3QsNGH0LDQu9C1INGN0YLQsCDQutC+0LzQv9Cw0L3QuNGPINC90LDRh9Cw0LvQsCDQv9GA0L7QuNC30LLQvtC00LjRgtGMINC/0LvRjtGJLiDQoSAyMDA5INCz0L7QtNCwINCe0J7QnidTYW0gUmFmb2F0INCi0LXQutGB0YLQuNC70YwnINC+0LHQtdGB0L/QtdGH0LjQstCw0Lsg0LzQtdGB0YLQvdGL0LVcIiB9LFxyXG4gICAgeyB5ZWFyczogXCIyMDE3XCIsIHRpdGxlOiBcItCd0LDRh9Cw0LvQviDQv9GA0L7QuNC30LLQvtC00YHRgtCy0LBcIiwgZGNyOiBcItCf0L7Qu9C+0YLQtdC90YbQsCwg0LrQvtGC0L7RgNGL0LUg0LLQv9C10YfQsNGC0LvRj9GO0YIhIFBhcmlzYSBIb21lINCx0YvQu9CwINC+0YHQvdC+0LLQsNC90LAg0LIgMjAwOSDQs9C+0LTRgywg0J3QsNGI0LAg0LrQvtC80L/QsNC90LjRjyDRgtCw0LrQttC1INC40LfQstC10YHRgtC90LAsINC60LDQuiDQntCe0J4nU2FtIFJhZm9hdCBUZXh0aWxlJy5cIiB9LFxyXG4gICAgeyB5ZWFyczogXCIyMDIwXCIsIHRpdGxlOiBcItCS0YDQtdC80Y8g0YDQvtGB0YLQsFwiLCBkY3I6IFwi0J/QvtC70L7RgtC10L3RhtCwLCDQutC+0YLQvtGA0YvQtSDQstC/0LXRh9Cw0YLQu9GP0Y7RgiEgUGFyaXNhIEhvbWUg0LHRi9C70LAg0L7RgdC90L7QstCw0L3QsCDQsiAyMDA5INCz0L7QtNGDLCDQndCw0YjQsCDQutC+0LzQv9Cw0L3QuNGPINGC0LDQutC20LUg0LjQt9Cy0LXRgdGC0L3QsCwg0LrQsNC6INCe0J7QnidTYW0gUmFmb2F0IFRleHRpbGUnLlwiIH0sXHJcbiAgICB7IHllYXJzOiBcIjIwMjBcIiwgdGl0bGU6IFwi0JLRgNC10LzRjyDRgNC+0YHRgtCwXCIsIGRjcjogXCLQn9C+0LvQvtGC0LXQvdGG0LAsINC60L7RgtC+0YDRi9C1INCy0L/QtdGH0LDRgtC70Y/RjtGCISBQYXJpc2EgSG9tZSDQsdGL0LvQsCDQvtGB0L3QvtCy0LDQvdCwINCyIDIwMDkg0LPQvtC00YMsINCd0LDRiNCwINC60L7QvNC/0LDQvdC40Y8g0YLQsNC60LbQtSDQuNC30LLQtdGB0YLQvdCwLCDQutCw0Log0J7QntCeJ1NhbSBSYWZvYXQgVGV4dGlsZScuXCIgfVxyXG5dO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcbmNvbnN0IEhvcml6b250YWxTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthY3RpdmVEb3QsIHNldEFjdGl2ZURvdF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsU2VjdGlvbnMgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHBpbiA9IGdzYXAuZnJvbVRvKFxyXG4gICAgICAgICAgICBzZWN0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIHsgdHJhbnNsYXRlWDogMCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiBcIi0zMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCIyMDAwIHRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcnViOiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoc2VsZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHNlbGYucHJvZ3Jlc3MgKiAoYXJyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQocHJvZ3Jlc3MpOyAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0L/RgNC+0LPRgNC10YHRgSDQtNC70Y8g0LHQvtC70LXQtSDRgtC+0YfQvdC+0LPQviDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRG90KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBnc2FwLnRvKFwiLnByb2dyZXNzXCIsIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5zY3JvbGwtc2VjdGlvbi1vdXRlclwiLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwidG9wIGxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNjcnViOiAxLjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBwaW4ua2lsbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uLW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dHJpZ2dlclJlZn0gY2xhc3NOYW1lPVwicmVsYXRpdmUgc2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLTEgYWJzb2x1dGUgYm90dG9tLTEwIG1heC1tZDpib3R0b20tNSBsZWZ0LTAgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3cgaC1mdWxsIHctMCBwcm9ncmVzc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJyLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdC1jb250YWluZXIgbWF4LW1kOmhpZGRlbiBmbGV4IGZsZXgtY29sIGdhcC0zIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSAtdG9wLTExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHsoaW5kZXggLyAoYXJyLmxlbmd0aCAtIDEpKSAqIDEwMH0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcC0xIHB4LTIgcm91bmRlZC1tZCBib3JkZXIgJHthY3RpdmVEb3QgPT09IGluZGV4ID8gJ2JnLXllbGxvdyBib3JkZXIteWVsbG93IHRleHQtZ3JlZW4nIDogJ2JvcmRlci13aGl0ZSB0ZXh0LXdoaXRlJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FycltpbmRleF0udGl0bGUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJsb2NrIHctMiBoLTIgcm91bmRlZC1mdWxsICR7YWN0aXZlRG90ID49IGluZGV4ID8gJ2JnLXllbGxvdycgOiAnYmctd2hpdGUnfWB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3NlY3Rpb25SZWZ9IGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uLWlubmVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250YWluZXIgaC1mdWxsIGZsZXggbWF4LW1kOmZsZXgtY29sIGdhcC0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgbGc6anVzdGlmeS1iZXR3ZWVuIHB5LTQwIG1heC1tZDpweS0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTEwXCI+e2l0ZW0ueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi0zXCI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bNDMwcHhdIHRleHQtWzE3cHhdIGxlYWRpbmctNlwiPntpdGVtLmRjcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBmbG93ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL2Zsb3dlci5zdmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbFNjcm9sbDtcclxuIl0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImFyciIsInllYXJzIiwidGl0bGUiLCJkY3IiLCJyZWdpc3RlclBsdWdpbiIsIkhvcml6b250YWxTY3JvbGwiLCJzZWN0aW9uUmVmIiwidHJpZ2dlclJlZiIsImFjdGl2ZURvdCIsInNldEFjdGl2ZURvdCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJwaW4iLCJmcm9tVG8iLCJjdXJyZW50IiwidHJhbnNsYXRlWCIsImVhc2UiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsIm9uVXBkYXRlIiwic2VsZiIsInByb2dyZXNzIiwiaW5kZXgiLCJNYXRoIiwicm91bmQiLCJ0byIsIndpZHRoIiwia2lsbCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm1hcCIsIl8iLCJzdHlsZSIsImxlZnQiLCJwIiwidG9Mb3dlckNhc2UiLCJzcGFuIiwiaXRlbSIsImgyIiwic3JjIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HorizontalScroll.tsx\n"));

/***/ })

});