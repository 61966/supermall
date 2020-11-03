<template>
  <div id="goods">
      <cart-good-item v-for="(item,index) in goodsdata" :key="index"  :goods="item"></cart-good-item>
  </div>
</template>

<script>
import CartGoodItem  from './CartGoodItem';
import {mapGetters} from 'vuex';

export default {
    name:'CartGoods',
    components:{
        CartGoodItem
    },
    computed:{
        ...mapGetters({
             goodsdata:'cartlist',
        })
    },
}
</script>

<style scoped>
#goods{
    padding-top: 10px;
}
</style>