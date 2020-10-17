<template>
  <div>
      <swiper ref="swiper" v-if="banners.length">
          <swiper-item v-for="(item, index) in banners" :key="index" >
                <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'common/swiper/index.js'
export default {
    name:'HomeSwiper',
    data()
    {
        return{
            isStartLoad:false
        }
    },
    props:{
        banners:{
            type:Array,
            default()
            {
                return { Array}
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        swiperImageLoad()
        {
            if(!this.isStartLoad)
            {
                this.isStartLoad=true;
               this.$emit("swiperimageload")
            }
        }
        ,startTimer()
        {
            if(this.$refs.swiper)
            {
                this.$refs.swiper.startTimer();
            }
        },
        stopTimer()
        {
                if(this.$refs.swiper)
            {
                this.$refs.swiper.stopTimer();
            }
        }
    },
}
</script>

<style>

</style>