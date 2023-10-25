import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'career',
      component: () => import('@/views/Career.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('@/views/Resume.vue')
    },
  ]
})

export default router
