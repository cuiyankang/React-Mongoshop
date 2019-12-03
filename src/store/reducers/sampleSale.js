import { SampleSale, GetOneData,GetTwoData,ChangeID } from "../../actions/ActionTypes"
const defaultState = {
    data: [],
    data1: [],
    data2:[],
    changedata:[]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SampleSale:
            let nineState = JSON.parse(JSON.stringify(state));
            nineState.data = action.data.data;
            return nineState;
        case GetOneData:
            let getOne = JSON.parse(JSON.stringify(state));
            getOne.data1 = action.data.data;
            return getOne;
        case GetTwoData:
            let getTwo = JSON.parse(JSON.stringify(state));
            getTwo.data2 = action.data.data;
            return getTwo
        case ChangeID:
            let changeid = JSON.parse(JSON.stringify(state));
            changeid.changedata = action.data.data;
            return changeid
    }
    return state;
}