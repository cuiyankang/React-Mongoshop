const defaultState = {
    list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "SORT_LIST":
            let sortState = JSON.parse(JSON.stringify(state));
            sortState.list= [...sortState.list,...action.data];
            return sortState;
    }
    return state;
}