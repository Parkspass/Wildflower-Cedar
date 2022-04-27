import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Color from "../views/Color.vue";
import Search from "../views/Search.vue";
import Shape from "../views/Shape.vue";

const routes = [
  {
    path: "/home", // just for developing rn. Change back to /
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
    path: "/", // just for developing rn. Change back to /shape
    name: "shape",
    component: Shape,
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
