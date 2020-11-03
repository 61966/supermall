<template>
  <div id="chatbox">
    <div class="content" v-if="ifself()">
      <div class="content-msg">
        <span>{{chatdata | getMsg}}</span>
        <div class="content-three">
          <img src="~assets/img/chat/three01.png" alt="">
        </div>
      </div>

      <div class="content-head">
        <img src="~assets/img/chat/head.png" alt="">
      </div>
    </div>

      <div class="content02" v-if="!ifself()">
        <div class="content-head">
        <img src="~assets/img/chat/head02.png" alt="">
      </div>

      <div class="content-msg">
        <span>{{chatdata | getMsg}}</span>
        <div class="content-three">
          <img src="~assets/img/chat/three02.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ChatBox",
  computed:{
  ...mapGetters({
    name:'getusername',
    hashcodemy:'getmyhashcode',
    hashcode:'gethashcode',
      })
  },
  props: {
    chatdata: {
      type: String,
      default() {
       return '';
      },
    },
  },
  filters:{
    getMsg(str)
    {
      return str.split('@')[1];
    },
   
  },
  methods:{
     ifself()
    {
      
      return this.chatdata.split('@')[0]==this.hashcode;

    }
  }
};
</script>

<style scoped>
#chatbox{
  padding: 0;
  /* background-color: red; */
}
.content{
  width: 100vw;
  display: flex;
  justify-content:flex-end;
  position: relative;
  align-items: center;
  padding:  4px 0;
}
 .content .content-msg{
  display: inline-block;
  flex: 1;
  padding: 4px 10px;
  flex: 0 0 auto;
  max-width: 60vw;
   /* 在flex布局下width属性失效  0 0 保持原来的宽度不变 */
  border-radius: 15px;
  background-color: var(--color-chat01);
}
 .content .content-msg{
  position: relative;
  line-height: 25px;
}
 .content .content-head{
  margin-left: 10px;
  right: 10px;
  flex: 1;
  flex: 0 0 50px;
   /* 在flex布局下width属性失效  */
  overflow: hidden;
  display: inline-block;
  border-radius: 50%;
}
 .content  .content-head img{
  width: 40px;
  height: 40px;
}
.content .content-three{
  position: absolute;
  right:-8px;
  top:50%;
  width: 15px;
  transform: translate(0,-50%);
  height: 15px;
}
.content .content-three img{
  width:15px;
  height: 15px;
}

.content02{
  width: 100vw;
  padding: 4px 0px;
  display: flex;
  justify-content:flex-start;
  position: relative;
  align-items: center;
}
 .content02 .content-msg{
  display: inline-block;
  flex: 1;
  padding: 4px 10px;
  flex: 0 0 auto;
  max-width: 60vw;
  /* 在flex布局下width属性失效  0 0 保持原来的宽度不变*/
  border-radius: 15px;
  background-color: var(--color-chat02);
}
 .content02 .content-msg{
  position: relative;
  line-height: 25px;
}
 .content02 .content-head{
  margin-left: 10px;
  right: 10px;
  flex: 1;
  flex: 0 0 50px;
  /* 在flex布局下width属性失效 */
  overflow: hidden;
  display: inline-block;
  border-radius: 50%;
}
 .content02  .content-head img{
  width: 40px;
  height: 40px;
}
.content02 .content-three{
  position: absolute;
  left:-8px;
  top:50%;
  width: 15px;
  transform: translate(0,-50%);
  height: 15px;
}
.content02 .content-three img{
  width:15px;
  height: 15px;
}
</style>