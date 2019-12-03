const defaultState = {
    layout_list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_LAYOUT":
            let layoutState = JSON.parse(JSON.stringify(state));
            layoutState.layout_list = action.data;
            return layoutState;
    }
    
    return state;
}