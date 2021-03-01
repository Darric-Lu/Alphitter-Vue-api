import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import AdminSignIn from '../views/AdminSignIn'

Vue.use(VueRouter)

const routes = [
  {
    path:'/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path:'/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path:'/admin/signin',
    name: 'admin-sign-in',
    component: AdminSignIn
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router