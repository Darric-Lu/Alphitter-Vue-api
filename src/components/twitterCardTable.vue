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
          {{ tweet.User.name }} {{ tweet.User.account }} • {{ tweet.createdAt }}
        </p>
        <p @click.prevent.stop="tweetReply">{{ tweet.description }}</p>
        <div class="responseIcon pt-2">
          <span
            class="pe-5 comment"
            data-bs-toggle="modal"
            data-bs-target="#newTweet"
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
      id="newTweet"
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
            <div class="col-lg-10 tweetContent" >
              <p>
                Name @account • 2021-03-02T11:47:05.000Z
              </p>
              <p>consequatur corporis aut</p>
            </div>
            <div class="modal-img-cut">
              <img
                class="cerrunt-user-img"
                :src="currentUser.userImage"
                alt=""
              />
            </div>
            <div class="modal-new-post">
              <textarea
                class="modal-new-post"
                rows="6"
                cols="46"
                placeholder="有甚麼新鮮事"
                v-model="reply"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn tweet-submit"
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
    tweetReply() {
      this.$router.push("/reply_list");
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
.tweetContent {
  margin-left: 15px;
}
.comment .heart {
  width: 12px;
  height: 12px;
}
.tweetImage {
  /* position: absolute; */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  /* left: 48%;
  top: 60px; */
}
.cerrunt-user-img {
  width: 50px;
  height: 50px;
}
</style>