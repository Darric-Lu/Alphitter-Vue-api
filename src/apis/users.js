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
  getTopUsers() {
    return apiHelper.get(`/users/top10Users`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  editUserProfile({ currentUserId, formData }) {
    return apiHelper.put(`/users/${currentUserId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserFollowing(userId) {
    return apiHelper.get(`users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserFollower(userId) {
    return apiHelper.get(`users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserLikes(userId) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserRepliedTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  createFollowship({ id: id }) {
    return apiHelper.post('/followships', { id: id }, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFollowship(userId) {
    return apiHelper.delete(`/followships/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getOtherUsers() {
    return apiHelper.get(`/users/other`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}