<template>
  <div id="goodsbottom">
    <div class="goods-bot-left">
      <div class="check" @click="checkBox">
        <!-- 如果在组件上监听点击，需要@click.native -->
        <cart-check-box
          :class="{ active: isShow, noactive: !isShow }"
        ></cart-check-box>
      </div>
      <span>全选</span>
      <div class="count-all">
        <span> 合计:¥{{money | moneyfixed}}</span>
      <!--  -->
      </div>
    </div>

    <div class="goods-bot-right" @click="cartshop"> 
      <div class="pay">
        <span>去购买({{ count }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBox from "./CartChectBox";
import { mapGetters } from "vuex";
export default {
  name: "CartGoodsBottom",
  components: {
    CartCheckBox,
  },
  methods:{
    checkBox()
    {
      this.$store.dispatch('CheckBox',1);
    },
    cartshop()
    {
      if(this.count==0 || this.count==null)
      this.$toast.show('请先选择商品!');
    }
  },filters:{
    moneyfixed(num)
    {
      return num.toFixed(2);
    }
   
  },
  computed: {
    ...mapGetters({
      length: "cartlength",
      money:"shopmoney",
      count:"shoplength",
      isShow:"shopisShow",
    }),
  },
};
</script>

<style scoped>
#goodsbottom {
  position: relative;
  height: 38px;
  background-color: rgb(241, 238, 237);
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(217, 217, 217);
  outline: 1px solid rgb(241, 241, 241);
}
.goods-bot-left {
  width: 180px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.goods-bot-left span {
  display: block;
}
.goods-bot-left .check,
.count-all {
  float: left;
}
.goods-bot-left .count-all {
  margin-left: 20px;
  font-size: 18px;
}
.goods-bot-right {
  width: 90px;
  height: inherit;
  background-color: var(--color-tint);
  position: absolute;
  right: 0;
  text-align: center;
  line-height: 39px;
  padding-right: 10px;
  color: white;
  font-size: 14px;
}
.active {
  background-color: var(--color-tint);
  padding: 0;
}
.noactive {
  padding: 0;
  background-color: white;
}
</style>