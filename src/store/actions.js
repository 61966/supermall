// import { reject, resolve } from 'core-js/fn/promise';
import {
  ADDCARTLIST,
  RENEWCARTLIST,
  SHOPCHANGE,
  SHOPNOW,
  INITSOCKET,
  MESSAGESOCKET,
  LGINSOKET,
  SENDMESSAGE,
  GETHSHCODE,
} from './mutations-type'
const actions = {
  AddCart(context, payload) {
    return new Promise((resolve,reject)=>{
        let flag = true;
    //1.判断是否有相同的item
    for (let item of context.state.CartList) {
      if (item.id == payload.id) {
        flag = false;
        context.commit(RENEWCARTLIST, item); //购物车已经添加过这个商
        resolve("商品数量＋1成功!");
      }
    }
    if (flag) {
      context.commit(ADDCARTLIST, payload); //添加新商品
      resolve("商品加入成功!");
    }
    })
  },
  CheckNow(context, payload) {
    for (let item of context.state.CartList) //点击某个商品的选中，将这个商品记录为被选中
    {
      if (item.id == payload.id) {
        context.commit(SHOPCHANGE, item);
      }
    }
    context.commit(SHOPNOW, context.state);
  },
  CheckBox(context, payload) {
    context.state.ShopCheckisShow = !context.state.ShopCheckisShow; //更改全选按钮的选中属性
    for (let item of context.state.CartList) //全选则都选中
    {
      item.isShow = context.state.ShopCheckisShow;
    }
    context.commit(SHOPNOW, context.state);
  },
  WebSocket(context, payload) {
    this.commit(INITSOCKET, payload);// 进行socket的创建和连接
    this.commit(LGINSOKET, payload);//发送用户名。进行登陆的判断
  },
  SendMessage(context, payload) {
    context.commit(SENDMESSAGE, payload);
  },
  GetHashcode(context,payload)
  {
    context.commit(GETHSHCODE,payload);
  },
}
export default actions;