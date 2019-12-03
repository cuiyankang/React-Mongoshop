
import http from "utils/request";

// export const week_choiceApi = (cityId = 140, page = 0) => http.get({
//     url: "/ajax/hub/home/v1/web/week_choice.json",
//     data: {
//         city_id: cityId,
//         page: page
//     }
// })



export const ListApi = (id="",page=1) => http.get({
    url: "/ajax/index.php",
    data: {
        r: "nine/listajax",
        n_id:58,
        page: page,
        cac_id:id,
    }
})
//http://www.mangguozhe.com/index.php?r=nine/listajax&n_id=58&page=1&cac_id=


export const categoryApi = () => http.get({
    url: "/ajax/index.php",
    data: {
        r: "class/category",
        type:1
    }
})

export const SampleSaleListApi = () => http.get({
    url: "/ajaxone/api/goods/category-brand-list",
    data:{

    }
})



export const GetOneDataApi = () => http.get({
    url: "/ajaxone/api/tb-service/get-one-data",
    data:{

    }
})


export const GetTwoDataApi = () => http.get({
    url: "/ajaxone/api/tb-service/get-two-data",
    data:{

    }
})


export const ChangeIDApi = (id) => http.get({
    url: "/ajaxone/api/tb-service/brand-list-by-category-id",
    data:{
        typeId:id
    }
})