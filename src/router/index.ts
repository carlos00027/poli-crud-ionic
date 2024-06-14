import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import AuthLogin from '../views/auth/login.vue'
import PerfonajeCrear from '../views/personaje/perFormCreate.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'auth.login'
    }
  },
  {
    path:'/personaje/crear',
    name: 'personaje.crear',
    component: PerfonajeCrear,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/auth/login',
    name: 'auth.login',
    component: AuthLogin,
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessagePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
