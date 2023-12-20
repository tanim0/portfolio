import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue'),
  },
  {
    path: '/works/:id',
    name: 'works_detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkDetail.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkResume.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
