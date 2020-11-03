<template>
  <div id="toast" v-show="isShow" :class="{active:isShow}">
    <span >{{this.message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: null,
      isShow: false,
    };
  },
  methods: {
    show(res, delay = 2000) {
      this.message = res;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
#toast {
  position: absolute;
  top: 50%;
  z-index: 9999;
  color: white;
  text-align: center;
  border-radius: 10px;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px;
  background-color: black;

}
.active{
  animation: scaleDraw;
    -webkit-animation-name: scaleDraw;
    -webkit-animation-timing-function: ease-in-out; 
    -webkit-animation-iteration-count: infinite; 
    -webkit-animation-duration: 2s; 
}
@keyframes scaleDraw {
  0% {
    opacity: 0;
  }
  1%{
    opacity: 0.8;
  }
  20% {
    opacity: 0.8;
  }
30%{
   opacity: 0.7;
}
  40% {
    opacity: 0.6;
  }
    50% {
    opacity: 0.5;
  }
  60% {
    opacity: 0.4;
  }
  70% {
    opacity: 0.3;
  }
  80% {
    opacity: 0.2;
  }
  90% {
    opacity: 0.1;
  }
  100%{
    opacity: 0;
  }
}
</style>