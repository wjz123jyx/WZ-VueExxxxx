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

export const reqFloorList = () => {
    return mockAjax({
        url:'/floor',
        method:'get'
    })
}


export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url:'/list',
        method:'post',
        data:searchParams
    })
}

// reqGoodsListInfo({})
// reqCategoryList()
 