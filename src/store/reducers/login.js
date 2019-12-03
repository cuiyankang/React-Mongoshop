import {LoginData} from "../../actions/ActionTypes"
// import {handleActions} from "redux-actions"
const defaultState = {
    data:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case LoginData:
            let loginData = JSON.parse(JSON.stringify(state));
            loginData.data=action.data.data;
            return loginData;
    }
    return state;
}

// export default handleActions({},defaultState)