<template>
  <div class="wrapping">
    <div class="twitter-title fw-bold">推文清單</div>
    <div class="wrapping-tweets">
      <!-- 原始Tweet -->
      <div class="tweet d-flex">
        <div class="tweet-img">
          <img
            class="tweet-img-user"
            src="../assets/Icon.svg"
            alt="ALPHAcamp logo"
          />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-info">
            <span>
              <span class="tweet-content-name">ALPHAcamp</span>
              <span class="tweet-content-account">@ac</span>‧
              <span class="tweet-content-time">3小時前</span>
            </span>
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
        </div>
        <div class="delete-btn">
          <a type="button"> </a>
        </div>
      </div>
      <!--  -->
      <div v-for="tweet in tweets" :key="tweet.account" class="tweet d-flex">
        <div class="tweet-img">
          <img class="tweet-img-user" :src="tweet.image" :alt="tweet.name" />
        </div>
        <div class="tweet-content">
          <div class="tweet-content-info">
            <span>
              <span class="tweet-content-name">{{ tweet.name }}</span>
              <span class="tweet-content-account">@{{ tweet.account }}</span> ‧
              <span class="tweet-content-time">{{ tweet.time }}</span>
            </span>
          </div>
          <p>
            {{ tweet.content }}
          </p>
        </div>
        <div class="delete-btn">
          <a type="button"> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  /* border: 1px black solid; */
}
.wrapping {
  height: 1200px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
}
.twitter-title {
  line-height: 55px;
  padding-left: 26.5px;
  border-bottom: 1px solid #e6ecf0;
}
.tweet {
  position: relative;
  height: 110px;
  border-bottom: 1px solid #e6ecf0;
}
.tweet-img {
  position: absolute;
  top: 15px;
  left: 18px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.tweet-img-user {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.tweet-content {
  position: absolute;
  top: 10px;
  left: 80px;
  width: 80%;
}
.tweet-content-name {
  font-weight: 700;
}
.tweet-content-account,
.tweet-content-time {
  color: #657786;
}
.tweet-content-account {
  padding: 0 0 0 5px;
}
.delete-btn {
  position: absolute;
  top: 19.5px;
  right: 19.5px;
  width: 15px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.delete-btn::before,
.delete-btn::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px; /* cross thickness */
  background-color: black;
}

.delete-btn::before {
  transform: rotate(45deg);
}

.delete-btn::after {
  transform: rotate(-45deg);
}
</style>

<script>
export default {
  name: "AdminTwitterCardTable",
  data() {
    return {
      tweets: [
        {
          name: "ALPHAcamp",
          image: "https://avatars.githubusercontent.com/u/8667311?s=200&v=4",
          account: "ac",
          time: "1小時前",
          content:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        },
        {
          name: "Claire",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
          account: "ClaireLi",
          time: "2小時前",
          content:
            "在需開發項目的list新增各個路由的卡片，測試成功之後再拉入成功的list，後端的隊友們會把資料放在路由卡片裡面",
        },
        {
          name: "goater",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
          account: "goater",
          time: "3小時前",
          content:
            "編輯自己的資料：方法：把編輯好的資料送去後端，前端再送一個請求去把新的資料拉回來對何種資料發請求：user",
        },
        {
          name: "stan_wang",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
          account: "stan",
          time: "4小時前",
          content:
            "除了註冊和登入頁，使用者一定要登入才能使用網站- 註冊時，使用者可以設定 account、name、email 和 password - account：如 @ellenlee，必須是獨一無二的 - name：平常顯示的暱稱，如 Ellen Lee- 註冊時，account 和 email 不能與其他人重覆。",
        },
        {
          name: "Darric",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
          account: "DL",
          time: "5小時前",
          content:
            "方法：發送請求，渲染畫面對何種資料發請求：user、tweets、推薦名單(跟隨者 (followers) 數量排列前 10 的使用者推薦名單) 圖片: 打包成一個url傳給後端，然後就能夠放到imgur的雲端空間上，再生成一組url給前端",
        },
        {
          name: "路人甲",
          image:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
          account: "someone",
          time: "5小時前",
          content: "我也要來學習了。",
        },
      ],
    };
  },
};
</script>