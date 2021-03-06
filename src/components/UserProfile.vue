<template>
  <div class="container user-profile px-0">
    <div class="user-title-cut">
      <img
        class="user-title-pic"
        :src="cerruntUser.titleImage"
        alt="使用者標題照片"
      />
    </div>
    <div class="avatar">
      <img class="avatar-img" :src="cerruntUser.userImage" alt="使用者大頭貼" />
    </div>
    <div class="information">
      <div class="edit d-flex flex-row-reverse">
        <button
          type="button"
          class="btn edit-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          編輯個人資料
        </button>
      </div>
      <div class="name-text">
        <span class="name-content">{{ cerruntUser.name }}</span>
        <span class="name-account">@{{ cerruntUser.account }}</span>
        <div class="mt-3">
          {{ cerruntUser.SelfIntroduction }}
        </div>
        <div class="follow mt-2">
          <span class="followers-content"
            ><span class="bold">{{ cerruntUser.followersCount }}個</span>
            <span class="gray">跟隨中</span>
          </span>
          <span class="following-content ms-2"
            ><span class="bold">{{ cerruntUser.followingCount }}位</span>
            <span class="gray">跟隨者</span></span
          >
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyCerruntUser = {
  cerruntUser: {
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
export default {
  name: "UserProfile",
  cerruntUser: {
    account: "",
    name: "",
    userImage: "",
    titleImage: "",
    followersCount: "",
    followingCount: "",
    SelfIntroduction: "",
  },
  created() {
    this.fetchCerruntUser();
  },
  methods: {
    fetchCerruntUser() {
      const {
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      } = dummyCerruntUser.cerruntUser;
      this.cerruntUser = {
        ...this.cerruntUser,
        account,
        name,
        userImage,
        titleImage,
        followersCount,
        followingCount,
        SelfIntroduction,
      };
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
}
.user-title-pic {
  width: 100%;
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
  /* z-index: 999; */
  overflow: hidden;
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
/* .buttongroup {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
} */
.edit-button {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: #ff6600;
  font-weight: bold;
  width: 122px;
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
.bold {
  font-weight: 900;
}
.gray {
  color: rgb(101, 119, 134, 1);
  font-weight: 600;
}
</style>