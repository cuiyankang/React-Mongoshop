//折上折
const defaultState = {
    foldup: [],
    folduplist: []
}

export default (state = defaultState, action) => {
    // console.log(action,222)
    switch (action.type) {
        case "FOLD_UP":
            let foldupState = JSON.parse(JSON.stringify(state));
            foldupState.foldup = action.data.data;
            return foldupState;
        case "FOLD_UP_LIST":
            let folduplistState = JSON.parse(JSON.stringify(state));
            folduplistState.folduplist = action.data.data;
            return folduplistState;
    }
    return state
}