const defaultState = {
    search_data:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "SEARCH_ACT":
            let searchState = JSON.parse(JSON.stringify(state));
            searchState.data=action.data;
            return searchState;
    }
    return state;
}