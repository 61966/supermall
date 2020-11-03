<template>
  <div id="recommend" v-if="recomd">
      <div class="comd-title">
          <span>用户评价</span>
          <div class="comd-title-more">
            <span>更多</span>
            <img src="~assets/img/detail/more.png" alt="">
          </div>
      </div>

      <div class="comd-user">
              <img :src="recomd.img" alt="">
          <span>{{recomd.user}}</span>
      </div>

      <div class="comd-text">
          <span>{{recomd.text}}</span>
      </div>

      <div class="comd-time">
          <span>{{recomd.time | timeFilter}}</span>   
          <span class="comd-time-span">{{recomd.style}}</span>
      </div>
      <div class="comd-img" v-if="recomd.list">
         <div class="comd-img-item" v-for="(item,index) in recomd.list" :key="index">
           <img :src="item" alt=""  @load="recommendImage">
         </div>

      </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils.js"
export default {
    name:'DetailRecommendInfo',
    props:{
        recomd:{
            type:Object,
            default()
            {
                return{};
            }
        }
    },
    data()
    {
        return {
            imglength:0,
        }
    },
    filters:{
        timeFilter:function(num)
        {
            let date = new Date(num*1000);
              return formatDate(date, 'yyyy-MM-dd');
        }
    },
    methods:{
        recommendImage()
        {
            if(++this.imglength === this.recomd.list.length)
            {
                   this.$bus.$emit('GoodsImgLoadEnd');//图片加载完成
            }
        }
    }
}
</script>

<style scoped>
#recommend{
    padding: 10px 20px ;
    position: relative;
}
.comd-title{
    font-size: 16px;
    color: black;
    padding-bottom: 20px;
    border-bottom:2px solid rgba(226, 226, 226, 0.6) ;

}
.comd-title img{
   width: 20px;
   height: 20px;
   bottom: 0;
}
.comd-title-more{
    float: right;
    display: inline;
    font-size: 14px;
} 
.comd-user{
    padding-top: 10px;
    position: relative;
}
.comd-user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: inline;
}
.comd-user span{  
    line-height: 55px;
    color: black;
    font-size: 16px;
    position: absolute;
    margin-left: 10px;
}
.comd-text{
    font-size: 14px;
    margin-top: 10px;
}

.comd-time{
    margin-top: 20px;
    font-size: 12px;
    color: #999;
    }
.comd-time-span{
    margin-left: 10px;
  
}
.comd-img{
    margin-top:5px;
    padding-bottom: 10px;
}
.comd-img-item{
          display: inline; 
}
.comd-img img{
    width: 70px;
    height: 80px;
}
</style>