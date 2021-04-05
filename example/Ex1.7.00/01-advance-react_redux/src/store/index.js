///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore, applyMiddleware} from "redux";

import reducer from "./actions";
import createSagaMiddleware from 'redux-saga';

import {createLogger} from "redux-logger";
import rootSaga from "../saga";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * cmd: take(actionType);           // 仅监听一次 action 触发一次，触发后即失效
 *
 *
 * 监听指定 action 造成阻塞，若监听的 action 触发，则会进行下一步处理
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const logger = createLogger({
        collapsed: true,
    }),
    sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, applyMiddleware(
    sagaMiddleware,
    logger
));


/** 启动 saga 任务 **/
sagaMiddleware.run(rootSaga);


export default store;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
