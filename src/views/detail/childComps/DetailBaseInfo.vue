<template>
  <div v-if="base" id="base">
    <div class="info-title">{{ base.title }}</div>
    <div class="info-price">
      <span class="real-price">{{ base.realPrice }}</span>
      <span class="old-price">{{ base.oldPrice }}</span>
      <span class="count-price">{{ base.discount }}</span>
    </div>
    <div class="info-other">
      <span
        class="info-other-item"
        v-for="index in base.columes.length-1"
        :key="index"
        >{{ base.columes[index] }}</span
      >
      <span class="info-other-item">{{
        base.servic[base.servic.length - 1].name
      }}</span>
    </div>

    <div class="info-service">
        <span class="info-service-item" v-for="item in base.servic.length-1" :key="item">
            <img :src=" base.servic[item].icon" alt="">
            {{base.servic[item-1].name}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    base: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#base {
  background-color: white;
  position: relative;
  z-index: 99;
  overflow: hidden;
}
.info-title {
  position: relative;
  margin-top: 15px;
  color: black;
}
.info-price {
  position: relative;
  margin-top: 15px;
}
.info-price .real-price {
  color: var(--color-high-text);
  font-size: 22px;
  margin-left: 5px;
}
.info-price .old-price {
  font-size: 14px;
  text-decoration: line-through;
  margin-left: 9px;
}
.info-price .count-price {
  background-color: var(--color-high-text);
  color: white;
  padding: 2px 7px;
  position: relative;
  top: -10px;
  margin-left: 5px;
  border-radius: 9px 9px 9px 9px;
  font-size: 10px;
}
.info-other {
  margin-top: 15px;
  display: flex;
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 10px;
  color: var(--color-text);
  font-size: 14px;
  justify-content:space-between;
}
.info-other-item {
  flex: 1;
  padding: 0;
  margin: 0;
  text-align: center;
}
.info-service{
    display: flex;
    margin-top: 17px;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom:16px solid rgba(226, 226, 226, 0.6) ;
}
.info-service .info-service-item{
    position: relative;
    /* background-color: hotpink; */
    flex: auto;
    overflow: hidden;
    height: 14px;
    width: 10%;
}
.info-service .info-service-item img{
    width: 12px;
    height: 12px;
}
</style>