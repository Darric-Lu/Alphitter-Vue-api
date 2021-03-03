<template>
  <div class="tab">
    <router-link to="/admin/users">推文</router-link>
    <router-link to="/admin/users">推文與回覆</router-link>
    <router-link to="/admin/users">喜歡的內容</router-link>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  width: 390px;
}
</style>