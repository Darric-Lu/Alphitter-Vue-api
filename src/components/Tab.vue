<template>
  <div class="tab mt-5">
    <div
      class="tab-link"
      :class="tabActive.tweetsArea"
      @click="changActive('tweetsArea')"
    >
      推文
    </div>
    <div
      class="tab-link"
      :class="tabActive.replyTweestArea"
      @click="changActive('replyTweestArea')"
    >
      推文與回覆
    </div>
    <div
      class="tab-link"
      :class="tabActive.liekdArea"
      @click="changActive('liekdArea')"
    >
      喜歡的內容
    </div>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  width: 390px;
  border-bottom: 2px solid #e6ecf0;
}
.tab-link {
  display: flex;
  justify-content: center;
  width: 130px;
  padding-bottom: 15px;
}
.tab-link:hover {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
  cursor: pointer;
}
.active {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
  pointer-events: none;
}
</style>

<script>
export default {
  name: "Tab",
  props: {
    tabActive: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changActive(e) {
      this.$emit("handle-change-active", e);
    },
  },
};
</script>