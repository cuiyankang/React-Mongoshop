import {fenleiAsyncAction} from "../../actions/ActionCreator"
// console.log(categoryAction,111)
export const mapStateToProps=(state)=>({
    data:state
})

export const mapDispatchToProps=(dispatch)=>({
    handlecategoryAsyncData(){
        // console.log(111)
        dispatch(fenleiAsyncAction())
    }
})