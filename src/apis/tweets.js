import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getSingleTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
<<<<<<< HEAD
  postTweetsLike(id) {
    return apiHelper.post(`/tweets/${id}/like`, "", {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postTweetsUnlike(id) {
    return apiHelper.post(`/tweets/${id}/unlike`, "", {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
=======
  replyTweet(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/replies`)
>>>>>>> master
  }
}