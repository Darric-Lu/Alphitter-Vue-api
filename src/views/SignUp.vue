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
        :disabled="isProcessing"
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
import authorizationAPI from "../apis/authorization"
import { Toast } from "../utils/helpers"

export default {
  name: "SignUp",
  data() {
    return {
      accountNumber: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果有任何欄位為空，則使用Toast提示
        // 然後return不繼續往後執行
        if (!this.accountNumber || !this.email || !this.password || !this.password || !this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '請填寫完整',
          });
          return;
        }

        this.isProcessing = true

        const response = await authorizationAPI.signUp({
          account: this.accountNumber,
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })
        console.log(response)

        const { data } = response
        console.log({ data })
        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.$router.push('/main');
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法註冊帳號，請稍候再試'
        })
      }
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