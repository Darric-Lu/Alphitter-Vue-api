<template>
  <div class="comtainer">
    <div class="row tweetRow" v-for="tweet in tweets" :key="tweet.id">
      <div class="col-lg-1">
        <img :src="tweet.image" alt="" class="tweetImage">
      </div>
      <div class="col-lg-10 tweetContent">
        <p>{{ tweet.name }} {{ tweet.accountNumber }} • {{ tweet.createdAt }}</p>
        <p>{{ tweet.content }}</p>
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
    users: {
      type: Array,
      require: true
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