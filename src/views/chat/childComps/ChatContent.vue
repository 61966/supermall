<template>
  <div id="content">
    <scroll class="content">
      <chat-box
        v-for="(item, index) in history"
        :key="index"
        :chatdata="item"
      ></chat-box>
    </scroll>
  </div>
</template>

<script>
import scroll from "common/scroll/Scroll";
import ChatBox from "./ChatBox";
import { mapGetters } from "vuex";
export default {
  name: "ChatContent",
  data() {
    return {
      chatdata: "111222_你好哇！ 李银河",
      // history: [
      //   "小刘_你好哇！",
      //   "熊熊_ 你好哇！",
      //   "小刘_你c语言成绩是多少",
      //   "小刘_你的数学成绩是多少",
      //   "小刘_你物理成绩是多少",
      //   "熊熊_我的c语言成绩是80，我的数学成绩不及格，我的物理成绩是79 ",
      //   "小刘_你的c语言成绩是中等，你的数学已经挂科，你的物理成绩是良好",
      //   "小刘_你好哇",
      //   "熊熊_你的tcpip实验报告写了没有呀？ ",
      // ],
    };
  },
  components: {
    scroll,
    ChatBox,
  },
  computed: {
    ...mapGetters({
        history: "gethistory",
    }),
  },
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: calc(100vh - 60px - 44px);
  overflow: hidden;
}
</style>