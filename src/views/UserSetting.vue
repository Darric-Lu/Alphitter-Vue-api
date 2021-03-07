<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :cerruntUser="cerruntUser" />
      </div>
      <div class="row col-10 px-0">
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間包含 Recommendationtable(不顯示)  顯示全寬10/12-->
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
  </div>
</template>

<script>
const dummyCerruntUser = {
  cerruntUser: {
    account: "ClaireLi",
    name: "Claire",
    userImage:
      "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
    titleImage:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-simon-migaj-747964.jpg&fm=jpg",
    followersCount: "10",
    followingCount: "20",
    SelfIntroduction:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint.",
  },
};
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      accountNumber: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      active: {
        home: "row",
        self: "row",
        setting: "active",
      },
    };
  },
  created() {
    this.fetchCerruntUser();
  },
  methods: {
    fetchCerruntUser() {
      const {
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      } = dummyCerruntUser.cerruntUser;
      this.cerruntUser = {
        ...this.cerruntUser,
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      };
    },
  },
};
</script>

<style scoped>
button {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
}
</style>