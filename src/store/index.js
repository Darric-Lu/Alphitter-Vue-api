import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      account: '',
      email: '',
      id: -1,
      name: '',
      role: ''
    },
    currentAdminUser: {
      id: -1,
      name: "",
      email: "",
      account: "",
      role: ""
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將API取得的currentUser覆蓋掉Vuex state中的currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為true
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    },
    setCurrentAdminUser(state, currentAdminUser) {
      state.currentAdminUser = {
        ...state.currentAdminUser,
        ...currentAdminUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
  },
  modules: {
  }
})
