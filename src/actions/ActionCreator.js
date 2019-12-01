import {ListApi} from "../api/hub";
import {hotNine} from "./ActionTypes"

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