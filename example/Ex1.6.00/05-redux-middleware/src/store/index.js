///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore, bindActionCreators, combineReducers} from 'redux';
import reducer from "./reducer";
import {createAddUserAction} from "./aciton/users-action";
import {v4 as uuid} from "uuid";

import {applyMiddleware} from "../redux";

import {actionTypes} from "./aciton/action-type";
import {numberActions} from "./aciton/number-action";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Redux Middle Ware
 *
 *
 * 类似于插件，在不影响原本功能( 不改动原本代码 )的基础上，对其功能进行增强
 * 在 Redux 中，中间件 主要用于增强 dispatch 函数
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// let store = createStore(reducer);
//
// console.log('[store]: ', store);
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()
// __proto__: Object


// console.log(store.getState());
//
//
// const unListen = store.subscribe(() => {
//
//     console.log('[state changed]');
// });


/**
 * Redux Middle Ware 原理
 *
 *
 * 1) 保留原本的 dispatch
 * 2) 重新赋值 dispatch，并在 重新赋值的 dispatch 中执行 之前保留的 dispatch
 *    在重新赋值的 dispatch 中增加 一些新功能，此时成为 '中间件'
 */

// dispatch 原理
//
// const store = createStore(reducer);
//
// /** 保留原本的 dispatch **/
// const firstUpdateDispatch = store.dispatch;                   // 保留原本 dispatch 函数
//
// /** 增加第一个 中间件 **/
// store.dispatch = function (action) {                // 更改 store.dispatch 并执行原本的 dispatch 功能
//
//     console.log('[第一个中间件]');
//
//     console.log('[旧数据]: ', store.getState());
//     console.log('[action]: ', action);
//
//     firstUpdateDispatch(action);
//
//     console.log('[新数据]: ', store.getState());
//     console.log('');
// };
//
// /** 再次保留之前的 dispatch( 包含 上次改动 过的 dispatch ) **/
// const secondUpdateDispatch = store.dispatch;
//
// /** 增加第二个 中间件 **/
// store.dispatch = function (action) {                // 更改 store.dispatch 并执行原本的 dispatch 功能
//
//     console.log('[第二个中间件]');
//
//     console.log('[旧数据]: ', store.getState());
//     console.log('[action]: ', action);
//
//     secondUpdateDispatch(action);
//
//     console.log('[新数据]: ', store.getState());
//     console.log('');
// };


// 应用中间件 - Method_01
//
//
// function logger1(store) {
//
//     return function (next) {
//
//         return function (action) {
//
//             console.log('[中间件_01]');
//
//             console.log('[旧数据]: ', store.getState());
//             console.log('[action]: ', action);
//
//             next(action);
//
//             console.log('[新数据]: ', store.getState());
//             console.log('');
//         }
//     }
// }
//
// function logger2(store) {
//
//     return function (next) {
//
//         return function (action) {
//
//             console.log('[中间件_02]');
//
//             console.log('[旧数据]: ', store.getState());
//             console.log('[action]: ', action);
//
//             next(action);
//
//             console.log('[新数据]: ', store.getState());
//             console.log('');
//         }
//     }
// }
//
// const store = createStore(reducer, applyMiddleware(logger1, logger2));


// 应用中间件 - Method_02
//
//
// const logger1 = store => next => action => {
//     console.log('[中间件_01]');
//
//     console.log('[旧数据]: ', store.getState());
//     console.log('[action]: ', action);
//
//     next(action);
//
//     console.log('[新数据]: ', store.getState());
//     console.log('');
// };
//
// const logger2 = store => next => action => {
//     console.log('[中间件_02]');
//
//     console.log('[旧数据]: ', store.getState());
//     console.log('[action]: ', action);
//
//     next(action);
//
//     console.log('[新数据]: ', store.getState());
//     console.log('');
// };
//
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

/** 测试封装的 applyMiddleware **/
const logger1 = store => next => action => {
    console.log('[中间件_01]');

    console.log('[旧数据]: ', store.getState());
    console.log('[action]: ', action);

    next(action);

    console.log('[新数据]: ', store.getState());
    console.log('');
};

const logger2 = store => next => action => {
    console.log('[中间件_02]');

    console.log('[旧数据]: ', store.getState());
    console.log('[action]: ', action);

    next(action);

    console.log('[新数据]: ', store.getState());
    console.log('');
};

const store = applyMiddleware(logger1, logger2)(createStore)(reducer);


store.dispatch(createAddUserAction({
    id: uuid(),
    name: 'abc',
    age: 10,
}));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////