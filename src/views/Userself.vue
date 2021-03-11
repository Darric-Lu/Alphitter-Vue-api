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
          <UserNavbar :currentUser="currentUser" />
          <div class="user-profile">
            <!-- Userprofile -->
            <UserProfile :initialCurrentUser="currentUser" />
          </div>
          <!-- tab -->
          <Tab
            :tab-active="tabActive"
            @handle-change-active="afterHadleChangeActive"
          />
          <div class="mid-down">
            <!-- twitterCardTable -->
            <twitterCardTable
              :tweets="tweets"
              :currentUser="currentUser"
              @handle-be-like="afterHandleBeLike"
              @handle-unlike="afterHandleUnlike"
            />
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
import tweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";

// userprofile GET /api/users/:id

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
        Likes: [],
        tweetCount: "",
      },
      recommendUsers: [],
    };
  },
  created() {
    this.fetchRecommendUsers();
    this.fetchCurrentUser();
    console.log("crate-id", this.currentUser.id);
    // const { id: currentUserId } = this.$route.params;
    // console.log("currentUserId", currentUserId);
    // this.fetchUserself();
  },
  methods: {
    async afterHandleBeLike(id) {
      try {
        const { data } = await tweetsAPI.postTweetsLike(id);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === id) {
            const number = tweet.likeCount;
            return (tweet = {
              ...tweet,
              isLike: true,
              likeCount: number + 1,
            });
          } else {
            return tweet;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "目前無法喜歡，請稍後再試",
        });
      }
    },
    async afterHandleUnlike(id) {
      try {
        const { data } = await tweetsAPI.postTweetsUnlike(id);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === id) {
            const number = tweet.likeCount;
            return (tweet = {
              ...tweet,
              isLike: false,
              likeCount: number - 1,
            });
          } else {
            return tweet;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "目前無法取消取消喜歡，請稍後再試",
        });
      }
    },
    async fetchCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
        this.currentUser = {
          ...this.currentUser,
          ...response.data,
        };
        this.fetchUserself(this.currentUser.id);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
    async fetchUserself(id) {
      console.log("id", this.currentUser.id);
      try {
        const response = await usersAPI.getUserTweet(id);
        // console.log("fetchUserself id:", currentUserId);
        // console.log("response", response);
        this.tweets = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法拿到你的資料，請稍後再試唷",
        });
      }
    },
    async fetchUserLike(currentUserId) {
      try {
        const response = await usersAPI.getUserLikes(currentUserId);
        console.log("fetchUserLike id:", currentUserId);
        console.log("response -like ", response);
        this.tweets = response.data;
        //在構築一次
        this.afterGetLike();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法拿到你的喜歡資料，請稍後再試唷",
        });
      }
    },
    async fetchUserRepliedTweets(currentUserId) {
      try {
        const response = await usersAPI.getUserRepliedTweets(currentUserId);
        console.log("fetchreplied_tweets id:", currentUserId);
        console.log("response -replied_tweets ", response);
        this.tweets = response.data;
        //在構築一次
        // this.afterGetData();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法拿到你的推文回復資料，請稍後再試唷",
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
          this.fetchUserself(this.currentUser.id);
          break;
        case "replyTweestArea":
          //接本頁面使用者的推文與回覆
          this.tabActive.replyTweestArea = "active";
          this.fetchUserRepliedTweets(this.currentUser.id);
          break;
        case "liekdArea":
          //接本頁面使用者的喜歡的內容
          this.tabActive.liekdArea = "active";
          this.fetchUserLike(this.currentUser.id);
          break;
      }
    },
    afterGetLike() {
      const data = this.tweets.map((e) => {
        e.Tweet.isLike = e.isLike;
        e.Tweet.ReplyCount = e.ReplyCount;
        e.Tweet.likeCount = e.likeCount;
        return e.Tweet;
      });
      this.tweets = data;
    },
  },
  // watch: {
  //   tweets(newValue) {
  //     this.tweets = [...newValue];
  //   },
  // },
};
</script>

<style scoped>
.col-2 {
  /* position: sticky; */
  /* top: 0; */
  /* left: 0; */
  /* box-sizing: border-box; */
  /*好像一定要有 */
  height: 800px;
}
/* .col-4 {
  position: sticky;
  top: 0;
  right: 0;
} */
.mid-col {
  overflow-y: scroll;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  /* height: auto; */
}
.mid-col::-webkit-scrollbar {
  display: none;
}
.right-col {
  height: fit-content;
}
.mid-down {
  /* border: 1px solid black; */
  width: 100%;
  height: auto;
}
</style>