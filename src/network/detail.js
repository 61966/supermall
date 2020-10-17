//1. 导入基础部分的url
import {
  request
} from 'network/request'

export function detail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class BaseInfo{
  constructor(item,columes,service)
  {
    this.realPrice=item.price;
    this.title=item.title;
    this.oldPrice=item.oldPrice;
    this.discount=item.discountDesc;
    this.columes=columes;
    this.servic=service;
  }
}

export class ShopInfo{
  constructor(shopinfo)
  {
    this.logo=shopinfo.shopLogo;
    this.title=shopinfo.name;
    this.sell=shopinfo.cSells;
    this.goods=shopinfo.cGoods;
    this.score=shopinfo.score;
    this.shoplink=shopinfo.shopUrl;
  }
}
  export class GoodsInfo{
    constructor(goodsinfo)
    {
      this.key=goodsinfo.detailImage[0].key;
      this.desc=goodsinfo.desc;
      this.list=goodsinfo.detailImage[0].list;
    }
  }
  export class NumInfo{
    constructor(numinfo)
    {
      this.table=numinfo.rule.tables[0];
      this.set=numinfo.info.set;
    }
  }


  export class CommendInfo{
    constructor(recomend)
    {
      this.user=recomend.user.uname;
      this.img=recomend.user.avatar;
      this.text=recomend.content;
      this.style=recomend.style;
      this.time=recomend.created;
    }
  }
