//导入公共部分
import {request} from './request'

export function CateDirectory()
{
    return request({
        url:'/category',
    })
}

export function CateGoods(maitKey)
{
    return request({
        url:'/subcategory',
        params:{
            maitKey,
        }
    })
}