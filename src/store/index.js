import { createStore, combineReducers, applyMiddleware } from "redux"
import nine from "./reducers/nine.js"
import fenlei from "./reducers/fenlei.js"
import foldup from "./reducers/foldup.js"
import ranking from "./reducers/ranking.js"
import half from "./reducers/half"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
    nine,
    fenlei,
    foldup,
    ranking,
    half

})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;