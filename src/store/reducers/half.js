//折上折
const defaultState = {
    half: [],
    halflist: []
}

export default (state = defaultState, action) => {
    // console.log(action,222)
    switch (action.type) {
        case "HALF":
            let halfState = JSON.parse(JSON.stringify(state));
            halfState.half = action.data.data;
            return halfState;
        case "HALF_LIST":
            let halflistState = JSON.parse(JSON.stringify(state));
            halflistState.halflist = action.data.data;
            return halflistState;
    }
    return state
}