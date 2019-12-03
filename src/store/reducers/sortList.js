import {HandleSortList} from "../../actions/ActionTypes"
const defaultState = {
    data:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case HandleSortList:
            let sortList = JSON.parse(JSON.stringify(state));
            sortList.data=action.data.data;
            return sortList;
    }
    return state;
}
