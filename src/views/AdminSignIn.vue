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
        <h1 class="h3 mb-3 font-weight-normal data-title">後台登入</h1>
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
          class="btn data-submit-btn mb-3"
          type="submit"
          :disabled="isprocessing"
        >
          登入
        </button>
      </div>
      <div class="text-center mb-3 otherOption">
        <span>
          <router-link to="/signin">前台登入</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminSignIn",
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
            title: "Oh，有空白～信箱和密碼都要寫唷>_<",
          });
          return;
        }

        this.isprocessing = true;

        const response = await authorizationAPI.adminSignIn({
          account: this.account,
          password: this.password,
        });
        console.log(response);

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        // 將資料傳進去Vuex裡面
        this.$store.commit("setCurrentAdminUser", data.user);

        this.$router.push("/admin/twitter");
      } catch (error) {
        this.isprocessing = false;
        this.password = "";
        Toast.fire({
          icon: "error",
          title: "欸斗，現在無法登入，待會再試唄",
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
.otherOption {
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
}
label {
  margin-left: 10px;
}
span {
  color: 0099ff;
}
</style>