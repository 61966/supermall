<template>
  <div>
      <tab-bar>
      <tab-bar-item path='/home' activecolor="var(--color-high-text)">
        <img src="~assets/img/tabbar/home.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>


      <tab-bar-item path='/category' activecolor="var(--color-high-text)">
        <img src="~assets/img/tabbar/category.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path='/cart' activecolor="var(--color-high-text)">
        <img src="~assets/img/tabbar/cart.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/cart_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path='/profile' activecolor="var(--color-high-text)    ">
        <img src="~assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> 
  </div>
</template>

<script>
import TabBar from "common/tabbar/TabBar.vue"; //导入
import TabBarItem from "common/tabbar/TabBarItem.vue"; //导入
export default {
    name:'MainTabBar',
   components: {
    TabBar, //注册
    TabBarItem,
  },
}
</script>

<style>
@import '~assets/css/base.css';
</style>