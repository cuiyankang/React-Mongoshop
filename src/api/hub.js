
import http from "utils/request";

/*测试接口*/
export const ListApi = () => http.get({
        url: "/ajax/index.php",
        data: {
            r: "class/cyajaxsub",
            page: 1,
            cid: 22,
            px: 't',
            cac_id:''
        }
    })
//http://www.mangguozhe.com/index.php?r=class%2Fcyajaxsub&page=1&cid=22&px=t&cac_id=


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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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
    url: "/ajaxImg/api/category/product/model-detail-by-model-id-new",
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


export const FindApi = () => http.get({
    url: "/ajaxImg/api/category/index/lingquan-live-new",
    data: {
        pageId:1,//页数
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