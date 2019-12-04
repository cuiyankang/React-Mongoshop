
import http from "utils/request";



/*搜索接口*/
export const SearchApi = (city) => http.get({
    url: "/ajax/index.php",
    data: {
        r:'index/kwarr',
        kw: city,
        token: false
    }
})
//http://www.mangguozhe.com/index.php?r=index/kwarr& kw=12ab &token=false



/*搜索跳列表接口*/
export const SearchToListApi = (city) => http.get({
    url: "/ajax/index.php",
    data: {
        r:'index/classifyajax',
        token: false,
        page:city.page,
        kw: city.kw,
        px:"renqi"
    }
})
//http://www.mangguozhe.com/index.php?r=index/classifyajax&token=false&page=2&kw=%E5%8F%A3%E7%BA%A2&px=renqi


/*首页banner图接口*/
export const HomeBannerApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:-1,
        proModelId:1,
        source:3,
        version:"v1",
        tuserId:797808,
        isWechat:0
    }
})
//http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=-1&proModelId=1&source=3&version=v1&tuserId=797808&isWechat=0



export const HomeNavApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:13012,
        proModelId:2,
        source:3,
        version:'v1',
        tuserId:797808,
        isWechat:0
    }
})
//http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=13012&proModelId=2&source=3&version=v1&tuserId=797808&isWechat=0


export const discountApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:13013,
        proModelId:13,
        source:3,
        version:'v1',
        tuserId:797808,
        isWechat:0 
    }
})
//http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=13013&proModelId=13&source=3&version=v1&tuserId=797808&isWechat=0 



export const layoutApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:13014,
        proModelId:20,
        source:3,
        version:'v1',
        tuserId:797808,
        isWechat:0 
    }
})
//http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=13014&proModelId=20&source=3&version=v1&tuserId=797808&isWechat=0 



export const BrandSaleApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:13016,
        proModelId:21,
        source:3,
        version:'v1',
        tuserId:797808,
        isWechat:0 
    }
})
//http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=13016&proModelId=21&source=3&version=v1&tuserId=797808&isWechat=0 




export const LineApi = () => http.get({
    url: "/ajaxone/api/category/product/model-detail-by-model-id-new",
    data: {
        entityId:4,
        modelId:13017,
        proModelId:16,
        source:3,
        version:'v1',
        tuserId:797808,
        isWechat:0 
    }
})
// http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new
//?
//entityId=4&modelId=13017&proModelId=16&source=3&version=v1&tuserId=797808&isWechat=0 


export const FindApi = (page) => http.get({
    url: "/ajaxone/api/category/index/lingquan-live-new",
    data: {
        pageId:page,//页数
        pageSize:10,
        entityId:4,
        type:1,
        version:'v1',
        tuserId:797808,
        isWechat:0 
    }
})
//http://cmsjapi.ffquan.cn/api/category/index/lingquan-live-new
//?
//pageId=1&pageSize=10&entityId=4&type=1&version=v1&tuserId=797808&isWechat=0
// export const week_choiceApi = (cityId = 140, page = 0) => http.get({
//     url: "/ajax/hub/home/v1/web/week_choice.json",
//     data: {
//         city_id: cityId,
//         page: page
//     }
// })



export const ListApi = (id = "", page = 1) => http.get({
    url: "/ajax/index.php",
    data: {
        r: "nine/listajax",
        n_id: 58,
        page: page,
        cac_id: id,
    }
})
//http://www.mangguozhe.com/index.php?r=nine/listajax&n_id=58&page=1&cac_id=

//分类
export const categoryApi = () => http.get({
    url: "/ajax/index.php",
    data: {
        r: "class/category",
        type: 1
    }
})

export const SampleSaleListApi = () => http.get({
    url: "/ajaxone/api/goods/category-brand-list",
    data: {}
})


//折上折导航
// http://cmsjapi.ffquan.cn/api/goods/super-discount/cate-list/v1
export const foldupApi = () => http.get({
    url: "/ajaxone/api/goods/super-discount/cate-list/v1",
    data: {

    }
})



export const GetOneDataApi = () => http.get({
    url: "/ajaxone/api/tb-service/get-one-data",
    data: {

    }
})


export const GetTwoDataApi = () => http.get({
    url: "/ajaxone/api/tb-service/get-two-data",
    data: {

    }
})


export const ChangeIDApi = (id) => http.get({
    url: "/ajaxone/api/tb-service/brand-list-by-category-id",
    data: {
        typeId: id
    }
})
//折上折列表
//http://cmsjapi.ffquan.cn/api/goods/super-discount/goods-list/v1?cId=1
export const folduplistApi = (cId) => http.get({
    url: "/ajaxone/api/goods/super-discount/goods-list/v1",
    data: {
        cId: cId ? cId : "1"
    }
})


//疯抢导航
// http://cmsjapi.ffquan.cn/api/goods/rushing-ranking/cate-list/v1
export const rankingApi = () => http.get({
    url: "/ajaxone/api/goods/rushing-ranking/cate-list/v1",
    data: {

    }
})

//疯抢列表
// http://cmsjapi.ffquan.cn/api/goods/rushing-ranking/goods-list2/v2?type=1&cId=4
export const rankinglistApi = (cId) => http.get({
    url: "/ajaxone/api/goods/rushing-ranking/goods-list2/v2",
    data: {
        type: 1,
        cId: cId
    }
})


//半价导航
// http://cmsjapi.ffquan.cn/api/goods/price/half-of-daily-session
export const halfApi = () => http.get({
    url: "/ajaxone/api/goods/price/half-of-daily-session",
    data: {

    }
})

//半价列表
// http://cmsjapi.ffquan.cn/api/goods/price/get-half-of-daily-current-session-list?currentSession=00&nextDay=false
export const halflistApi = (time) => http.get({
    url: "/ajaxone/api/goods/price/get-half-of-daily-current-session-list",
    data: {
        currentSession: time,
        nextDay: false
    }
})



export const HandleSortListApi = (px="t") => http.get({
    url: "/ajax/index.php",
    data: {
        r:"class%2Fcyajaxsub",
        page:1,
        cid:22,
        px:px,
        cac_id:""
    }
})

export const LoginApi = (user,pass) => http.post({
    url: "/ajaxlogin/users/login",
    body: {
        username:user,
        password:pass
    }
})


export const cityListApi = () => http.get({
    url: "/api/cityList",
    body: {}
})
