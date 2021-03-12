<template>
  <div class="container d-flex flex-column align-items-center">
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
        alt=""
      />
    </div>
    <form class="signin-data" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal data-title">登入Alphitter</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="account"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        />
      </div>
      <div class="btn-wrapping">
        <button
          class="btn mb-3 data-submit-btn"
          :disabled="isprocessing"
          type="submit"
        >
          登入
        </button>
      </div>
      <div class="text-center mb-3 otherOption">
        <span>
          <router-link to="/signup">註冊Alphitter</router-link>
        </span>
        <span class="mx-2"> • </span>
        <span>
          <router-link to="/admin/signin">後台登入</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "SignIn",
  data() {
    return {
      account: "",
      password: "",
      isprocessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "Oh，有空白～帳號和密碼都要寫唷>_<",
          });
          return;
        }

        this.isprocessing = true;

        const response = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });
        // console.log(response);

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        // 將資料傳進去Vuex裡面
        this.$store.commit("setCurrentUser", data.user);

        this.$router.push("/main");
      } catch (error) {
        this.isprocessing = false;
        this.password = "";
        Toast.fire({
          icon: "error",
          title: "欸斗，帳號密碼可能打錯囉，再想想看>_<",
        });
      }
    },
  },
};
</script>

<style scoped>
img {
  margin-top: 65px;
  width: 50px;
  height: 50px;
}

form {
  width: 540px;
  height: 253px;
}

.data-submit-btn {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 540px;
  margin-top: 14px;
}
.data-title {
  margin-top: 30px;
  font-weight: 700;
  font-size: 23px;
}
.form-label-group {
  background-color: #f5f8fa;
  border-bottom: 2px #657786 solid;
  margin: 20px 0 0 0;
  height: auto;
  text-decoration: none;
}
input {
  background-color: #f5f8fa;
  border-style: none;
}
input:focus {
  background-color: #f5f8fa;
}
label {
  margin-left: 10px;
}
.otherOption {
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  color: rgb(0, 153, 255, 1);
}

span {
  color: 0099ff;
}
</style>