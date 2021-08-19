import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Logar from '../views/Logar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Logar',
    name: 'Logar',
    component: Logar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
