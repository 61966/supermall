<template>
  <div id="home-recommend">
      <div v-for="item in recommends" :key="item.sort">
          <a :href="item.link">
              <img :src="item.image" :alt="item.title">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default()
            {
                return [];
            }
        }
    }
}
</script>

<style scoped>
#home-recommend{
    display: flex;
    text-align: center;
    font-size: 13px;
    padding:10px 0px 20px 0px;
  border-bottom:16px solid rgba(226, 226, 226, 0.6) ;

}
#home-recommend img{
    width: 80%;
    flex: 1;
    margin-bottom: 6px;
}
</style>