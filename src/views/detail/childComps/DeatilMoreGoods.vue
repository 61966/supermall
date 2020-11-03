<template>
  <div id="more">
      <div class="more-title">
          <span>热门推荐</span>
      </div>
      <goods-list :goods="recomdlist"></goods-list>
  </div>
</template>

<script>
import GoodsList from "content/goods/GoodsList"
export default {
    name:'DetailMoreGoods',
    props:{
        recomdlist:{
            type:Array,
            default(){
                return {};
            }

        }
    },
    components:{
        GoodsList,
    }
}
</script>

<style scoped>
.more-title{
    font-size: 14px;
    margin-left: 20px;
    color: black;
    padding-bottom: 20px;
    padding-top: 10px;
}
</style>