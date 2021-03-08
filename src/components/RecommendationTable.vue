<template>
  <div class="wrapping mt-3">
    <div class="recommmendation-title ps-3">跟隨誰</div>
    <div class="user" v-for="user in recommendUsers" :key="user.id">
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
        <p class="mt-2 mb-0 user-name" :title="user.followedCount">
          {{ user.name }}
        </p>
        <p class="user-account">@{{ user.account }}</p>
      </div>
      <div class="user-following">
        <a
          href=""
          v-if="user.isFollowing"
          @click.stop.prevent="unFollow(user.id)"
        >
          <div class="user-following-btn text-center">正在跟隨</div>
        </a>
        <a href="" v-else @click.stop.prevent="Follow(user.id)">
          <div class="user-follow-btn text-center">跟隨</div>
        </a>
      </div>
    </div>
    <div class="recommmendation-footer ps-3" v-if="recommendUsers.length === 5">
      <div class="displayMore" @click="moreRecommendUsers">顯示更多</div>
    </div>
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
  font-weight: 900;
}
.recommmendation-footer {
  height: 46px;
  line-height: 46px;
  color: #ff6600;
  font-weight: 700;
}
.user {
  display: grid;
  grid-template-columns: 70px 1fr auto;
  grid-template-rows: 70px;
  border-top: 1px #e6ecf0 solid;
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
.displayMore {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "RecommendationTable",
  props: {
    initialRecommendUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      recommendUsers: [...this.initialRecommendUsers],
    };
  },
  created() {
    this.sortFollowedCount();
    this.top5();
    // console.log(this.recommendUsers.length);
  },
  methods: {
    sortFollowedCount() {
      this.recommendUsers
        .sort(function (a, b) {
          return a.followedCount - b.followedCount;
        })
        .reverse();
    },
    top5() {
      this.recommendUsers = [...this.recommendUsers.slice(0, 5)];
    },
    moreRecommendUsers() {
      (this.recommendUsers = [...this.initialRecommendUsers]),
        this.sortFollowedCount();
    },
    unFollow(id) {
      this.recommendUsers = this.recommendUsers.map((user) => {
        if (user.id === id) {
          return (user = {
            ...user,
            isFollowing: false,
          });
        } else {
          return user;
        }
      });
    },
    Follow(id) {
      this.recommendUsers = this.recommendUsers.map((user) => {
        if (user.id === id) {
          return (user = {
            ...user,
            isFollowing: true,
          });
        } else {
          return user;
        }
      });
    },
  },
};
</script>