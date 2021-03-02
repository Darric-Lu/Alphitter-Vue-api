<template>
  <div class="container">
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
        alt=""
      />
    </div>
    <div class="nav">
      <span>
        <font-awesome-icon icon="home" />
        <button type="button" class="btn btn-link">首頁</button>
      </span>
      <span>
        <font-awesome-icon icon="user" />
        <button type="button" class="btn btn-link">個人資料</button>
      </span>
      <span>
        <font-awesome-icon icon="cog" />
        <button type="button" class="btn btn-link">設定</button>
      </span>
      <button
        class="btn btn-sm btn-block mt-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#newTweet"
        @click.prevent.stop="showModal"
      >
        推文
      </button>
    </div>
    <div class="logout">
      <font-awesome-icon icon="sign-in-alt" />
      <button type="button" class="btn btn-link">登出</button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="newTweet"
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
              @click.prevent.stop="closeModal"
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
import $ from "jquery";

export default {
  methods: {
    showModal() {
      $("#newTweet").modal("show");
    },
    closeModal() {
      $("#newTweet").modal("hide");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  height: 1196px;
}
img {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  /* left: 48%;
  top: 60px; */
}
.nav {
  display: flex;
  flex-flow: column wrap;
  /* position: absolute; */
  width: 100%;
  height: 240px;
  /* top: 78px; */
}
.btn-block {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 45px;
}
.logout {
  justify-content: flex-end;
}
</style>