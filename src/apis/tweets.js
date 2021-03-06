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
  postTweet({ description }) {
    return apiHelper.post('/tweets', { description }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postTweetsLike(id) {
    return apiHelper.post(`/tweets/${id}/like`, "", {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postTweetsUnlike(id) {
    return apiHelper.post(`/tweets/${id}/unlike`, "", {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  replyTweet({ tweetId: tweetId, comment: comment }) {
    console.log("api", tweetId, comment)
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment: comment }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}