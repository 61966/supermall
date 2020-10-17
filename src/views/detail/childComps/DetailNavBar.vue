<template>
  <div id="detail-navbar">
    <nav-bar>
      <div slot="left" class="title-img" @click="titleback">
          <img
            src="~assets/img/common/back.svg"
            alt=""
          />
      </div>
      <div slot="center" class="title">
        <span
          v-for="(item, index) in titleInfos"
          :key="index"
          class="title-item"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titleInfos: ["商品", "参数", "评论", "推荐"],
    };
  },
  methods:{
      titleback()
      {
          history.back();
      }
  }

};
</script>

<style>
#detail-navbar {
  border-bottom: 1px solid grey;
  background-color: white;
  position: relative;
  z-index: 444;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.title-img {
  display: flex;
  display: -webkit-flex;
  align-items:center;
  /* 垂直居中 */
  justify-content:center;
  height: 44px;
}

</style>