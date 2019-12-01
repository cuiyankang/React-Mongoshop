import {categoryAsyncAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncnine(page){
        dispatch(categoryAsyncAction(page))
    }
})