<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <div class="mid-header">首頁</div>
        <div class="twitterCard">
          <div class="name">
            <img
              src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4"
              alt=""
            />
            <span class="name-text">
              <span>Name</span>
              <span>@account</span>
            </span>
          </div>
          <div class="text my-3">
            <div>
              難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。
            </div>
            <div class="pt-2">DATE area</div>
          </div>
          <div class="divider"></div>
          <div class="response py-2">35 回覆次數 666 喜歡次數</div>
          <div class="divider"></div>
          <div class="responseIcon pt-2">
            <span class="pr-5">
              <font-awesome-icon icon="comment" />
            </span>
            <span class="pl-5">
              <font-awesome-icon icon="heart" />
            </span>
          </div>
        </div>
        <div class="mid-down">
          <!-- twitterCardTable -->
        </div>
      </div>
      <div class="col-lg-3 right-col">
        <!-- Recommendationtable -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "TweetReplyList",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}
.row {
  display: flex;
  border: 1px solid crimson;
}
.left-col {
  border: 1px solid blue;
  width: 235px;
  height: 1196px;
}
.mid-col {
  display: flex;
  flex-flow: column wrap;
  border: 1px solid blue;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  height: 1202px;
}
.mid-header {
  background: #ffffff;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  padding: 2px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
.twitterCard {
  border: 1px solid #e6ecf0;
  width: 100%;
  height: auto;
  padding: 10px;
}
.name {
  display: flex;
}
img {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  margin-right: 5px;
  /* left: 48%;
  top: 60px; */
}
.name-text {
  display: flex;
  flex-direction: column;
}
.divider {
  border-top: 1px solid #e6ecf0;
  width: 98%;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
.right-col {
  border: 1px solid blue;
  width: 350px;
  height: 517px;
}
</style>