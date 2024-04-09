import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FiestaView from '@/views/FiestaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/user/:username',
      name: 'UserProfile',
      component: ProfileView
    },
    {
      path: '/user/:username/fiesta/:fiestaid',
      name: 'fiesta',
      component: FiestaView
    }
  ]
})

export default router
