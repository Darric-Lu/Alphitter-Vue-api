<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <!-- Sidebar 顯示全寬2/12-->
        <Sidebar :active="active" :currentUser="currentUser" />
      </div>
      <div class="row col-10 px-0">
        <!-- 中間包含Recommendationtable  顯示全寬10/12-->
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間在小於md時 顯示全寬10/12-->
          <!-- UserNavbar -->
          <UserNavbar />
          <div class="user-profile">
            <!-- Userprofile -->
            <UserProfile :currentUser="currentUser" />
          </div>
          <!-- tab -->
          <Tab
            :tab-active="tabActive"
            @handle-change-active="afterHadleChangeActive"
          />
          <div class="mid-down">
            <!-- twitterCardTable -->
            <twitterCardTable :tweets="tweets" :currentUser="currentUser" />
          </div>
        </div>
        <div class="col-4 d-none d-lg-block right-col">
          <!-- Recommendationtable 在小於md時消失 -->
          <RecommendationTable :initial-recommend-users="recommendUsers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import twitterCardTable from "../components/twitterCardTable";
import UserNavbar from "../components/UserNavbar";
import UserProfile from "../components/UserProfile";
import RecommendationTable from "../components/RecommendationTable";
import Tab from "../components/Tab";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

// userprofile GET /api/users/:id

const dummyRecommendUsers = {
  recommendUsers: [
    {
      id: 1,
      name: "ALPHAcamp",
      account: "ac",
      image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
      isFollowing: true,
      followedCount: 50,
    },
    {
      id: 2,
      name: "Darric",
      account: "DL",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
      isFollowing: true,
      followedCount: 10,
    },
    {
      id: 3,
      name: "Claire",
      account: "ClaireLi",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
      isFollowing: true,
      followedCount: 30,
    },
    {
      id: 4,
      name: "goater",
      account: "goater",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
      isFollowing: false,
      followedCount: 40,
    },
    {
      id: 5,
      name: "stan_wang",
      account: "stan",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
      isFollowing: false,
      followedCount: 46,
    },
    {
      id: 6,
      name: "ALPHAcamp",
      account: "ac",
      image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
      isFollowing: true,
      followedCount: 70,
    },
    {
      id: 7,
      name: "Darric",
      account: "DL",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
      isFollowing: true,
      followedCount: 12,
    },
    {
      id: 8,
      name: "Claire",
      account: "ClaireLi",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
      isFollowing: true,
      followedCount: 31,
    },
    {
      id: 9,
      name: "goater",
      account: "goater",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
      isFollowing: false,
      followedCount: 2,
    },
    {
      id: 10,
      name: "stan_wang",
      account: "stan",
      image:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
      isFollowing: false,
      followedCount: 60,
    },
  ],
};

export default {
  name: "Userself",
  components: {
    Sidebar,
    twitterCardTable,
    UserNavbar,
    UserProfile,
    Tab,
    RecommendationTable,
  },
  data() {
    return {
      tweets: [],
      active: {
        home: "row",
        self: "active",
        setting: "row",
      },
      tabActive: {
        tweetsArea: "active",
        replyTweestArea: "",
        liekdArea: "",
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
      recommendUsers: {},
    };
  },
  created() {
    this.fetchCurrentUser();
    const { id: currentUserId } = this.$route.params;
    console.log("currentUserId", currentUserId);
    this.fetchUserself(currentUserId);
    this.fetchRecommendUsers();
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
    async fetchUserself(currentUserId) {
      try {
        const response = await usersAPI.getUserTweet(currentUserId);
        console.log("fetchUserself id:", currentUserId);
        console.log("response", response);
        this.tweets = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法拿到你的資料，請稍後再試唷",
        });
      }
    },
    fetchRecommendUsers() {
      this.recommendUsers = [...dummyRecommendUsers.recommendUsers];
      // console.log("recommendUsers", this.recommendUsers);
    },
    afterHadleChangeActive(e) {
      //改變Tab的active，且串API時改變中下方資料讓畫面改變
      console.log("change", e);
      this.tabActive = {
        tweetsArea: "",
        replyTweestArea: "",
        liekdArea: "",
      };
      switch (e) {
        case "tweetsArea":
          this.tabActive.tweetsArea = "active";
          //接本頁面使用者的推文
          break;
        case "replyTweestArea":
          //接本頁面使用者的推文與回覆
          this.tabActive.replyTweestArea = "active";
          break;
        case "liekdArea":
          //接本頁面使用者的喜歡的內容
          this.tabActive.liekdArea = "active";
          break;
      }
    },
  },
};
</script>

<style scoped>
.col-2 {
  box-sizing: border-box;
  height: 1196px;
}
.mid-col {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  height: auto;
}
.right-col {
  height: fit-content;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: auto;
}
</style>