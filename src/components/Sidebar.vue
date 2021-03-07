<template>
  <div class="d-flex flex-column wrapping">
    <!-- Alpha logo 連結至首頁 -->
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
    <!-- 連結至首頁 -->
    <router-link :to="{ name: 'main' }" class="nav-link">
      <div
        class="twitter row mt-4 d-flex justify-content-center"
        :class="active.hmoce"
      >
        <div class="twitter-icon col-2">
          <font-awesome-icon icon="home" />
        </div>
        <div class="nav-content col-8 d-none d-md-block">
          <p>首頁</p>
        </div>
      </div>
    </router-link>
    <!-- 個人資料 -->
    <router-link :to="{ name: 'user-self' }" class="nav-link">
      <div
        class="twitter row mt-4 d-flex justify-content-center"
        :class="active.self"
      >
        <div class="twitter-icon col-2">
          <font-awesome-icon icon="user" />
        </div>
        <div class="nav-content col-8 d-none d-md-block">
          <p>個人資料</p>
        </div>
      </div>
    </router-link>
    <!-- 個人資料 -->
    <router-link :to="{ name: '' }" class="nav-link">
      <div
        class="twitter row mt-4 d-flex justify-content-center"
        :class="active.setting"
      >
        <div class="twitter-icon col-2">
          <font-awesome-icon icon="cog" />
        </div>
        <div class="nav-content col-8 d-none d-md-block">
          <p>設定</p>
        </div>
      </div>
    </router-link>
    <!-- 推文 -->
    <button
      class="btn mt-3 tweetButton p-0"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#newTweet"
    >
      推文
    </button>

    <!-- 登出 -->
    <div class="mt-auto">
      <router-link :to="{ name: 'admin-users' }" class="nav-link">
        <div class="logout row mt-3 d-flex justify-content-center">
          <div class="logout-icon col-2">
            <font-awesome-icon icon="sign-in-alt" />
          </div>
          <div class="userCard-content col-8 d-none d-md-block" @click.stop.prevent="logout">
            <p>登出</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 推文  Modal -->
    <div
      class="modal fade"
      id="newTweet"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div class="modal-body">
            <span class="textarea">
              <img
                src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
                alt=""
              />
              <textarea
                class="form-control"
                placeholder="有甚麼新鮮事?"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </span>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-secondary tweetSubmit"
              data-bs-dismiss="modal"
            >
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: {
      type: Object,
      default: () => ({
        home: "",
        self: "",
        setting: "",
      }),
    },
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
};
</script>

<style scoped>
.wrapping {
  height: 1200px;
  box-sizing: border-box;
}
.row {
  color: rgb(20, 20, 20);
}
.row:hover {
  color: rgb(255, 102, 0, 1);
}
.logo-img {
  width: 30px;
  height: 100%;
}
.twitter-icon {
  position: relative;
}
.tweetButton {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 80%;
  height: 45px;
}
.tweetSubmit {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
}
/* .textarea {
  display: flex;
} */
/* textarea {
  border-style: none;
} */
.logout {
  justify-content: flex-end;
}
.nav-content {
  font-size: 1rem;
  font-weight: 800;
}
.active {
  color: #ff6600;
}
</style>