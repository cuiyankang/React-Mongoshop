import {SearchAsyncAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state.search
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncSearch(city){
        dispatch(SearchAsyncAction(city))
    }
})