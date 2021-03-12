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
          <UserNavbar
            :currentUser="otherUser"
            @handle-change-active="afterHadleChangeActive"
          />
          <div class="user-profile">
            <!-- Userprofile -->
            <UserOtherProfile
              @handle-follow="afterHandleFollow"
              @handle-unfollow="afterHandleUnfollow"
              @handle-subscription="afterhandleSubscription"
              @handle-unsubscription="afterhandleUnSubscription"
              @after-click-follow="afterClickFollow"
              :otherUser="otherUser"
            />
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
import UserOtherProfile from "../components/UserOtherProfile";
import RecommendationTable from "../components/RecommendationTable";
import Tab from "../components/Tab";
import usersAPI from "../apis/users";
import tweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";

export default {
  name: "UserOther",
  components: {
    Sidebar,
    twitterCardTable,
    UserNavbar,
    UserOtherProfile,
    Tab,
    RecommendationTable,
  },
  data() {
    return {
      tweets: [],
      active: {
        home: "row",
        self: "row",
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
      otherUser: {
        id: "",
        account: "",
        name: "",
        avatar: "",
        cover: "",
        email: "",
        introduction: "",
        isFollowed: "",
        isSubscription: "",
        Followers: [],
        Followings: [],
        Likes: [],
        tweetCount: "",
      },
      recommendUsers: [],
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchCurrentUser();
    this.fetchOtherUser(userId);
    this.fetchOtherUserTweets(userId);
    this.fetchRecommendUsers();
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
        // console.log("this.currentUser", this.currentUser);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
    async fetchOtherUser(userId) {
      try {
        const response = await usersAPI.getUser(userId);
        // console.log(response);
        this.otherUser = response.data;
        console.log("this.otherUser", this.otherUser);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法看見該使用者資訊，待會再試～",
        });
      }
    },
    async fetchOtherUserTweets(userId) {
      try {
        const response = await usersAPI.getUserTweet(userId);
        // console.log("fetchUserself id:", userId);
        // console.log("response", response);
        this.tweets = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法拿到你的資料，請稍後再試唷",
        });
      }
    },
    async fetchUserLike(userId) {
      try {
        const response = await usersAPI.getUserLikes(userId);
        // console.log("fetchUserLike id:", userId);
        // console.log("response -like ", response);
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
    async fetchUserRepliedTweets(userId) {
      try {
        const response = await usersAPI.getUserRepliedTweets(userId);
        // console.log("fetchreplied_tweets id:", userId);
        // console.log("response -replied_tweets ", response);
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
    afterClickFollow() {
      // 點了追蹤中之後再次fetch RecommendUsers去更新畫面
      this.fetchRecommendUsers();
      // console.log("after click follow to get recommendUsers again");
      // console.log("after follow someone", this.recommendUsers);
    },
    afterHadleChangeActive(e) {
      //改變Tab的active，且串API時改變中下方資料讓畫面改變
      // console.log("change", e);
      this.tabActive = {
        tweetsArea: "",
        replyTweestArea: "",
        liekdArea: "",
      };
      switch (e) {
        case "tweetsArea":
          this.tabActive.tweetsArea = "active";
          //接本頁面使用者的推文
          this.fetchOtherUserTweets(this.otherUser.id);
          break;
        case "replyTweestArea":
          //接本頁面使用者的推文與回覆
          this.tabActive.replyTweestArea = "active";
          this.fetchUserRepliedTweets(this.otherUser.id);
          break;
        case "liekdArea":
          //接本頁面使用者的喜歡的內容
          this.tabActive.liekdArea = "active";
          this.fetchUserLike(this.otherUser.id);
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
    afterHandleFollow() {
      this.otherUser.isFollowed = true;
    },
    afterHandleUnfollow() {
      this.otherUser.isFollowed = false;
    },
    afterhandleSubscription() {
      this.otherUser.isSubscription = true;
    },
    afterhandleUnSubscription() {
      this.otherUser.isSubscription = false;
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
  /* border: 1px solid black; */
  margin-top: 10px;
  width: 100%;
  height: auto;
}
</style>