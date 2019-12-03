const defaultState = {
    line_list : [],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_LINE":
            let lineState = JSON.parse(JSON.stringify(state));
            lineState.line_list=action.data;
            return lineState;
    }
    return state;
} 