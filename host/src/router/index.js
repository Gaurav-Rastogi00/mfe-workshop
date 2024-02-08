import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Home",
      name: "home",
      component: App,
      children: [{ path: ":title", name: "title", component: App }],
    },
    { path: "/:pathMatch(.*)", component: NotFoundVue },
  ],
});

export default router;
