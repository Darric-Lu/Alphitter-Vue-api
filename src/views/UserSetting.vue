<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="col-10 px-0">
        <div class="title">帳戶設定</div>
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間包含 Recommendationtable(不顯示)  顯示全寬10/12-->
          <form action="" class="data-from" @submit.stop.prevent="handleSubmit">
            <!-- 表單功能未嘗試寫功能 -->
            <div class="form-group user-data">
              <label for="account" class="ms-2 fw-bold">帳號</label>
              <input
                v-model="currentUser.account"
                id="account"
                type="account"
                class="form-control"
                name="account"
                autocomplete="username"
                autofocus
                required
              />
            </div>

            <div class="form-group user-data">
              <label for="name" class="ms-2 fw-bold">名稱</label>
              <input
                v-model="currentUser.name"
                id="name"
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
                v-model="currentUser.email"
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
                v-model="password"
                id="password"
                type="password"
                class="form-control"
                name="password"
                autocomplete="new-password"
              />
            </div>

            <div class="form-group user-data">
              <label for="password-check" class="ms-2 fw-bold">密碼確認</label>
              <input
                v-model="checkPassword"
                id="password-check"
                type="password"
                class="form-control"
                name="checkPassword"
                autocomplete="new-password-check"
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
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import Sidebar from "../components/Sidebar";
import { PostToast } from "../utils/helpers";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      currentUser: {
        id: "",
        account: "",
        name: "",
        avatar: "",
        cover: "",
        email: "",
        introduction: "",
        Followers: [],
        Followings: [],
      },
      password: "",
      checkPassword: "",
      active: {
        setting: "active",
      },
      isProcessing: false,
    };
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
        console.log("currentUser:", response);
        this.currentUser = {
          ...this.currentUser,
          ...response.data,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
    async handleSubmit(e) {
      try {
        // 避免重複點擊
        this.isProcessing = true;
        // 確認密碼一致
        console.log(e.target);
        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "error",
            title: "密碼要打一樣唷～",
          });
          this.isProcessing = false;
          return;
        }
        // 建立FormData
        const form = e.target; // <form></form>
        const formData = new FormData(form);

        const currentUserId = this.currentUser.id;
        console.log(currentUserId);
        const response = await usersAPI.editUserProfile({
          currentUserId,
          formData,
        });
        console.log(response);
        PostToast.fire({
          icon: "success",
          title: "更新完成",
        });
        // 重新帶一次更新過後的currentuser資料
        this.fetchCurrentUser();
        // 開啟按鈕
        this.isProcessing = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "欸斗，現在不能修改資料，等一下嘿～",
        });
      }
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
  height: 600px;
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