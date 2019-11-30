import { createStore, combineReducers, applyMiddleware } from "redux"
import nine from "./reducers/nine.js"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
    nine
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;