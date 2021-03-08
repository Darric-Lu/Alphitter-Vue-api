<template>
  <div class="comtainer">
    <div class="row tweetRow" v-for="tweet in tweets" :key="tweet.id">
      <div class="col-lg-1">
        <img
          :src="tweet.avatar"
          alt=""
          class="tweetImage"
          @click.prevent.stop="userOther(tweet.UserId)"
        />
      </div>
      <div class="col-lg-10 tweetContent">
        <p>
          {{ tweet.User ? tweet.User.name : '未顯示'}} {{tweet.User ? tweet.User.account : '未顯示'}} • {{ tweet.createdAt }}
        </p>
        <p @click.prevent.stop="tweetReply(tweet.id)">{{ tweet.description }}</p>
        <div class="responseIcon pt-2">
          <span
            class="pe-5 comment"
            data-bs-toggle="modal"
            data-bs-target="#replyTweet"
          >
            <img src="../assets/comment-alt.svg" alt="" />
          </span>
          <span class="ps-5 heart">
            <!-- <button
              class="btn mt-3 tweetButton p-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#newTweet"
            >
              推文
            </button> -->
            <img src="../assets/heart.svg" alt="" />
          </span>
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
                <img src="https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg" alt="" class="tweetImage" />
              </div>
              <div class="col-lg-10 replyContent">
                <p>Name @account • 2021-03-02T11:47:05.000Z</p>
                <p>consequatur corporis aut</p>
                <p>回覆給 @apple</p>
              </div>
            </div>
            <div class="row">
              <div class="col-1 modal-img-cut">
                <img
                  class="current-user-img"
                  :src="currentUser.userImage"
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
</template>

<script>


export default {
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
      console.log("tweetId:", tweetId)
      this.$router.push(`/tweets/${tweetId}`);
    },
    userOther(userId) {
      this.$router.push(`/user/:${userId}`);
      console.log(userId);
    },
    replyTweetSubmit() {},
  },
};
</script>

<style scoped>
.tweetImage {
  margin-right: 15px;
}
.replyContent {
  margin-left: -3px;
  padding-left: 30px;
  border-left: 2px solid #CCD6DD;
}
.comment .heart {
  width: 12px;
  height: 12px;
}
.tweetImage {
  position: relative;
  z-index: 999;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* margin-left: 10px; */
  /* left: 48%;
  top: 60px; */
}
.current-user-img {
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
</style>