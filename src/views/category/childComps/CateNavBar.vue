<template>
  <div id="navbar">
      <nav-bar>
          <div slot="center">商品分类</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar"
export default {
    name:'CateNavBar',
    components:{
           NavBar,
    }
}
</script>

<style scoped>
#navbar{
    background-color:var(--color-tint);
    color: white    ;
}
</style>