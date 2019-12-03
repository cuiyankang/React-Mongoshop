import {foldupAsyncAction,foldlupistAsyncAction} from "actions/ActionCreator"
export const mapStateToProps=(state)=>({
    data:state
})



export const mapDispatchToProps=(dispatch)=>({
    foldup(){
        dispatch(foldupAsyncAction())
    },
    list(cId){
        dispatch(foldlupistAsyncAction(cId))
    }
})