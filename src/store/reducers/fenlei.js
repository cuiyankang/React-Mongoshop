const defaultState={
    data:[]
}


export default (state=defaultState,action)=>{
    // console.log(action,333)
    switch(action.type){
        case "FENYE_LIST":
            let fenleiState=JSON.parse(JSON.stringify(state));
            fenleiState.data=action.data.data;
            return fenleiState;
    }
    return state
}