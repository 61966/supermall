<template>
  <div id="login" @click="loginClick">
    <div class="loginhead">
      <img src="~assets/img/profile/default.png" alt="" v-if="hashcode" />
      <img src="~assets/img/profile/loginafter.png" alt="" v-if="!hashcode" />
    </div>

    <div class="logindata">
      <div v-if="hashcode">
        <span>登陆/注册</span>
      </div>
      <div v-if="!hashcode">
        <span>{{ hashcode }}</span>
      </div>

      <div class="phone">
        <img src="~assets/img/profile/phone.png" alt="" />
      <span v-if="hashcode">暂无绑定手机号</span>
      <span v-if="!hashcode">156-8085-6812</span>
      </div>
    </div>

    <div class="more">
      <img src="~assets/img/profile/more.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileLogin",
  computed: {
    ...mapGetters({
      hashcode: "getusername",
    }),
  },
  methods:{
      loginClick()
      {
          if(this.hashcode)
          {
              this.$router.push('/login');
          }
      }
  }
};
</script>

<style scoped>
#login {
  position: relative;
  height: 90px;
  color: white;
  background-color: var(--color-tint);
  width: 100vw;
  display: flex;
  align-items: center;
}
.loginhead {
    margin-left: 10px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  background-color: white;
}
.loginhead img {
  width: 60px;
  height: 60px;
}
.logindata {
  margin-left: 10px;
}
 .phone {
     width: auto;
  height: 20px;
  display: inline-block;
  /* background-color: red; */
  overflow: hidden;
}
.phone span{
    font-size: 12px;
    /* line-height: 20px; */
}
.logindata .phone img {
  width: 20px;
  height: 20px;
}
.more {
  position: absolute;
  right: 30px;
  width: 20px;
  height: 20px;
  overflow: hidden;
}
.more img {
  width: 20px;
  height: 20px;
}
</style>