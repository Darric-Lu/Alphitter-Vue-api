<template>
  <div
    class="d-flex flex-column wrapping align-items-start align-items-md-stretch"
  >
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
        :class="active.home"
      >
        <div class="twitter-icon col-2">
          <font-awesome-icon icon="home" />
        </div>
        <div class="nav-content col-8 d-none d-md-block">
          <p>首頁</p>
        </div>
      </div>
    </router-link>
    <!-- 公開聊天室 -->
    <router-link :to="{ name: 'chatroom' }" class="nav-link">
      <div
        class="twitter row mt-4 d-flex justify-content-center"
        :class="active.chatroom"
      >
        <div class="twitter-icon col-2">
          <div class="notice-point" v-show="!active.chatroom"></div>
          <font-awesome-icon icon="envelope" />
        </div>
        <div class="nav-content col-8 d-none d-md-block">
          <p>公開聊天室</p>
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
    <!-- 設定 -->
    <router-link :to="{ name: 'setting' }" class="nav-link">
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
    <div class="mt-auto sign-out">
      <router-link :to="{ name: 'admin-users' }" class="nav-link">
        <div class="logout row mt-3 d-flex justify-content-center">
          <div class="logout-icon col-2">
            <font-awesome-icon icon="sign-in-alt" />
          </div>
          <div
            class="userCard-content col-8 d-none d-md-block"
            @click.stop.prevent="logout"
          >
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
      aria-labelledby="exampleModalLabe1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <div
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-img-cut">
              <img class="cerrunt-user-img" :src="currentUser.avatar" alt="" />
            </div>
            <div class="modal-new-post">
              <textarea
                class="modal-new-post"
                rows="6"
                cols="46"
                placeholder="有甚麼新鮮事"
                v-model="description"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn tweet-submit"
              @click="newTweetSubmit"
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
import tweetsAPI from "../apis/tweets";
import { PostToast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  props: {
    active: {
      type: Object,
      default: () => ({
        home: "",
        self: "",
        setting: "",
        chatroom: "",
      }),
    },
  },
  data() {
    return {
      description: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async newTweetSubmit() {
      try {
        this.description = this.description.trim();
        //錯誤提示:無內容
        if (!this.description.length) {
          PostToast.fire({
            icon: "error",
            title: "請輸入正確內容",
          });
          return;
        } else if (this.description.length > 140) {
          //錯誤提示:超出140字數
          PostToast.fire({
            icon: "error",
            title: "請勿超過140字數，目前" + this.description.length + "字",
          });
          console.log("請勿超過140字數");
          return;
        }

        // 向 API 發送 POST 請求
        const description = this.description;
        const response = await tweetsAPI.postTweet({ description });
        console.log("post tweet:", response);

        //成功提示
        PostToast.fire({
          icon: "success",
          title: "發文成功，enjoy!!",
        });

        //以重新整理的方法關閉modal
        setTimeout("location.reload()", 2200);
        // console.log(
        //   "tweet",
        //   this.description,
        //   "length",
        //   this.description.length
        // );
      } catch (error) {
        PostToast.fire({
          icon: "error",
          title: "目前無法新增推文，請稍後再試～",
        });
      }
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
.wrapping {
  height: 600px;
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

.logout {
  justify-content: flex-end;
}
.sign-out {
  position: fixed;
  bottom: 20px;
}
.nav-content {
  font-size: 1rem;
  font-weight: 800;
}
.active {
  color: #ff6600;
}
/*  modal */
.modal-body {
  display: grid;
  grid-template-columns: 70px 1fr;
}
.modal-img-cut {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
}
.cerrunt-user-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
textarea {
  border-style: none;
}
.tweet-submit {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: 800;
  width: 64px;
  height: 40px;
}
.modal-footer {
  border-style: none;
}
.notice-point {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(255, 0, 0);
  position: absolute;
  right: -1px;
}
</style>
