import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      account: '',
      email: '',
      id: -1,
      name: '',
      avatar: '',
      cover:'',
      role: '',
      tweetCount: -1,
      Followers: [],
      Followings: []
    },
    currentAdminUser: {
      id: -1,
      name: '',
      email: '',
      account: '',
      role: ''
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
    // 在actions中可以透過參數的方式取得commit的方法
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, account, name, email, avatar, cover, role, tweetCount, Followers, Followings} = data
        commit('setCurrentUser', {
          id, 
          account, 
          name, 
          email,
          avatar,
          cover, 
          role,
          tweetCount,
          Followers,
          Followings
        })
        return true
      } catch(error) {
        console.log('error', error)
        console.error('不能取得當前使用者的資料')
      }
      return false
    }
  },
  modules: {
  }
})
