<template>
  <div class="wrapping">
    <div class="users-title fw-bold">使用者列表</div>
    <div class="wrapping-users row px-3">
      <!-- 原始 -->
      <div class="px-1 mt-2">
        <div class="card">
          <div class="user-img">
            <img
              src="https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg"
              alt=""
              class="user-img-picture"
            />
          </div>
          <div class="user-title-img">
            <img
              src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-simon-migaj-747964.jpg&fm=jpg"
              class="card-img-top"
              alt=""
            />
          </div>
          <div class="card-body text-center p-0 pt-5">
            <h5 class="card-name">ALPHAcamp</h5>
            <p class="card-id">@AC</p>
            <p class="">
              <span class="card-tweets bold">
                <img src="./../../image/comment-alt.svg" alt="" />
                1.5k
              </span>
              <span class="card-liked bold">
                <img src="./../../image/heart.svg" alt="" />
                20k
              </span>
            </p>
            <p class="">
              <span class="card-following"
                ><span class="bold">34個</span>
                <span class="gray">跟隨中</span>
              </span>
              <span class="card-followed"
                ><span class="bold">5位</span>
                <span class="gray">跟隨者</span></span
              >
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="px-1 mt-2" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="user-img">
            <img :src="user.image" alt="" class="user-img-picture" />
          </div>
          <img
            src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-simon-migaj-747964.jpg&fm=jpg"
            class="card-img-top"
            alt=""
          />
          <div class="card-body text-center p-0 pt-5">
            <h5 class="card-name">{{ user.name }}</h5>
            <p class="card-id">@{{ user.id }}</p>
            <p class="">
              <span class="card-tweets bold">
                <img src="./../../image/comment-alt.svg" alt="" />
                {{ user.replyCount }}k
              </span>
              <span class="card-liked bold">
                <img src="./../../image/heart.svg" alt="" />
                {{ user.likeCount }}k
              </span>
            </p>
            <p class="">
              <span class="card-following"
                ><span class="bold">{{ user.following }}個</span>
                <span class="gray">跟隨中</span>
              </span>
              <span class="card-followed"
                ><span class="bold">{{ user.followed }}位</span>
                <span class="gray">跟隨者</span></span
              >
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="col-12 col-md-6 col-lg-4 col-xl-3">9</div> -->
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
.users-title {
  line-height: 55px;
  padding-left: 26.5px;
  border-bottom: 1px solid #e6ecf0;
}
.wrapping-users {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.card {
  width: auto;
  position: relative;
  border-radius: 20px;
}
.user-img {
  border: 0.4em rgb(255, 255, 255) solid;
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.user-img-picture {
  width: 100%;
  object-fit: cover;
}
.user-title-img {
  height: 40%;
  object-fit: cover;
}
.card-body {
  background-color: #f6f7f8;
}
.card-name {
  font-weight: 700;
}
.card-id,
.gray {
  color: rgb(101, 119, 134, 1);
}
.card-tweets,
.card-liked,
.card-following,
.card-followed {
  margin: 0 3px;
}
.bold {
  font-weight: 900;
}
@media screen and (max-width: 657px) {
  .user-img {
    width: 12rem;
    height: 12rem;
    top: 40%;
  }
}
</style>

<script>
export default {
  name: "AdminUsersCardTable",
  data() {
    return {
      users: [
        {
          name: "ALPHAcamp",
          image:
            "https://media-exp1.licdn.com/dms/image/C560BAQEJME754QmfcQ/company-logo_200_200/0/1519883768060?e=2159024400&v=beta&t=kkL_dJb9_NqeeioYh76B4eY6mzQUaIvqTQ2u6RVzvz0",
          id: "ac",
          time: "1小時前",
          content:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
          replyCount: 1.8,
          likeCount: 50,
          following: 82,
          followed: 10,
        },
        {
          name: "Claire",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
          id: "ClaireLi",
          time: "2小時前",
          content:
            "在需開發項目的list新增各個路由的卡片，測試成功之後再拉入成功的list，後端的隊友們會把資料放在路由卡片裡面",
          replyCount: 5,
          likeCount: 54,
          following: 100,
          followed: 6,
        },
        {
          name: "goater",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3729/medium_IMG_20200503_160121.jpg",
          id: "goater",
          time: "3小時前",
          content:
            "編輯自己的資料：方法：把編輯好的資料送去後端，前端再送一個請求去把新的資料拉回來對何種資料發請求：user",
          replyCount: 4,
          likeCount: 44,
          following: 2,
          followed: 8,
        },
        {
          name: "stan_wang",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3164/medium_89927027_201089344497966_4789468931150577664_n.jpg",
          id: "stan",
          time: "4小時前",
          content:
            "除了註冊和登入頁，使用者一定要登入才能使用網站- 註冊時，使用者可以設定 account、name、email 和 password - account：如 @ellenlee，必須是獨一無二的 - name：平常顯示的暱稱，如 Ellen Lee- 註冊時，account 和 email 不能與其他人重覆。",
          replyCount: 7.5,
          likeCount: 4,
          following: 15,
          followed: 66,
        },
        {
          name: "Darric",
          image:
            "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
          id: "DL",
          time: "5小時前",
          content:
            "方法：發送請求，渲染畫面對何種資料發請求：user、tweets、推薦名單(跟隨者 (followers) 數量排列前 10 的使用者推薦名單) 圖片: 打包成一個url傳給後端，然後就能夠放到imgur的雲端空間上，再生成一組url給前端",
          replyCount: 12,
          likeCount: 14,
          following: 105,
          followed: 0,
        },
        {
          name: "路人甲",
          image:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
          id: "someone",
          time: "5小時前",
          content: "我也要來學習了。",
          replyCount: 0,
          likeCount: 0,
          following: 0,
          followed: 0,
        },
      ],
    };
  },
};
</script>