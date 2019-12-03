import { createStore, combineReducers, applyMiddleware } from "redux"
import nine from "./reducers/nine.js"
import search from "./reducers/search.js"
import list from "./reducers/list.js"
import homebanner from "./reducers/homebanner.js"
import nav from "./reducers/nav.js"
import discount from "./reducers/discount.js"
import layout from "./reducers/layout.js"
import sale from "./reducers/sale.js"
import line from "./reducers/line.js"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({
    nine,
    search,
    list,
    homebanner,
    nav,
    discount,
    layout,
    sale,
    line
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;