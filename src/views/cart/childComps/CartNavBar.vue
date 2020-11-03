<template>
  <div id="navbar">
         <nav-bar>
        <div slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>

<script >
import NavBar from 'common/navbar/NavBar.vue'
import {mapGetters} from 'vuex';
export default {
    name:'CartNavBar',
    components:{
        NavBar,
    },
    computed:{
        ...mapGetters({
            length:'cartlength',
        })
    }

}
</script>

<style scoped>
#navbar{
    background-color: var(--color-tint);
    color: white;
}
</style>