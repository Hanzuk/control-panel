import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "reports" */ '../views/home/Dashboard.vue'
          ),
      },
      {
        path: 'reports',
        name: 'reports',
        component: () =>
          import(/* webpackChunkName: "reports" */ '../views/home/Reports.vue'),
      },
      {
        path: 'security',
        name: 'security',
        component: () =>
          import(
            /* webpackChunkName: "security" */ '../views/home/Security.vue'
          ),
      },
      {
        path: 'settings',
        name: 'settings',
        component: () =>
          import(
            /* webpackChunkName: "settings" */ '../views/home/Settings.vue'
          ),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
