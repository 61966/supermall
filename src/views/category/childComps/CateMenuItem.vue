<template>
  <div id="menu-item" :class="{active:currentType==menuitem.maitKey}">
    <span>{{ menuitem.title }}</span>
  </div>
</template>

<script>
export default {
  name: "CateMenuItem",
  props: {
    currentType: {
      type: String,
      default() {
        return "";
      },
    },
    menuitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active{
  border-left:3px solid var(  --color-high-text);
  background-color: white;
  color: var(--color-high-text);
}
</style>