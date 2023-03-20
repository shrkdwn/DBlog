import { createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import AppLayout from '@/layouts/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:AppLayout,
    children:[
      {
        path:'/',
        name:'home',
        component:() => import('../views/home/index.vue')
      },
      {
        path:'/info',
        name:'info',
        component:() => import('../views/info/index.vue')
      },
      {
        path:'/nature',
        name:'nature',
        component:() => import('../views/nature/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router