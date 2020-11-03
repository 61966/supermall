<template>
  <div id="menu">
      <!-- {{menulist}} -->
      <scroll class="content">
      <cate-menu-item v-for="(item,index) in menulist" :key="index" :menuitem='item' @click.native="itemclick(item)" :currentType="currentType"></cate-menu-item>
      </scroll>
  </div>
</template>

<script>
import scroll from 'common/scroll/Scroll.vue'
import CateMenuItem from './CateMenuItem'
export default {
  name: "CateMenu",
  data(){
    return{
       currentType:'3627',
    }
  },
  props: {
    menulist: {
      type: Array,
      default() {
        return [];
      }
    },
  },

  components:{
      CateMenuItem,
      scroll
  },methods:{
    itemclick(item)
    {
      this.currentType=item.maitKey;
      this.$emit('menuitemclick',item.maitKey);
    }
  }
};
</script>

<style scoped>
#menu{
    color: var(--color-text);
  width: 100px;
  height: 100vh;
    float: left;
  background-color: rgb(246, 246, 246);
}
.content{ 
       overflow: hidden;
    height: calc(100% - 44px - 52px);
}
</style>