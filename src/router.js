import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'halls',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/halls',
          name: 'halls',
          component: () => import(/* webpackChunkName: "demo" */ './views/Halls.vue')
        },
        {
          path: '/halls/create',
          name: 'create-hall',
          component: () => import(/* webpackChunkName: "demo" */ '@/views/NewHall.vue')
        },
        {
          path: "/halls/:id/",
          name: "view-hall",
          component: () => import(/* webpackChunkName: "demo" */ "@/views/HallView")
        },
        {
          path: '/lectures',
          name: 'lectures',
          component: () => import(/* webpackChunkName: "demo" */ './views/Lectures.vue')
        },
        {
          path: '/lectures/create',
          name: 'create-lecture',
          component: () => import(/* webpackChunkName: "demo" */ '@/views/NewLecture.vue')
        },
        {
          path: "/lectures/:id/",
          name: "view-lecture",
          component: () => import(/* webpackChunkName: "demo" */ "@/views/LectureView")
        },
        {
          path: '/users',
          name: 'users',
          component: () => import(/* webpackChunkName: "demo" */ './views/Users.vue')
        },
        {
          path: '/users/create',
          name: 'create-user',
          component: () => import(/* webpackChunkName: "demo" */ '@/views/NewUser.vue')
        },
        {
          path: "/users/:id/",
          name: "view-user",
          component: () => import(/* webpackChunkName: "demo" */ "@/views/UserView")
        },
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
