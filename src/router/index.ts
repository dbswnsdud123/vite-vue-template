import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Career',
      component: () => import('@/views/Career.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('@/views/Career.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio.vue')
    }
  ]
})

export default router
