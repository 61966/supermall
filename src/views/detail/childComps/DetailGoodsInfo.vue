<template>
  <div id="goods" v-if="goods">
      <div class="goods-title">
          <div class="start"></div>
          <div class="desc">
              <br/>
              <span>{{goods.desc}}</span>
                  <br/>
          </div>
          <div class="end"></div>
      </div>
    <div class="goods-key">
        <span>{{goods.key}}</span>
    </div>
    <div class="goods-image">
        <div class="goods-image-item" v-for="(item,index) in goods.list" :key="index">
            <img :src="item" alt="" @load="ImageLoad">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        goods:{
            type:Object,
            default()
            {
                return {};
            }
        }
    },
    data()
    {
        return{
            imglength:0,
            length:0,
        }
    },methods:{
        ImageLoad()
        {
            if(++this.imglength === this.length)
            {
                this.$bus.$emit('GoodsImgLoadEnd');//图片加载完成
            }
        }
    }
    ,watch:
    {
       goods:function(num)
        {
           return this.length=this.goods.list.length;
        }
    }

}
</script>

<style scoped>
#goods{
    position: relative;
    margin-top: 10px;
    padding: 0px 10px;
}
.goods-title .start, .end{
    width: 120px;
    position: relative;
    height: 1px;
    background-color: grey;
}
 .goods-title .start{
    float: left;
}
.goods-title .end{
    float: right;
}

.goods-title .start::after, .goods-title .end::after
 {
     bottom: 0;
    content: '';
     position: absolute;
    width: 6px;
    height: 6px;
    background-color: grey;
}
.goods-title .end::after{
    right: 0;
}
.goods-title .desc{
    margin-top: 10px;
    margin-bottom: 10px;
}
.goods-image-item img{
    width: 100%;
}
.goods-key{
    margin:16px 10px;
    font-size: 15px;
    color:black;
}
</style>