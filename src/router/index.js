import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreatorKara from "@/creators/kara/CreatorKara.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Whisperyn — A Quiet Lodge on the Edge of the Mesh",
      description:
        "A refuge for calm, craft, and camaraderie, set between forest and digital mesh.",
    },
  },
  ,
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
