<template>
  <div id="num" v-if="numdata">
      <div class="num-table">
          <table class="num-table-item">
              <tr v-for="(item,index) in numdata.table" :key="index">
                  <td v-for="(minitem,index) in item" :key="index">{{minitem}}</td>
              </tr>
          </table>
      </div>

      <div class="num-set">
          <table class="num-set-item">
              <tr v-for="(item,index) in numdata.set" :key="index">
                  <td v-for="(minitem,index) in item" :key="index" :class="{active:index=='value'}">{{minitem}}</td>
              </tr>
          </table>
      </div>
     
  </div>
</template>

<script>
export default {
    name:'DetailNumInfo',
    props:{
        numdata:{
            type:Object,
            default()
            {
                return {};
            }
        }
    }
}
</script>

<style scoped>

.num-table-item{
    width:100%;
    padding: 10px 15px;
    border-bottom:5px solid rgba(226, 226, 226, 0.6) ;
}
.num-table-item tr{
    display: flex;
    border-bottom: 1px solid rgb(235,235,235);
    padding: 10px 10px;
    font-size: 14px;
}
.num-table-item td{
    flex: 1;
    
}
.num-set-item{
      width:100%;
    padding: 10px 25px;
}
.num-set-item tr{
    display: flex;
    border-bottom: 1px solid rgb(235,235,235);
    font-size: 15px;
    padding: 10px 10px;
     justify-content:flex-start;
}
.num-set-item td{
    flex: 1;
}
.active{
    color: var(  --color-high-text);
    flex-grow:2;
    border: none;
}
</style>