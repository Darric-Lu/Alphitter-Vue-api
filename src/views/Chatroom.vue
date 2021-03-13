<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10 px-0">
        <!-- 中間上線名單包含chatlog  顯示全寬10/12-->
        <!-- <div class="col-4 col-lg-4 d-none d-lg-block px-0 mid-col"> -->
        <!-- 中間在小於md時消失 -->
        <div class="col-12 col-md-4 mid-col onlineList-wrapping px-0">
          <div class="onlineList-title">
            <span class="onlineList-title-word">上線使用者(5)</span>
          </div>
          <div class="onlineList-users"></div>
        </div>
        <div class="col-12 col-md-8 right-col chatlog-wrapping px-0">
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
  height: 100vh;
}
.col-10 {
  /* border: 1px solid blue; */
  height: 100vh;
}
.onlineList-wrapping {
  border-left: 1px #e6ecf0 solid;
  border-right: 1px #e6ecf0 solid;
  border-bottom: 1px #e6ecf0 solid;
  height: 25vh;
}
.chatlog-wrapping {
  border-left: 1px #e6ecf0 solid;
  border-right: 1px #e6ecf0 solid;
  height: 75vh;
}
@media (min-width: 768px) {
  .onlineList-wrapping {
    border-right: 0;
    height: 100vh;
  }
  .chatlog-wrapping {
    height: 100vh;
  }
}

/* onlineList css */
.onlineList-title {
  height: 55px;
  line-height: 55px;
  border-bottom: 1px #e6ecf0 solid;
  padding: 0 0 0 15px;
}
</style>