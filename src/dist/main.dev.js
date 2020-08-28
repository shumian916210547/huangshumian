"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _viewDesign = _interopRequireDefault(require("view-design"));

require("view-design/dist/styles/iview.css");

var _vant = _interopRequireDefault(require("vant"));

require("vant/lib/index.css");

var _Simplify = require("common/Simplify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vant["default"]);

_vue["default"].use(_viewDesign["default"]);

_vue["default"].prototype.$bus = new _vue["default"]();
_vue["default"].prototype.simplify = _Simplify.simplify;
_vue["default"].config.productionTip = false;

_router["default"].beforeEach(function (to, from, next) {
  if (window.sessionStorage.data) {
    if (to.path == "/login") {
      next({
        path: "/my"
      });
    } else {
      next();
    }
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");