import {RegisterData} from "../../actions/ActionTypes"
const defaultState = {
    data:[]
}

export default (state=defaultState,action)=>{
    // console.log(action.type);
    switch(action.type){
        case RegisterData:
            let registerData = JSON.parse(JSON.stringify(state));
            registerData.data=action.data.data;
            return registerData;
    }
    return state;
}
