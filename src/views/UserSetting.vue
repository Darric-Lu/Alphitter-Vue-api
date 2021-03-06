<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-10 right-col">
        <form action="">
          <div>帳戶設定</div>
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
            />
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
            />
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
            />
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
            />
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
            />
          </div>

          <button
            class="btn btn-lg btn-block mb-3"
            type="submit"
            :disabled="isProcessing"
          >
            儲存
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      accountNumber: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  }
};
</script>

<style scoped>
button {
  background: #FF6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
}
</style>