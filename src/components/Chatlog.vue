<template>
  <div class="wrapping d-flex flex-column px-0">
    <div class="title">公開聊天室</div>
    <div class="dialogue d-flex flex-column-reverse">
      <div
        class="message-data"
        :class="data.massegeOwner"
        v-for="data in datas"
        :key="data.id"
      >
        <div class="avatar-area">
          <div class="avatar">
            <img class="avatar-img" :src="data.User.avatar" alt="使用者照片" />
          </div>
        </div>
        <div class="text">
          <div class="text-content">
            {{ data.content }}
          </div>
          <div class="text-time">{{ data.createdAt | fromNow }}</div>
        </div>
      </div>
    </div>
    <div class="footer-space"></div>
    <div class="footer">
      <div class="row px-3">
        <div class="col-10 typing-area px-0">
          <input type="text" placeholder="輸入訊息..." v-model="text" />
        </div>
        <div
          class="col-2 enter-button d-flex justify-content-center align-items-center px-0"
        >
          <button @click="send">
            <font-awesome-icon icon="paper-plane" class="enter-button-icon" />
          </button>
          <!-- <div>enter</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";

const dummyMessage = [
  {
    id: 1,
    content: "沒錯！爆肝小組再爆兩天也是OK的！！",
    createdAt: "2021-03-08T07:23:25.000Z",
    User: {
      name: "Darric",
      avatar:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg",
    },
    massegeOwner: "self",
  },
  {
    id: 2,
    content:
      "這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！",
    createdAt: "2021-03-08T15:23:25.000Z",
    User: {
      name: "Claire",
      avatar:
        "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4167/medium_IMG_5449.JPG",
    },
    massegeOwner: "other",
  },
];

export default {
  name: "chatlog",
  mixins: [fromNowFilter],
  data() {
    return {
      datas: [],
      text: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchData();
    console.log("dummyMessage", dummyMessage);
    console.log(this.datas);
  },
  methods: {
    fetchData() {
      this.datas = [...dummyMessage];
    },
    // 連接socket
    connect() {
      this.$socket.open() // 開始連接socket
    },
    send() {
      // 要用this.$socket
      this.$socket.emit("publicMessage", {
        id: this.currentUser.id,
        msg: this.text,
      });
      console.log("text:", this.text);
      console.log("currentUserId:", this.currentUser.id);
      this.text = "";
    },
  },
  sockets: {
    publicMessage(data) {
      console.log('data:', data)
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapping {
  position: relative;
  height: 100%;
}
.title {
  height: 55px;
  line-height: 55px;
  padding: 0 0 0 20px;
  border-bottom: 1px solid #e6ecf0;
}
.dialogue {
  overflow-y: scroll;
  width: auto;
  height: 90%;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */
  padding: 0 16px;
}
.dialogue::-webkit-scrollbar {
  display: none;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 50px;
  line-height: 20px;
  border-top: 1px #e6ecf0 solid;
  width: 100%;
}
.footer-space {
  height: 50px;
  width: 100%;
}
.enter-button-icon {
  font-size: 30px;
}
input[type="text"] {
  margin: 10px;
  padding: 5px 15px;
  background: #ccc;
  border: 0 none;
  cursor: pointer;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  width: 100%;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.other {
  display: flex;
}
.other > .avatar-area {
  width: 50px;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 14px;
}
.other > .text {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
}
.other > .text > .text-content {
  width: 100%;
  padding: 15px;
  background-color: #e6ecf0;
  border-radius: 25px 25px 25px 0px;
}
.other > .text > .text-time {
  font-weight: 500;
  font-size: 14px;
  height: 14px;
}
.self {
  display: flex;
  flex-direction: row-reverse;
}
.self > .avatar-area {
  width: 0px;
}
.self > .avatar-area > .avatar {
  display: none;
}
.self > .text {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
}
.self > .text > .text-content {
  width: 100%;
  padding: 15px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 25px 25px 0px 25px;
}
.self > .text > .text-time {
  font-weight: 500;
  font-size: 14px;
  height: 14px;
}
</style>