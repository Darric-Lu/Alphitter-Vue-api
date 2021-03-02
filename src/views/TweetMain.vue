<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <div class="twitterEditCard">
          <div class="mid-header">首頁</div>
          <div class="textarea">
              <img src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4" alt="">
              <textarea class="form-control" placeholder="有甚麼新鮮事?" id="floatingTextarea2" style="height: 100px">
              </textarea>
              <span>
                <button
                type="submit"
                class="btn btn-secondary tweet"
                >
                推文
                </button>
              </span>
          </div>
          <div class="divider"></div>
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
import Sidebar from '../components/Sidebar'

export default {
  name: 'TweetMain',
  components: {
    Sidebar,
  }
}
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
.twitterEditCard {
  border: 1px solid green;
  width: 100%;
  height: auto;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
.mid-header {
  background: #FFFFFF;
  border: 1px solid #E6ECF0;
  box-sizing: border-box;
  padding: 2px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
img {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  /* left: 48%;
  top: 60px; */
}
.textarea {
  display: flex;
}
textarea{
  border-style: none;
}
span {
  display: flex;
  align-items: flex-end;
}
.tweet {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 64px;
  height: 40px;
}
.divider {
  width: 100%;
  height: 10px;
  background: #E6ECF0;
}
.right-col {
  border: 1px solid blue;
  width: 350px;
  height: 517px;
}
</style>