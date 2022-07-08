import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/User-list.vue'

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/edit-user/:id',
    name: 'Edit-user',
    component: () => import('../views/Edit-user.vue')
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
