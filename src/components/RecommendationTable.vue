<template>
  <div class="wrapping">
    <div class="recommmendation-title ps-3">跟隨誰</div>
    <!-- 原始 -->
    <div class="user">
      <div class="user-image">
        <div class="user-image-cut">
          <img
            class="user-image-picture"
            src="https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="user-info ms-2">
        <p class="mt-2 mb-0 user-name">ALPHAcamp</p>
        <p class="user-account">@ac</p>
      </div>
      <div class="user-following">
        <a href="">
          <div class="user-following-btn text-center">正在跟隨</div>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="user" v-for="user in users" :key="user.id">
      <div class="user-image">
        <div class="user-image-cut">
          <img
            class="user-image-picture"
            :src="user.image"
            alt="user-picture"
          />
        </div>
      </div>
      <div class="user-info ms-2">
        <p class="mt-2 mb-0 user-name">{{ user.name }}</p>
        <p class="user-account">@{{ user.account }}</p>
      </div>
      <div class="user-following">
        <a href="" v-if="user.isFollowing">
          <div class="user-following-btn text-center">正在跟隨</div>
        </a>
        <a href="" v-else>
          <div class="user-follow-btn text-center">跟隨</div>
        </a>
      </div>
    </div>
    <div class="recommmendation-footer ps-3 pt-2">顯示更多</div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.wrapping {
  background-color: #f5f8fa;
  height: 100%;
  border-radius: 14px;
}
.recommmendation-title {
  height: 46px;
  line-height: 46px;
  border-bottom: 1px #e6ecf0 solid;
  font-weight: 900;
}
.recommmendation-footer {
  color: #ff6600;
  font-weight: 700;
}
.user {
  display: grid;
  grid-template-columns: 70px 1fr auto;
  grid-template-rows: 70px;
  border-bottom: 1px #e6ecf0 solid;
}
.user-image {
  position: relative;
}
.user-image-cut {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  top: 10px;
  left: 15px;
}
.user-image-picture {
  width: 100%;
  object-fit: cover;
}
.user-name {
  font-weight: 800;
}
.user-account {
  color: #657786;
}
.user-following {
  position: relative;
}
.user-following-btn {
  width: 92px;
  height: 30px;
  border-radius: 15px;
  background-color: #ff6600;
  color: #ffffff;
  line-height: 30px;
  position: absolute;
  right: 15px;
  top: 20px;
}
.user-follow-btn {
  width: 62px;
  height: 30px;
  border: 1px solid #ff6600;
  border-radius: 15px;
  color: #ff6600;
  line-height: 30px;
  position: absolute;
  right: 15px;
  top: 20px;
  font-weight: 700;
}
</style>

<script>
export default {
  name: "RecommendationTable",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "ALPHAcamp",
          account: "ac",
          image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
          isFollowing: true,
        },
        {
          id: 2,
          name: "Darric",
          account: "DL",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
          isFollowing: true,
        },
        {
          id: 3,
          name: "Claire",
          account: "ClaireLi",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
          isFollowing: true,
        },
        {
          id: 4,
          name: "goater",
          account: "goater",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
          isFollowing: false,
        },
        {
          id: 5,
          name: "stan_wang",
          account: "stan",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
          isFollowing: false,
        },
        // { name: "路人甲", account: "someone", image: "", isFollowing: false },
      ],
    };
  },
};
</script>