///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore,applyMiddleware, bindActionCreators, combineReducers} from 'redux';
import reducer from "./reducer";
import {createAddUserAction} from "./aciton/users-action";
import {v4 as uuid} from "uuid";
import {createLogger} from "redux-logger/src";

import {actionTypes} from "./aciton/action-type";
import {numberActions} from "./aciton/number-action";


//-------------------------------------------------------------------------------------------------------------------//

/**
 * redux-logger
 *
 *
 * redux 中间件: 日志记录
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const logger = createLogger({
    collapsed: false
});

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(createAddUserAction({
    id: uuid(),
    name: 'abc',
    age: 10,
}));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////