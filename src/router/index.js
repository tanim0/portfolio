import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Works from '@/views/Works.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'works',
    // component: Works,
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue'),
    // children: [
    //   {
    //     path: ':id',
    //     name: 'works',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // ]
  },
  {
    path: '/works/:id',
    // path: '/works',
    name: 'works_detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkDetail.vue'),
    // children: [
    //   {
    //     path: '/1',
    //     component: () => import(/* webpackChunkName: "about" */ '../components/Footer.vue')
    //   }
    // ]
  },
  {
    path: '/resume',
    name: 'resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkResume.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
