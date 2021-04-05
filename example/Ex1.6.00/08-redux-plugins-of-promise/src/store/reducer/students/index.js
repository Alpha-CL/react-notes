///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import searchCondition from "./searchCondition";
import searchResult from "./searchResult";
import {combineReducers} from "redux";
import {fetchStudents} from "./fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


export default combineReducers({
    searchCondition,
    searchResult,
    fetchStudents,
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
