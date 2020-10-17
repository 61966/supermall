<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar"></detail-nav-bar>
    <scroll class="content" ref="scroll"> 
    <detail-swiper :topImages="topImage"></detail-swiper>
    <!-- <detail-base-info :base="base" ></detail-base-info> -->
    <!-- <detail-shop-info :shop="shop"></detail-shop-info> -->
    <!-- <detail-goods-info :goods="goods" @goodsimageload="goodsimageload">  </detail-goods-info> -->
    <!-- <detail-num-info :numdata="numdata"></detail-num-info> -->
    <detail-recommend-info :recomd="recomd"></detail-recommend-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import { detail ,BaseInfo,ShopInfo,GoodsInfo,NumInfo,CommendInfo} from "network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import  DetailNumInfo from "./childComps/DetailNumInfo.vue";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo.vue";
import scroll from "common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailNumInfo,
    scroll,
    DetailRecommendInfo,
  },
  data() {
    return {
      id: null,
      topImage: [],
      base: null,
      shop:null,
      goods:null,
      numdata:null,
      recomd:null,
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
      this.shop=new ShopInfo(data.shopInfo);

      //5.请求商品详细数据
      this.goods=new GoodsInfo(data.detailInfo);

      //6.请求商品参数数据
      this.numdata=new NumInfo(data.itemParams);

      //7.请求评论信息
      this.recomd=new CommendInfo(data.rate.list[0]);
    });
  },
  methods: {
    goodsimageload()
    {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  /* width: 100vh; */
  overflow: hidden;
  z-index: 99;
  background-color: white;
}
.content{
  height: calc(100% - 45px);
}
</style>