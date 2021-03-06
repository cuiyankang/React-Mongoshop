import {categoryAsyncAction,SampleSaleAction,GetOneDataAction,ChangeIDAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncnine(id,page){
        dispatch(categoryAsyncAction(id,page))
    },
    handleAsyncSampleSale(){
        dispatch(SampleSaleAction())
    },
    handleGetOneData(){
        dispatch(GetOneDataAction())
    },
    handleChangeID(id){
        dispatch(ChangeIDAction(id))
    },
})