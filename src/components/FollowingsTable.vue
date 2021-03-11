<template>
  <div class="wrapping">
    <div class="status-table d-flex">
      <div class="text-center">
        <router-link :to="{ name: 'user-follower' }">
          <div class="followers">跟隨者</div>
        </router-link>
      </div>
      <div class="following text-center">
        <router-link :to="{ name: 'user-following' }">
          <div class="following active">正在跟隨</div>
        </router-link>
      </div>
    </div>
    <!--  -->
    <div class="followers-item" v-for="following in followings" :key="following.id">
      <div class="account-image">
        <div class="account-image-cut">
          <img class="user-img" :src="following.avatar" alt="" />
        </div>
      </div>
      <div class="account-info">
        <h5 class="user-name">{{ following.name }}</h5>
        <p class="user-account">@{{ following.account }}</p>
        <p class="user-tweets">
          {{ following.introduction }}
        </p>
        <div
          class="is-following-btn text-center following-active"
          v-if="following.isFollowing"
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

<script>
export default {
  name: "FollowersTable",
  props: {
    initialFollowings: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      followings: this.initialFollowings
    }
  },
  watch: {
    initialFollowings(newValue) {
      this.followings = {
        ...this.followings,
        ...newValue
      }
    }
  }
};
</script>

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
  height: auto;
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
