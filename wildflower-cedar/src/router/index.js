import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Color from "../views/Color.vue";
import Search from "../views/Search.vue";
import Shape from "../views/Shape.vue";
import Leaves from "../views/Leaves.vue";

const routes = [
  {
    path: "/", // just for developing rn. Change back to /
    name: "home",
    component: Home,
  },
  {
    path: "/color",
    name: "color",
    component: Color,
  },
  {
    path: "/search", // just for developing rn. Change back to /search
    name: "search",
    component: Search,
  },
  {
    path: "/shape", // just for developing rn. Change back to /shape
    name: "shape",
    component: Shape,
  },
  {
    path: "/leaves", // just for developing rn. Change back to /shape
    name: "leaves",
    component: Leaves,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
