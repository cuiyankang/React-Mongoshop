const defaultState = {
    sale_list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_SALE":
            let saleState = JSON.parse(JSON.stringify(state));
            saleState.sale_list=action.data;
            return saleState;
    }
    return state;
}