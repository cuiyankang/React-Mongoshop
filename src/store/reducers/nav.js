const defaultState = {
    nav_list : [],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_NAV":
        let NavState = JSON.parse(JSON.stringify(state));
        NavState.nav_list = action.data;
        return NavState;
    }
    return state;
} 