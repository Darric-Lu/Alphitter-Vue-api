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
          <Tab />
          <div class="mid-down">
            <!-- twitterCardTable -->
            <twitterCardTable :tweets="tweets" :currentUser="currentUser"/>
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

// GET api/tweets
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

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
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
      currentUserId: dummyUser.currentUser.id,
      active: {
        home: "row",
        self: "active",
        setting: "row",
      },
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
    const currentUserId = this.currentUserId;
    this.fetchUserself(currentUserId);
    this.fetchCurrentUser();
    this.fetchRecommendUsers();
  },
  methods: {
    fetchUserself(currentUserId) {
      // 用filter篩選currentUser的tweets
      this.tweets = dummydata.filter((data) => data.UserId === currentUserId);
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