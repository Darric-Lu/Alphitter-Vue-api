<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :cerruntUser="cerruntUser" />
      </div>
      <div class="col-10 px-0">
        <div class="title">帳戶設定</div>
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間包含 Recommendationtable(不顯示)  顯示全寬10/12-->
          <form action="" class="data-from">
            <!-- 表單功能未嘗試寫功能 -->
            <div class="form-group user-data">
              <label for="accountNumber" class="ms-2 fw-bold">帳號</label>
              <input
                v-model="cerruntUser.name"
                id="accountNumber"
                type="accountNumber"
                class="form-control"
                name="accountNumber"
                autocomplete="username"
                autofocus
                required
              />
            </div>

            <div class="form-group user-data">
              <label for="name" class="ms-2 fw-bold">名稱</label>
              <input
                v-model="cerruntUser.name"
                id="accountNumber"
                type="text"
                class="form-control"
                name="name"
                autocomplete="username"
                autofocus
                required
              />
            </div>

            <div class="form-group user-data">
              <label for="email" class="ms-2 fw-bold">Email</label>
              <input
                v-model="cerruntUser.name"
                id="email"
                type="email"
                class="form-control"
                name="email"
                autocomplete="email"
                required
              />
            </div>

            <div class="form-group user-data">
              <label for="password" class="ms-2 fw-bold">密碼</label>
              <input
                v-model="cerruntUser.name"
                id="password"
                type="password"
                class="form-control"
                name="password"
                autocomplete="new-password"
                required
              />
            </div>

            <div class="form-group user-data">
              <label for="password-check" class="ms-2 fw-bold">密碼確認</label>
              <input
                v-model="cerruntUser.name"
                id="password-check"
                type="password"
                class="form-control"
                name="password"
                autocomplete="new-password-check"
                required
              />
            </div>
            <div class="data-footer d-flex flex-row-reverse">
              <button class="btn mb-3" type="submit" :disabled="isProcessing">
                儲存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// dummyCerruntUser 未定義完整
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
.title {
  height: 55px;
  line-height: 55px;
  padding-left: 24px;
  font-weight: 700;
  font-size: 19px;
  border-bottom: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}
.mid-col {
  padding: 5px;
  height: 1200px;
  border-left: 1px solid #e6ecf0;
}
.data-footer {
  margin-top: 30px;
}
button {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 122px;
  height: 50px;
  font-size: 18px;
}

.user-data {
  background-color: #f5f8fa;
  border-bottom: 2px #657786 solid;
  margin: 32px 0 0 16px;
  text-decoration: none;
}
input {
  background-color: #f5f8fa;
  border-style: none;
}
input:focus {
  background-color: #f5f8fa;
}
</style>