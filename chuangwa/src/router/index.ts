import { createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'home',
    component:() => import('../views/home/index.vue'),
    meta: {
      layout: 'default-layout'
    },
  },
  {
    path:'/info',
    name:'info',
    component:() => import('../views/info/index.vue'),
    meta: {
      layout: 'default-layout'
    },
  },
  {
    path:'/nature',
    name:'nature',
    component:() => import('../views/nature/index.vue'),
    meta: {
      layout: 'empty-layout'
    },
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router