<template>
  <div class="wrapping d-flex flex-column px-0">
    <div class="title">公開聊天室</div>
    <div class="dialogue d-flex flex-column-reverse">
      <div
        class="message-data"
        :class="data.messageOwner"
        v-for="data in datas"
        :key="data.msg"
      >
        <div class="avatar-area">
          <div class="avatar">
            <img class="avatar-img" :src="data.avatar" alt="使用者照片" />
          </div>
        </div>
        <div class="text">
          <div class="text-content">
            {{ data.msg }}
          </div>
          <div class="text-time">{{ data.time | chatTime }}</div>
        </div>
      </div>
    </div>
    <div class="footer-space"></div>
    <div class="footer">
      <div class="row px-3">
        <div class="col-10 typing-area px-0">
          <input type="text" placeholder="輸入訊息..." v-model="text" @keyup.enter="send"/>
        </div>
        <div
          class="col-2 enter-button d-flex justify-content-center align-items-center px-0"
        >
          <button @click.prevent.stop="send">
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
    
  },
  watch: {

  },
  methods: {
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
  // 接收socket事件
  sockets: {
    publicMessage(data) {
      if (data.id === this.currentUser.id) {
        data.messageOwner = "self"
        console.log('aftersend:', data)
        this.datas.unshift(data)
      } else {
        data.messageOwner = "other"
        console.log('aftersend:', data)
        this.datas.unshift(data)
      }
      console.log('data:', this.datas)
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
  color: #ff6600;
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
button {
  border: none;
  background: #fff;
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