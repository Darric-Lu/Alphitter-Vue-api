import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { apiHelper } from './utils/helpers'
import store from './store'

Vue.config.productionTip = false

library.add(faHome, faUser, faCog, faSignInAlt, faArrowLeft, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   console.log("導航守衛啟動")
//   if (to.meta.requiresAuth) {  //to表示要進去的那頁
//     console.log("need auth")
//     apiHelper.post('/signin').then(response => {
//       console.log(response.data.success);
//       if (response.data.success) {
//         next()
//       } else {
//         next({
//           path: '/signin'
//         })
//       }
//     });

//   } else next()

// })