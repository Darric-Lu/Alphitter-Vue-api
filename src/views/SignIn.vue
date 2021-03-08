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
        <label for="accountNumber">帳號</label>
        <input
          id="accountNumber"
          v-model="accountNumber"
          name="accountNumber"
          type="accountNumber"
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
      accountNumber: "",
      password: "",
      isprocessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.accountNumber || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        this.isprocessing = true;

        const response = await authorizationAPI.signIn({
          account: this.accountNumber,
          password: this.password,
        });
        console.log(response);

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
          title: "無法登入，請稍後再試",
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