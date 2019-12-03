const defaultState = {
    homebanner : [],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_BANNER":
        let homebannerState = JSON.parse(JSON.stringify(state));
        homebannerState.homebanner = action.data;
        return homebannerState;
    }
    return state;
} 