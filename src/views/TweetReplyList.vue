//  GET api/tweets/:tweet_id 拿到 Replies的陣列須修改
<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10 px-0">
        <!-- 中間包含Recommendationtable  顯示全寬10/12-->
        <div class="col-12 col-lg-8 px-0 mid-col">
          <div class="mid-header row arrow">
            <div class="col-1">
              <font-awesome-icon icon="arrow-left" @click="$router.back()" />
            </div>
            <div class="col-10">
              <span>推文</span>
            </div>
          </div>
          <div class="twitterCard">
            <div class="name">
              <div class="avatar-cut">
                <img
                  :src="tweet.User ? tweet.User.avatar : ''"
                  alt="使用者大頭貼"
                  class="avatar"
                />
              </div>
              <span class="name-text">
                <span class="tweet-name">{{
                  tweet.User ? tweet.User.name : "未顯示"
                }}</span>
                <span class="tweet-accoun"
                  >@{{ tweet.User ? tweet.User.account : "未顯示" }}</span
                >
              </span>
            </div>
            <div class="text my-3">
              <div>
                {{ tweet.description }}
              </div>
              <div class="pt-3 post-time">{{ tweet.createdAt | postTime }}</div>
            </div>
            <div class="divider"></div>
            <div class="response py-2">
              <span class="response-comment">
                {{ repliesLength ? repliesLength : "0" }}</span
              >回覆
              <span class="response-be-like">
                {{ likeCount ? likeCount : "0" }} </span
              >喜歡次數
            </div>
            <div class="divider"></div>
            <div class="responseIcon pt-2">
              <span
                class="pe-5 comment"
                data-bs-toggle="modal"
                data-bs-target="#replyTweet"
              >
                <img src="../assets/comment-alt.svg" alt="" />
              </span>
              <span class="ps-5 heart">
                <img
                  @click="unLiked(tweet.id)"
                  v-if="tweet.isLike"
                  src="../assets/heart-soild.svg"
                  alt="喜愛icon"
                  class="mx-2 icon"
                />
                <img
                  @click="beLiked(tweet.id)"
                  v-else
                  src="../assets/heart.svg"
                  alt="喜愛icon"
                  class="mx-2 icon"
                />
              </span>
            </div>
          </div>
          <div class="twitterReplies">
            <!-- twitterCardTable -->
            <div
              class="row tweetReply"
              v-for="reply in replies"
              :key="reply.id"
            >
              <div class="col-1">
                <div class="avatar-cut">
                  <img :src="currentUser.avatar" alt="" />
                </div>
              </div>
              <div class="col-10 ps-4">
                <p>
                  <span class="reply-name"> Name</span>
                  <span class="reply-info"
                    >@ account • {{ reply.createdAt | fromNow }}</span
                  >
                </p>
                <p class="reply-info">
                  回覆<span class="user-reply-anme"
                    >@{{ tweet.User.name }}</span
                  >
                </p>
                <p>{{ reply.comment }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 d-none d-lg-block right-col">
          <!-- Recommendationtable 在小於md時消失 -->
          <RecommendationTable :initial-recommend-users="recommendUsers" />
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="replyTweet"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <div
                type="button"
                class="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row" v-for="reply in replies" :key="reply.id">
              <div class="col-1">
                <div class="tweetImage-cut">
                  <img :src="currentUser.avatar" alt="" class="tweetImage" />
                </div>
              </div>
              <div class="col-10 replyContent">
                <span>
                  <span class="tweet-user-name"> Name </span>
                  <span class="tweet-info">
                    @ account •
                    {{ reply.createdAt | fromNow }}
                  </span>
                </span>
                <p class="mt-1">{{ reply.comment }}</p>
                <p>
                  <span class="tweet-info">回覆給</span>
                  <span class="owner-user">@{{ tweet.User.name }}</span>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <div class="tweetImage-cut">
                  <img
                    class="tweetImage"
                    :src="currentUser.avatar"
                    alt="推文擁有者"
                  />
                </div>
              </div>
              <div class="col-10">
                <textarea
                  class="modal-reply-post"
                  rows="6"
                  cols="46"
                  placeholder="推你的回覆"
                  v-model="currentReply"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn tweet-reply"
                @click="replyTweetSubmit"
              >
                回覆
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import { fromNowFilter } from "./../utils/mixins";
import RecommendationTable from "../components/RecommendationTable";
import usersAPI from "../apis/users";
import tweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";

// GET api/tweets/:id

export default {
  name: "TweetReplyList",
  mixins: [fromNowFilter],
  components: {
    Sidebar,
    RecommendationTable,
  },
  data() {
    return {
      tweet: {},
      likeCount: "",
      repliesLength: "",
      replies: [],
      active: {
        home: "row",
        self: "row",
        setting: "row",
      },
      currentUser: {
        id: "",
        account: "",
        name: "",
        avatar: "",
        cover: "",
        email: "",
        introduction: "",
        Followers: [],
        Followings: [],
        Likes: [],
        tweetCount: "",
      },
      recommendUsers: [],
      currentReply: "",
    };
  },
  created() {
    const { id: tweetId } = this.$route.params;
    console.log("tweets/id :", tweetId);
    this.fetchTweet(tweetId);
    this.fetchCurrentUser();
    this.fetchRecommendUsers();
  },
  methods: {
    async fetchTweet(tweetId) {
      try {
        console.log("fetchTweet", tweetId);
        const response = await tweetsAPI.getSingleTweet(tweetId);
        console.log(response);
        this.tweet = response.data;
        this.replies = response.data.Replies;
        this.likeCount = this.tweet.Likes.length;
        this.repliesLength = this.tweet.Replies.length;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async fetchCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
        this.currentUser = {
          ...this.currentUser,
          ...response.data,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
    async fetchRecommendUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        // console.log("fetchRecommendUsers", response);

        this.recommendUsers = [...response.data];
        // console.log("RecommendUsers", this.recommendUsers);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推薦資料，請稍後再試",
        });
      }
    },
    async beLiked(tweetId) {
      // console.log("beLiked-tweetId", tweetId);
      try {
        const { data } = await tweetsAPI.postTweetsLike(tweetId);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.isLike = true;
        this.likeCount += 1;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法喜歡這則推文，請稍後再試",
        });
      }
    },
    async unLiked(tweetId) {
      console.log("uniked-tweetId", tweetId);
      try {
        const { data } = await tweetsAPI.postTweetsUnlike(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.isLike = false;
        this.likeCount -= 1;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消喜歡這則推文，請稍後再試",
        });
      }
    },
    replyTweetSubmit() {
      //   if (!this.reply) {
      //     Toast.fire({
      //       icon: "error",
      //       title: "請填寫回覆內容",
      //     });
      //   }
    },
  },
};
</script>

<style scoped>
.col-2 {
  position: sticky;
  top: 0;
  left: 0;
  /*好像一定要有 */
  height: 800px;
}
.col-4 {
  position: sticky;
  top: 0;
  right: 0;
}
.mid-col {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  height: auto;
}
.right-col {
  height: fit-content;
}
.arrow {
  margin-left: 15px;
}
.mid-header {
  box-sizing: border-box;
  padding: 2px;
  font-weight: bold;
  font-size: 18px;
  height: 55px;
  line-height: 55px;
}
.twitterCard {
  border: 1px solid #e6ecf0;
  width: 100%;
  height: auto;
  padding: 10px;
}
.name {
  display: flex;
}
.avatar-cut {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 5px;
}
.name-text {
  display: flex;
  flex-direction: column;
}
.divider {
  border-top: 1px solid #e6ecf0;
  width: 98%;
}
.comment .heart {
  width: 24px;
  height: 24px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
.tweetReply {
  padding: 10px;
  border-bottom: 1px solid #e6ecf0;
}
.tweet-name,
.reply-name {
  font-size: 15px;
  font-weight: 700;
}
.tweet-account,
.reply-info {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}
.user-reply-anme {
  color: #ff6600;
}
.text {
  font-size: 24px;
}
.post-time {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}
.response {
  font-size: 16px;
  color: #657786;
  font-weight: 500;
}
.response-comment,
.response-be-like {
  font-weight: 700;
  color: black;
}
.icon {
  cursor: pointer;
}
/* modal */
.tweet-user-name {
  font-weight: 700;
  font-size: 16px;
  color: #1c1c1c;
}
.tweet-info {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}
.replyContent {
  margin-left: -3px;
  padding-left: 30px;
  border-left: 2px solid #ccd6dd;
}
.modal-reply-post {
  border-style: none;
  margin-left: 20px;
}
.tweet-reply {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: 800;
  width: 64px;
  height: 40px;
}
.tweetImage-cut {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  outline: 5px #ffffff solid;
}
.tweetImage {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.owner-user {
  color: #ff6600;
}
</style>