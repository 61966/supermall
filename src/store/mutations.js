import {
  ADDCARTLIST,
  RENEWCARTLIST,
  SHOPCHANGE,
  SHOPNOW,
  LGINSOKET,
  INITSOCKET,
  MESSAGESOCKET,
  SENDMESSAGE,
  GETHSHCODE,
} from './mutations-type'
const mutations = {
  [ADDCARTLIST](state, payload) //将新的商品添加到购物车中
  {
    state.CartList.pricecount = 0;
    payload.count++;
    state.CartList.push(payload);
  },
  [RENEWCARTLIST](state, payload) //对旧的商品的数量进行修改
  {
    payload.count++;
  },
  [SHOPCHANGE](state, payload) {
    payload.isShow = !payload.isShow;
  },
  [SHOPNOW](state, payload) {
    state.ShopCheckLength = 0;
    state.ShopCheckMoney = 0;
    for (let item of state.CartList) {
      if (item.isShow) {
        state.ShopCheckLength++;
        state.ShopCheckMoney += item.count * item.price;
      }
    }
    if (state.ShopCheckLength == state.CartList.length)
      state.ShopCheckisShow = true;
  },
  [INITSOCKET](state, payload) //初始化socket的连接
  {
    state.socket = new WebSocket('ws://172.20.10.7:8080/SMVC_Chat_war_exploded/chat/' + payload.username);
  },
  [LGINSOKET](state, payload) //登陆的socket的连接
  {
    state.socket.onmessage = function (event) { // 处理数据
      let password = event.data.split('-')[0];
      let hashcode = event.data.split('-')[1];
      // console.log(password);
      console.log(hashcode); //打印返回的hashcode
      if (password == payload.password) //后台返回的数据和前台进行对比
      {
        state.session = !state.session;
        state.myhashcode = hashcode;
      }
    };
    console.log(state.socket.readyState); //打印现在的连接状态
  },

  [SENDMESSAGE](state, payload) {
    let msg = state.hashcode + '_' + payload;
    console.log(msg);
    state.socket.send(msg);
    let mymsg = state.hashcode + '@' + payload;
    if (mymsg) {
      state.history.push(mymsg);
    }
  },

  [GETHSHCODE](state, payload) {
    console.log("开始获取hashcode");
    // console.log(state.socket.onmessage);
    console.log("名字:",payload);
    state.socket.send(payload);
    state.socket.onmessage = function (event) { // 处理数据
      console.log(event.data);
      if(event.data.split('_')[0]=="OtherHsh")
      {
        let hashcode=event.data.split('_')[1];
        console.log(hashcode);
        state.hashcode=hashcode;
        console.log(state.hashcode);
      }
      else 
      {
        let data=event.data.split('@')[0];
        let data2=event.data.split('_')[1];
        let msg=data+'@'+data2;
        console.log(msg);
        state.history.push(msg);
      } 

    };
  }
}
export default mutations