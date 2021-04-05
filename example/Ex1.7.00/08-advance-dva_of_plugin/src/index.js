///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import routerConfig from "./routerConfig";
import ReactDOM from "react-dom";
import {App} from "./App"
import dva from "dva";
import counter from "./models/counter";
import students from "./models/students";
import {createBrowserHistory} from "history";
import {takeEvery} from "redux-saga/effects";
import myDavPlugin from "./myDavPlugin";
import createLoading from "dva-loading";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * dav-loading          // 第三方 dva_plugin
 *
 *
 * global: bool     // 全局中 "是否有 正在处理副作用的 model"
 * models: obj      // 正在处理副作用的 models
 * effects: obj     // 当前触发副作用的 action
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const logger = store => next => action => {

    console.log('[oldState]: ', store.getState());
    next(action);
    console.log('[updateState]: ', store.getState());
    console.log('');
};


/** 1) 获取 dva 对象 **/
const app = dva({

    /** 5) 配置 history **/
    history: createBrowserHistory(),

    /** other config **/

    // initialState: {                           // 改变 state 中的初始值
    //     counter: 101
    // },

    // onAction: logger,                        // 执行自定义 logger

    // onStateChange(state) {                   // 当 state 改变时，执行
    //
    //     console.log(state.counter);
    // },

    // onReducer(reducer) {                     // 传入 reducer 进一步封装, 返回一个新的 reducer 并执行
    //
    //     return function (state, action) {
    //
    //         console.log('[reducer 即将被执行]');
    //         const newState = reducer(state, action);
    //         console.log('[reducer 执行结束]');
    //
    //         return newState;
    //     };
    // },

    // onEffect(oldEffect, sagaEffects, model, actionType) {
    //
    //     /** 原理 **/
    //     // yield takeEvery(actionType, function* oldEffect() {
    //     //     // ... oldEffect
    //     // });
    //
    //     return function* (action) {
    //
    //         console.log('[即将执行副作用代码]');
    //         yield oldEffect(action);
    //         console.log('[副作用代码执行完毕]');
    //     };
    // },

    // onHmr() {                                // 热更新
    //
    // },

    // extraReducers: {                         // 额外需要合并的 reducer 集合
    //
    //     anotherReducer(state = 'hello world', action) {
    //
    //         return state;
    //     }
    // },

    // extraEnhancers: [
    //     function (createStore) {
    //
    //         return function (...args) {
    //             console.log('[创建 store01]');
    //             return createStore(...args);
    //         };
    //     }
    // ]
});


/** dav_plugin **/
// app.use(myDavPlugin);
app.use(createLoading({
    // namespace: 'handleEffect',               // 通常不做更改
}));


/** 2) 返回一个React节点，应用程序启动后，会自动渲染该节点 **/
// app.router(() => <App/>);
app.router(routerConfig);


/**
 ** 4) 定义模型: 必须在启动 dva之前定义
 *
 *
 */
app.model({                  // model: { action, redux, redux-asag, effect ... } 的整合对象

    namespace: 'demo',              // 模型命名: 必备条件
    state: 0,                       // 初始数据: 必备条件

    // reducers: {},                // redux.reducer
    // effects: '',                 // redux-saga
    // subscriptions: '',           // only_execute_once_Listener
});

app.model(counter);
app.model(students);


/** 3) 启动 dva 应用程序，该函数传入一个选择器( querySelecter)，用于选中页面中的某个dom元素，react会将内容渲染到该元素内部 **/
app.start('#root', app);



/** react old **/
// const root = document.getElementById('root');
//
// ReactDOM.render(
//     (
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     )
//     , root);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
