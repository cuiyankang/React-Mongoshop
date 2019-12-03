import { createStore, combineReducers, applyMiddleware } from "redux"
import nine from "./reducers/nine.js"
import fenlei from "./reducers/fenlei.js"
import sampleSale from "./reducers/sampleSale"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
    nine,
    fenlei,
    sampleSale,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;