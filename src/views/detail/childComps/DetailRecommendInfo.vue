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
 <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
      <h1>dd</h1>
  </div>
</template>

<script>
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
}
</script>

<style>
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
    padding-top: 14px;

}
.comd-user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: inline;
}
.comd-user span{
    color: black;
    font-size: 16px;
    margin-left: 5px;
    line-height: 50px;
}
</style>