<template>
  <div class="container py-5">
    <div>
        <img src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4" alt="">
      </div>
    <form class="w-50" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          建立你的帳號
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

      <div class="form-label-group mb-2">
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="名稱"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
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

      <div class="form-label-group mb-3">
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="密碼確認"
          autocomplete="new-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-block mb-3"
        type="submit"
      >
        註冊
      </button>

      <div class="text-center mb-3 otherOption">
        <span>
          <router-link to="/signup">取消</router-link>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      accountNumber: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        accountNumber: this.accountNumber,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
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
</style>