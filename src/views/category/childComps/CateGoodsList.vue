<template>
      <scroll class="content">
  <div id="goods">
    <cate-goods-item
      v-for="(item, index) in goodslist"
      :key="index"
      :data="item"
    ></cate-goods-item>
  </div>
    </scroll>
</template>

<script>
import CateGoodsItem from "./CateGoodsItem";
import scroll from 'common/scroll/Scroll'
export default {
  name: "CateGoodsList",
  props: {
    goodslist: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  components: {
    CateGoodsItem,
    scroll,
  },
};
</script>

<style scoped>
#goods {
    position: relative;
    top: 0;
    left: 0px;
    
    padding-left: 10px;
    margin-left: 0px;
  display: flex;
  flex-wrap: wrap;
}
.content{
   overflow: hidden;
    height: calc(100vh - 44px - 52px);
}  
</style>