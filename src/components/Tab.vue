<template>
  <div class="tab mt-5">
    <div class="tab-link"><router-link to="/user/self">推文</router-link></div>
    <div class="tab-link">
      <router-link to="/user/self/tweetsandreplies">推文與回覆</router-link>
    </div>
    <div class="tab-link">
      <router-link to="/user/self/like">喜歡的內容</router-link>
    </div>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  width: 390px;
  border-bottom: 2px solid #e6ecf0;
}
.tab-link {
  display: flex;
  justify-content: center;
  width: 130px;
  padding-bottom: 15px;
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