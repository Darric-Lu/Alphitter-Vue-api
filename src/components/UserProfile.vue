<template>
  <div class="container user-profile px-0">
    <div class="user-title-cut">
      <img
        v-if="currentUser.cover"
        class="user-title-pic"
        :src="currentUser.cover"
        alt="使用者標題照片"
      />
    </div>
    <div class="avatar">
      <img
        v-if="currentUser.avatar"
        class="avatar-img"
        :src="currentUser.avatar"
        alt="使用者大頭貼"
      />
    </div>
    <div class="information">
      <div class="edit d-flex flex-row-reverse">
        <button
          type="button"
          class="btn edit-button"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          編輯個人資料
        </button>
      </div>
      <div class="name-text">
        <span class="name-content">{{ currentUser.name }}</span>
        <span class="name-account">@{{ currentUser.account }}</span>
        <div class="mt-3">
          {{ currentUser.introduction }}
        </div>
        <div class="follow mt-2">
          <router-link
            :to="{ name: 'user-self-following' }"
            class="followers-content"
            ><span class="bold">{{ currentUser.Followings.length }}個</span>
            <span class="gray">跟隨中</span>
          </router-link>
          <router-link
            :to="{ name: 'user-self-follower' }"
            class="following-content ms-2"
            ><span class="bold">{{ currentUser.Followings.length }}位</span>
            <span class="gray">跟隨者</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div
              type="button"
              class="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></div>
            <h5 class="modal-title" id="exampleModalLabel">
              <span class="title-content">編輯個人資料</span>
            </h5>
            <button class="save-btn">儲存</button>
          </div>
          <div class="modal-body p-0">
            <div class="user-title-cut">
              <img
                v-if="currentUser.cover"
                class="user-title-pic"
                :src="currentUser.cover"
                alt="使用者標題照片"
              />
              <div class="add-photo-btn">
                <img
                  src="../assets/addPhoto.svg"
                  alt="新增/修改照片"
                  title="修改照片"
                />
              </div>
              <div class="delete-photo-btn">
                <img
                  src="../assets/crossWhite.svg"
                  alt="刪除照片"
                  title="刪除照片"
                />
              </div>
            </div>
            <div class="modal-avatar">
              <img
                v-if="currentUser.avatar"
                class="modal-avatar-img"
                :src="currentUser.avatar"
                alt="使用者大頭貼"
              />
              <div class="chang-photo-btn">
                <img
                  src="../assets/addPhoto.svg"
                  alt="新增/修改使用者大頭貼"
                  title="修改大頭貼"
                />
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="form-group input-data name-data">
              <label for="name" class="ms-2 fw-bold">名稱</label>
              <textarea
                v-model="currentUser.name"
                id="name"
                class="form-control"
                name="name"
                rows="1"
                required
              />
            </div>

            <div class="form-group input-data introduction-data">
              <label for="introduction" class="ms-3 fw-bold">自我介紹</label>
              <textarea
                v-model="currentUser.introduction"
                id="introduction"
                class="form-control"
                rows="3"
                name="introduction"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    currentUser: {
      type: Object,
      required: true,
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
  /* z-index: 999; */
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