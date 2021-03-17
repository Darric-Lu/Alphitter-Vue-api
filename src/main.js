import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import { apiHelper } from './utils/helpers'
import store from './store'

Vue.config.productionTip = false

// 註冊socket.io
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('https://serene-tor-37529.herokuapp.com/')
  })
)

library.add(faHome, faUser, faCog, faSignInAlt, faArrowLeft, faEnvelope, faPaperPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  // 全域監聽socket事件
  sockets: {
    connect() {
      console.log('socket connected')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
