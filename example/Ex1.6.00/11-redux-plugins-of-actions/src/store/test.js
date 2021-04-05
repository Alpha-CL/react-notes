///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import store from "./index";
import {createChangeAction} from "./action/students/searchCondition";
import {createFetchStudentsAction, createSetIsLoadingAction} from "./action/students/searchResult";

import {fetchStudents} from "./reducer/students/fetchStudents";

import {
    asyncDecreaseAction,
    asyncIncreaseAction,
    createAutoIncreaseAction,
    createDecreaseAction,
    createIncreaseAction, createStopAutoIncreaseAction
} from "./action/counter";

import {getStudents} from "../services/fetchStudents";

import {increase, decrease, asyncDecrease, asyncIncrease, add} from "./actions";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 迭代器 和 迭代协议
 *
 *
 * 1) redux-thunk: 需改动 action，可接收 acion 为一个函数
 *
 * 2) redux-promise: 需改动 action, 可接收 action 为一个 promise 对象
 *                   或 action.payload 为一个 promise 对象
 *
 ** 3) redux-saga: 可保持 "action" 或 "action 创建函数的" 或 "reducer" 的纯净
 **                并且使用模块化的方式解决 副作用 问题
 *                 ( redux-saga 建立在 ES6 生成器的基础上 )
 *
 *  4) redux-actions: 简化 action & reducer 的代码书写
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


window.fetchStudents = function () {
    store.dispatch(fetchStudents());
};

window.increase = function () {
    store.dispatch(increase());
};

window.decrease = function () {
    store.dispatch(decrease());
};

window.asyncIncrease = function () {
    store.dispatch(asyncIncrease());
};

window.asyncDecrease = function () {
    store.dispatch(asyncDecrease());
};

window.add = function (n) {
    store.dispatch(add(n));
};

window.fetchStudents = function (condition) {

    store.dispatch(fetchStudents(condition));
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
