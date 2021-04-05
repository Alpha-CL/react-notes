///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore, applyMiddleware} from "redux";

import reducer from "./actions";
import createSagaMiddleware from 'redux-saga';

import {createLogger} from "redux-logger";
import rootSaga from "../saga";

/** redux-devtools-extension **/
import {composeWithDevTools} from "redux-devtools-extension";


/** step_02 **/
import {routerMiddleware} from "connected-react-router";
// 因 connectRouter 需要使用同一个 history，则引入共同的外部创建的 history
import history from "./history";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * routerMiddleware(history);
 *
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const logger = createLogger({
        collapsed: true,
    }),
    sagaMiddleware = createSagaMiddleware(),

    /** Step_02 **/
    routerMid = routerMiddleware(history);

/**
 * redux 调试
 *
 *
 * 1) 需安装 chrome_plugin: redux-devtools
 *
 * 2) 需在指定调试项目中安装依赖: redux-devtools-extension
 *
 *      3) 需在指定项目中 引入 composeWithDevTools，并将 applyMiddleware 作为参数传入
 *
 *          - import {composeWithDevTools} from "redux-devtools-extension";
 *
 *          - createStore(reducer, composeWithDevTools(applyMiddleware()))
 */


const store = createStore(reducer, composeWithDevTools(applyMiddleware(

    /** Step_02 **/
    routerMid,                  // 建议放在第一个位置

    sagaMiddleware,
    logger
)));


/** 启动 saga 任务 **/
sagaMiddleware.run(rootSaga);


export default store;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
