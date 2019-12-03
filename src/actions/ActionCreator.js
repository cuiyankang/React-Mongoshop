import { hotNine,SampleSale,GetOneData,GetTwoData,ChangeID } from "./ActionTypes"
import { ListApi, categoryApi, foldupApi, folduplistApi, rankingApi, 
    rankinglistApi,halfApi,halflistApi,SampleSaleListApi,GetOneDataApi,GetTwoDataApi,ChangeIDApi,
    SearchApi,SearchToListApi,HomeBannerApi,
    HomeNavApi,discountApi,layoutApi,BrandSaleApi,LineApi,FindApi } from "../api/hub";

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

export const SearchAsyncAction = (city)=>{
    var SearchAction = (data)=>({
        type:"SEARCH_ACT",
        data:data
    })

    return async (dispatch)=>{
        let data = await SearchApi(city);
        if(data.status == 1){
            dispatch(SearchAction(data.data))
        }else{
            let data = [];
            dispatch(SearchAction(data))
        }
    }
}

export const listAsyncAction = (city,status)=>{
    var SearchToListAction = (data,status)=>({
        type:"SEARCH_TOLIST",
        data:data,
        status
    })

    return async (dispatch)=>{
        let data = await SearchToListApi(city);
        dispatch(SearchToListAction(data.data.data,status))
    }
}


export const HomeAsyncAction = ()=>{
    var HomeBannerAction = (data)=>({
        type:"HOME_BANNER",
        data
    })

    return async (dispatch)=>{
        let data = await HomeBannerApi();
        dispatch(HomeBannerAction(data.data.config))
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


export const NavAsyncAction = ()=>{
    var HomeNavAction = (data)=>({
        type:"HOME_NAV",
        data
    })

    return async (dispatch)=>{
        let data = await HomeNavApi();
        dispatch(HomeNavAction(data.data.config.data))
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


export const discountAction = ()=>{
    var homeDiscountAction = (data)=>({
        type:"HOME_DISCOUNTAPI",
        data
    })

    return async (dispatch)=>{
        let data = await discountApi();
        dispatch(homeDiscountAction(data.data.config.list))
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


export const LayoutAction = ()=>{
    var homeLayoutAction = (data)=>({
        type:"HOME_LAYOUT",
        data
    })

    return async (dispatch)=> {
        let data = await layoutApi();
        dispatch(homeLayoutAction(data.data))
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


export const BrandSaleAction = ()=>{
    var homeSaleAction = (data)=>({
        type:"HOME_SALE",
        data
    })

    return async (dispatch)=> {
        let data = await BrandSaleApi();
        dispatch(homeSaleAction(data.data.config))
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


export const LineAction = ()=>{
    var homeLineAction = (data)=>({
        type:"HOME_LINE",
        data
    })

    return async (dispatch)=>{
        let data = await LineApi();
        dispatch(homeLineAction(data.data.config.list))        
    }
}


export const findAction = (page)=>{
    var homeFindAction = (data)=>({
        type:"HOME_FIND",
        data
    })

    return async (dispatch)=>{
        let data = await FindApi(page);
        dispatch(homeFindAction(data.data.list))        
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


