<template>
  <div id="data">
    <div class="data-item">
      <span class="data-num">{{ profilenums[0] | numtoFixed}}</span>
      <span>元</span>
      <h1>我的余额</h1>
    </div>
    <div class="data-item">
      <span class="data-num">{{ profilenums[1] }}</span>
      <span>个</span>
      <h1>我的优惠</h1>
    </div>
    <div class="data-item">
      <span class="data-num">{{profilenums[2] }}</span>
      <span>分</span>
      <h1>我的积分</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileData",
  props: {
    profilenums: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters:
  {
      numtoFixed(num)
      {
          return num.toFixed(2)
      }
  }
};
</script>

<style scoped>
#data{
    text-align: center;
    display: flex;
    align-items: center;
    height: auto;
    width: 100vw;
}
.data-item{
    padding: 10px 0px;
    flex: 1;
    border:1px solid var(--color-border);
}
.data-num{
    font-size: 25px;
    color: red;
}
.data-item h1{
    color: var(  --color-text);
    font-size: 13px;
}
</style>