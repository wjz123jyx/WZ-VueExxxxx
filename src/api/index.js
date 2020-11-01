import Ajax from '@/ajax/Ajax';

export const reqCategoryList = () => {
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// reqCategoryList()
 