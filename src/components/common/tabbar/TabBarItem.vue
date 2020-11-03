<template>
<div class="tab-bar-item" @click="itemClick">
   <div v-if='!isActive'><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="{color:acolor}"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
    name:'TabBarItem',
    data(){
        return {}
    },
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'blue'
        }
    },
    methods:{
        itemClick()
        {
    //         if(this.$store.state.session==false && (this.path == '/profile' || this.path=='/cart'))
    //         {
    //             this.$router.replace('/login')  
    //         }
    //    else 
       this.$router.replace(this.path)
            // .catch(err=>{console.log(err)})//解决报错冗余导航
        }
       
    },
    computed:{
        isActive()
        {
            return this.$route.path.indexOf(this.path)!==-1;
        }
        , acolor()
        {
            return this.isActive?this.activecolor:"black";
        }
    }
}
</script>

<style scoped>
/* .tab-bar-item */
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    margin-top: 3px;
    font-size: 14px;
    line-height: 24px;
  }
  .tab-bar-item img{
    width: 26px;
    height: 26px;
    vertical-align: middle;
  }
</style>