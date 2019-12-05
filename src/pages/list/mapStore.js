import {listAsyncAction,SortlistAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsynclist(city,num){
        dispatch(listAsyncAction(city,num))
    },
    handleSort(city){
        dispatch(SortlistAction(city))
    }
})