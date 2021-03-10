<template>
  <div class="comtainer">
    <div class="row tweet-row m-0" v-for="tweet in tweets" :key="tweet.id">
      <div class="col-6 tweet-user-image-wrapping justify-content-start">
        <img
          :src="tweet.User.avatar"
          alt=""
          class="tweet-user-image"
          @click.prevent.stop="usersPage(tweet.UserId)"
        />
      </div>
      <div class="col-10 tweet-content">
        <span>
          <span class="tweet-user-name">
            {{ tweet.User ? tweet.User.name : "未顯示" }}
          </span>
          <span class="tweet-info">
            @ {{ tweet.User ? tweet.User.account : "未顯示" }} •
            {{ tweet.createdAt | fromNow }}
          </span>
        </span>
        <p
          @click.prevent.stop="tweetReply(tweet.id)"
          class="tweet-description m-0"
        >
          {{ tweet.description }}
        </p>
        <div class="responseIcon my-2">
          <span
            class="comment"
            data-bs-toggle="modal"
            data-bs-target="#replyTweet"
          >
            <img src="../assets/comment-alt.svg" alt="討論icon" class="mx-2" />
            <span class="tweet-info me-5">{{
              tweet.Replies ? tweet.Replies.length : ""
            }}</span>
          </span>
          <span class="heart">
            <img src="../assets/heart.svg" alt="喜愛icon" class="mx-2" />
            <span class="tweet-info">{{
              tweet.Likes ? tweet.Likes.length : ""
            }}</span>
          </span>
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
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-1">
                  <img :src="tweet.User.avatar" alt="" class="tweetImage" />
                </div>
                <div class="col-lg-10 replyContent">
                  <p>
                    {{ tweet.User.name }} {{ tweet.User.account }} •
                    {{ tweet.createdAt | fromNow }}
                  </p>
                  <p>{{ tweet.description }}</p>
                  <p>回覆給 @{{ tweet.User.account }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-1 modal-img-cut">
                  <img
                    class="current-user-img"
                    :src="currentUser.avatar"
                    alt=""
                  />
                </div>
                <div class="col-11 modal-reply-post">
                  <textarea
                    class="modal-reply-post"
                    rows="6"
                    cols="46"
                    placeholder="推你的回覆"
                    v-model="reply"
                  ></textarea>
                </div>
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
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  props: {
    tweets: {
      type: Array,
      require: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: "",
    };
  },
  methods: {
    tweetReply(tweetId) {
      console.log("tweetId:", tweetId);
      this.$router.push(`/tweets/${tweetId}`);
    },
    usersPage(userId) {
      if (userId === this.currentUser.id) {
        this.$router.push(`user/self/${userId}`);
        console.log(userId);
      } else {
        this.$router.push(`/user/${userId}`);
        console.log(userId);
      }
    },
    replyTweetSubmit() {
      if (!this.reply) {
        Toast.fire({
          icon: "error",
          title: "請填寫回覆內容",
        });
      }
    },
  },
};
</script>

<style scoped>
.tweet-row {
  padding: 15px 0 0 15px;
  border-bottom: 1px #e6ecf0 solid;
}
.tweet-user-image-wrapping {
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #c4c4c4;
  overflow: hidden;
}
.tweet-user-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transform: translate(-50%, -50%);
}
.tweet-description {
  cursor: pointer;
}
.tweetImage {
  position: relative;
  z-index: 999;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.replyContent {
  margin-left: -3px;
  padding-left: 30px;
  border-left: 2px solid #ccd6dd;
}
.comment .heart {
  width: 12px;
  height: 12px;
}
.current-user-img {
  position: relative;
  z-index: 999;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.modal-reply-post {
  border-style: none;
  padding-left: 14px;
}
.tweet-reply {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: 800;
  width: 64px;
  height: 40px;
}

/*  */

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
</style>