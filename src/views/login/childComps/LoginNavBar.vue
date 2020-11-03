<template>
  <div id="navbar">
    <nav-bar>
      <div slot="left" class="navbar-img" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>

      <div slot="right">
        <span>更多</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
//公共组件
import NavBar from "common/navbar/NavBar";
export default {
  name: "LoginNavBar",
  components: {
    NavBar,
  },
  methods: {
    backClick() {
        history.back();
    },
  },
};
</script>

<style scoped>
#navbar {
  background-color: var(--color-tint);
}
.navbar-img {
  align-items: center;
  /* 垂直居中 */
  height: 44px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
</style>