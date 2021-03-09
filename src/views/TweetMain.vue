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
          <div class="twitterEditCard">
            <div class="mid-header">首頁</div>
            <form action="" @submit.stop.prevent="handleSubmit">
              <div class="textarea">
                <img
                  src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
                  alt=""
                />
                <textarea
                  class="form-control"
                  placeholder="有甚麼新鮮事?"
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="description"
                >
                </textarea>
                <span>
                  <button type="submit" class="btn btn-secondary tweet">
                    推文
                  </button>
                </span>
              </div>
            </form>
            <div class="divider"></div>
          </div>
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
import RecommendationTable from "../components/RecommendationTable";
import { v4 as uuidv4 } from "uuid";
import tweetsAPI from "../apis/tweets";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

// GET api/tweets

export default {
  name: "TweetMain",
  components: {
    Sidebar,
    twitterCardTable,
    RecommendationTable,
  },
  data() {
    return {
      description: "",
      tweets: [],
      active: {
        home: "active",
        self: "row",
        setting: "row",
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
      recommendUsers: [],
    };
  },
  created() {
    // this.fetchCurrentUser();
    this.fetchMain();
    this.fetchCurrentUser();
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
    async fetchMain() {
      try {
        const response = await tweetsAPI.getTweets();
        console.log("response", response);
        this.tweets = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    handleSubmit() {
      if (!this.description) {
        Toast.fire({
          icon: "error",
          title: "請填寫推文內容",
        });
      }
      if (this.description.length >= 140) {
        Toast.fire({
          icon: "error",
          title: "字數限制140個",
        });
      }
      // TODO: 向 API 發送 POST 請求
      // 伺服器新增 Comment 成功後...
      console.log("submit");
      console.log(this.description.length);
      this.tweets.push({
        id: uuidv4(),
        description: this.description,
        UserId: 1,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          account: "root",
          password:
            "$2a$10$k/8PhvsPm3PqlNcc/OfmHO1o7Mo9LubVdbJzIvGRNWPF86QXrU6DS",
          avatar: null,
          cover: null,
          introduction: null,
          role: "admin",
          createdAt: "2021-03-03T16:14:19.000Z",
          updatedAt: "2021-03-03T16:14:19.000Z",
        },
        Replies: [
          {
            id: 3,
            comment: "consequatur corporis aut",
            UserId: 5,
            TweetId: 1,
            createdAt: "2021-03-02T11:47:05.000Z",
            updatedAt: "2021-03-02T11:47:05.000Z",
          },
          {
            id: 4,
            comment:
              "Aut labore quas corporis nihil nulla sint. Quo illum blanditiis minima corrupti consequatur quam consectetur culpa. Vel nobis consequatur cupiditate. Qui in nostrum incidunt voluptates velit.",
            UserId: 4,
            TweetId: 1,
            createdAt: "2021-03-02T11:47:05.000Z",
            updatedAt: "2021-03-02T11:47:05.000Z",
          },
          {
            id: 5,
            comment: "ipsum",
            UserId: 1,
            TweetId: 1,
            createdAt: "2021-03-02T11:47:05.000Z",
            updatedAt: "2021-03-02T11:47:05.000Z",
          },
          {
            id: 153,
            comment:
              "Eos odio sint consequatur eos quasi. Qui amet at est in velit sit odio. Et officiis voluptatum. Repudiandae quasi quas magni. Earum molestiae officiis tempora doloremque ratione molestias et ipsa. Quas soluta perspiciatis dolor.",
            UserId: 5,
            TweetId: 1,
            createdAt: "2021-03-03T16:14:20.000Z",
            updatedAt: "2021-03-03T16:14:20.000Z",
          },
          {
            id: 154,
            comment: "laudantium",
            UserId: 3,
            TweetId: 1,
            createdAt: "2021-03-03T16:14:20.000Z",
            updatedAt: "2021-03-03T16:14:20.000Z",
          },
          {
            id: 155,
            comment: "distinctio quia libero",
            UserId: 1,
            TweetId: 1,
            createdAt: "2021-03-03T16:14:20.000Z",
            updatedAt: "2021-03-03T16:14:20.000Z",
          },
        ],
        Likes: [],
      });
      this.description = "";
      console.log("submit");
    },
    async fetchRecommendUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        console.log("fetchRecommendUsers", response);

        this.recommendUsers = [...response.data];
        console.log("RecommendUsers", this.recommendUsers);
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

/* 中間 */
.twitterEditCard {
  /* border: 1px solid green; */
  width: 100%;
  height: auto;
}
.mid-down {
  /* border: 1px solid black; */
  width: 100%;
  height: auto;
}
.mid-header {
  background: #ffffff;
  border-bottom: 1px solid #e6ecf0;
  box-sizing: border-box;
  height: 55px;
  line-height: 55px;
  padding: 0 0 0 15px;
  font-weight: bold;
  font-size: 18px;
}
img {
  /* position: absolute; */
  object-fit: cover;
  width: 50px;
  height: 50px;
  /* left: 48%;
  top: 60px; */
}
.textarea {
  display: flex;
}
textarea {
  border-style: none;
}
span {
  display: flex;
  align-items: flex-end;
}
.tweet {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 64px;
  height: 40px;
}
.divider {
  width: 100%;
  height: 10px;
  background: #e6ecf0;
}
</style>