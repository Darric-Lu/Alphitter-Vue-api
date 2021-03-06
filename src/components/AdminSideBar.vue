<template>
  <nav class="d-flex flex-column wrapping">
    <div class="twitter row mt-4 d-flex justify-content-center">
      <div class="twitter-icon col-2 me-3 me-md-0 ms-md-3">
        <img
          class="logo-img"
          src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
          alt="ALPHAcamp logo"
        />
      </div>
      <div class="twitter-content col-8 d-none d-md-block"></div>
    </div>
    <router-link :to="{ name: 'admin-twitter' }" class="nav-link">
      <div
        class="twitter row mt-4 d-flex justify-content-center"
        :class="active.twitterContent"
      >
        <div class="twitter-icon col-2">
          <font-awesome-icon icon="home" />
        </div>
        <div class="twitter-content col-8 d-none d-md-block">
          <p>推文清單</p>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'admin-users' }" class="nav-link">
      <div
        class="userCard row mt-3 d-flex justify-content-center"
        :class="active.userContent"
      >
        <div class="userCard-icon col-2">
          <font-awesome-icon icon="user" />
        </div>
        <div class="userCard-content col-8 d-none d-md-block">
          <p>使用者列表</p>
        </div>
      </div>
    </router-link>
    <div class="mt-auto">
      <router-link :to="{ name: 'admin-users' }" class="nav-link">
        <div class="logout row mt-3 d-flex justify-content-center">
          <div class="logout-icon col-2">
            <font-awesome-icon icon="sign-in-alt" />
          </div>
          <div class="userCard-content col-8 d-none d-md-block">
            <p>登出</p>
          </div>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.wrapping {
  height: 1200px;
  box-sizing: border-box;
}
.twitter-icon {
  position: relative;
}
.logo-img {
  width: 30px;
  height: 100%;
}
.row {
  color: rgb(20, 20, 20);
}

.row:hover {
  color: rgb(255, 102, 0, 1);
}
.logout {
  justify-content: flex-end;
}
.twitter-content,
.userCard-content {
  font-size: 1rem;
  font-weight: 800;
}
.active {
  color: #ff6600;
}
</style> 

<script>
export default {
  name: "AdminSideBar",
  props: {
    active: {
      type: Object,
      default: () => ({
        twitterContent: "",
        userContent: "",
      }),
    },
  },
};
</script>