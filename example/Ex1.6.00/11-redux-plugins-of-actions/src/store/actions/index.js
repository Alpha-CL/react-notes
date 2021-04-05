///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {combineReducers} from "redux";
import count, {increase, decrease, asyncDecrease, asyncIncrease, add} from "./count";
import searchCondition from "./searchCondition";
import searchResult from "./searchResult";


//-------------------------------------------------------------------------------------------------------------------//


export {
    increase,
    decrease,
    asyncIncrease,
    asyncDecrease,
    add
}

export default combineReducers({
    count,
    searchCondition,
    searchResult
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
