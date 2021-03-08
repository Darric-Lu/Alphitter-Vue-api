import { apiHelper } from '../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password
    })
  },
  signUp({ account, name, email, password, passwordCheck }){
    return apiHelper.post('/users', { account, name, email, password, passwordCheck })
  },
  adminSignIn({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  }
}