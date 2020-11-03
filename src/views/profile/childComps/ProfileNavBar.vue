<template>
  <div id="navbar">
      <nav-bar>
          <div slot="center">小刘锅商城</div>
      </nav-bar>
  </div>
</template>

<script>
//公共组件
import NavBar from 'common/navbar/NavBar'
export default {
    name:'ProfileNavBar',
    components :{
        NavBar,
    }
}
</script>

<style scoped>
#navbar{
    color: white;
    background-color: var(--color-tint);
}
</style>