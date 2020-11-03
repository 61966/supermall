import {
  debounce
} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemLisener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.itemLisener = () => {
      refresh();
    };
    this.$bus.$on("GoodsImgLoadEnd", this.itemLisener); //开始监听
  }
}


import BackTop from "content/backtop/BackTop.vue";
export const BackTopMixin={
  components:{
    BackTop,
  },
  data()
  {
    return{
      isShowBackTop: false,
    };
  },
  methods:{
    backtopclick() {
      this.$refs.scroll.scrollTop(0, 0, 500);
    },
    scrollhide(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShowTabcontrol = -position.y > this.TabcontroloffsetTop;
    },
  }
}

