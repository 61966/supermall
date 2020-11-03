<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-navbar"
      @navbarclick="navbarTo"
      :current-index="currentIndex"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scrollpos="DetailscrollPos"
      :probtype="3"
    >
      <detail-swiper :topImages="topImage"></detail-swiper>
      <detail-base-info :base="base"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goods="goods"> </detail-goods-info>
      <detail-num-info :numdata="numdata" ref="nums"></detail-num-info>
      <detail-recommend-info
        :recomd="recomd"
        ref="recoms"
      ></detail-recommend-info>
      <detail-more-goods
        :recomdlist="goodslist"
        ref="goods"
      ></detail-more-goods>
    </scroll>
    <back-top @click.native="backtopclick" v-show="isShowBackTop"></back-top>

    <detail-bottom-nav-bar
      :shopid="id"
      :shopname="shopname"
      @cartadd="CartAdd"
    ></detail-bottom-nav-bar>
  </div>
</template>

<script>
//子组件
import DetailNavBar from "./childComps/DetailNavBar";
import {
  detail,
  BaseInfo,
  ShopInfo,
  GoodsInfo,
  NumInfo,
  CommendInfo,
  recommend,
} from "network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailNumInfo from "./childComps/DetailNumInfo.vue";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo.vue";
import DetailMoreGoods from "./childComps/DeatilMoreGoods.vue";
import DetailBottomNavBar from "./childComps/DetailBottomNavBar.vue";

//公共组件
import scroll from "common/scroll/Scroll";
import { itemListenerMixin, BackTopMixin } from "@/common/mixin.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailMoreGoods,
    DetailNumInfo,
    DetailBottomNavBar,
    DetailRecommendInfo,
    scroll,
  },
  mixins: [itemListenerMixin, BackTopMixin],
  data() {
    return {
      id: null,
      topImage: [],
      base: null,
      shop: null,
      goods: null,
      numdata: null,
      recomd: null,
      shopname:null,
      goodslist: null,
      themeTopYs: [],
      imgLisener: null,
      currentIndex: 0,
      isShow: false,
      message: null,
    };
  },
  created() {
    //1.保存id
    this.id = this.$route.query.id;

    detail(this.id).then((res) => {
      const data = res.data.result;
      //2. 请求相关数据
      this.topImage = data.itemInfo.topImages;

      //3.请求详细数据
      this.base = new BaseInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //4.请求商家数据
      this.shop = new ShopInfo(data.shopInfo);
      this.shopname=this.shop.title;

      //5.请求商品详细数据
      this.goods = new GoodsInfo(data.detailInfo);

      //6.请求商品参数数据
      this.numdata = new NumInfo(data.itemParams);

      //7.请求评论信息
      this.recomd = new CommendInfo(data.rate.list[0]);
    });

    //8.推荐页面信息
    recommend(this.id).then((res) => {
      this.goodslist = res.data.data.list;
    });
  },
  mounted() {
    const gettop = debounce(this.getTopYs, 20);
    this.imgLisener = () => {
      gettop();
    };
    this.$bus.$on("GoodsImgLoadEnd", this.imgLisener); //开始监听
  },
  destroyed() {
    this.$bus.$off("GoodsImgLoadEnd", this.itemLisener); //结束监听
  },
  methods: {
    navbarTo(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTop(0, -this.themeTopYs[index], 500);
    },
    getTopYs() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.nums.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recoms.$el.offsetTop);
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE); //数字中的最大值
    },
    CartAdd() {
      const Product = {};
      Product.image = this.topImage[0]; //商品图片
      Product.title = this.base.title; //商品名称
      Product.desc = this.goods.desc; //商品描述
      Product.price = this.base.realPrice; //商品价格
      Product.id = this.id; //商品id标识
      Product.count = 0; //商品的数量
      Product.isShow = false;
           this.$store.dispatch("AddCart", Product).then((res) => {
          this.$toast.show(res);
        });
    },
    DetailscrollPos(position) {
      //1.获取Y值
      const TopY = -position.y;
      const length = this.themeTopYs.length;
      this.scrollhide(position);
      for (let i = 0; i < length - 1; i++) {
        if (
          i != this.currentIndex &&
          TopY >= this.themeTopYs[i] &&
          TopY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
        }
      }
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  /* width: 100vh; */
  overflow: hidden;
  z-index: 99;
  background-color: white;
}
.content {
  height: calc(100% - 45px - 49px);
}
</style>