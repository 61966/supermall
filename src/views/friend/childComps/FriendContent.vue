<template>
  <div id="content">
      <friend-box v-for="(item,index) in friendlist" :name='item' :key="index"></friend-box>
  </div>
</template>

<script>
import FriendBox from './FriendBox'
export default {
    name:'FriendContent',
    components:{
        FriendBox,
    },data()
    {
        return {
            friendlist:['222333', '333444'],
        }
    }
}
</script>

<style scoped>
#content{
    width: 100vw;
    height: calc(100vh - 44px－ 52px);
    position: relative;
    z-index: 99;
    background-color: white;
}
</style>