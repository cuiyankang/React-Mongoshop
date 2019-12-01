import {ListApi,categoryApi} from "../api/hub";

//九块九
export const categoryAsyncAction = ()=>{
    var getAsyncAction = (data)=>({
        type:hotNine,
        data:data
    })

    return async (dispatch)=>{
        let data = await ListApi();
        dispatch(getAsyncAction(data))
    }
}


//分类
export const fenleiAsyncAction = ()=>{
    var getAsyncAction = (data)=>({
        type:"FENYE_LIST",
        data:data
    })

    return async (dispatch)=>{
        let data = await categoryApi();
        dispatch(getAsyncAction(data))
    }
}

