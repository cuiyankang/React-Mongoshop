import {ListApi} from "../api/hub";

export const categoryAsyncAction = ()=>{
    var getAsyncAction = (data)=>({
        type:"HOT_NINE",
        data:data
    })

    return async (dispatch)=>{
        let data = await ListApi();
        dispatch(getAsyncAction(data))
    }
}