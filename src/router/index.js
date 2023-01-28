import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

/* const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    if (user) {
        next();
    } else {
        next("/login");
    }
    userStore.loadingSession = false;
}; */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      /* beforeEnter: requireAuth */
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/user/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/user/Login.vue')
    }
  ]
})

export default router
