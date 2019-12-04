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
import fenlei from "./reducers/fenlei.js"
import sampleSale from "./reducers/sampleSale"
import foldup from "./reducers/foldup.js"
import ranking from "./reducers/ranking.js"
import half from "./reducers/half"
import find from "./reducers/find.js"
import sortList from "./reducers/sortList"
import login from "./reducers/login"
import register from "./reducers/register"
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
    line,
    fenlei,
    sampleSale,
    foldup,
    ranking,
    half,
    find,
    sortList,
    login,
    register,

})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;