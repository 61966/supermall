<template>
<div id="home">
  <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
  </nav-bar>
  <h1>首页</h1>
</div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import {getHomeMultidate} from 'network/home.js'
export default {
    name:'Home',
    components:{
      NavBar
    },
    data()
    {
      return {
        banners:[],
        dKeywords:[],
        keywords:[],
        recommends:[],
      }
    },
    created()
    {
      getHomeMultidate().then(res=>{
        this.banners=res.data.data.banner.list;
        this.dKeywords=res.data.data.dKeyword.list;
        this.keywords=res.data.data.keywords.list;
        this.recommends=res.data.data.recommend.list;
      })
    }
}
</script>

<style>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>