import {HomeAsyncAction,NavAsyncAction,discountAction,
    LayoutAction,BrandSaleAction,LineAction,findAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(){
        dispatch(HomeAsyncAction())
    },
    handleAsyncNav(){
        dispatch(NavAsyncAction())
    },
    handleAsyncdiscount(){
        dispatch(discountAction())
    },
    handleAsyncLayout(){
        dispatch(LayoutAction())
    },
    handleAsyncBrandSale(){
        dispatch(BrandSaleAction())
    },
    handleAsyncLine(){
        dispatch(LineAction())
    },
    handleAsyncfind(){
        dispatch(findAction())
    }
})