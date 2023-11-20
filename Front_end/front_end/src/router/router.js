import { createWebHistory, createRouter } from "vue-router";
import Dangnhap from "../components/Dangnhap.vue";
import Dangky from "../components/Dangky.vue";
import DSND from "../components/DSND.vue";
import Trangchu from "../views/Trangchu.vue";
import ProductFrom from "../components/ProductFrom.vue";
const routes = [
  {
    path: "/register",
    name: "register",
    component: Dangky,
  },
  {
    path: "/",
    name: "dangnhap",
    component: Dangnhap,
  },
  {
    path: "/trangchu",
    name: "home",
    component: Trangchu,
  },
  {
    path: "/themsp",
    name: "them",
    component: ProductFrom,
  },
  {
    path: "/dsnd",
    name: "DSND",
    component: DSND,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
