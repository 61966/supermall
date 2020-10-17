<template>
  <div class="goods-list-item" >
    <img :src="goodslist.show.img" alt="" @load="loadfinish" @click="goodsclick">
    <div class="goods-text">
      <p @click="goodsclick">{{ goodslist.title }}</p>
      <span class="price">¥{{goodslist.price }}</span>
      <span class="cllect">{{goodslist.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodslist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
methods:{
  loadfinish()
  {
    this.$bus.$emit('GoodsImgLoadEnd');
  },
  goodsclick()
  {
    console.log("跳转详情页");
    this.$router.push({
      path:'/detail',
      query:{
        id:this.goodslist.iid,
      }
    })
  }
}
};
</script>

<style>
.goods-list-item {
  position: relative;
  width: 44%;
  font-size: 14px;
  padding-bottom: 50px;
}
.goods-list-item img{
width: 100%;
}
.goods-list-item p {
    /* position: absolute; */
    /* bottom: 25px;     */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-list-item span {
    display: inline-block;
}
.cllect {
    top: 0;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    background-repeat: no-repeat;
    padding-left: 15px;
}
.goods-text{
    width: 100%;
    position: absolute;
    bottom: 12px;
}
.price{
  
    color: var(  --color-high-text);
}
</style>