import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import UserSetting from '../views/UserSetting'
import AdminSignIn from '../views/AdminSignIn.vue'
import TweetMain from '../views/TweetMain.vue'
import ReplyList from '../views/TweetReplyList.vue'
import Userself from '../views/Userself.vue'
import UserselfLike from '../views/UserselfLike.vue'
import Userselftweetsandreplies from '../views/UserselfTweetsandReplies'
// import UserselfFollower from '../views/UserselfFollower.vue'
// import UserselfFollowing from '../views/UserselfFollowing.vue'
import UserOther from '../views/UserOther.vue'
import store from '../store'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/setting',
    name: 'setting',
    component: UserSetting
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/signin'
  },
  {
    path: '/admin/twitter',
    name: 'admin-twitter',
    component: () => import('../views/AdminTwitterPage.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsersPage.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: AdminSignIn
  },
  {
    path: '/main',
    name: 'main',
    component: TweetMain,
  },
  {
    path: '/tweets/:id',
    name: 'reply-list',
    component: ReplyList
  },
  {
    path: '/user/self/like',
    name: 'user-self-like',
    component: UserselfLike
  },
  {
    path: '/user/self/tweetsandreplies',
    name: 'user-self-tweetsandreplies',
    component: Userselftweetsandreplies
  },
  {
    path: '/user/self/:id',
    name: 'user-self',
    component: Userself
  },
  {
    path: '/user/:id/followers',
    name: 'user-follower',
    component: () => import('../views/UserFollower.vue')
  },
  {
    path: '/user/:id/followings',
    name: 'user-self-following',
    component: () => import('../views/UserFollowing.vue')
  },
  {
    path: '/user/:id',
    name: 'user-other',
    component: UserOther
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

router.beforeEach(async (to, from, next) => {
  // 從localStorage取出token
  const token = localStorage.getItem('token')
  // 預設是尚未驗證
  let isAuthenticated = false

  // 如果有token的話才驗證
  if (token) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  
  // 如果token無效則轉址到登入頁
  if (!isAuthenticated && to.name !== 'sign-in') {
    next('/signin')
    return
  }

  if(isAuthenticated && to.name === 'sign-in') {
    next('/main')
    return
  }
  // 如果token有效則轉址到餐廳首頁
  next()
})
  // 使用dispatch呼叫vuex內的actions
  

export default router