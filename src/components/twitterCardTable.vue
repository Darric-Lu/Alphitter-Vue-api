<template>
  <div class="comtainer">
    <div class="row" v-for="tweet in tweets" :key="tweet.id">
      <div class="col-lg-1 tweetImage">
        <img :src="tweet.image" alt="">
      </div>
      <div class="col-lg-10 tweetContent ml-4">
        <p>{{ tweet.name }} {{ tweet.accountNumber }} • {{ tweet.createdAt }}</p>
        <p>{{ tweet.content }}</p>
        <div class="responseIcon pt-2">
            <span class="pr-5">
              <font-awesome-icon icon="comment" />
            </span>
            <span class="pl-5">
              <font-awesome-icon icon="heart" />
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
img {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  margin-left: 10px;
  /* left: 48%;
  top: 60px; */
}
</style>