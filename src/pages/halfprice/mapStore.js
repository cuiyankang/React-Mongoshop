import {halfAsynvAction,halflistAction} from "../../actions/ActionCreator"
export const mapStateToProps=(state)=>({
    data:state
})


export const mapDispatchToProps=(dispatch)=>({
    halfbanner(){
         dispatch(halfAsynvAction())
    },
    halflist(time){
        dispatch(halflistAction(time))
    }
   
})