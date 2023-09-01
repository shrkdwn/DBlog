import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layouts/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: 'home',
          layout: true,
        },
      },
      {
        path: '/china-map',
        name: 'chinaMap',
        component: () => import('../views/china-map/index.vue'),
        meta: {
          title: 'chinaMap',
          layout: false,
        },
      },
      {
        path: '/wang-editor',
        name: 'wangEditor',
        component: () => import('../views/wang-editor/index.vue'),
        meta: {
          title: 'wangEditor',
          layout: false,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
