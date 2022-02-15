import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../views/CountriesList.vue";

const routes = [
  {
    path: "/",
    name: "CountriesList",
    component: CountriesList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),

  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
