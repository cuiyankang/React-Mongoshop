import {ListApi,SearchApi,SearchToListApi,HomeBannerApi,
    HomeNavApi,discountApi,layoutApi,BrandSaleApi,LineApi,FindApi} from "../api/hub";

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


export const findAction = ()=>{
    var homeFindAction = (data)=>({
        type:"HOME_FIND",
        data
    })

    return async (dispatch)=>{
        let data = await FindApi();
        console.log(data);
        // dispatch(homeFindAction(data.data.config.list))        
    }
}