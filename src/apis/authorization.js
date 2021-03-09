import { apiHelper } from '../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password
    })
  },
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/users', { account, name, email, password, checkPassword })
  },
  adminSignIn({ email, password }) {
    return apiHelper.post('/admin/signin', {
      email,
      password
    })
  }
}