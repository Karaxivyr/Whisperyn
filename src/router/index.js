import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreatorKara from "@/views/creators/CreatorKara.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/kara", name: "creator-kara", component: CreatorKara },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
