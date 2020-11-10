import Ajax from '@/ajax/Ajax';
import mockAjax from '@/ajax/mockAjax';

export const reqCategoryList = () => {
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList = () => {
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}

// 获取楼层数据
export const reqFloorList = () => {
    return mockAjax({
        url:'/floor',
        method:'get'
    })
}

// 获取商品列表数据
export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url:'/list',
        method:'post',
        data:searchParams
    })
}

// 获取商品详情数据
export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url:`/item/${ skuId }`,
        method:'get'
    })
}

// 添加购物车
// /cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId,skuNum) => {
    return Ajax({
        url:`/cart/addToCart/${ skuId }/${ skuNum }`,
        method:'post'
    })
}


// 请求购物车列表数据
export const reqShopCartList = () => {
    return Ajax({
        url:'/cart/cartList',
        method:'get'
    })
}
// 修改商品切换状态
// cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCartIsCheck = (skuId,isChecked) => {
    return Ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}  

// 删除单个购物车商品
///cart/deleteCart/{skuId}
export const reqDeleteCart = (skuId) => {
    return Ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete'
    })
}

// 请求注册用户
// /user/passport/register
export const reqUserRegister = (userInfo) => {
    return Ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}

// 请求登录信息
// /user/passport/login
export const reqUserLogin = (userInfo) => {
    return Ajax({
        url:'/user/passport/login',
        method:'post',
        data:userInfo
    })
}


// 请求退出登录
// /user/passport/logout
export const reqUserLogout = () => {
    return Ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}


// 请求获取订单交易信息
// /order/auth/trade
export const reqTradeInfo = () => {
    return Ajax({
        url:'/order/auth/trade',
        method:'get'
    })
}

// 请求创建订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,tradeInfo) => {
    return Ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:tradeInfo
    })
}

// 获取订单结算
// /payment/weixin/createNative/{orderId}
export const reqOrderInfo = (orderId) => {
    return Ajax({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'get'
    })
}

// 查询是否支付成功
// /payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => {
    return Ajax({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}


// 请求获取我的订单
// /order/auth/{page}/{limit}
export const reqMyOrderInfo = (page,limit) => {
    return Ajax({
        url:`/order/auth/${page}/${limit}`,
        method:'get'
    })
}
// reqGoodsListInfo({})
// reqCategoryList()