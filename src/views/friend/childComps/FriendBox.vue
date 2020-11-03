<template>
  <div id="box">
    <div class="box-item" @click="boxClick">
      <div class="item-img">
        <img src="~assets/img/chat/head.png" alt="" />
      </div>

      <div class="item-span">
        <span>好友：{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendBox",
  props: {
    name: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    boxClick() {
      if (this.$route.path != "/detail") {
        this.$router.push({
          path: "/chat",
          query: {
            name: this.name,
          },
        });
        this.$store.dispatch("GetHashcode",this.name);
                                                                   
      }
    },
  },
};
</script>

<style scoped>
.box-item {
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
}
.item-img {
  margin-left: 20px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: inline-block;
}
.item-img img {
  width: 40px;
  height: 40px;
}
.item-span {
  color: black;
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  margin-left: 10px;
  display: inline-block;
  width: calc(100% - 70px);
  border-bottom: 1px solid var(--color-border);
}
</style>