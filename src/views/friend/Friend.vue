<template>
  <div id="friend">
    <friend-nav-bar></friend-nav-bar>
    <friend-content></friend-content>
  </div>
</template>

<script>
import FriendNavBar from './childComps/FriendNavBar'
import FriendContent from './childComps/FriendContent'
export default {
    name:'friend',
    components :{
      FriendNavBar,
      FriendContent,
    }
}
</script>

<style scoped>

</style>