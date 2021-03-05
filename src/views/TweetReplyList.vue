<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <div class="mid-header">首頁</div>
        <div class="twitterCard">
          <div class="name">
            <img
              :src="tweet.User.avatar"
              alt=""
              class="avatar"
            />
            <span class="name-text">
              <span>{{ tweet.User.name }}</span>
              <span>@{{ tweet.User.account }}</span>
            </span>
          </div>
          <div class="text my-3">
            <div>
              {{ tweet.description }}
            </div>
            <div class="pt-2"> {{ tweet.createdAt }}</div>
          </div>
          <div class="divider"></div>
          <div class="response py-2">{{ tweet.Replies.length }} 回覆次數 {{ tweet.Likes.length }} 喜歡次數</div>
          <div class="divider"></div>
          <div class="responseIcon pt-2">
            <span class="pe-5 comment">
              <img src="../assets/comment-alt.svg" alt="">
            </span>
            <span class="ps-5 heart">
              <img src="../assets/heart.svg" alt="">
            </span>
          </div>
        </div>
        <div class="twitterReplies">
          <!-- twitterCardTable -->
          <div class="row tweetReply" v-for="reply in replies" :key="reply.id">
            <div class="col-lg-1">
              <img src="../assets/heart.svg" alt="">
            </div>
            <div class="col-lg-10">
              <p>Name @account • {{ reply.createdAt }}</p>
              <p>回覆 @{{ tweet.User.name }}</p>
              <p>{{ reply.comment }}</p>
            </div>
          </div>
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

// GET api/tweets/:id
const dummydata = {
    "id": 1,
    "description": "repudiandae",
    "UserId": 1,
    "createdAt": "2021-03-03T16:14:20.000Z",
    "updatedAt": "2021-03-03T16:14:20.000Z",
    "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "root",
        "password": "$2a$10$k/8PhvsPm3PqlNcc/OfmHO1o7Mo9LubVdbJzIvGRNWPF86QXrU6DS",
        "avatar": null,
        "cover": null,
        "introduction": null,
        "role": "admin",
        "createdAt": "2021-03-03T16:14:19.000Z",
        "updatedAt": "2021-03-03T16:14:19.000Z"
    },
    "Replies": [
        {
            "id": 3,
            "comment": "consequatur corporis aut",
            "UserId": 5,
            "TweetId": 1,
            "createdAt": "2021-03-02T11:47:05.000Z",
            "updatedAt": "2021-03-02T11:47:05.000Z"
        },
        {
            "id": 4,
            "comment": "Aut labore quas corporis nihil nulla sint. Quo illum blanditiis minima corrupti consequatur quam consectetur culpa. Vel nobis consequatur cupiditate. Qui in nostrum incidunt voluptates velit.",
            "UserId": 4,
            "TweetId": 1,
            "createdAt": "2021-03-02T11:47:05.000Z",
            "updatedAt": "2021-03-02T11:47:05.000Z"
        },
        {
            "id": 5,
            "comment": "ipsum",
            "UserId": 1,
            "TweetId": 1,
            "createdAt": "2021-03-02T11:47:05.000Z",
            "updatedAt": "2021-03-02T11:47:05.000Z"
        },
        {
            "id": 153,
            "comment": "Eos odio sint consequatur eos quasi. Qui amet at est in velit sit odio. Et officiis voluptatum. Repudiandae quasi quas magni. Earum molestiae officiis tempora doloremque ratione molestias et ipsa. Quas soluta perspiciatis dolor.",
            "UserId": 5,
            "TweetId": 1,
            "createdAt": "2021-03-03T16:14:20.000Z",
            "updatedAt": "2021-03-03T16:14:20.000Z"
        },
        {
            "id": 154,
            "comment": "laudantium",
            "UserId": 3,
            "TweetId": 1,
            "createdAt": "2021-03-03T16:14:20.000Z",
            "updatedAt": "2021-03-03T16:14:20.000Z"
        },
        {
            "id": 155,
            "comment": "distinctio quia libero",
            "UserId": 1,
            "TweetId": 1,
            "createdAt": "2021-03-03T16:14:20.000Z",
            "updatedAt": "2021-03-03T16:14:20.000Z"
        }
    ],
    "Likes": []
}

export default {
  name: "TweetReplyList",
  components: {
    Sidebar,
  },
  data() {
    return {
      tweet: {},
      replies: [],
    }
  },
  created() {
    this.fetchTweet()
  },
  methods: {
    fetchTweet() {
      this.tweet = dummydata
      this.replies = dummydata.Replies
    }
  }
};
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}
.row {
  display: flex;
  border: 1px solid crimson;
}
.left-col {
  border: 1px solid blue;
  /* width: 235px; */
  height: 1196px;
}
.mid-col {
  display: flex;
  flex-flow: column wrap;
  border: 1px solid blue;
  margin-right: auto;
  margin-left: auto;
  /* width: 600px; */
  height: 1202px;
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
.right-col {
  border: 1px solid blue;
  /* width: 350px; */
  height: 517px;
}
</style>