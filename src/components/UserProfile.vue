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
        <button type="button" class="btn btn-outline editButton">
          編輯個人資料
        </button>
      </div>
      <div class="name-text">
        <span><strong>Name</strong></span>
        <span>@account</span>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <div class="follow">
        <strong>34個</strong>追隨中 <strong>59位</strong>跟隨者
      </div>
    </div>
  </div>
</template>

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
.edit {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 19px;
}
.editButton {
  background: white;
  border-radius: 50px;
  border: 1px solid #ff6600;
  color: #ff6600;
  font-weight: bold;
  width: 25%;
  height: 40px;
}
.name-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>