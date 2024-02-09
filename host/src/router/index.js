import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Details from "details/RemoteApp";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id",
      name: "Name",
      component: Details,
      props: true,
    },
  ],
});

export default router;
