<template>
  <div id="gooditem" v-if="goods">
    <div @click="itemclick">
      <cart-check-box :class="{noactive:!goods.isShow,active:goods.isShow}"></cart-check-box>
    </div>
    <div class="goods-img">
      <img :src="goods.image" alt="" />
    </div>

    <div class="goods-info">
      <div class="goods-info-title">
        {{ goods.title }}
      </div>
      <div class="goods-info-desc">
        {{ goods.desc}}
      </div>
      <div class="goods-info-bottom">
        <span class="goods-info-price">¥{{ goods.price }}</span>
        <span class="goods-info-count">X{{ goods.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; //vuex 不是Vuex  mapGetter记得加s
import CartCheckBox from "./CartChectBox";
export default {
  name: "CartGoodItem",
  components: {
    CartCheckBox,
  },
  methods: {
    itemclick() {
      this.$store.dispatch('CheckNow',this.goods);
    },
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#gooditem {
  padding: 10px 5px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5%;
  margin: 10px 10px;
}

.goods-img {
  border-radius: 5%;
  width: 80px;
  height: 100px;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 20px;
}
.goods-img img {
  width: 80px;
}
.goods-info {
  flex-shrink: 0;
  height: 100px;
  position: relative;
  width: 170px;
}
.goods-info-title {
  flex-shrink: 0;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info-desc {
  flex-shrink: 0;
  margin-top: 6px;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info-bottom {
  height: 30px;
  width: inherit;
  position: absolute;
  bottom: 0;
}
.goods-info-price {
  position: absolute;
  left: 0;
  color: var(--color-high-text);
}
.goods-info-count {
  position: absolute;
  right: 0;
}
.noactive{
 background-color:white;
   padding: 0;
}
.active{
  background-color: var(  --color-tint);
  padding: 0;
}
</style>