import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue';
import StartPage from '@/views/StartPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import IdaPage from '@/views/IdaPage.vue';
import OriginPage from '@/views/OriginPage.vue';
import PassengerPage from '@/views/PassengerPage.vue';
import SeatPage from '@/views/SeatPage.vue';
import PaymentPage from '@/views/PaymentPage.vue';
import ReservationPage from '@/views/ReservationPage.vue';
import HelpPage from '@/views/HelpPage.vue';
import FlightPage from '@/views/FlightPage.vue';

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
  },
  {
    path: '/origin',
    name: 'Origin',
    component: OriginPage
  },
  {
    path: '/passenger',
    name: 'Passenger',
    component: PassengerPage
  },
  {
    path: '/seat',
    name: 'Seat',
    component: SeatPage
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentPage
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: ReservationPage
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: 'flight',
    name: 'Flight',
    component: FlightPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
