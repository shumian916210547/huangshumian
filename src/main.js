import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Vant from "vant";
import "vant/lib/index.css";
import {
  simplify
} from "common/Simplify";

Vue.use(Vant);

Vue.use(ViewUI);
Vue.prototype.$bus = new Vue();
Vue.prototype.simplify = simplify;
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  if (store.state.token) {
    if (to.path == "/login") {
      next({
        path: "/my"
      });
    } else {
      next();
    }
  } else {
    if (to.path == "/forget") {
      next();
    } else {
      if (to.path == "/login") {
        next();
      } else {
        next({
          path: "/login"
        });
      }
    }
  }
});

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");