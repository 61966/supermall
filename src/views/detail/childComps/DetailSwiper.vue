<template>
  <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="" @load="SwiperImage" >
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "common/swiper"
export default {
    name:'DetailSwiper',
    components:{
    Swiper,
    SwiperItem,
    },
    props:{
        topImages:{
            type:Array,
            default:[],
        }
    },
    data()
    {
        return {
            imglength:-1
        }
    }
    ,
    methods:{
        SwiperImage()
        {
            if(++this.imglength==0)
            {
                 this.$bus.$emit('GoodsImgLoadEnd');//图片加载完成
            }
        }
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
</style>