const getters={
    cartlength(state)//返回商品数量
    {
        return state.CartList.length;
    },
    cartlist(state)//返回商品的全部信息
    {
        return state.CartList;
    },
    shopisShow(state)
    {
        return state.ShopCheckisShow;
    },
    shoplength(state)
    {
        return state.ShopCheckLength;
    }
    ,shopmoney(state)
    {
        return state.ShopCheckMoney;
    }
    ,gethistory(state)
    {
        return state.history;
    }
    ,getusername(state)
    {
        return state.username;
    }
    ,getmyhashcode(state)
    {
        return state.myhashcode;
    }
    ,gethashcode(state)
    {
        return state.hashcode;
    }
}
export default getters