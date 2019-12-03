import {LoginDataAction} from "../../actions/ActionCreator"

export const mapStateToProps = (state)=>({
    data:state
})


export const mapDispatchToProps = (dispatch)=>({
    handleLoginData(user,pass){
        dispatch(LoginDataAction(user,pass))
    },
})