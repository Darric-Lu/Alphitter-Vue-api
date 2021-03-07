<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2 left-col">
        <!-- Sidebar 顯示全寬2/12 -->
        <Sidebar :currentUser="currentUser"/>
      </div>
      <div class="row col-10 px-0">
        <!-- 中間包含Recommendationtable  顯示全寬10/12-->
        <div class="col-12 col-lg-8 px-0 mid-col">
          <!-- 中間在小於md時 顯示全寬10/12-->
          <!-- UserNavbar -->
          <UserNavbar :tweets="tweets" />
          <div class="user-other">
            <!-- Userprofile -->
            <UserProfile />
          </div>
          <!-- Tab -->
          <Tab />
          <div class="mid-down">
            <!-- twitterCardTable -->
            <twitterCardTable :tweets="tweets" :currentUser="currentUser" />
          </div>
        </div>
      </div>
      <div class="col-4 d-none d-lg-block right-col">
        <!-- Recommendationtable 在小於md時消失-->
        <RecommendationTable :initial-recommend-users="recommendUsers" />
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

// GET api/tweets/:id
const dummydata = [
  {
    id: 1,
    description: "repudiandae",
    UserId: 1,
    createdAt: "2021-03-03T16:14:20.000Z",
    updatedAt: "2021-03-03T16:14:20.000Z",
    User: {
      id: 1,
      name: "root",
      email: "root@example.com",
      account: "root",
      password: "$2a$10$k/8PhvsPm3PqlNcc/OfmHO1o7Mo9LubVdbJzIvGRNWPF86QXrU6DS",
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
  },
  {
    id: 2,
    description: "Consequatur qui odio aspernatur qui.",
    UserId: 1,
    createdAt: "2021-03-03T16:14:20.000Z",
    updatedAt: "2021-03-03T16:14:20.000Z",
    User: {
      id: 1,
      name: "root",
      email: "root@example.com",
      account: "root",
      password: "$2a$10$k/8PhvsPm3PqlNcc/OfmHO1o7Mo9LubVdbJzIvGRNWPF86QXrU6DS",
      avatar: null,
      cover: null,
      introduction: null,
      role: "admin",
      createdAt: "2021-03-03T16:14:19.000Z",
      updatedAt: "2021-03-03T16:14:19.000Z",
    },
    Replies: [
      {
        id: 6,
        comment: "Aut autem qui vel voluptatem non.",
        UserId: 3,
        TweetId: 2,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 7,
        comment:
          "Repellendus ut enim odit. Quia molestiae aut corrupti eligendi aut omnis est mollitia ut. Voluptatibus minus eum consectetur laboriosam eos. Corrupti ullam blanditiis doloremque qui excepturi doloribus maxime. Sed dolorum neque sit qui ipsum quam ex at. Necessitatibus cumque id eaque deserunt id.",
        UserId: 4,
        TweetId: 2,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 8,
        comment: "aliquid",
        UserId: 4,
        TweetId: 2,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 156,
        comment:
          "Aperiam qui dicta facere ut deserunt fugit et. Ipsam et praesentium voluptates aut optio. Autem similique eaque voluptatum et voluptas occaecati. Doloremque dolor et rerum provident ratione doloremque omnis veniam eaque. Accusamus quos et exercitationem.\n \rCorporis ab placeat consequatur qui voluptate praesentium illo eum. Itaque quaerat et exercitationem magni omnis unde. Suscipit dolore magni ad ducimus officiis. Consequatur odio tempora soluta at quas quia esse.\n \rLibero aspernatur exercitationem enim incidunt officiis voluptatem doloremque eligendi et. Blanditiis cum impedit nesciunt quod nihil consequuntur. Nulla est dolore non recusandae a. Est atque voluptatibus occaecati voluptas accusamus quae dolore fugiat. Est sapiente eveniet tempore expedita voluptatem labore magni non.",
        UserId: 5,
        TweetId: 2,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
      {
        id: 157,
        comment: "voluptatibus",
        UserId: 1,
        TweetId: 2,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
      {
        id: 158,
        comment: "et",
        UserId: 5,
        TweetId: 2,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
    ],
    Likes: [],
  },
  {
    id: 3,
    description: "fugiat",
    UserId: 1,
    createdAt: "2021-03-03T16:14:20.000Z",
    updatedAt: "2021-03-03T16:14:20.000Z",
    User: {
      id: 1,
      name: "root",
      email: "root@example.com",
      account: "root",
      password: "$2a$10$k/8PhvsPm3PqlNcc/OfmHO1o7Mo9LubVdbJzIvGRNWPF86QXrU6DS",
      avatar: null,
      cover: null,
      introduction: null,
      role: "admin",
      createdAt: "2021-03-03T16:14:19.000Z",
      updatedAt: "2021-03-03T16:14:19.000Z",
    },
    Replies: [
      {
        id: 9,
        comment:
          "Sequi aspernatur enim praesentium voluptas consequatur. Qui dolor doloremque rem culpa. Possimus dicta corporis est omnis aut est. Voluptas dolorem enim aperiam praesentium atque est. Voluptate illo assumenda dolorem.",
        UserId: 3,
        TweetId: 3,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 10,
        comment: "Autem sint facere sit non nesciunt expedita saepe.",
        UserId: 5,
        TweetId: 3,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 11,
        comment: "Atque et eaque cum qui similique laborum.",
        UserId: 5,
        TweetId: 3,
        createdAt: "2021-03-02T11:47:05.000Z",
        updatedAt: "2021-03-02T11:47:05.000Z",
      },
      {
        id: 159,
        comment:
          "Voluptas a beatae eligendi rerum. Quaerat dolores consectetur beatae iste porro eligendi. Voluptas et accusamus optio provident provident perferendis aspernatur nesciunt. Laudantium ut quo voluptatem. Enim deserunt odit non.",
        UserId: 5,
        TweetId: 3,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
      {
        id: 160,
        comment: "Dolores illum veniam nobis eaque et.",
        UserId: 3,
        TweetId: 3,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
      {
        id: 161,
        comment: "veritatis illum deserunt",
        UserId: 4,
        TweetId: 3,
        createdAt: "2021-03-03T16:14:20.000Z",
        updatedAt: "2021-03-03T16:14:20.000Z",
      },
    ],
    Likes: [],
  },
];

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
  name: "UserOther",
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
      currentUser: {
        account: "",
        name: "",
        userImage: "",
        titleImage: "",
        followersCount: "",
        followingCount: "",
        SelfIntroduction: "",
      },
      recommendUsers: {},
    };
  },
  created() {
    const { id: currentUserId } = this.$route.params;
    this.fetchUserOther(currentUserId);
    console.log("created", typeof currentUserId, currentUserId);
  },
  methods: {
    fetchUserOther(currentUserId) {
      console.log("fetchUserOther id:", currentUserId);
      this.tweets = dummydata;

      // console.log('currentUserId',typeof currentUserId)
      // // 用filter篩選currentUser的tweets
      // // 這邊資料型別不一樣，為何!!!!
      // // 現在在created階段用Number轉成數字了，但猜測是因為非同步的關係導致created比methods晚觸發
      // // 後來用==弱型別去判斷解決，但也不行...
      // this.tweets = dummydata.filter((data) => {
      //   data.UserId == currentUserId
      //   console.log('data.UserId',typeof data.UserId, data.UserId)
      //   console.log('currentUserId:',typeof currentUserId, currentUserId)
      // })
    },
    fetchRecommendUsers() {
      this.recommendUsers = [...dummyRecommendUsers.recommendUsers];
      // console.log("recommendUsers", this.recommendUsers);
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
  height: 1202px;
}
.right-col {
  border: 1px solid blue;
  /* width: 350px; */
  height: 517px;
}
.user-other {
  border: 1px solid green;
  width: 100%;
  height: 400px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
</style>