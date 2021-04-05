///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore,applyMiddleware, bindActionCreators, combineReducers} from 'redux';
import reducer from "./reducer";
import {createAddUserAction} from "./aciton/users-action";
import {v4 as uuid} from "uuid";
import logger from "redux-logger/src";
import thunk from "redux-thunk";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * redux-logger
 *
 *
 * redux 中间件: 日志记录
 */


/**
 * redux-thunk, redux-promise, redux-saga
 *
 *
 * redux 中间件: 处理 副作用
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default createStore(reducer,
    applyMiddleware(
        thunk,
        logger
    ));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////