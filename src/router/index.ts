import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/view/index/index.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 全局守卫
router.beforeEach((to, from, next) => {
  return next();
});
export default router;
