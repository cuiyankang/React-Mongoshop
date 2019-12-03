import {rankingAsynvAction,rankinglistAction} from "../../actions/ActionCreator"
export const mapStateToProps=(state)=>({
    data:state
})


export const mapDispatchToProps=(dispatch)=>({
    rankingbanner(){
         dispatch(rankingAsynvAction())
    },
    rankinglist(id){
        dispatch(rankinglistAction(id))
    }
   
})