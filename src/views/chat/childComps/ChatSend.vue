<template>
  <div id="send">
      <div class="input">
          <input type="text" v-model="message">
          <button @click="sendClick">发送</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'ChatSend',
    data()
    {
        return{
            message:null,
        }
    },
    props:{
        name:{
            type:String,
            default()
            {
                return null;
            }
        }
    },methods:{
        sendClick()
        {
            console.log("发送消息点击");
            this.$store.dispatch('SendMessage',this.message);
            this.message=null;
        }
    }
}
</script>

<style scoped>
#send{
    display: flex;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 60px;
    top: 0;
    right: 0;
    left: 0;
    background-color:  rgba(226, 226, 226, 0.7);
}
.input{
    width: 100vw;
    text-align: center;
}
.input input{
    width: 200px;
    height: 30px ;
    border: none;
    border-radius: 30px;
}
.input button {
    margin-left: 10px;
    width: 50px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: var(--color-tint);
}
</style>