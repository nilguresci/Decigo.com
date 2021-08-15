import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RegisterPage from "../views/RegisterPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
