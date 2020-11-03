<template>
  <div id="tab-control">
      <div v-for="(item,index) in title" :key="index" class="tab-control-item" >
          <span @click="itemclick(index)" :class="{active: currentIndex==index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default()
            {
                return [];
            }
        }
    },
   data()
    {
      return {
     currentIndex:0
      }
    }
    ,methods:{
        itemclick(index)
        {
            this.currentIndex=index;
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style scoped>
#tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 34px;
    line-height: 34px; 

    background-color: white;
}
.tab-control-item{
    flex: 1;
  
}
.active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    padding:0px 3px  5px 3px;
}
</style>