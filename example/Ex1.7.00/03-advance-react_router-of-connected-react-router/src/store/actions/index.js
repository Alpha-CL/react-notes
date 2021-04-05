///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {combineReducers} from "redux";
import count, {increase, decrease, asyncDecrease, asyncIncrease, add} from "./count";
import searchCondition from "./searchCondition";
import searchResult from "./searchResult";


/** step_01 **/
import {connectRouter} from 'connected-react-router';


/** step_01: 创建 react.history 以供 connectRouter 使用 **/
// 因 routerMiddleware 需要使用同一个 history，则引入共同的外部创建的 history
import {createBrowserHistory} from "history";

import history from "../history";


//-------------------------------------------------------------------------------------------------------------------//


export {
    increase,
    decrease,
    asyncIncrease,
    asyncDecrease,
    add,
};


// 因 routerMiddleware 需要使用同一个 history，则引入共同的外部创建的 history
// const history = createBrowserHistory();


export default combineReducers({
    count,
    searchCondition,
    searchResult,

    /** step_01 **/
    router: connectRouter(history),
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
