import {cityListAction} from "../../actions/ActionCreator"
export const mapStateToProps=(state)=>({
    data:state
})


export const mapDispatchToProps=(dispatch)=>({
    handleCityList(){
        dispatch(cityListAction());
    }
})