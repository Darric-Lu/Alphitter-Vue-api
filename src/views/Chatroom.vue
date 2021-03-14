<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar 
        :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10 px-0">
        <!-- 中間上線名單包含chatlog  顯示全寬10/12-->
        <!-- <div class="col-4 col-lg-4 d-none d-lg-block px-0 mid-col"> -->
        <!-- 中間在小於md時消失 -->
        <div class="col-12 col-md-4 mid-col onlineList-wrapping px-0">
          <div class="onlineList-title">
            <span class="onlineList-title-word">上線使用者(5)</span>
          </div>
          <div class="onlineList-users">
            <div
              class="user d-flex flex-row"
              v-for="user in onlineUsers"
              :key="user.id"
            >
              <div class="avatar-wrapping">
                <div class="avatar">
                  <img :src="user.avatar" alt="" class="avatar-img" />
                </div>
              </div>
              <div class="user-name">
                <span class="name"
                  >{{ user.name }}
                  <span class="account">@{{ user.account }}</span>
                </span>
              </div>
            </div>
          </div>
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

const dummyData = [
  {
    id: 1,
    name: "user1",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
  {
    id: 2,
    name: "user2",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
  {
    id: 3,
    name: "user3",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
  {
    id: 4,
    name: "user4",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
  {
    id: 5,
    name: "user5",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
  {
    id: 6,
    name: "user6",
    account: "user1",
    avatar: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
  },
];

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
      onlineUsers: [],
    };
  },
  created() {
    this.fetchCurrentUser();
    this.fetchOnlineUsers();
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
    fetchOnlineUsers() {
      this.onlineUsers = [...dummyData];
    },
    // enterChatroom(currentUserName) {
    //   socket.emit('startChat', currentUserName)
    //   console.log('socket username:', currentUserName)
    // }
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

/* onlineList css */
.onlineList-title {
  height: 55px;
  line-height: 55px;
  border-bottom: 1px #e6ecf0 solid;
  padding: 0 0 0 15px;
}
.onlineList-users {
  overflow-y: scroll;
  height: 25vh;
  height: -moz-calc(25vh - 55px);
  height: -webkit-calc(25vh - 55px);
}
.onlineList-users::-webkit-scrollbar {
  display: none;
}
.avatar-wrapping {
  height: 60px;
  padding: 5px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-name {
  height: 60px;
  line-height: 60px;
}
.user-name > .name {
  font-weight: 700;
  font-size: 18px;
  color: black;
}
.user-name > .name > .account {
  font-weight: 500;
  font-size: 14px;
  color: #657786;
}
@media (min-width: 768px) {
  .onlineList-wrapping {
    border-right: 0;
    height: 100vh;
  }
  .chatlog-wrapping {
    height: 100vh;
  }
  .onlineList-users {
    overflow-y: scroll;
    height: 100vh;
    height: -moz-calc(100vh - 55px);
    height: -webkit-calc(100vh - 55px);
  }
}
</style>