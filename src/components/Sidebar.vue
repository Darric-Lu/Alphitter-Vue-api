<template>
  <div class="container">
    <div>
        <img src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4" alt="">
    </div>
    <nav>
      <span>
        <font-awesome-icon icon="home" />
        <button type="button" class="btn btn-link">首頁</button>
      </span>
      <span>
        <font-awesome-icon icon="user" />
        <button type="button" class="btn btn-link">個人資料</button>
      </span>
      <span>
        <font-awesome-icon icon="cog" />
        <button type="button" class="btn btn-link">設定</button>
      </span>
      <button
          class="btn btn-sm btn-block mt-3"
          type="button"
        >
          推文
      </button>
      <span class="logout">
        <font-awesome-icon icon="sign-in-alt" />
        <button type="button" class="btn btn-link">登出</button>
      </span>
    </nav>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  height: 1196px;
}
img {
  position: absolute;
  width: 50px;
  height: 50px;
  /* left: 48%;
  top: 60px; */
}
nav {
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  width: 100%;
  height: 240px;
  top: 78px;
}
.btn-block {
  background: #FF6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 45px;
}
.logout {
  justify-content: flex-end;
}
</style>