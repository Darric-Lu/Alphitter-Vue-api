<template>
  <div class="container py-5">
    <div>
        <img src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4" alt="">
      </div>
    <form class="w-50" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          登入Alphitter
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <input
          id="accountNumber"
          v-model="accountNumber"
          name="accountNumber"
          type="accountNumber"
          class="form-control"
          placeholder="帳號"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="密碼"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-block mb-3"
        type="submit"
      >
        登入
      </button>

      <div class="text-center mb-3 otherOption">
        <span>
          <router-link to="/signup">註冊Alphitter</router-link>
        </span>
        <span>
          •
        </span>
        <span>
          <a href="/signup">後台登入</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      accountNumber: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        accountNumber: this.accountNumber,
        password: this.password
      })

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>

<style scoped>
img {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 48%;
  top: 60px;
}

form {
  position: absolute;
  width: 540px;
  height: 253px;
  left: 25%;
  top: 140px;
}

button {
  background: #FF6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
}

.otherOption {
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
}

span {
  color: 0099FF;
}
</style>