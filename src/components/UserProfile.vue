<template>
  <div class="container userprofile">
    <img
      src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
      alt=""
      class="avatar"
    />
    <div class="coverPhoto">
      <img
        src="https://images.unsplash.com/photo-1610865916711-1667294f44e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw2MzkyMXwwfDF8c2VhcmNofDF8fG1vdXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200"
        alt=""
        class="coverPhoto"
      />
    </div>
    <div class="information">
      <div class="edit">
        <button
          type="button"
          class="btn btn-outline editButton"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          編輯個人資料
        </button>
      </div>
      <div class="name-text">
        <span><strong>Name</strong></span>
        <span>@account</span>
      </div>
      <div>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div class="follow">
        <strong>34個</strong>追隨中 <strong>59位</strong>跟隨者
      </div>
    </div>
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="editInformation"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn btn-link"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click.prevent.stop="closeModal"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <div class="editContainer">
              <div class="coverPhoto">
                <img
                  src="https://images.unsplash.com/photo-1610865916711-1667294f44e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw2MzkyMXwwfDF8c2VhcmNofDF8fG1vdXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200"
                  alt=""
                  class="coverPhoto"
                />
              </div>
              <span class="textarea">
                <img
                  src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
                  alt=""
                />
                <textarea
                  class="form-control"
                  placeholder="有甚麼新鮮事?"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
              </span>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-secondary tweetSubmit"
              data-bs-dismiss="modal"
            >
              推文
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- test -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

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
// import $ from "jquery";

export default {
  // methods: {
  //   showModal() {
  //     $("#newTweet").modal("show");
  //   },
  //   closeModal() {
  //     $("#newTweet").modal("hide");
  //   },
  // },
};
</script>

<style scoped>
.userprofile {
  position: relative;
}
.avatar {
  position: absolute;
  border-radius: 50%;
  border: 4px solid #ffffff;
  height: 140px;
  width: 140px;
  top: 124px;
  left: 14px;
  z-index: 999;
}
.coverPhoto {
  height: 200px;
  width: 100%;
}
.information {
  height: 175px;
  width: 100%;
}
.buttongroup {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
button {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: #ff6600;
  font-weight: bold;
  width: 92px;
  height: 40px;
}
.name-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
</style>