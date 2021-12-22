import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faShoppingBag,
  faFilm,
  faPizzaSlice,
  faBiking,
  faLaptopCode,
  faBroom,
  faIcons,
  faObjectGroup,
  faCat,
  faPumpSoap,
  faBell,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
//import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBook);
library.add(faShoppingBag);
library.add(faFilm);
library.add(faPizzaSlice);
library.add(faBiking);
library.add(faLaptopCode);
library.add(faBroom);
library.add(faIcons);
library.add(faObjectGroup);
library.add(faCat);
library.add(faPumpSoap);
library.add(faBell);
library.add(faBan);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(library)
  .mount("#app");
