import { hotNine } from "./ActionTypes"
import { ListApi, categoryApi, foldupApi, folduplistApi, rankingApi, rankinglistApi,halfApi,halflistApi } from "../api/hub";

//九块九
export const categoryAsyncAction = () => {
    var getAsyncAction = (data) => ({
        type: hotNine,
        data: data
    })

    return async (dispatch) => {
        let data = await ListApi();
        dispatch(getAsyncAction(data))
    }
}


//分类
export const fenleiAsyncAction = () => {
    var getAsyncAction = (data) => ({
        type: "FENYE_LIST",
        data: data
    })

    return async (dispatch) => {
        let data = await categoryApi();
        dispatch(getAsyncAction(data))
    }
}


//折上折
export const foldupAsyncAction = () => {
    var foldupAsyncAction = (data) => ({
        type: "FOLD_UP",
        data: data
    })
    return async (dispatch) => {
        let data = await foldupApi();
        dispatch(foldupAsyncAction(data))
    }
}


//折上折列表
export const foldlupistAsyncAction = (cId) => {
    var folduplistAsyncAction = (data) => ({
        type: "FOLD_UP_LIST",
        data: data
    })
    return async (dispatch) => {
        let data = await folduplistApi(cId);
        dispatch(folduplistAsyncAction(data))
    }
}


//疯抢导航
export const rankingAsynvAction = () => {
    var getAsyncAction = (data) => ({
        type: "RANKING",
        data: data
    })

    return async (dispatch) => {
        let data = await rankingApi();
        dispatch(getAsyncAction(data))
    }
}
//疯抢列表
export const rankinglistAction = (id) => {
    var getAsyncAction = (data) => ({
        type: "RANKING_LIST",
        data: data
    })
    return async (dispatch) => {
        let data = await rankinglistApi(id);
        dispatch(getAsyncAction(data))
    }
}

//半价导航
export const halfAsynvAction = () => {
    var getAsyncAction = (data) => ({
        type: "HALF",
        data: data
    })

    return async (dispatch) => {
        let data = await halfApi();
        dispatch(getAsyncAction(data))
    }
}
//半价列表
export const halflistAction = (time) => {
    var getAsyncAction = (data) => ({
        type: "HALF_LIST",
        data: data
    })
    return async (dispatch) => {
        let data = await halflistApi(time);
        dispatch(getAsyncAction(data))
    }
}






