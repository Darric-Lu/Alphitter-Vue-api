<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10">
        <!-- 中間包含Recommendationtable  顯示全寬10/12-->
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間在小於md時 顯示全寬10/12 -->
          <!-- UserNavbar -->
          <UserNavbar :currentUser="user" />
          <div class="follower-table">
            <!-- FollowersTable -->
            <FollowersTable :initial-followers="followers" />
          </div>
        </div>
        <div class="col-4 d-none d-lg-block right-col">
          <!-- Recommendationtable 在小於md時消失-->
          <Recommendationtable :initial-recommend-users="recommendUsers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";
import FollowersTable from "../components/FollowersTable";
import Recommendationtable from "../components/RecommendationTable";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserselfFollower",
  components: {
    Sidebar,
    UserNavbar,
    FollowersTable,
    Recommendationtable,
  },
  data() {
    return {
      active: {},
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
      recommendUsers: [],
      followers: [],
      user: {},
    };
  },
  created() {
    this.fetchCurrentUser();
    this.fetchRecommendUsers();
    const { id: userId } = this.$route.params;
    this.fetchFollower(userId);
    this.fetchUser(userId);
  },
  methods: {
    async fetchCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
        // console.log("currentUser:", response);
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
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUser(userId);
        // console.log("getuser:", response);
        this.user = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試～",
        });
      }
    },
    async fetchFollower(userId) {
      try {
        const response = await usersAPI.getUserFollower(userId);
        // console.log("fetchFollower", response);
        this.followers = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法取得追蹤者資料，請稍後再試～",
        });
      }
    },
    async fetchRecommendUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        // console.log("fetchRecommendUsers", response);

        this.recommendUsers = [...response.data];
        // console.log("RecommendUsers", this.recommendUsers);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推薦資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.col-2 {
  height: 800px;
}
.mid-col {
  overflow-y: scroll;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}
.mid-col::-webkit-scrollbar {
  display: none;
}
.right-col {
  height: fit-content;
}
.mid-down {
  width: 100%;
  height: auto;
}
</style>