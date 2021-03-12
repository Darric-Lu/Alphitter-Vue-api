<template>
  <div class="wrapping">
    <div class="users-title fw-bold">使用者列表</div>
    <div class="wrapping-users">
      <div class="wrapping-card" v-for="user in users" :key="user.id">
        <div class="user-img">
          <img :src="user.avatar" alt="" class="user-img-picture" />
        </div>
        <div class="user-title">
          <img :src="user.cover" class="user-title-img" alt="" />
        </div>
        <div class="card-body text-center px-0 pt-5 pb-1">
          <h5 class="card-name">{{ user.name }}</h5>
          <p class="card-account">@{{ user.account }}</p>
          <p class="m-2">
            <span class="card-tweets bold">
              <img src="./../assets/comment-alt.svg" alt="" />
              {{ user.TweetCount }}
            </span>
            <span class="card-liked bold">
              <img src="./../assets/heart.svg" alt="" />
              {{ user.isLikedCount }}
            </span>
          </p>
          <p class="m-2">
            <span class="card-following"
              ><span class="bold">{{ user.FollowingCount }}個</span>
              <span class="gray">跟隨中</span>
            </span>
            <span class="card-followed"
              ><span class="bold">{{ user.FollowerCount }}位</span>
              <span class="gray">跟隨者</span></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapping {
  height: 1200px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
}
.users-title {
  line-height: 55px;
  padding-left: 26.5px;
  border-bottom: 1px solid #e6ecf0;
}
.wrapping-users {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  height: 1144px;
  overflow-y: auto;
}
.wrapping-card {
  width: auto;
  height: 370px;
  position: relative;
  border-radius: 20px;
}
.user-img {
  border: 0.4em rgb(255, 255, 255) solid;
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.user-img-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-title {
  width: auto;
  height: 180px;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.user-title-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body {
  background-color: #f6f7f8;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.card-name {
  font-weight: 700;
}
.card-account,
.gray {
  color: rgb(101, 119, 134, 1);
}
.card-tweets,
.card-liked,
.card-following,
.card-followed {
  margin: 0 3px;
}
.bold {
  font-weight: 900;
}
</style>

<script>
export default {
  name: "AdminUsersCardTable",
  props: {
    users: {
      type: Array,
      require: true,
    },
  },
};
</script>