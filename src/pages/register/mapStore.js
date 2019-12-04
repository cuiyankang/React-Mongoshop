import {RegisterDataAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleRegisterData(user,pass){
        dispatch(RegisterDataAction(user,pass))
    },
})