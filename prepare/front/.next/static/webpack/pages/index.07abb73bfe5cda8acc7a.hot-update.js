webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  isLoggedIn: false,\n  isLoggingIn: false,\n  //로그인 시도 중.\n  isLoggingOut: false,\n  //로그아웃 시도 중.\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: true //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    case 'LOG_IN_SUCCESS':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: false,\n        isLoggedIn: true,\n        //내가 바꾸고 싶은 부분만 수정\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'beomso0'\n        })\n      });\n\n    case 'LOG_IN_FAILURE':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: false\n      });\n\n    case 'LOG_OUT_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: true //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    case 'LOG_OUT_SUCCESS':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: false,\n        //내가 바꾸고 싶은 부분만 수정\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: false //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    default:\n      return state;\n  }\n}; //login action creator\n\n\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data: data\n  };\n}; //logout action\n\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n}; //action creator //action은 객체임!!\n\nvar changeNickname = function changeNickname(data) {\n  return {\n    type: 'CHANE_NICKNAME',\n    data: data\n  };\n}; // --> store.dispatch(changeNickname('mama muffin'))\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2luZ091dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwibmlja25hbWUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsYUFBVyxFQUFFLEtBRlc7QUFFSjtBQUNwQkMsY0FBWSxFQUFFLEtBSFU7QUFHSDtBQUNyQkMsSUFBRSxFQUFFLElBSm9CO0FBS3hCQyxZQUFVLEVBQUUsRUFMWTtBQU14QkMsV0FBUyxFQUFFO0FBTmEsQ0FBckI7O0FBU1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXpCUixZQUF5QjtBQUFBLE1BQVhTLE1BQVc7O0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssZ0JBQUw7QUFBdUI7QUFDbkIsNkNBQ09GLEtBRFA7QUFDYztBQUNWTixtQkFBVyxFQUFFLElBRmpCLENBRXVCOztBQUZ2Qjs7QUFJSixTQUFLLGdCQUFMO0FBQXVCO0FBQ25CLDZDQUNPTSxLQURQO0FBQ2M7QUFDVk4sbUJBQVcsRUFBRSxLQUZqQjtBQUdJRCxrQkFBVSxFQUFFLElBSGhCO0FBR3NCO0FBQ2xCRyxVQUFFLGtDQUFPSyxNQUFNLENBQUNFLElBQWQ7QUFBb0JDLGtCQUFRLEVBQUU7QUFBOUI7QUFKTjs7QUFNSixTQUFLLGdCQUFMO0FBQXVCO0FBQ25CLDZDQUNPSixLQURQO0FBQ2M7QUFDVk4sbUJBQVcsRUFBRTtBQUZqQjs7QUFJSixTQUFLLGlCQUFMO0FBQ0ksNkNBQ09NLEtBRFA7QUFDYztBQUNWTCxvQkFBWSxFQUFFLElBRmxCLENBRXdCOztBQUZ4Qjs7QUFJSixTQUFLLGlCQUFMO0FBQXdCO0FBQ3BCLDZDQUNPSyxLQURQO0FBQ2M7QUFDVkwsb0JBQVksRUFBRSxLQUZsQjtBQUV5QjtBQUNyQkYsa0JBQVUsRUFBRSxLQUhoQjtBQUlJRyxVQUFFLEVBQUU7QUFKUjs7QUFNSixTQUFLLGlCQUFMO0FBQXdCO0FBQ3BCLDZDQUNPSSxLQURQO0FBQ2M7QUFDVkwsb0JBQVksRUFBRSxLQUZsQixDQUV5Qjs7QUFGekI7O0FBSUo7QUFDSSxhQUFPSyxLQUFQO0FBcENSO0FBc0NILENBdkNELEMsQ0F5Q0E7OztBQUNPLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3hDLFNBQU87QUFDSEQsUUFBSSxFQUFFLGdCQURIO0FBRUhDLFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUgsQ0FMTSxDLENBT1A7O0FBQ08sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3JDLFNBQU87QUFDSEosUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk0sQyxDQU1QOztBQUNBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osSUFBRCxFQUFVO0FBQzdCLFNBQU87QUFDSEQsUUFBSSxFQUFFLGdCQURIO0FBRUhDLFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUgsQ0FMRCxDLENBS0c7OztBQUVZSixzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhCDspJEuXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4Qg7KSRLlxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0xPR19JTl9SRVFVRVNUJzogLy9zYWdh7JeQ7IScIGFjdGlvbiB0eXBlIG5hbWXsl5Ag66ee6rKMIOyngOyglS5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfSU5fU1VDQ0VTUyc6IC8vc2FnYeyXkOyEnCBhY3Rpb24gdHlwZSBuYW1l7JeQIOunnuqyjCDsp4DsoJUuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgIG1lOiB7IC4uLmFjdGlvbi5kYXRhLCBuaWNrbmFtZTogJ2Jlb21zbzAnIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOiAvL3NhZ2Hsl5DshJwgYWN0aW9uIHR5cGUgbmFtZeyXkCDrp57qsowg7KeA7KCVLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8v7LC47KGw6rSA6rOEIOycoOyngFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfUkVRVUVTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6IC8vc2FnYeyXkOyEnCBhY3Rpb24gdHlwZSBuYW1l7JeQIOunnuqyjCDsp4DsoJUuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJzogLy9zYWdh7JeQ7IScIGFjdGlvbiB0eXBlIG5hbWXsl5Ag66ee6rKMIOyngOyglS5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL2xvZ2luIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbG9nb3V0IGFjdGlvblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWN0aW9uIGNyZWF0b3IgLy9hY3Rpb27snYAg6rCd7LK07J6EISFcclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnQ0hBTkVfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufTsgLy8gLS0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdtYW1hIG11ZmZpbicpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})