import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue';
import StartPage from '@/views/StartPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import IdaPage from '@/views/IdaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },

  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },

  {
    path: '/start',
    name: 'Start',
    component: StartPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/ida',
    name: 'Ida',
    component: IdaPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
