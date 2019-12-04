import {handleSortListAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})

export const mapDispatchToProps = (dispatch)=>({
    handleSortList(px,id){
        console.log(px,id,444)
        dispatch(handleSortListAction(px,id))
    },
    
})
