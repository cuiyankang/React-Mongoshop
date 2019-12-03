const defaultState = {
    discount_list : [],
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_DISCOUNTAPI":
        let discountState = JSON.parse(JSON.stringify(state));
        discountState.discount_list = action.data;
        return discountState;
    }
    return state;
} 