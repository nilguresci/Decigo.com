import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).use(store).mount("#app");
