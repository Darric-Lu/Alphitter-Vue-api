<template>
  <div class="container d-flex flex-column align-items-center">
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
        alt=""
      />
    </div>
    <form class="signup-data" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal data-title">建立你的帳號</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="accountNumber">帳號</label>
        <input
          id="accountNumber"
          v-model="account"
          name="account"
          type="account"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
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
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="checkPassword"
          name="checkPassword"
          type="password"
          class="form-control"
          autocomplete="new-password"
        />
      </div>
      <div class="btn-wrapping">
        <button
          class="btn mb-3 data-submit-btn"
          type="submit"
          :disabled="isProcessing"
        >
          註冊
        </button>
      </div>
      <div class="text-center mb-3 otherOption">
        <span>
          <router-link class="cancel-btn" :to="{ name: 'sign-in' }"
            >取消</router-link
          >
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果有任何欄位為空，則使用Toast提示
        // 然後return不繼續往後執行
        if (
          !this.account ||
          !this.email ||
          !this.password ||
          !this.password ||
          !this.checkPassword
        ) {
          Toast.fire({
            icon: "warning",
            title: "拜偷!!每一欄都要寫!!",
          });
          return;
        }

        // 助教說要修改的地方：輸入密碼錯誤會跳帳號被註冊過的提示與事實不相符合
        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "嘿～兩次密碼要打一樣唷～",
          });
          return;
        }
        this.isProcessing = true;

        const response = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });
        // console.log(response);

        const { data } = response;
        // console.log({ data });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        // 將資料傳進去Vuex裡面
        this.$store.commit("setCurrentUser", data.user);

        Toast.fire({
          icon: "success",
          title: "註冊成功!!歡迎歡迎～",
        });
        // 註冊成功導入登入畫面
        this.$router.push("/signin");
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "拍謝，該帳號或email被註冊過啦，請換一個唄",
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
  margin-top: 30px;
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
.cancel-btn {
  font-weight: 700;
}
</style>