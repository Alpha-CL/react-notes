///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import promise from "redux-promise";

import promise from "../redux-promise";


//-------------------------------------------------------------------------------------------------------------------//


const store = createStore(reducer, applyMiddleware(

    promise,
    thunk,
    logger
));

export default store;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
