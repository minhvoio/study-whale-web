"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/prompt-form.tsx":
/*!************************************!*\
  !*** ./components/prompt-form.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PromptForm: function() { return /* binding */ PromptForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-textarea-autosize */ \"(app-client)/./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js\");\n/* harmony import */ var _lib_hooks_use_enter_submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/hooks/use-enter-submit */ \"(app-client)/./lib/hooks/use-enter-submit.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-client)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/tooltip */ \"(app-client)/./components/ui/tooltip.tsx\");\n/* harmony import */ var _components_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/icons */ \"(app-client)/./components/ui/icons.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PromptForm(param) {\n    let { onSubmit, input, setInput, isLoading } = param;\n    _s();\n    const { formRef, onKeyDown } = (0,_lib_hooks_use_enter_submit__WEBPACK_IMPORTED_MODULE_2__.useEnterSubmit)();\n    const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (inputRef.current) {\n            inputRef.current.focus();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: async (e)=>{\n            e.preventDefault();\n            if (!(input === null || input === void 0 ? void 0 : input.trim())) {\n                return;\n            }\n            setInput(\"\");\n            await onSubmit(input);\n        },\n        ref: formRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    ref: inputRef,\n                    tabIndex: 0,\n                    onKeyDown: onKeyDown,\n                    rows: 1,\n                    value: input,\n                    onChange: (e)=>setInput(e.target.value),\n                    placeholder: \"To get the best answer, please ask in English.\",\n                    spellCheck: false,\n                    className: \"min-h-[60px] w-full resize-none bg-transparent px-0 py-[1.3rem] focus-within:outline-none sm:text-sm\"\n                }, void 0, false, {\n                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0 top-4 sm:right-4 space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"submit\",\n                            size: \"icon\",\n                            // disabled={isLoading || input === ''}\n                            style: {\n                                backgroundColor: \"#E4F0FB\",\n                                color: \"#2a5deb\",\n                                boxShadow: \"none\"\n                            },\n                            className: \"rounded-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_5__.IconFileUpload, {}, void 0, false, {\n                                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Send file\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        type: \"submit\",\n                                        size: \"icon\",\n                                        disabled: isLoading || input === \"\",\n                                        style: {\n                                            backgroundColor: \"#2a5deb\"\n                                        },\n                                        className: \"rounded-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_5__.IconArrowElbow, {}, void 0, false, {\n                                                fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Send message\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipContent, {\n                                    children: \"Send message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/minhvo/1-GitHub/Business/Chat-Excie-NextJS/components/prompt-form.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(PromptForm, \"8BJj5fKz08eZjPFgsChXtAn60VU=\", false, function() {\n    return [\n        _lib_hooks_use_enter_submit__WEBPACK_IMPORTED_MODULE_2__.useEnterSubmit\n    ];\n});\n_c = PromptForm;\nvar _c;\n$RefreshReg$(_c, \"PromptForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wcm9tcHQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0I7QUFHZTtBQUNkO0FBS2Y7QUFDZ0Q7QUFRekUsU0FBU1MsV0FBVyxLQUtiO1FBTGEsRUFDekJDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFNBQVMsRUFDRyxHQUxhOztJQU16QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdiLDJFQUFjQTtJQUM3QyxNQUFNYyxXQUFXaEIseUNBQVlpQixDQUFzQjtJQUVuRGpCLDRDQUFla0IsQ0FBQztRQUNkLElBQUlGLFNBQVNHLFNBQVM7WUFDcEJILFNBQVNHLFFBQVFDO1FBQ25CO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NYLFVBQVUsT0FBTVk7WUFDZEEsRUFBRUM7WUFDRixJQUFJLEVBQUNaLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2EsU0FBUTtnQkFDbEI7WUFDRjtZQUNBWixTQUFTO1lBQ1QsTUFBTUYsU0FBU0M7UUFDakI7UUFDQWMsS0FBS1g7a0JBRUwsNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDMUIsK0RBQVFBO29CQUNQd0IsS0FBS1Q7b0JBQ0xZLFVBQVU7b0JBQ1ZiLFdBQVdBO29CQUNYYyxNQUFNO29CQUNOQyxPQUFPbkI7b0JBQ1BvQixVQUFVVCxDQUFBQSxJQUFLVixTQUFTVSxFQUFFVSxPQUFPRjtvQkFDakNHLGFBQVk7b0JBQ1pDLFlBQVk7b0JBQ1pQLFdBQVU7Ozs7Ozs4QkFFWiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDeEIseURBQU1BOzRCQUNMZ0MsTUFBSzs0QkFDTEMsTUFBSzs0QkFDTCx1Q0FBdUM7NEJBQ3ZDQyxPQUFPO2dDQUNMQyxpQkFBaUI7Z0NBQ2pCQyxPQUFPO2dDQUNQQyxXQUFXOzRCQUNiOzRCQUNBYixXQUFVOzs4Q0FFViw4REFBQ25CLGdFQUFjQTs7Ozs7OENBQ2YsOERBQUNpQztvQ0FBS2QsV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUc1Qiw4REFBQ3ZCLDJEQUFPQTs7OENBQ04sOERBQUNFLGtFQUFjQTtvQ0FBQ29DLE9BQU87OENBQ3JCLDRFQUFDdkMseURBQU1BO3dDQUNMZ0MsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTE8sVUFBVTlCLGFBQWFGLFVBQVU7d0NBQ2pDMEIsT0FBTzs0Q0FBRUMsaUJBQWlCO3dDQUFVO3dDQUNwQ1gsV0FBVTs7MERBRVYsOERBQUNwQixnRUFBY0E7Ozs7OzBEQUNmLDhEQUFDa0M7Z0RBQUtkLFdBQVU7MERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUc5Qiw4REFBQ3RCLGtFQUFjQTs4Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0ExRWdCSTs7UUFNaUJQLHVFQUFjQTs7O0tBTi9CTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb21wdC1mb3JtLnRzeD8xZWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJ1xuaW1wb3J0IHsgVXNlQ2hhdEhlbHBlcnMgfSBmcm9tICdhaS9yZWFjdCdcblxuaW1wb3J0IHsgdXNlRW50ZXJTdWJtaXQgfSBmcm9tICdAL2xpYi9ob29rcy91c2UtZW50ZXItc3VibWl0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcbmltcG9ydCB7XG4gIFRvb2x0aXAsXG4gIFRvb2x0aXBDb250ZW50LFxuICBUb29sdGlwVHJpZ2dlclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvdG9vbHRpcCdcbmltcG9ydCB7IEljb25BcnJvd0VsYm93LCBJY29uRmlsZVVwbG9hZCwgSWNvblBsdXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaWNvbnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0UHJvcHNcbiAgZXh0ZW5kcyBQaWNrPFVzZUNoYXRIZWxwZXJzLCAnaW5wdXQnIHwgJ3NldElucHV0Jz4ge1xuICBvblN1Ym1pdDogKHZhbHVlOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbiAgaXNMb2FkaW5nOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9tcHRGb3JtKHtcbiAgb25TdWJtaXQsXG4gIGlucHV0LFxuICBzZXRJbnB1dCxcbiAgaXNMb2FkaW5nXG59OiBQcm9tcHRQcm9wcykge1xuICBjb25zdCB7IGZvcm1SZWYsIG9uS2V5RG93biB9ID0gdXNlRW50ZXJTdWJtaXQoKVxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKCFpbnB1dD8udHJpbSgpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2V0SW5wdXQoJycpXG4gICAgICAgIGF3YWl0IG9uU3VibWl0KGlucHV0KVxuICAgICAgfX1cbiAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbWF4LWgtNjAgdy1mdWxsIGdyb3cgZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGJnLWJhY2tncm91bmQgcHgtOCBzbTpyb3VuZGVkLW1kIHNtOmJvcmRlciBzbTpweC0xMlwiPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgIHJvd3M9ezF9XG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvIGdldCB0aGUgYmVzdCBhbnN3ZXIsIHBsZWFzZSBhc2sgaW4gRW5nbGlzaC5cIlxuICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLVs2MHB4XSB3LWZ1bGwgcmVzaXplLW5vbmUgYmctdHJhbnNwYXJlbnQgcHgtMCBweS1bMS4zcmVtXSBmb2N1cy13aXRoaW46b3V0bGluZS1ub25lIHNtOnRleHQtc21cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTQgc206cmlnaHQtNCBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgaW5wdXQgPT09ICcnfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U0RjBGQicsXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzJhNWRlYicsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbkZpbGVVcGxvYWQgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5TZW5kIGZpbGU8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8VG9vbHRpcD5cbiAgICAgICAgICAgIDxUb29sdGlwVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgaW5wdXQgPT09ICcnfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMyYTVkZWInIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uQXJyb3dFbGJvdyAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5TZW5kIG1lc3NhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Ub29sdGlwVHJpZ2dlcj5cbiAgICAgICAgICAgIDxUb29sdGlwQ29udGVudD5TZW5kIG1lc3NhZ2U8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHRhcmVhIiwidXNlRW50ZXJTdWJtaXQiLCJCdXR0b24iLCJUb29sdGlwIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwVHJpZ2dlciIsIkljb25BcnJvd0VsYm93IiwiSWNvbkZpbGVVcGxvYWQiLCJQcm9tcHRGb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInNldElucHV0IiwiaXNMb2FkaW5nIiwiZm9ybVJlZiIsIm9uS2V5RG93biIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwiZm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInJvd3MiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzcGVsbENoZWNrIiwidHlwZSIsInNpemUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic3BhbiIsImFzQ2hpbGQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/prompt-form.tsx\n"));

/***/ })

});