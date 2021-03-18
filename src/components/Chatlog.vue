<template>
  <div class="wrapping d-flex flex-column px-0">
    <div class="title">公開聊天室</div>
    <div class="dialogue d-flex flex-column-reverse">
      <div
        class="message-data"
        :class="data.messageOwner"
        v-for="data in datas"
        :key="data.createdAt"
      >
        <div class="avatar-area">
          <div class="avatar">
            <img
              class="avatar-img"
              :src="data.User ? data.User.avatar : data.avatar"
              alt="使用者照片"
            />
          </div>
        </div>
        <div class="text">
          <div class="text-content">
            {{ data.content }}
          </div>
          <div class="text-time">{{ data.createdAt | chatTime }}</div>
        </div>
      </div>
    </div>
    <div class="footer-space"></div>
    <div class="footer">
      <div class="row px-3">
        <div class="col-10 typing-area px-0">
          <input
            type="text"
            placeholder="輸入訊息..."
            v-model="text"
            @keyup.enter="send"
          />
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
import { Toast } from "../utils/helpers";

export default {
  name: "chatlog",
  props: {
    onlineUsersName: {
      type: Array,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      datas: [],
      text: "",
      onlineUsers: [],
      // test: [
      //   "user1上線",
      //   "熊熊來了~上線",
      //   "user3上線",
      //   "user4上線",
      //   "user5上線",
      //   "stan_wang上線",
      //   "test上線",
      //   "Claire上線",
      //   "JiaWen上線",
      //   "WJY上線",
      //   "asdf上線",
      //   "as上線",
      //   "test上線",
      // ],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    console.log("Chatlog---onlineUser", this.onlineUsersName);
    this.onlineSend();
    // this.$socket.emit("startChat");
  },
  mounted() {
    this.$socket.emit("startChat");
  },
  // watch: {
  //   onlineUsersName(newValue) {
  //     this.onlineUsers = [...this.onlineUsers, ...newValue];
  //     console.log("這是watch", this.onlineUsers);
  //   },
  // },
  methods: {
    // 連接socket
    connect() {
      this.$socket.open(); // 開始連接socket
    },
    send() {
      if (!this.text) {
        Toast.fire({
          icon: "error",
          title: "請輸入內容好咩～",
        });
        return;
      }
      // 要用this.$socket
      this.$socket.emit("publicMessage", {
        id: this.currentUser.id,
        content: this.text,
      });
      console.log("text:", this.text);
      // console.log("currentUserId:", this.currentUser.id);
      this.text = "";
    },
    onlineSend() {
      // console.log("onlineSend", this.currentUser.name);
      // 要用this.$socket
      // const currentUserName = this.currentUser.name;
      this.$socket.emit("publicMessage", {
        id: this.currentUser.id,
        content: this.currentUser.name + "上線",
      });
      // this.$socket.emit("startChat");
    },
  },
  // 接收socket事件
  sockets: {
    publicMessage(data) {
      // console.log("publicMessage-data", data);
      // const currentUserName = this.currentUser.name;
      if (data.id === this.currentUser.id) {
        if (data.content === this.currentUser.name + "上線") {
          // console.log("aftersend:-moment", data);
          data.messageOwner = "moment";
          this.datas.unshift(data);
        } else {
          data.messageOwner = "self";
          // console.log("aftersend:-self", data);
          this.datas.unshift(data);
        }
      } else {
        data.messageOwner = "other";
        // console.log("aftersend:-other", data);
        this.datas.unshift(data);
      }
      // console.log("data:", this.datas);
    },
    history(data) {
      const dataName = this.onlineUsers;
      console.log("test-1", dataName);
      // 先翻轉順序，較新的訊息在前
      const oldHistoryMsg = data.reverse();
      // console.log("oldHistoryMsg", oldHistoryMsg);
      // 用map去找出屬於currentUser的訊息並賦值給messageOwner
      const currentUserId = this.currentUser.id;
      const currentUserName = this.currentUser.name;

      oldHistoryMsg.forEach(function (msg) {
        if (msg.UserId === currentUserId) {
          if (msg.content === currentUserName + "上線") {
            msg.messageOwner = "moment";
          } else {
            msg.messageOwner = "self";
          }
        } else {
          console.log("test-2", dataName);
          if (dataName.some((e) => e !== msg.name + "上線")) {
            msg.messageOwner = "moment";
          } else {
            msg.messageOwner = "other";
          }
        }
      });
      this.datas.push(...oldHistoryMsg);
      // console.log("historyMsg:", oldHistoryMsg);
    },
  },
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
  margin: 0 0 0 8px;
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
  text-align: right;
  margin: 0 8px 0 0;
}
.moment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
}
.moment > .avatar-area {
  width: 0px;
}
.moment > .avatar-area > .avatar {
  display: none;
}
.moment > .text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 24px;
  width: auto;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  background-color: #657786;
  padding: 0 15px;
  border-radius: 12px;
}
.moment > .text > .text-content {
  width: auto;
}
.moment > .text > .text-time {
  width: auto;
  margin: 0 0 0 8px;
}
</style>