<template>
  <div class="container user-profile px-0">
    <div class="user-title-cut">
      <img
        v-if="otherUser.cover"
        class="user-title-pic"
        :src="otherUser.cover"
        alt="使用者標題照片"
      />
    </div>
    <div class="avatar">
      <img
        v-if="otherUser.avatar"
        class="avatar-img"
        :src="otherUser.avatar"
        alt="使用者大頭貼"
      />
    </div>
    <div class="information">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn message-button-wrapping">
          <img
            class="message-button"
            src="./../assets/message-icon.svg"
            alt=""
          />
        </button>
        <button
          v-if="otherUser.isSubscription"
          @click="handleUnSubscription"
          type="button"
          class="btn unSubscription-button-wrapping"
        >
          <img
            class="subscription-button"
            src="./../assets/unSubscription.svg"
            alt=""
          />
        </button>
        <button
          v-else
          @click="handleSubscription"
          type="button"
          class="btn subscription-button-wrapping"
        >
          <img
            class="unSubscription-button"
            src="./../assets/subscription.svg"
            alt=""
          />
        </button>
        <button
          @click="handleUnFollow"
          v-if="otherUser.isFollowed"
          type="button"
          class="btn unfollowing-button"
        >
          正在跟隨
        </button>
        <button
          v-else
          @click="handleFollow"
          type="button"
          class="btn following-button"
        >
          跟隨
        </button>
      </div>

      <div class="name-text">
        <span class="name-content">{{ otherUser.name }}</span>
        <span class="name-account">@{{ otherUser.account }}</span>
        <div class="mt-3">
          {{ otherUser.introduction }}
        </div>
        <div class="follow mt-2">
          <router-link
            :to="{ name: 'user-following' }"
            class="followings-content"
            ><span class="bold"
              >{{
                otherUser.Followings ? otherUser.Followings.length : ""
              }}個</span
            >
            <span class="gray">跟隨中</span>
          </router-link>
          <router-link
            :to="{ name: 'user-follower' }"
            class="followers-content ms-2"
            ><span class="bold"
              >{{
                otherUser.Followers ? otherUser.Followers.length : ""
              }}位</span
            >
            <span class="gray">跟隨者</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOtherProfile",
  props: {
    otherUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleFollow() {
      // this.$emit("handle-follow");
    },
    handleUnFollow() {
      // this.$emit("handle-unfollow");
    },
    handleSubscription() {
      // this.$emit("handle-subscription");
    },
    handleUnSubscription() {
      // this.$emit("handle-unsubscription");
    },
  },
};
</script>

<style scoped>
.user-profile {
  position: relative;
}
.user-title-cut {
  height: 200px;
  width: 100%;
  overflow: hidden;
  background-color: #999999;
}
.user-title-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar {
  position: absolute;
  border-radius: 50%;
  border: 4px solid #ffffff;
  height: 140px;
  width: 140px;
  top: 124px;
  left: 14px;
  overflow: hidden;
  background: url("../assets/working-with-laptop.svg");
  background-color: #999999;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.information {
  height: 200px;
  width: 100%;
}
.message-button-wrapping {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  font-weight: bold;
  width: 40px;
  height: 40px;
  margin: 10px 15px 0 0;
  position: relative;
}
.message-button {
  position: absolute;
  transform: translate(-50%, -50%);
}
.subscription-button-wrapping {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  font-weight: bold;
  width: 40px;
  height: 40px;
  margin: 10px 15px 0 0;
  position: relative;
}
.subscription-button {
  position: absolute;
  transform: translate(-50%, -50%);
}
.unSubscription-button-wrapping {
  background: #ff6600;
  border-radius: 50px;
  border: 1px solid #ff6600;
  font-weight: bold;
  width: 40px;
  height: 40px;
  margin: 10px 15px 0 0;
  position: relative;
}
.unSubscription-button {
  position: absolute;
  transform: translate(-50%, -50%);
}
.following-button {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: #ff6600;
  font-weight: bold;
  width: 102px;
  height: 40px;
  margin: 10px 15px 0 0;
}
.unfollowing-button {
  background: #ff6600;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: white;
  font-weight: bold;
  width: 102px;
  height: 40px;
  margin: 10px 15px 0 0;
}
.name-text {
  display: flex;
  flex-direction: column;
  margin: 19px 0 0 15px;
}
.name-content {
  font-weight: 800;
  font-size: 19px;
}
.name-account {
  color: #657786;
  font-size: 15px;
}
.follow {
  font-size: 15px;
}
.followers-content,
.following-content {
  text-decoration: none;
  color: black;
}

.bold {
  font-weight: 900;
}
.gray {
  color: rgb(101, 119, 134, 1);
  font-weight: 600;
}
/* modal */
.close-btn {
  position: absolute;
  top: 19.5px;
  left: 19.5px;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
.close-btn::before,
.close-btn::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px; /* cross thickness */
  background-color: #ff6600;
}

.close-btn::before {
  transform: rotate(45deg);
}

.close-btn::after {
  transform: rotate(-45deg);
}
.title-content {
  font-weight: 700;
  margin-left: 79px;
}
.save-btn {
  background: #ff6600;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: #ffffff;
  font-weight: bold;
  width: 64px;
  height: 30px;
  /* margin: 10px 15px 0 0; */
}
.modal-avatar {
  position: absolute;
  border-radius: 50%;
  border: 4px solid #ffffff;
  height: 180px;
  width: 180px;
  top: 100px;
  left: 20px;
  /* z-index: 999; */
  overflow: hidden;
  background: url("../assets/working-with-laptop.svg");
  background-color: #999999;
}
.modal-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.add-photo-btn,
.delete-photo-btn {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 90px;
  cursor: pointer;
}
.add-photo-btn {
  left: 45%;
}
.delete-photo-btn {
  left: 55%;
}
.chang-photo-btn {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.name-data {
  margin: 80px 15px 0 15px;
}
.introduction-data {
  margin: 20px 15px 0 15px;
}
.input-data {
  background-color: #f5f8fa;
  border-bottom: 2px #657786 solid;
}
textarea {
  background-color: #f5f8fa;
  border-style: none;
}
textarea:focus {
  background-color: #f5f8fa;
}
</style>