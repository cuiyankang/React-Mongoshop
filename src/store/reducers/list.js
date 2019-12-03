const defaultState = {
    list : [],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "SEARCH_TOLIST":
        let ListState = JSON.parse(JSON.stringify(state));
        if(action.status == 1){
            ListState.list.length = 0;
            ListState.list = [...ListState.list,...action.data];
        }
        if(action.status == 0){
            ListState.list = [...ListState.list,...action.data];
        }
        return ListState;
    }
    return state;
} 