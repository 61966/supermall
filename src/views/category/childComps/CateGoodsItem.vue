<template>
  <div id="gooditem">
    <div class="image">
      <img :src="data.image" alt="">
    </div>
    <div class="text">

    <span>{{data.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'CateGoodsItem',
    props:{
      data:{
        type:Object,
        default()
        {
          return {};
        }
      }
    }
}
</script>

<style scoped>
#gooditem{
  font-size: 12px;
  text-align: center;
  flex: 1;
  padding: 0px 5px;
padding-top: 15px;
}
.image{
  width: 50px;
  height: 50px;
  overflow: hidden;
}
.image img{
  width: 50px;
}
.text{
  width: 60px;
  margin-top: 10px;
}
</style>