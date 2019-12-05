const defaultState={
    city_list:[]
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case "CITY_LIST":
            let cityState=JSON.parse(JSON.stringify(state));
            cityState.city_list=action.data;
            return cityState;
    }
    return state
}