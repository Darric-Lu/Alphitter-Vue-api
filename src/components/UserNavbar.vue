// 從有用到usernavbar的父元件把user的資料傳進來，再取要的name跟tweetscount
<template>
  <div class="row userNav">
    <div class="col-lg-1 arrow">
      <font-awesome-icon icon="arrow-left" />
    </div>
    <div class="col-lg-11">
      <span class="name-text">
        <!-- 因為傳進來的都是同一個id的推文 -->
        <!-- <span>{{ tweets[0].User.name }}</span> -->
        <!-- <span>{{ tweets.length }} 推文</span> -->
      </span>
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
  },
};
</script>

<style scoped>
.userNav {
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
}
.arrow {
  display: flex;
  align-items: center;
}
.name-text {
  display: flex;
  flex-direction: column;
}
</style>