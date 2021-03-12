<template>
  <div class="wrapping">
    <div class="twitter-title fw-bold">推文清單</div>
    <div class="wrapping-tweets">
      <div v-for="tweet in tweets" :key="tweet.id" class="tweet d-flex">
        <div class="tweet-img">
          <img
            class="tweet-img-user"
            :src="tweet.User ? tweet.User.avatar : '未顯示'"
            :alt="tweet.User ? tweet.User.name : '未顯示'"
          />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-info">
            <span>
              <span class="tweet-content-name">{{
                tweet.User ? tweet.User.name : "未顯示"
              }}</span>
              <span class="tweet-content-account"
                >@{{ tweet.User ? tweet.User.account : "未顯示" }}</span
              >
              ‧
              <span class="tweet-content-time">{{
                tweet.User ? tweet.User.updatedAt : "未顯示" | fromNow
              }}</span>
            </span>
          </div>
          <p>
            {{ tweet.description }}
          </p>
        </div>
        <div
          class="delete-btn"
          :title="tweet.id"
          @click.stop.prevent="deleteTweet(tweet.id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "../utils/helpers";
import adminAPI from "../apis/admin";

export default {
  mixins: [fromNowFilter],
  props: {
    initialTweets: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      tweets: [],
    };
  },
  watch: {
    initialTweets(newValue) {
      this.tweets = {
        ...this.tweets,
        ...newValue,
      };
    },
  },
  created() {
    this.tweets = this.initialTweets.filter((e) => {
      return e;
    });
  },
  methods: {
    async deleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.deleteAdminTweet(tweetId);

        if (data.status !== "success") {
          throw Error(data.message);
        }

        this.tweets = this.tweets.filter((tweet) => {
          return tweet.id !== tweetId;
        });

        Toast.fire({
          icon: "success",
          title: "You delete this tweet successfully!",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Oh sad, you can't delete the tweet. Try later!",
        });
      }
    },
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}
.wrapping {
  height: 100vh;
  /* border: 1px solid #e6ecf0; */
  box-sizing: border-box;
}
.wrapping-tweets {
  height: 100vw;
  overflow-y: auto;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}
.wrapping-tweets::-webkit-scrollbar {
  display: none;
}
.twitter-title {
  line-height: 55px;
  padding-left: 26.5px;
  border: 1px solid #e6ecf0;
}
.tweet {
  position: relative;
  height: 110px;
  border-bottom: 1px solid #e6ecf0;
}
.tweet-img {
  position: absolute;
  top: 15px;
  left: 18px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.tweet-img-user {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.tweet-content {
  position: absolute;
  top: 10px;
  left: 80px;
  width: 80%;
}
.tweet-content-name {
  font-weight: 700;
}
.tweet-content-account,
.tweet-content-time {
  color: #657786;
}
.tweet-content-account {
  padding: 0 0 0 5px;
}
.delete-btn {
  position: absolute;
  top: 19.5px;
  right: 19.5px;
  width: 15px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.delete-btn::before,
.delete-btn::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background-color: black;
}

.delete-btn::before {
  transform: rotate(45deg);
}

.delete-btn::after {
  transform: rotate(-45deg);
}
</style>