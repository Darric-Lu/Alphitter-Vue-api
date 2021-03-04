<template>
  <div class="wrapping">
    <div class="status-table d-flex">
      <div class="text-center">
        <router-link :to="{ name: 'user-self-follower' }">
          <div class="followers">跟隨者</div>
        </router-link>
      </div>
      <div class="following text-center">
        <router-link :to="{ name: 'user-self-following' }">
          <div class="following active">正在跟隨</div>
        </router-link>
      </div>
    </div>
    <!-- 原始 -->
    <div class="followers-item">
      <div class="account-image">
        <div class="account-image-cut">
          <img
            class="user-img"
            src="https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="account-info">
        <h5 class="user-name">Darric</h5>
        <p class="user-account">@darric</p>
        <p class="user-tweets">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div class="is-following-btn text-center following-active">
          正在跟隨
        </div>
        <!-- <div class="is-following-btn text-center following-none">跟隨</div> -->
      </div>
    </div>
    <!--  -->
    <div class="followers-item" v-for="tweet in tweets" :key="tweet.account">
      <div class="account-image">
        <div class="account-image-cut">
          <img class="user-img" :src="tweet.image" alt="" />
        </div>
      </div>
      <div class="account-info">
        <h5 class="user-name">{{ tweet.name }}</h5>
        <p class="user-account">@{{ tweet.account }}</p>
        <p class="user-tweets">
          {{ tweet.article }}
        </p>
        <div
          class="is-following-btn text-center following-active"
          v-if="tweet.isFollowing"
        >
          正在跟隨
        </div>
        <div class="is-following-btn text-center following-none" v-else>
          跟隨
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.status-table {
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid #e6ecf0;
}
.followers,
.following {
  width: 130px;
  font-weight: 800;
  color: #657786;
}
.active {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}
.followers-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 105px;
  border-bottom: 1px solid #e6ecf0;
}
.account-image {
  position: relative;
}
.account-image-cut {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c4c4;
  position: absolute;
  top: 13px;
  left: 15px;
  overflow: hidden;
}
.account-info {
  position: relative;
}
.user-img {
  width: 100%;
  object-fit: cover;
}
.user-name {
  margin: 10px 0 0 0;
}
.user-account {
  margin: 0;
}
.user-tweets {
  margin: 0 0 10px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
.is-following-btn {
  position: absolute;
  height: 30px;
  line-height: 30px;
  right: 15px;
  top: 12px;
  border: 1px solid #ff6600;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 15px;
}
.following-active {
  width: 92px;
  background: #ff6600;
  color: #ffffff;
}
.following-none {
  width: 62px;
  font-weight: 700;
  color: #ff6600;
}
</style>


<script>
export default {
  name: "FollowersTable",
  data() {
    return {
      tweets: [
        {
          id: 6,
          name: "路人甲",
          account: "someone",
          image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
        {
          id: 5,
          name: "stan_wang",
          account: "stan",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
        {
          id: 3,
          name: "Claire",
          account: "ClaireLi",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
        {
          id: 4,
          name: "goater",
          account: "goater",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
        {
          id: 1,
          name: "ALPHAcamp",
          account: "ac",
          image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
        {
          id: 2,
          name: "Darric",
          account: "DL",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
          article:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          isFollowing: true,
        },
      ],
    };
  },
};
</script>