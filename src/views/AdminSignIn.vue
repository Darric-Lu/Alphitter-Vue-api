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
        <button class="btn data-submit-btn mb-3" type="submit">登入</button>
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
export default {
  name: "AdminSignIn",
  data() {
    return {
      accountNumber: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        accountNumber: this.accountNumber,
        password: this.password,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
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