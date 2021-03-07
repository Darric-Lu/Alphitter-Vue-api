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
      role:''
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
    }
  },
  actions: {
  },
  modules: {
  }
})
