<template>
  <div ref="wrapper" id="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probtype: {
      type: Number,
      default: 0,
    },
    pullupload: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.注册scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probtype,
      pullUpLoad: this.pullupload,
    });

    //2.实时监听
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollpos", position);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTop(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
      console.log("加载完成");
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("刷新完成");
    },
    scrolly()
    {
    return this.scroll.y
    }
  },
};
</script>

<style scoped>
</style>