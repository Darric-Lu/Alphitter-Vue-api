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
            <form action="" @submit.stop.prevent="handleSubmit" class="m-3">
              <div class="d-flex justify-content-start">
                <div class="avatar-wrapping p-0 mx-2 col-2">
                  <img :src="currentUser.avatar" alt="" class="avatar-img" />
                </div>
                <div class="textarea col-10">
                  <textarea
                    class="form-control"
                    placeholder="有甚麼新鮮事?"
                    id="floatingTextarea2"
                    rows="2"
                    v-model="description"
                  >
                  </textarea>
                </div>
              </div>
            </form>
            <div class="d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-secondary tweet"
                @click="newTweetSubmit"
              >
                推文
              </button>
            </div>
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
// import { v4 as uuidv4 } from "uuid";
import tweetsAPI from "../apis/tweets";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { PostToast } from "../utils/helpers";

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
    async newTweetSubmit() {
      try {
        this.description = this.description.trim();
        //錯誤提示:無內容
        if (!this.description.length) {
          PostToast.fire({
            icon: "error",
            title: "請輸入正確內容",
          });
          return;
        } else if (this.description.length > 140) {
          //錯誤提示:超出140字數
          PostToast.fire({
            icon: "error",
            title: "請勿超過140字數，目前" + this.description.length + "字",
          });
          console.log("請勿超過140字數");
          return;
        }

        // 向 API 發送 POST 請求
        const description = this.description;
        const response = await tweetsAPI.postTweet({ description });
        console.log("post tweet:", response);

        //成功提示
        PostToast.fire({
          icon: "success",
          title: "發文成功，enjoy!!",
        });

        //以重新整理的方法關閉modal
        setTimeout("location.reload()", 2200);
        console.log(
          "tweet",
          this.description,
          "length",
          this.description.length
        );
      } catch (error) {
        PostToast.fire({
          icon: "error",
          title: "目前無法新增推文，請稍後再試～",
        });
      }
    },
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
        this.tweets = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async handleSubmit() {
      try {
        if (!this.description) {
          Toast.fire({
            icon: "error",
            title: "請填寫推文內容",
          });
        }
        if (this.description.length >= 140) {
          Toast.fire({
            icon: "error",
            title: `字數限制140字，現已輸入了${description.length}字`,
          });
        }

        // TODO: 向 API 發送 POST 請求
        const description = this.description;
        const response = await tweetsAPI.postTweet({ description });
        console.log("post tweet:", response);

        // 伺服器新增 Comment 成功後...
        this.fetchMain();
        this.description = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法推文捏，請稍後再試～",
        });
      }
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
  /* position: sticky; */
  /* top: 0; */
  /* left: 0; */
  height: 800px;
  /* z-index: 0; */
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
}
.mid-col::-webkit-scrollbar {
  display: none;
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
/* img { */
/* position: absolute; */
/* width: 50px; */
/* height: 50px; */
/* border-radius: 50%; */
/* left: 48%;
  top: 60px; */
/* } */
.textarea {
  display: flex;
}
textarea {
  border-style: none;
}
.tweet {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 64px;
  height: 40px;
  border-style: none;
}
.divider {
  width: 100%;
  height: 10px;
  background: #e6ecf0;
}
.avatar-wrapping {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-secondary {
  margin: 0 16px 16px 0;
}
</style>