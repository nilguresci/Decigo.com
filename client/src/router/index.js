import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProfilePage from "../views/ProfilePage.vue";

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
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
