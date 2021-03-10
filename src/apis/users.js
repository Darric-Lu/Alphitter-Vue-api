import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/users/currentUser', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserTweet(userId) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
<<<<<<< HEAD
  getTopUsers() {
    return apiHelper.get(`/users/top10Users`, {
=======
  editUserProfile({ currentUserId, formData }) {
    return apiHelper.put(`/users/${currentUserId}`, formData, {
>>>>>>> master
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}