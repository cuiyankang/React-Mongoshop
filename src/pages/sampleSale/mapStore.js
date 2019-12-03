import {SampleSaleAction,GetOneDataAction,GetTwoDataAction,ChangeIDAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncSampleSale(){
        dispatch(SampleSaleAction())
    },
    handleGetOneData(){
        dispatch(GetOneDataAction())
    },
    handleGetTwoData(){
        dispatch(GetTwoDataAction())
    },
    handleChangeID(id){
        dispatch(ChangeIDAction(id))
    },

    
})