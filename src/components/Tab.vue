<template>
  <div class="tab">
    <div class="tab-link"><router-link to="/user/self">推文</router-link></div>
    <div class="tab-link"><router-link to="/user/self/tweetsandreplies">推文與回覆</router-link></div>
    <div class="tab-link"><router-link to="/user/self/like">喜歡的內容</router-link></div>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  width: 390px;
}
.tab-link {
  display: flex;
  justify-content: center;
  width: 130px;
}
.tab-link:hover {
  border-bottom: 2px solid #ff6600;
}
a {
  color: #657786;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: #ff6600;
}
</style>