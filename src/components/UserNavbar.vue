<template>
  <!-- 從有用到usernavbar的父元件把user的資料傳進來，再取要的name跟tweetscount -->
  <div class="row user-nav">
    <div class="col-1 arrow">
      <font-awesome-icon icon="arrow-left" @click="$router.back()" />
    </div>
    <div class="col-10">
      <span class="name-text">
        <!-- 因為傳進來的都是同一個id的推文 -->
        <span class="arrow-name">{{ currentUser.name }}</span>
        <span class="arrow-tweets-count">{{ currentUser.tweetCount }}推文</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-nav {
  width: 100%;
  padding-left: 15px;
  margin-right: 15px;
}
.arrow {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 55px;
}
.name-text {
  display: flex;
  flex-direction: column;
}
.arrow-name {
  font-size: 19px;
  font-weight: 900;
}
.arrow-tweets-count {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}
</style>