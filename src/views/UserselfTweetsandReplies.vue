<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <!-- UserNavbar -->
        <UserNavbar :tweets="tweets" />
        <div class="user-profile">
          <!-- Userprofile -->
          <UserProfile />
        </div>
        <!-- tab -->
        <Tab />
        <div class="twitterReplies">
          <!-- twitterCardTable -->
          <div class="row tweetReply" v-for="tweet in tweets" :key="tweet.id">
            <div class="col-lg-1">
              <img src="../assets/heart.svg" alt="">
            </div>
            <div class="col-lg-10">
              <p>{{ tweet.Tweet.description }}</p>
              <p>回覆內容 {{ tweet.comment }}</p>
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
import UserNavbar from "../components/UserNavbar";
import UserProfile from "../components/UserProfile";
import Tab from "../components/Tab";

// GET api/users/:id/replied_tweets
const dummydata = [
  {
    id: 3,
    comment:
      "Quod facilis animi ipsa veniam. Eum labore animi suscipit soluta ex dolores cupiditate. Dolor maxime ab error quia id. Quia magnam qui non assumenda qui minus. Ullam voluptatem qui iure eum adipisci enim sint sed. Cum repellat sequi hic reprehenderit.",
    UserId: 2,
    TweetId: 1,
    createdAt: "2021-03-04T12:08:23.000Z",
    updatedAt: "2021-03-04T12:08:23.000Z",
    Tweet: {
      id: 1,
      description:
        "Natus neque quod eum minus. Debitis aut quam sunt. Voluptatibus sit molestiae eius sit porro totam. Voluptate beatae non.",
      UserId: 1,
      createdAt: "2021-03-04T12:08:22.000Z",
      updatedAt: "2021-03-04T12:08:22.000Z",
    },
  },
  {
    id: 15,
    comment:
      "Quaerat dolorum rem sint. Sit perspiciatis magni est et quia est cum. Magni tenetur consectetur quis exercitationem corrupti delectus. Asperiores excepturi aperiam qui ab amet aliquam quo ea impedit. Quae exercitationem officiis sit molestiae voluptate temporibus ut. Veritatis itaque doloremque quia qui officia sunt quam voluptatem totam.\n \rVoluptas facilis atque. Ea tempore accusamus facere repudiandae eaque velit consequuntur incidunt fuga. Repudiandae omnis facilis est incidunt facere. Cum aspernatur sed voluptatibus vel illum.\n \rUt eius nobis minus inventore voluptatem qui aut quidem aut. Aut iusto suscipit neque quas eos suscipit ut. Consequatur nihil deleniti voluptas voluptas nemo. Molestiae voluptate facere ea at quas ipsa.",
    UserId: 2,
    TweetId: 5,
    createdAt: "2021-03-04T12:08:23.000Z",
    updatedAt: "2021-03-04T12:08:23.000Z",
    Tweet: {
      id: 5,
      description: "quia labore magnam",
      UserId: 1,
      createdAt: "2021-03-04T12:08:22.000Z",
      updatedAt: "2021-03-04T12:08:22.000Z",
    },
  },
  {
    id: 23,
    comment: "Est sed necessitatibus.",
    UserId: 2,
    TweetId: 8,
    createdAt: "2021-03-04T12:08:23.000Z",
    updatedAt: "2021-03-04T12:08:23.000Z",
    Tweet: {
      id: 8,
      description: "aut dolorem et",
      UserId: 1,
      createdAt: "2021-03-04T12:08:22.000Z",
      updatedAt: "2021-03-04T12:08:22.000Z",
    },
  },
  {
    id: 32,
    comment: "Quos ut fugit eum repellendus delectus consectetur.",
    UserId: 2,
    TweetId: 11,
    createdAt: "2021-03-04T12:08:23.000Z",
    updatedAt: "2021-03-04T12:08:23.000Z",
    Tweet: {
      id: 11,
      description:
        "Quaerat aut voluptatem quibusdam nulla impedit. Quos in accusantium veniam velit ipsa voluptatem debitis in. Et error omnis consequatur. Quo voluptatem esse.",
      UserId: 2,
      createdAt: "2021-03-04T12:08:22.000Z",
      updatedAt: "2021-03-04T12:08:22.000Z",
    },
  },
];


export default {
  name: "Userself",
  components: {
    Sidebar,
    UserNavbar,
    UserProfile,
    Tab,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    // const currentUserId = this.currentUserId;
    this.fetchUserself();
  },
  methods: {
    fetchUserself() {
      // 用filter篩選currentUser的tweets
      this.tweets = dummydata
    },
  },
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
  height: auto;
}
.right-col {
  border: 1px solid blue;
  /* width: 350px; */
  height: 517px;
}
.user-profile {
  border: 1px solid green;
  width: 100%;
  height: 375px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: auto;
}
</style>