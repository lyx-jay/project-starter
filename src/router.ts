import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index.vue"),
    },
    {
      path: "/blog",
      component: () => import("@/pages/blog.vue"),
    },
  ],
});
