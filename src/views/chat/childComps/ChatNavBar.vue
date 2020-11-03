<template>
  <div id="navbar">
    <nav-bar>
      <div slot="left" class="left-img" @click="backClick">
       <img
            src="~assets/img/common/back.svg"
            alt=""
          />
      </div>

      <div slot="center">
        {{name}}
      </div>

      <div slot="right" class="right">
        ...
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
    name:'ChatNavBar',
    components:{
      NavBar,
    },
    props:{
      name:{
        type:String,
        default()
        {
          return "小熊";
        }
      }
    },
    methods:{
      backClick()
      {
        history.back();
      }
    }
}
</script>

<style scoped>
#navbar{
    width: 100vw;
    /* height: 45px; */
    color: white;
    background-color: var(--color-tint);
}
.left-img{
  display: flex;
  display: -webkit-flex;
    align-items:center;
  /* 垂直居中 */
  justify-content:center;
  height: 44px;
}
.right{
  color: var(--color-text);
  font-size: 25px;
  line-height: 31px;
}
</style>