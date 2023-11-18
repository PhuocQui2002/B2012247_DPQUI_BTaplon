import { createWebHistory, createRouter } from "vue-router";
import Dangnhap from "../components/Dangnhap.vue";
import Dangky from "../components/Dangky.vue";
import DSND from "../components/DSND.vue";
import Trangchu from "../views/Trangchu.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: Dangky,
  },
  {
    path: "/login",
    name: "dangnhap",
    component: Dangnhap,
  },
  {
    path: "/",
    name: "home",
    component: Trangchu,
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
