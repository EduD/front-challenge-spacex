import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./screens/Dashboard.vue";
import Pokemon from "./screens/Pokemon.vue";

const routes = [
  { path: "/", redirect: "dashboard" },
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/pokemon", name: "pokemon", component: Pokemon },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
