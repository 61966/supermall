<template>
  <div id="navbar">
    <nav-bar>
      <div slot="left" class="left-img" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>

      <div slot="center">消息列表</div>

      <div slot="right" class="right">...</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "FriendNavBar",
  components: { NavBar, },
  methods:{
    backClick()
    {
      history.back();
    }
  }
};
</script>

<style scoped>
#navbar {
  background-color: var(--color-tint);
  color: white;
  font-size: 14px;
}
.left-img {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  height: 44px;
}
.right {
  font-size: 25px;
  color: var(--color-text);
}
</style>