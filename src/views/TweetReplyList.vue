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
          <div class="mid-header">首頁</div>
          <div class="twitterCard">
            <div class="name">
              <img :src="tweet.User ? tweet.User.avatar : ''" alt="使用者大頭貼" class="avatar" />
              <span class="name-text">
                <span>{{ tweet.User ? tweet.User.name : '未顯示'}}</span>
                <span>@{{ tweet.User ? tweet.User.account : '未顯示'}}</span>
              </span>
            </div>
            <div class="text my-3">
              <div>
                {{ tweet.description }}
              </div>
              <div class="pt-2">{{ tweet.createdAt }}</div>
            </div>
            <div class="divider"></div>
            <div class="response py-2">
              {{ tweet.Replies ? tweet.Replies.length : '未顯示'}} 回覆次數
              {{ tweet.Likes ? tweet.Likes.length : '未顯示'}} 喜歡次數
            </div>
            <div class="divider"></div>
            <div class="responseIcon pt-2">
              <span class="pe-5 comment">
                <img src="../assets/comment-alt.svg" alt="" />
              </span>
              <span class="ps-5 heart">
                <img src="../assets/heart.svg" alt="" />
              </span>
            </div>
          </div>
          <div class="twitterReplies">
            <!-- twitterCardTable -->
            <div
              class="row tweetReply"
              v-for="reply in replies"
              :key="reply.id"
            >
              <div class="col-lg-1">
                <img src="../assets/heart.svg" alt="" />
              </div>
              <div class="col-lg-10">
                <p>Name @account • {{ reply.createdAt }}</p>
                <p>回覆 @{{ tweet.User.name }}</p>
                <p>{{ reply.comment }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 d-none d-lg-block right-col">
          <!-- Recommendationtable 在小於md時消失 -->
          <RecommendationTable :initial-recommend-users="recommendUsers" />
        </div>
      </div>
      <div class="col-lg-3 right-col">
        <!-- Recommendationtable -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import RecommendationTable from "../components/RecommendationTable";
import tweetsAPI from "../apis/tweets"
import { Toast } from '../utils/helpers';

// GET api/tweets/:id
const dummyCurrentUser = {
  currentUser: {
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
  name: "TweetReplyList",
  components: {
    Sidebar,
    RecommendationTable,
  },
  data() {
    return {
      tweet: {},
      replies: [],
      active: {
        home: "row",
        self: "row",
        setting: "row",
      },
      recommendUsers: {},
    };
  },
  created() {
    const { id: tweetId } = this.$route.params
    console.log('tweets/id :',tweetId)
    this.fetchTweet(tweetId);
    this.fetchCurrentUser();
    this.fetchRecommendUsers();
  },
  methods: {
    async fetchTweet(tweetId) {
      try {
        console.log('fetchTweet', tweetId)
        const response = await tweetsAPI.getSingleTweet(tweetId)
        console.log(response)
        this.tweet = response.data
        this.replies = response.data.Replies
      } catch(error) {
        Toast.fire({
          icon:'error',
          title: '無法取得推文資料，請稍後再試'
        })
      }
    },
    fetchCurrentUser() {
      const {
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      } = dummyCurrentUser.currentUser;
      this.currentUser = {
        ...this.currentUser,
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      };
    },
    fetchRecommendUsers() {
      this.recommendUsers = [...dummyRecommendUsers.recommendUsers];
      // console.log("recommendUsers", this.recommendUsers);
    },
  },
};
</script>

<style scoped>
/* .container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
} */
/* .row {
  display: flex;
  border: 1px solid crimson;
} */
/* .left-col {
  border: 1px solid blue;
  width: 235px;
  height: 1196px;
} */
.mid-col {
  /* display: flex; */
  /* flex-flow: column wrap; */
  /* border: 1px solid blue; */
  /* margin-right: auto; */
  /* margin-left: auto; */
  /* width: 600px; */
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  height: auto;
}
.right-col {
  /* border: 1px solid blue; */
  /* width: 350px; */
  /* height: 517px; */
  height: fit-content;
}

.mid-header {
  background: #ffffff;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  padding: 2px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
.twitterCard {
  border: 1px solid #e6ecf0;
  width: 100%;
  height: auto;
  padding: 10px;
}
.name {
  display: flex;
}
.avatar {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  margin-right: 5px;
  /* left: 48%;
  top: 60px; */
}
.name-text {
  display: flex;
  flex-direction: column;
}
.divider {
  border-top: 1px solid #e6ecf0;
  width: 98%;
}
.comment .heart {
  width: 24px;
  height: 24px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
</style>