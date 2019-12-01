
import http from "utils/request";

// export const week_choiceApi = (cityId = 140, page = 0) => http.get({
//     url: "/ajax/hub/home/v1/web/week_choice.json",
//     data: {
//         city_id: cityId,
//         page: page
//     }
// })



export const ListApi = () => http.get({
        url: "/ajax/index.php",
        data: {
            r: "nine/listajax",
            n_id:58,
            page: 1,
            cac_id:''
        }
    })
//http://www.mangguozhe.com/index.php?r=class%2Fcyajaxsub&page=1&cid=22&px=t&cac_id=
