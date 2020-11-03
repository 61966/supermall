<template>
  <div id="login">
    <login-nav-bar></login-nav-bar>

    <div class="login-head">
      <div class="login-head-img">
        <img src="~assets/img/common/logo.png" alt="" />
      </div>
    </div>

    <div class="login-content">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
    </div>

    <div class="login-submit">
      <button @click="loginClick">登陆</button>
    </div>
  </div>
</template>

<script>
//子组件
import LoginNavBar from "./childComps/LoginNavBar";
export default {
  name: "login",
  components: {
    LoginNavBar,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    loginClick() {
      let data = {};
      data.username = this.username;
      data.password = this.password;
      this.$store.dispatch("WebSocket", data);
      this.$router.push('/profile');
    },
  },
};
</script>

<style scoped>
.login-head {
  width: 100vw;
  height: 100px;
  margin-top: 60px;
  /* background-color: red; */
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.login-head-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  /* background-color: blue; */
}
.login-head-img img {
  width: 100px;
  height: 100px;
}
.login-content {
  position: relative;
  margin: auto;
  width: 200px;
  /* background-color: blue; */
  margin-top: 20px;
}
.login-content input {
  height: 28px;
  width: 200px;
  margin-top: 10px;
}
.login-submit {
  position: relative;
  margin: auto;
  margin-top: 20px;
  width: 200px;
}
.login-submit button {
  width: 200px;
  height: 30px;
  border-radius: 15px;
  background-color: var(--color-tint);
  border: 1px solid var(--color-high-text);
}
</style>