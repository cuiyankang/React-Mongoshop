const defaultState={
    find_list:[]
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_FIND":
            let findState=JSON.parse(JSON.stringify(state));
            findState.find_list=[...findState.find_list,...action.data];
            return findState;
    }
    return state
}