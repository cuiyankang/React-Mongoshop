import {handleSortListAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})

export const mapDispatchToProps = (dispatch)=>({
    handleSortList(px){
        dispatch(handleSortListAction(px))
    },
    
})
