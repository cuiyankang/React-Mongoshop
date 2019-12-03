import {ListApi,categoryApi,SampleSaleListApi,GetOneDataApi,GetTwoDataApi,ChangeIDApi} from "../api/hub";
import {hotNine,SampleSale,GetOneData,GetTwoData,ChangeID} from "./ActionTypes"

//九块九
export const categoryAsyncAction = (id,page)=>{
    var getAsyncAction = (data)=>({
        type:hotNine,
        data:data,
        
    })

    return async (dispatch)=>{
        let data = await ListApi(id,page);
        console.log(data,"**************");
        dispatch(getAsyncAction(data))
    }
}

//list
export const SampleSaleAction = ()=>{
    var getAsyncSampleSaleAction = (data)=>({
        type:SampleSale,
        data:data,
        
    })

    return async (dispatch)=>{
        // console.log(11111111,dispatch);

        let data = await SampleSaleListApi();
        // console.log(data,5555111)
        dispatch(getAsyncSampleSaleAction(data))
    }
}
// //品牌特卖
export const GetOneDataAction = ()=>{
    var getAsyncGetOneDataAction = (data)=>({
        type:GetOneData,
        data:data,
        
    })

    return async (dispatch)=>{
        // console.log(11111111,dispatch);

        let data = await GetOneDataApi();
        // console.log(data,5555111)
        dispatch(getAsyncGetOneDataAction(data))
    }
}

export const GetTwoDataAction = ()=>{
    var getAsyncGetTwoDataAction = (data)=>({
        type:GetTwoData,
        data:data,
        
    })

    return async (dispatch)=>{
        let data = await GetTwoDataApi();
        dispatch(getAsyncGetTwoDataAction(data))
    }
}



export const ChangeIDAction = (id)=>{
    var ChangeIDActionAction = (data)=>({
        type:ChangeID,
        data:data,
        
    })

    return async (dispatch)=>{
        let data = await ChangeIDApi(id);
        dispatch(ChangeIDActionAction(data))
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

