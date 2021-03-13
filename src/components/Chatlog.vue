<template>
  <div class="container">
    <div class="title">公開聊天室</div>
    <div class="dialogue">
      <div class="user remote">
        <div class="avatar">
          <div class="pic">
            <img
              src="https://assets-lighthouse.alphacamp.co/uploads/user/photo/3667/medium_15167678_1178483582230024_5591486097358830794_o.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="txt">
          這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！這兩天是黑客松耶！大家一起加油！
        </div>
      </div>
      <div class="user local">
        <div class="txt">沒錯！爆肝小組再爆兩天也是OK的！</div>
      </div>
      <div class="typearea row">
        <div class="typing-area col-10">
          <input type="text" placeholder="輸入訊息...">
        </div>
        <div class="enterButton col-2">
          <button>enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding: 20px;
  border: 1px solid #e6ecf0;
}
.dialogue {
  width: auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.user {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.local {
  justify-content: flex-end;
}
.user .avatar {
  width: 40px;
  text-align: center;
  flex-shrink: 0;
  align-items: flex-end;
}
.user .pic {
  border-radius: 50%;
  overflow: hidden;
}
.user .pic img {
  width: 100%;
  vertical-align: middle;
}
.user .txt {
  padding: 10px;
}
.remote .txt {
  margin-left: 10px;
  margin-right: 70px;
  border-radius: 25px 25px 25px 0px;
  background: #e6ecf0;
}
.local .txt {
  margin-right: 10px;
  margin-left: 70px;
  order: -1;
  border-radius: 25px 25px 0px 25px;
  background: #ff6600;
  color: white;
}
.typearea .typing-area {
  width: auto;
}
</style>