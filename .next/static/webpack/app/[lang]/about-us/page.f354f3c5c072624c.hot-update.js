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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst arr = [\n    {\n        years: \"2014\",\n        title: \"Наше наследие\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные\"\n    },\n    {\n        years: \"2017\",\n        title: \"Начало производства\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    },\n    {\n        years: \"2020\",\n        title: \"Время роста\",\n        dcr: \"Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.\"\n    }\n];\ngsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst HorizontalScroll = ()=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeDot, setActiveDot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const totalSections = arr.length;\n        // Анимация горизонтального скролла\n        const pin = gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(sectionRef.current, {\n            translateX: 0\n        }, {\n            translateX: \"-\".concat(100 * (totalSections - 1), \"vw\"),\n            ease: \"none\",\n            duration: 1,\n            scrollTrigger: {\n                trigger: triggerRef.current,\n                start: \"top top\",\n                end: ()=>\"+=\".concat(window.innerWidth * totalSections),\n                scrub: 0.6,\n                pin: true,\n                onUpdate: (self)=>{\n                    const progress = self.progress * (totalSections - 1);\n                    const index = Math.round(progress);\n                    setActiveDot(index);\n                }\n            }\n        });\n        // Анимация появления элементов при скролле\n        arr.forEach((_, index)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(\".scroll-section-\".concat(index), {\n                opacity: 0,\n                y: 50\n            }, {\n                opacity: 1,\n                y: 0,\n                duration: 1,\n                scrollTrigger: {\n                    trigger: \".scroll-section-\".concat(index),\n                    start: \"top center+=100\",\n                    end: \"bottom center\",\n                    toggleActions: \"play none none reverse\",\n                    scrub: true\n                }\n            });\n        });\n        return ()=>{\n            pin.kill();\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAll().forEach((trigger)=>trigger.kill());\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-section-outer\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: triggerRef,\n                className: \"relative scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-yellow h-full w-0 progress\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, undefined),\n                            arr.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11\",\n                                    style: {\n                                        left: \"\".concat(index / (arr.length - 1) * 100, \"%\")\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-1 px-2 rounded-md border \".concat(activeDot === index ? \"bg-yellow border-yellow\" : \"border-white\", \" \").concat(activeDot === index ? \"text-green\" : \"text-white\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-nowrap\",\n                                                children: arr[index].title.toLowerCase()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block w-2 h-2 rounded-full \".concat(activeDot === index ? \"bg-yellow\" : activeDot >= index ? \"bg-yellow\" : \"bg-white\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: sectionRef,\n                        className: \"scroll-section-inner text-white\",\n                        children: arr.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-section scroll-section-\".concat(index),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"custom-container h-full flex max-md:flex-col gap-20 items-center justify-around lg:justify-between py-40 max-md:py-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xl mb-10\",\n                                                    children: item.years\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-5xl mb-3\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"max-w-[430px] text-[17px] leading-6\",\n                                                    children: item.dcr\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"max-w-md w-full flower\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                className: \"w-full h-full\",\n                                                src: \"/images/flower.svg\",\n                                                width: 1000,\n                                                height: 1000,\n                                                alt: \"img\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99890\\\\Desktop\\\\parisahome-web\\\\components\\\\HorizontalScroll.tsx\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(HorizontalScroll, \"ffJvFs2oimFgQn4rfKZFMJpc/yk=\");\n_c = HorizontalScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HorizontalScroll);\nvar _c;\n$RefreshReg$(_c, \"HorizontalScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG9yaXpvbnRhbFNjcm9sbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dCO0FBQ3VCO0FBQ2hCO0FBQ3FCO0FBRXBELE1BQU1NLE1BQU07SUFDUjtRQUFFQyxPQUFPO1FBQVFDLE9BQU87UUFBaUJDLEtBQUs7SUFBMk87SUFDelI7UUFBRUYsT0FBTztRQUFRQyxPQUFPO1FBQXVCQyxLQUFLO0lBQW1JO0lBQ3ZMO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0lBQy9LO1FBQUVGLE9BQU87UUFBUUMsT0FBTztRQUFlQyxLQUFLO0lBQW1JO0NBQ2xMO0FBRURULDRDQUFJQSxDQUFDVSxjQUFjLENBQUNULDBEQUFhQTtBQUVqQyxNQUFNVSxtQkFBbUI7O0lBQ3JCLE1BQU1DLGFBQWFQLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1RLGFBQWFSLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxnQkFBZ0JWLElBQUlXLE1BQU07UUFFaEMsbUNBQW1DO1FBQ25DLE1BQU1DLE1BQU1sQiw0Q0FBSUEsQ0FBQ21CLE1BQU0sQ0FDbkJQLFdBQVdRLE9BQU8sRUFDbEI7WUFBRUMsWUFBWTtRQUFFLEdBQ2hCO1lBQ0lBLFlBQVksSUFBOEIsT0FBMUIsTUFBT0wsQ0FBQUEsZ0JBQWdCLElBQUc7WUFDMUNNLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxlQUFlO2dCQUNYQyxTQUFTWixXQUFXTyxPQUFPO2dCQUMzQk0sT0FBTztnQkFDUEMsS0FBSyxJQUFNLEtBQXVDLE9BQWxDQyxPQUFPQyxVQUFVLEdBQUdiO2dCQUNwQ2MsT0FBTztnQkFDUFosS0FBSztnQkFDTGEsVUFBVSxDQUFDQztvQkFDUCxNQUFNQyxXQUFXRCxLQUFLQyxRQUFRLEdBQUlqQixDQUFBQSxnQkFBZ0I7b0JBQ2xELE1BQU1rQixRQUFRQyxLQUFLQyxLQUFLLENBQUNIO29CQUN6QmxCLGFBQWFtQjtnQkFDakI7WUFDSjtRQUNKO1FBR0osMkNBQTJDO1FBQzNDNUIsSUFBSStCLE9BQU8sQ0FBQyxDQUFDQyxHQUFHSjtZQUNabEMsNENBQUlBLENBQUNtQixNQUFNLENBQ1AsbUJBQXlCLE9BQU5lLFFBQ25CO2dCQUFFSyxTQUFTO2dCQUFHQyxHQUFHO1lBQUcsR0FDcEI7Z0JBQ0lELFNBQVM7Z0JBQ1RDLEdBQUc7Z0JBQ0hqQixVQUFVO2dCQUNWQyxlQUFlO29CQUNYQyxTQUFTLG1CQUF5QixPQUFOUztvQkFDNUJSLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xjLGVBQWU7b0JBQ2ZYLE9BQU87Z0JBQ1g7WUFDSjtRQUVSO1FBRUEsT0FBTztZQUNIWixJQUFJd0IsSUFBSTtZQUNSekMsMERBQWFBLENBQUMwQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ1osQ0FBQUEsVUFBV0EsUUFBUWlCLElBQUk7UUFDMUQ7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSTtrQkFDSSw0RUFBQ0U7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlFLEtBQUtqQztnQkFBWWdDLFdBQVU7O2tDQUM1Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzRCQUNkdkMsSUFBSXlDLEdBQUcsQ0FBQyxDQUFDVCxHQUFHSixzQkFDVCw4REFBQ1U7b0NBRUdDLFdBQVk7b0NBQ1pHLE9BQU87d0NBQUVDLE1BQU0sR0FBb0MsT0FBakMsUUFBVTNDLENBQUFBLElBQUlXLE1BQU0sR0FBRyxLQUFNLEtBQUk7b0NBQUc7O3NEQUV0RCw4REFBQzJCOzRDQUNHQyxXQUFXLDhCQUFrRy9CLE9BQXBFQSxjQUFjb0IsUUFBUSw0QkFBNEIsZ0JBQWUsS0FBcUQsT0FBbERwQixjQUFjb0IsUUFBUSxlQUFlO3NEQUVsSiw0RUFBQ2dCO2dEQUFFTCxXQUFVOzBEQUFtQ3ZDLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQzFCLEtBQUssQ0FBQzJDLFdBQVc7Ozs7Ozs7Ozs7O3NEQUVoRiw4REFBQ0M7NENBQUtQLFdBQVcsOEJBQWdILE9BQWxGL0IsY0FBY29CLFFBQVEsY0FBY3BCLGFBQWFvQixRQUFRLGNBQWM7Ozs7Ozs7bUNBVGpIQTs7Ozs7Ozs7Ozs7a0NBY2pCLDhEQUFDVTt3QkFBSUUsS0FBS2xDO3dCQUFZaUMsV0FBVTtrQ0FFeEJ2QyxJQUFJeUMsR0FBRyxDQUFDLENBQUNNLE1BQU1uQixzQkFDWCw4REFBQ1U7Z0NBQWdCQyxXQUFXLGlDQUF1QyxPQUFOWDswQ0FDekQsNEVBQUNVO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNYLDhEQUFDSztvREFBRUwsV0FBVTs4REFBaUJRLEtBQUs5QyxLQUFLOzs7Ozs7OERBQ3hDLDhEQUFDK0M7b0RBQUdULFdBQVU7OERBQWlCUSxLQUFLN0MsS0FBSzs7Ozs7OzhEQUN6Qyw4REFBQzBDO29EQUFFTCxXQUFVOzhEQUF1Q1EsS0FBSzVDLEdBQUc7Ozs7Ozs7Ozs7OztzREFHaEUsOERBQUNtQzs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQzNDLGtEQUFLQTtnREFDRjJDLFdBQVU7Z0RBQ1ZVLEtBQUs7Z0RBQ0xDLE9BQU87Z0RBQ1BDLFFBQVE7Z0RBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWRWeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQjFDO0dBNUdNdkI7S0FBQUE7QUE4R04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvcml6b250YWxTY3JvbGwudHN4PzIyZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBhcnIgPSBbXHJcbiAgICB7IHllYXJzOiBcIjIwMTRcIiwgdGl0bGU6IFwi0J3QsNGI0LUg0L3QsNGB0LvQtdC00LjQtVwiLCBkY3I6IFwi0J/QvtC70L7RgtC10L3RhtCwLCDQutC+0YLQvtGA0YvQtSDQstC/0LXRh9Cw0YLQu9GP0Y7RgiEgUGFyaXNhIEhvbWUg0LHRi9C70LAg0L7RgdC90L7QstCw0L3QsCDQsiAyMDA5INCz0L7QtNGDLCDQndCw0YjQsCDQutC+0LzQv9Cw0L3QuNGPINGC0LDQutC20LUg0LjQt9Cy0LXRgdGC0L3QsCwg0LrQsNC6INCe0J7QnidTYW0gUmFmb2F0IFRleHRpbGUnLiDQkiDQvdCw0YfQsNC70LUg0Y3RgtCwINC60L7QvNC/0LDQvdC40Y8g0L3QsNGH0LDQu9CwINC/0YDQvtC40LfQstC+0LTQuNGC0Ywg0L/Qu9GO0YkuINChIDIwMDkg0LPQvtC00LAg0J7QntCeJ1NhbSBSYWZvYXQg0KLQtdC60YHRgtC40LvRjCcg0L7QsdC10YHQv9C10YfQuNCy0LDQuyDQvNC10YHRgtC90YvQtVwiIH0sXHJcbiAgICB7IHllYXJzOiBcIjIwMTdcIiwgdGl0bGU6IFwi0J3QsNGH0LDQu9C+INC/0YDQvtC40LfQstC+0LTRgdGC0LLQsFwiLCBkY3I6IFwi0J/QvtC70L7RgtC10L3RhtCwLCDQutC+0YLQvtGA0YvQtSDQstC/0LXRh9Cw0YLQu9GP0Y7RgiEgUGFyaXNhIEhvbWUg0LHRi9C70LAg0L7RgdC90L7QstCw0L3QsCDQsiAyMDA5INCz0L7QtNGDLCDQndCw0YjQsCDQutC+0LzQv9Cw0L3QuNGPINGC0LDQutC20LUg0LjQt9Cy0LXRgdGC0L3QsCwg0LrQsNC6INCe0J7QnidTYW0gUmFmb2F0IFRleHRpbGUnLlwiIH0sXHJcbiAgICB7IHllYXJzOiBcIjIwMjBcIiwgdGl0bGU6IFwi0JLRgNC10LzRjyDRgNC+0YHRgtCwXCIsIGRjcjogXCLQn9C+0LvQvtGC0LXQvdGG0LAsINC60L7RgtC+0YDRi9C1INCy0L/QtdGH0LDRgtC70Y/RjtGCISBQYXJpc2EgSG9tZSDQsdGL0LvQsCDQvtGB0L3QvtCy0LDQvdCwINCyIDIwMDkg0LPQvtC00YMsINCd0LDRiNCwINC60L7QvNC/0LDQvdC40Y8g0YLQsNC60LbQtSDQuNC30LLQtdGB0YLQvdCwLCDQutCw0Log0J7QntCeJ1NhbSBSYWZvYXQgVGV4dGlsZScuXCIgfSxcclxuICAgIHsgeWVhcnM6IFwiMjAyMFwiLCB0aXRsZTogXCLQktGA0LXQvNGPINGA0L7RgdGC0LBcIiwgZGNyOiBcItCf0L7Qu9C+0YLQtdC90YbQsCwg0LrQvtGC0L7RgNGL0LUg0LLQv9C10YfQsNGC0LvRj9GO0YIhIFBhcmlzYSBIb21lINCx0YvQu9CwINC+0YHQvdC+0LLQsNC90LAg0LIgMjAwOSDQs9C+0LTRgywg0J3QsNGI0LAg0LrQvtC80L/QsNC90LjRjyDRgtCw0LrQttC1INC40LfQstC10YHRgtC90LAsINC60LDQuiDQntCe0J4nU2FtIFJhZm9hdCBUZXh0aWxlJy5cIiB9XHJcbl07XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuY29uc3QgSG9yaXpvbnRhbFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2FjdGl2ZURvdCwgc2V0QWN0aXZlRG90XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxTZWN0aW9ucyA9IGFyci5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7Qs9C+INGB0LrRgNC+0LvQu9CwXHJcbiAgICAgICAgY29uc3QgcGluID0gZ3NhcC5mcm9tVG8oXHJcbiAgICAgICAgICAgIHNlY3Rpb25SZWYuY3VycmVudCxcclxuICAgICAgICAgICAgeyB0cmFuc2xhdGVYOiAwIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IGAtJHsxMDAgKiAodG90YWxTZWN0aW9ucyAtIDEpfXZ3YCxcclxuICAgICAgICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlclJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6ICgpID0+IGArPSR7d2luZG93LmlubmVyV2lkdGggKiB0b3RhbFNlY3Rpb25zfWAsIC8vINCa0L7RgNGA0LXQutGC0LjRgNGD0LXQvCDQtNC70LjQvdGDINGB0LrRgNC+0LvQu9CwXHJcbiAgICAgICAgICAgICAgICAgICAgc2NydWI6IDAuNixcclxuICAgICAgICAgICAgICAgICAgICBwaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gc2VsZi5wcm9ncmVzcyAqICh0b3RhbFNlY3Rpb25zIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURvdChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQuCDRgdC60YDQvtC70LvQtVxyXG4gICAgICAgIGFyci5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBnc2FwLmZyb21UbyhcclxuICAgICAgICAgICAgICAgIGAuc2Nyb2xsLXNlY3Rpb24tJHtpbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgeyBvcGFjaXR5OiAwLCB5OiA1MCB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IGAuc2Nyb2xsLXNlY3Rpb24tJHtpbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyKz0xMDBcIiwgLy8g0KLRgNC40LPQs9C10YAg0LDQutGC0LjQstC40YDRg9C10YLRgdGPINC/0YDQuCDQv9C+0L/QsNC00LDQvdC40Lgg0LIg0YbQtdC90YLRgFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiYm90dG9tIGNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NydWI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBpbi5raWxsKCk7XHJcbiAgICAgICAgICAgIFNjcm9sbFRyaWdnZXIuZ2V0QWxsKCkuZm9yRWFjaCh0cmlnZ2VyID0+IHRyaWdnZXIua2lsbCgpKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtc2VjdGlvbi1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RyaWdnZXJSZWZ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC0xIGFic29sdXRlIGJvdHRvbS0xMCBtYXgtbWQ6Ym90dG9tLTUgbGVmdC0wIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93IGgtZnVsbCB3LTAgcHJvZ3Jlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Fyci5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkb3QtY29udGFpbmVyIG1heC1tZDpoaWRkZW4gZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgLXRvcC0xMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogYCR7KGluZGV4IC8gKGFyci5sZW5ndGggLSAxKSkgKiAxMDB9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMSBweC0yIHJvdW5kZWQtbWQgYm9yZGVyICR7YWN0aXZlRG90ID09PSBpbmRleCA/ICdiZy15ZWxsb3cgYm9yZGVyLXllbGxvdycgOiAnYm9yZGVyLXdoaXRlJ30gJHthY3RpdmVEb3QgPT09IGluZGV4ID8gJ3RleHQtZ3JlZW4nIDogJ3RleHQtd2hpdGUnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbm93cmFwXCI+e2FycltpbmRleF0udGl0bGUudG9Mb3dlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmxvY2sgdy0yIGgtMiByb3VuZGVkLWZ1bGwgJHthY3RpdmVEb3QgPT09IGluZGV4ID8gJ2JnLXllbGxvdycgOiBhY3RpdmVEb3QgPj0gaW5kZXggPyAnYmcteWVsbG93JyA6ICdiZy13aGl0ZSd9YH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2VjdGlvblJlZn0gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb24taW5uZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgc2Nyb2xsLXNlY3Rpb24gc2Nyb2xsLXNlY3Rpb24tJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udGFpbmVyIGgtZnVsbCBmbGV4IG1heC1tZDpmbGV4LWNvbCBnYXAtMjAgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGxnOmp1c3RpZnktYmV0d2VlbiBweS00MCBtYXgtbWQ6cHktMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0xMFwiPntpdGVtLnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgbWItM1wiPntpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctWzQzMHB4XSB0ZXh0LVsxN3B4XSBsZWFkaW5nLTZcIj57aXRlbS5kY3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgZmxvd2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9mbG93ZXIuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxTY3JvbGw7XHJcbiJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJhcnIiLCJ5ZWFycyIsInRpdGxlIiwiZGNyIiwicmVnaXN0ZXJQbHVnaW4iLCJIb3Jpem9udGFsU2Nyb2xsIiwic2VjdGlvblJlZiIsInRyaWdnZXJSZWYiLCJhY3RpdmVEb3QiLCJzZXRBY3RpdmVEb3QiLCJ0b3RhbFNlY3Rpb25zIiwibGVuZ3RoIiwicGluIiwiZnJvbVRvIiwiY3VycmVudCIsInRyYW5zbGF0ZVgiLCJlYXNlIiwiZHVyYXRpb24iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcnViIiwib25VcGRhdGUiLCJzZWxmIiwicHJvZ3Jlc3MiLCJpbmRleCIsIk1hdGgiLCJyb3VuZCIsImZvckVhY2giLCJfIiwib3BhY2l0eSIsInkiLCJ0b2dnbGVBY3Rpb25zIiwia2lsbCIsImdldEFsbCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm1hcCIsInN0eWxlIiwibGVmdCIsInAiLCJ0b0xvd2VyQ2FzZSIsInNwYW4iLCJpdGVtIiwiaDIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HorizontalScroll.tsx\n"));

/***/ })

});