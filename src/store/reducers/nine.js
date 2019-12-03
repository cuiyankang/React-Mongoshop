import {hotNine} from "../../actions/ActionTypes"
// import {handleActions} from "redux-actions"
const defaultState = {
    data:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case hotNine:
            let nineState = JSON.parse(JSON.stringify(state));
            nineState.data=action.data.data;
            return nineState;
    }
    return state;
}

// export default handleActions({},defaultState)