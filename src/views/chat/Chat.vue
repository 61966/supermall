<template>
  <div id="chat">
    <chat-nav-bar :name="name"></chat-nav-bar>
    <chat-content></chat-content>
    <chat-send :name="name"></chat-send>
  </div>
</template>

<script>
import ChatNavBar from './childComps/ChatNavBar'
import ChatSend from './childComps/ChatSend'
import ChatContent from './childComps/ChatContent'
export default {
  name: "Chat", 
  components:{
    ChatNavBar,
    ChatSend,
   ChatContent
  },data()
  {
    return {
      name:null,
    };
  },
  activated(){
    if(this.$route.query.shopname)
    {
      this.name=this.$route.query.shopname
    }
    else 
     this.name = this.$route.query.name;
      // this.$store.dispatch('SendMessage',this.message);
  }
};
</script>

<style scoped>
#chat{
  position: relative;
  background-color: white;
  z-index: 99;
  opacity: 1;
  height: 100vh;
  width: 100vw;
}
</style>