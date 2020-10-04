<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :title="['流行', '新款', '精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
// 公共
import NavBar from "common/navbar/NavBar";
import TabControl from "content/TabControl";
import GoodsList from "content/goods/GoodsList"

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
  },
  data() {
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        },
      },
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoodsdata('sell');
    this.getHomeGoodsdata('pop');
    this.getHomeGoodsdata('new');
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
     getHomeGoodsdata(type,page).then((res) => {
        // console.log(res.data.data);
       this.goods[type].list.push(...res.data.data.list);
      });
    },
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
#home {
  position: relative;
  top: 44px;
}
</style>