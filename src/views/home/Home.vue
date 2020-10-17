<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
        <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol1"
        class="tab-control"
         v-show="isShowTabcontrol"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probtype="3"
      @scrollpos="scrollhide"
      @pullingUp="scrollupload"
      :pullupload="true"
    >
  
      <home-swiper :banners="banners" ref="hSwiper" @swiperimageload="swiperimageload"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backtopclick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 公共
import NavBar from "common/navbar/NavBar";
import TabControl from "content/TabControl";
import GoodsList from "content/goods/GoodsList";
import scroll from "common/scroll/Scroll.vue";
import BackTop from "content/backtop/BackTop.vue";
import { debounce}  from "@/common/utils.js";

// 子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import HomeFeature from "./childComps/HomeFeature";

// 数据
import { getHomeMultidata, getHomeGoodsdata } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      currentType: "pop",
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
      },
      isShowBackTop: false,
      TabcontroloffsetTop:null,
      isShowTabcontrol:false,
      saveY:0,
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    this.getHomeGoodsdata("sell");
    // 2.请求商品数据
    this.getHomeGoodsdata("pop");
    this.getHomeGoodsdata("new");

  },
  mounted()
  {
    //3.监听加载并进行刷新  
    const refresh=debounce(this.$refs.scroll.refresh,20)
        this.$bus.$on("GoodsImgLoadEnd", () => {
          // console.log(this.$refs.scroll);
         refresh();
        });
  },

  activated: function () {
    this.$refs.hSwiper.startTimer();
    this.$refs.scroll.scrollTop(0,this.saveY,0)
    this.$refs.scroll.refresh();
  },
  deactivated: function () {
    this.$refs.hSwiper.stopTimer();
    this.saveY=this.$refs.scroll.scrolly();
    // console.log( this.saveY)
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.dKeywords = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoodsdata(type) {
      const page = ++this.goods[type].page;
      getHomeGoodsdata(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
      });
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex=index;
      this.$refs.tabcontrol2.currentIndex=index;
    },
    backtopclick() {
      this.$refs.scroll.scrollTop(0, 0, 500);
    },
    scrollhide(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShowTabcontrol=-position.y>this.TabcontroloffsetTop;
    },
    scrollupload() {
      //1.请求数据
      this.getHomeGoodsdata(this.currentType);
      // 2.结束此次的数据请求
      this.$refs.scroll.finishPullUp();
    },
    swiperimageload()
    {
      this.TabcontroloffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
#home {
  height: 100vh;
}
.content {
  position: absolute;
  bottom: 52px;
  top:44px;
     left: 0;
    right: 0;
  overflow: hidden;
}
.tab-control{
  position: relative;
  margin-top: 44px;
  top:0;
  right: 0;
  left: 0;
position: fixed;
  top:0;
  right: 0;
  left: 0;
  z-index: 9;
}

</style>