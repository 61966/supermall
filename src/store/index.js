import Vue from 'vue'
import Vuex from 'vuex'


//导入模块
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


//1.安装插件
Vue.use(Vuex);


const state={
   CartList: [],
  ShopCheckisShow:false,
  ShopCheckLength:0,
  ShopCheckMoney:0,
  session:false,
  socket:null,
  history:[],
  hashcode:null,
  username:null,
  myhashcode:null,
}
//2.创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store;