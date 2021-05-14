import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
