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
          <span
            class="tweet-user-name"
            @click.prevent.stop="usersPage(tweet.UserId)"
          >
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
            <img
              @click="importReplyData(tweet.id)"
              src="../assets/comment-alt.svg"
              alt="討論icon"
              class="mx-2 icon"
            />
            <span class="tweet-info me-5">{{ tweet.ReplyCount }}</span>
          </span>
          <span class="heart">
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
            <span class="tweet-info heart-color" v-if="tweet.isLike">{{
              tweet.likeCount
            }}</span>
            <span class="tweet-info" v-else>{{ tweet.likeCount }}</span>
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
              <div
                type="button"
                class="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></div>
            </div>
          </div>
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-1">
                <div class="tweetImage-cut">
                  <img :src="replyOnwerAvatar" alt="" class="tweetImage" />
                </div>
              </div>
              <div class="col-10 replyContent">
                <span>
                  <span class="tweet-user-name">
                    {{ replyOnwer }}
                  </span>
                  <span class="tweet-info">
                    @ {{ replyOnwerAccount }} •
                    {{ replyCreatedAt | fromNow }}
                  </span>
                </span>
                <p class="mt-1">{{ replyDescription }}</p>
                <!-- <p>
                  <span class="tweet-info">回覆給</span>
                  <span class="owner-user">@{{ replyOnwer }}</span>
                </p> -->
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row" v-for="reply in tweetReplies" :key="reply.id">
              <div class="col-1">
                <div class="tweetImage-cut">
                  <img :src="reply.User.avatar" alt="" class="tweetImage" />
                </div>
              </div>
              <div class="col-10 replyContent">
                <span>
                  <span class="tweet-user-name">
                    {{ reply.User.name }}
                  </span>
                  <span class="tweet-info">
                    @ {{ reply.User.account }} •
                    {{ reply.createdAt | fromNow }}
                  </span>
                </span>
                <p class="mt-1">{{ reply.comment }}</p>
                <p>
                  <span class="tweet-info">回覆給</span>
                  <span class="owner-user">@{{ replyOnwer }}</span>
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
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn tweet-reply"
              @click="replyTweetSubmit({ tweetId, currentReply })"
            >
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

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
      tweetId: "",
      tweetReplies: [],
      replyOnwer: "",
      replyOnwerAvatar: "",
      replyOnwerAccount: "",
      replyCreatedAt: "",
      replyDescription: "",
      // 回復推文
      currentReply: "",
      //
      presetUserAvatat: "./../assets/addPhoto.svg",
    };
  },
  methods: {
    tweetReply(tweetId) {
      console.log("tweetId:", tweetId);
      this.$router.push(`/tweets/${tweetId}`);
    },
    usersPage(userId) {
      if (userId === this.currentUser.id) {
        this.$router.push({ name: "user-self" });
        console.log(userId);
      } else {
        this.$router.push(`/user/${userId}`);
        console.log(userId);
      }
    },
    async replyTweetSubmit({ tweetId, currentReply }) {
      try {
        if (!this.currentReply) {
          Toast.fire({
            icon: "error",
            title: "請填寫推文內容",
          });
        }
        console.log(123);
        const response = await tweetsAPI.replyTweet({
          tweetId: tweetId,
          comment: currentReply,
        });

        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        console.log(response)
        //以重新整理的方法關閉modal
        setTimeout("location.reload()", 2200);
        // document.querySelector("#replyTweet").modal("hide");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "請填寫回覆內容",
        });
      }
    },
    beLiked(tweetId) {
      console.log("beLiked-tweetId", tweetId);
      this.$emit("handle-be-like", tweetId);
    },
    unLiked(tweetId) {
      console.log("uniked-tweetId", tweetId);
      this.$emit("handle-unlike", tweetId);
    },
    importReplyData(id) {
      this.replyOnwer = "";
      this.tweetReplies = [];
      this.currentReply = "";
      // console.log("import id", id);
      this.tweets.map((tweet) => {
        if (tweet.id === id) {
          // console.log("有找到", tweet);
          this.tweetReplies = [...tweet.Replies];
          this.replyOnwer = tweet.User.name;
          this.replyOnwerAccount = tweet.User.account;
          this.replyOnwerAvatar = tweet.User.avatar;
          this.replyCreatedAt = tweet.updatedAt;
          this.replyDescription = tweet.description;
          this.tweetId = tweet.id;
          // console.log("放進去", this.tweetReplies);
        }
      });
      // console.log("Replies", this.tweetReplies);
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
.tweet-user-name {
  cursor: pointer;
}
.tweet-description {
  cursor: pointer;
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
.replyContent {
  margin-left: -3px;
  padding-left: 30px;
  border-left: 2px solid #ccd6dd;
}
.comment .heart {
  width: 12px;
  height: 12px;
  cursor: pointer;
}
.icon {
  cursor: pointer;
}
.current-user-img {
  position: relative;
  /* z-index: 999; */
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.modal-reply-post {
  border-style: none;
  /* padding-left: 14px; */
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
.heart-color {
  font-weight: 600;
  color: #e0245e;
}
.modal-header {
  height: 55px;
}
.close-btn {
  position: absolute;
  top: 19.5px;
  left: 19.5px;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.close-btn::before,
.close-btn::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px; /* cross thickness */
  background-color: #ff6600;
}
.close-btn::before {
  transform: rotate(45deg);
}
.close-btn::after {
  transform: rotate(-45deg);
}
.owner-user {
  color: #ff6600;
}
</style>