
import http from "utils/request";

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
