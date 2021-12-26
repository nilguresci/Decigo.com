import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ProfilePage2 from "../views/ProfilePage2.vue";
import AdminPage from "../views/AdminPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/profilepage",
    name: "ProfilePage2",
    component: ProfilePage2,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
