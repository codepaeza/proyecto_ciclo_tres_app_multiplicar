import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/create",
    name: "home",
    component: () => import("../components/Home"),
  },
  {
    path: "/retos",
    name: "retos",
    component: () => import("../components/Retos"),
  },
  {
    /*path: "/edit/:id",*/
    path: "/repasar",
    name: "repasar",
    component: () => import("../components/Repasar"),
  },
  {
    /*path: "/edit/:id",*/
    path: "/",
    name: "cards",
    component: () => import("../components/Cards"),
  },
  /*{
    path: "/view",
    name: "view",
    component: () => import("../components/ListComponent"),
  },
  {
    path: "/edit:id",
    name: "edit",
    component: () => import("../components/EditComponent"),
  },*/
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;


