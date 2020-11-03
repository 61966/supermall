<template>
<div id="cart">
<!-- 导航栏 -->
<cart-nav-bar></cart-nav-bar>
<!-- 商品 -->
<scroll class="content"  ref="scroll">
<cart-goods></cart-goods>
</scroll>

<cart-goods-bottom></cart-goods-bottom>
</div>
</template>

<script>
//公共组件
import scroll from 'common/scroll/Scroll'

//子组件
import CartNavBar from './childComps/CartNavBar'
import CartGoods from './childComps/CartGoods'
import CartGoodsBottom from './childComps/CartGoodsBottom'

export default {
    name:'Cart',
    components:{
        CartNavBar,
        CartGoods,
        scroll,
        CartGoodsBottom,
    },
    activated(){
        this.$refs.scroll.refresh();
    }
}
</script>

<style scoped>
#cart{
    height: 100vh;
    background-color: rgb(240,240,240);
}
.content{
    overflow: hidden;
    height: calc(100% - 44px - 52px - 40px);
}
</style>
