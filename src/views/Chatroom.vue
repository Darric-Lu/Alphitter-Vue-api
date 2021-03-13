<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10 px-0">
        <!-- 中間上線名單包含chatlog  顯示全寬10/12-->
        <div class="col-4 col-lg-4 d-none d-lg-block px-0 mid-col">
          <!-- 中間在小於md時消失 -->
          <div class="onlineList"></div>
        </div>
        <div class="col-8 right-col">
          <!-- Chatlog -->
          <Chatlog />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chatlog from "../components/Chatlog";
import Sidebar from "../components/Sidebar";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
export default {
  name: "Chatroom",
  components: {
    Chatlog,
    Sidebar,
  },
  data() {
    return {
      active: {
        home: "row",
        self: "row",
        setting: "row",
        chatroom: "active",
      },
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
    };
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
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
  },
};
</script>

<style scoped>
.col-2 {
  /* border: 1px solid black; */
  height: 1196px;
}
.col-10 {
  /* border: 1px solid blue; */
  height: 1196px;
}
.col-8 {
  border: 1px solid green;
  height: 1196px;
}
.col-lg-8 {
  /* border: 1px solid red; */
  height: 1196px;
}
.col-4 {
  border: 1px solid purple;
  height: 1196px;
}
</style>