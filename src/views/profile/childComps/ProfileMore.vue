<template>
  <div id="more">

    <div class="more-item" @click="shopClick">
      <div class="item-img">
        <img src="~assets/img/profile/shop.png" alt="" />
      </div>

      <div class="item-span">
        <span>我的购物车</span>
      </div>
    </div>

    <div class="more-item">
      <div class="item-img">
        <img src="~assets/img/profile/down.png" alt="" />
      </div>

      <div class="item-span">
        <span>下载购物APP</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProfileMore",
  methods:{
      shopClick()
      {
          this.$router.push('/cart')
      }
  }
};
</script>

<style scoped>

.more-item {
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
}
.item-img {
  margin-left: 20px;
  width: 25px;
  height: 25px;
  overflow: hidden;
  display: inline-block;
}
.item-img img {
  width: 25px;
  height: 25px;
}
.item-span {
  color: black;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  margin-left: 10px;
  display: inline-block;
  width: calc(100% - 50px);
  border-bottom: 1px solid var(--color-border);
}
</style>