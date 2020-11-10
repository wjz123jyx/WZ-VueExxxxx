import {reqGoodsDetailInfo} from '@/api';

const state = {
    goodsDetailInfo:{}
}
const mutations = {
    RECEIVEGOODDETAILINFO(state,goodsDetailInfo){
        state.goodsDetailInfo = goodsDetailInfo;
    }
}

const actions = {
    async getGoodsDetailInfo({commit},skuId){
        const result = await reqGoodsDetailInfo(skuId);
        if(result.code === 200){
            commit('RECEIVEGOODDETAILINFO',result.data);
        }
    }
}
const getters = {
    //类型导航
    categoryView(state){
        return state.goodsDetailInfo.categoryView || {}
    },
    //商品信息
    skuInfo(state){
        return state.goodsDetailInfo.skuInfo || {}
    },
    //销售属性列表
    spuSaleAttrList(state){
        return state.goodsDetailInfo.spuSaleAttrList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}