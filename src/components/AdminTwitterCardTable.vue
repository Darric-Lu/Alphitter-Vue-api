<template>
  <div class="wrapping">
    <div class="twitter-title fw-bold">推文清單</div>
    <div class="wrapping-tweets">
      <!-- 原始Tweet -->
      <!-- <div class="tweet d-flex">
        <div class="tweet-img">
          <img
            class="tweet-img-user"
            src="../assets/Icon.svg"
            alt="ALPHAcamp logo"
          />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-info">
            <span>
              <span class="tweet-content-name">ALPHAcamp</span>
              <span class="tweet-content-account">@ac</span>‧
              <span class="tweet-content-time">3小時前</span>
            </span>
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
        </div>
        <div class="delete-btn">
          <a type="button"> </a>
        </div>
      </div> -->
      <!--  -->
      <div v-for="tweet in tweets" :key="tweet.id" class="tweet d-flex">
        <div class="tweet-img">
          <img class="tweet-img-user" :src="tweet.User ? tweet.User.avatar : '未顯示'" :alt="tweet.User ? tweet.User.name : '未顯示'" />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-info">
            <span>
              <span class="tweet-content-name">{{ tweet.User ? tweet.User.name : '未顯示' }}</span>
              <span class="tweet-content-account">@{{ tweet.User ? tweet.User.account : '未顯示'}}</span> ‧
              <span class="tweet-content-time">{{ tweet.User ? tweet.User.updatedAt : '未顯示' }}</span>
            </span>
          </div>
          <p>
            {{ tweet.description }}
          </p>
        </div>
        <div
          class="delete-btn"
          @click.stop.prevent="deleteTweet(tweet.tweetId)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: {
    tweets: {
      type: Array,
      require: true
    }
  },
  methods: {
    deleteTweet(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.tweets = this.tweets.filter((tweet) => tweet.tweetId !== id);
        }
      });
    },
  },
}
</script>


<style scoped>
* {
  box-sizing: border-box;
  /* border: 1px black solid; */
}
.wrapping {
  height: 1200px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
}
.wrapping-tweets {
  height: 1144px;
  overflow-y: auto;
}
.twitter-title {
  line-height: 55px;
  padding-left: 26.5px;
  border-bottom: 1px solid #e6ecf0;
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
  height: 1px; /* cross thickness */
  background-color: black;
}

.delete-btn::before {
  transform: rotate(45deg);
}

.delete-btn::after {
  transform: rotate(-45deg);
}
</style>