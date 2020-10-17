<template>
  <div id="shop" v-if="shop">
    <div class="shop-title">
      <img :src="shop.logo" alt="" class="shop-title-img" />
      <span class="shop-title-name">{{ shop.title }}</span>
    </div>

    <div class="shop-desc">
      <div class="shop-num">
        <div class="shop-num-item">
          <span class="shop-num-itemspecial">{{
            shop.sell | SellFilters
          }}</span>
          <span>总销量</span>
        </div>
        <div class="shop-num-item">
          <span class="shop-num-itemspecial">{{ shop.goods }}</span>
          <span>全部宝贝</span>
        </div>
      </div>

      <div class="shop-score">
        <div
          class="shop-score-item"
          v-for="(item, index) in shop.score"
          :key="index"
        >
          <span>{{ item.name }}</span>
          <span
            :class="{ spanactive: item.isBetter, nospanactive: !item.isBetter }"
            >{{ item.score | scoreFilter }}</span
          >
          <span :class="{ shopactive: item.isBetter, noshopactive: !item.isBetter }">{{
            item.isBetter | isBetterFilters
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-link">
      <a :href="shop.shoplink">
      <div class="shop-link-item">进店逛逛</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  filters: {
    SellFilters: function (num) {
      if (num > 10000) return (num / 10000).toFixed(1) + "万";
      else return num;
    },
    isBetterFilters: function (num) {
      if (num == false) {
        return "低";
      } else return "高";
    },
    scoreFilter: function (num) {
      return num.toFixed(2);
    },
  },
};
</script>

<style scoped>
#shop{
  padding-bottom: 14px;
    border-bottom:10px solid rgba(226, 226, 226, 0.6) ;

}
.shop-title {
  margin-top: 20px;
  margin-left: 10px;
}
.shop-title-img {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: 1px solid var(--color-text);
}
.shop-title-name {
  line-height: 50px;
  position: relative;
  top: -15px;
  margin-left: 10px;
}

.shop-desc {
  display: flex;
  color: black;
   justify-content:center;
  text-align: center;  
  align-items: center;
}
.shop-num {
  position: relative;
  text-align: center;
  padding-right: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-num-itemspecial {
  font-size: 20px;
  margin-bottom: 10px;
}
  .shop-num-item{
    float: left;
  }
  .shop-num-item span {
    display: block;
    position: relative;
    margin-left: 3px;
    margin-right: 3px;
  }
.shop-score {
  margin-left: 10px;
}


.shop-score {
  flex-wrap: wrap;
  align-items: center;
}
.shop-score-item {
  margin: 10px 0px;
}
.shop-score-item span {
  padding: 0px 5px;
  line-height: 20px;
}
.shopactive {
  background-color: var(--color-high-text);
  color: black;
}
.noshopactive {
  background-color: green;
  color: black;

}
.nospanactive {
  color: green;
}
.spanactive {
  color: var(--color-high-text);
}
.shop-link{
  margin-top: 10px;
  text-align: center;
}
.shop-link-item{
  width: 160px;
  background-color: rgb(238,242,246);
  color: var(--color-text);
  border: none;
  height: 33px;
  line-height: 33px;
  position: relative;
  margin: auto;
  font-size: 15px;
  border-radius: 15px 15px 15px 15px;
}
</style>