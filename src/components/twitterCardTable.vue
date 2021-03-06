<template>
  <div class="comtainer">
    <div class="row tweetRow" v-for="tweet in tweets" :key="tweet.id">
      <div class="col-lg-1">
        <img :src="tweet.avatar" alt="" class="tweetImage" @click.prevent.stop="userOther(tweet.UserId)">
      </div>
      <div class="col-lg-10 tweetContent">
        <p>{{ tweet.User.name }} {{ tweet.User.account }} • {{ tweet.createdAt }}</p>
        <p @click.prevent.stop="tweetReply">{{ tweet.description }}</p>
        <div class="responseIcon pt-2">
            <span class="pe-5 comment">
              <img src="../assets/comment-alt.svg" alt="">
            </span>
            <span class="ps-5 heart">
              <img src="../assets/heart.svg" alt="">
            </span>
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
      require: true
    },
  },
  methods: {
    tweetReply() {
      this.$router.push('/reply_list')
    },
    userOther(userId) {
      this.$router.push(`/user/:${userId}`)
      console.log(userId)
    }
  }
}
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
</style>