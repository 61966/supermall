<template>
  <div id="app">
    <div class="app-item" @click="chatClick">
      <div class="item-img">
        <img src="~assets/img/profile/msg.png" alt="" />
      </div>

      <div class="item-span">
        <span>我的消息</span>
      </div>
    </div>

    <div class="app-item">
      <div class="item-img">
        <img src="~assets/img/profile/score.png" alt="" />
      </div>

      <div class="item-span">
        <span>积分商城</span>
      </div>
    </div>

    <div class="app-item">
      <div class="item-img">
        <img src="~assets/img/profile/vip.png" alt="" />
      </div>

      <div class="item-span">
        <span>会员卡</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileApp",
  methods:{
      chatClick()
      {
          this.$router.push('/friend')
      }
  }
};
</script>

<style scoped>
#app {
  border-top: 10px solid var(--color-border);
  border-bottom: 7px solid var(--color-border);
}
.app-item {
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
}
.item-img {
  margin-left: 20px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  display: inline-block;
}
.item-img img {
  width: 30px;
  height: 30px;
}
.item-span {
  color: black;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  margin-left: 10px;
  display: inline-block;
  width: calc(100% - 50px);
  border-bottom: 1px solid var(--color-border);
}
</style>