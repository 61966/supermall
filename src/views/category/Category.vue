<template>
  <div id="category">
    <!-- 导航栏 -->
    <cate-nav-bar></cate-nav-bar>
    <!-- 左菜单 -->
    <cate-menu :menulist="catelist" @menuitemclick="menulistClick"></cate-menu>

    <!-- 右菜单 -->
    <cate-goods-list :goodslist='goodslist'></cate-goods-list>
  </div>
</template>

<script>
//公共组件
import { CateDirectory, CateGoods } from "network/category.js";

//子组件
import CateNavBar from "./childComps/CateNavBar";
import CateMenu from "./childComps/CateMenu";
import CateGoodsList from "./childComps/CateGoodsList";

export default {
  name: "Category",
  data() {
    return {
      catelist: null,
      maitKey: "3627",
      goodslist: null,
    };
  },
  components: {
    CateNavBar,
    CateMenu,
    CateGoodsList,
  },
  methods: {
    menulistClick(num) {
      this.maitKey = num;
       CateGoods(this.maitKey).then((res) => {
        this.goodslist = res.data.data.list;
      });
    },
  },
  created() {
    CateDirectory().then((res) => {
      this.catelist = res.data.data.category.list;
    }),
      CateGoods(this.maitKey).then((res) => {
        this.goodslist = res.data.data.list;
      });
  },
};
</script>

<style scoped>
#category{
  width: 100vw;
}
.nav-bar {
  background-color: var(--color-tint);
}
</style>