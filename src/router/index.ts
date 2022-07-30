import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/view/index/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  } else {
    const tokenStr: string = useUserStore().token;
    // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
    if (!tokenStr) {
      return next('/login');
    } else {
      return next();
    }
  }
});
export default router;
