<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2 left-col">
        <!-- Sidebar -->
        <Sidebar :active="active" />
      </div>
      <div class="row col-10 mid-col">
        <div class="col-12 col-lg-8">
          <!-- UserNavbar -->
          <UserNavbar />
          <div class="userself-like">
            <!-- Userprofile -->
            <UserProfile />
          </div>
          <!-- Tab -->
          <Tab />
          <div class="twitterLikes">
            <!-- twitterCardTable -->
            <twitterCardTable :tweets="tweets" />
          </div>
        </div>
      </div>
      <div class="col-4 d-none d-lg-block right-col">
        <!-- Recommendationtable -->
        <RecommendationTable />
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

// GET api/users/:id/likes
// like過的內容跟設計稿要顯示的內容不一致
const dummydata = [
    {
        "id": 1,
        "TweetId": 3,
        "UserId": 2,
        "createdAt": "2021-03-06T14:18:47.000Z",
        "updatedAt": "2021-03-06T14:18:47.000Z",
        "Tweet": {
            "id": 3,
            "description": "voluptas",
            "UserId": 1,
            "createdAt": "2021-03-06T14:18:47.000Z",
            "updatedAt": "2021-03-06T14:18:47.000Z"
        }
    },
    {
        "id": 2,
        "TweetId": 7,
        "UserId": 2,
        "createdAt": "2021-03-06T14:18:47.000Z",
        "updatedAt": "2021-03-06T14:18:47.000Z",
        "Tweet": {
            "id": 7,
            "description": "Explicabo aut non et aut iure sed numquam. Repudiandae aliquid beatae sit officiis. Inventore adipisci aspernatur laboriosam esse voluptatem. Vel delectus rerum atque minima. Pariatur optio quos incidunt consequatur quo. Blanditiis voluptatem laborum numquam odit non.",
            "UserId": 1,
            "createdAt": "2021-03-06T14:18:47.000Z",
            "updatedAt": "2021-03-06T14:18:47.000Z"
        }
    },
    {
        "id": 4,
        "TweetId": 25,
        "UserId": 2,
        "createdAt": "2021-03-05T14:18:47.000Z",
        "updatedAt": "2021-03-05T14:18:47.000Z",
        "Tweet": {
            "id": 25,
            "description": "Qui nostrum cum omnis est in qui dolores quasi sit. Earum ut accusamus quaerat qui voluptas eos eius dolores.",
            "UserId": 3,
            "createdAt": "2021-03-06T14:18:47.000Z",
            "updatedAt": "2021-03-06T14:18:47.000Z"
        }
    }
]

const dummyUser = {
  currentUser: {
    id: 2,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "UserselfLike",
  components: {
    Sidebar,
    twitterCardTable,
    UserNavbar,
    UserProfile,
    Tab,
    RecommendationTable
  },
  data() {
    return {
      tweets: [],
      currentUserId: dummyUser.currentUser.id,
      active: {
        home: "row",
        self: "active",
        setting: "row",
      },
    };
  },
  created() {
    const currentUserId = this.currentUserId;
    this.fetchUserself(currentUserId);
  },
  methods: {
    fetchUserself(currentUserId) {
      // 用filter篩選currentUser的tweets
      this.tweets = dummydata.filter((data) => data.UserId === currentUserId);
    },
  }
};
</script>

<style scoped>
.col-2 {
  box-sizing: border-box;
  height: 1196px;
}
.left-col {
  border: 1px solid blue;
  /* width: 235px; */
  height: 1196px;
}
.mid-col {
  /* display: flex;
  flex-flow: column wrap; */
  border: 1px solid blue;
  /* margin-right: auto;
  margin-left: auto; */
  /* width: 600px; */
  height: auto;
}
.right-col {
  /* border: 1px solid blue; */
  /* width: 350px; */
  height: 517px;
}
.userself-like {
  border: 1px solid green;
  width: 100%;
  height: 400px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: auto;
}
</style>