import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ProfilePage2 from "../views/ProfilePage2.vue";
import AdminPage from "../views/AdminPage.vue";
import store from "store";

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
    meta: {
      adminRoute: true,
    },
  },
  {
    path: "/:id",
    name: "HomeWithId",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAdmin = store.get("userInfo") && store.get("userInfo").isAdmin;
  console.log("isAdmin", isAdmin);
  if (to.matched.some((record) => record.meta.adminRoute) && !isAdmin) {
    alert("Sadece admin bu sayfaya erişebilir");
    next("/");
  }
  if (isAdmin && to.matched.some((record) => !record.meta.adminRoute)) {
    next("/admin");
  }
  next();
});

export default router;
