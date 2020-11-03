<template>
  <div id="bottom">
    <div class="bottom-left">
      <div class="customer-server" @click="ServerClick()">
        <img src="~assets/img/detail/customer.png" alt="" />
        <span>客服</span>
      </div>
      <div class="store-home">
        <img src="~assets/img/detail/shophome.png" alt="" />
        <span>店铺</span>
      </div>
      <div class="store-collect">
        <img
          src="~/assets/img/detail/collect_before.png"
          alt=""
          @click="CollectClick"
          v-if="index"
        />
        <img
          src="~/assets/img/detail/collect_after.png"
          alt=""
          @click="CollectClick"
          v-if="!index"
        />
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="shop-cart" @click="ShopCartClick">
        <span>加入购物车</span>
      </div>
      <div class="shop-now">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNavBar",
  data() {
    return {
      index: true,
    };
  },
  methods: {
    CollectClick() {
      this.index = !this.index;
      if (!this.index) this.$toast.show("收藏店铺"+this.shopname+"成功");
      else this.$toast.show("取消收藏店铺"+this.shopname+"成功");
    },
    ShopCartClick() {
      this.$emit("cartadd");
    },
    ServerClick() {
      console.log(this.shopname);
      this.$store.dispatch("GetHashcode","111222");
      this.$router.push({
        path: "/chat",
        query: {
          shopname: this.shopname,
        },
      });

       
    },
  },
  props: {
    shopname: {
      type: String,
      default() {
        return '';
      },
    },
    shopid: {
      type: String,
      default() {
        return null;
      },
    },
  },
};
</script>

<style scoped>
#bottom {
  padding-left: 10px;

  height: 49px;
  position: fixed;
  bottom: 0;
  display: flex;
  left: 0;
  right: 0;
  background-color: white;
}
#bottom .bottom-left {
  flex: 1;
}
#bottom .bottom-right {
  flex: 1;
}
#bottom .bottom-left {
  display: flex;
}
#bottom .bottom-left div {
  flex: 1;
}
#bottom img {
  width: 25px;
  height: 25px;
}
#bottom span {
  display: block;
}

#bottom .bottom-right {
  display: flex;
}
#bottom .shop-cart {
  flex: 1;
  background-color: rgb(254, 221, 51);
}
#bottom .shop-cart span {
  text-align: center;
  font-size: 14px;
  line-height: 49px;
  padding: 0;
}
#bottom .shop-now {
  flex: 1;
  background-color: var(--color-high-text);
}
#bottom .shop-now span {
  font-size: 14px;
  line-height: 49px;
  text-align: center;
}
</style>