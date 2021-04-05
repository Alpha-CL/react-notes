///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App"
import dva from "dva";
import counter from "./models/counter";
import students from "./models/students";


//-------------------------------------------------------------------------------------------------------------------//


/** 1) 获取 dva 对象 **/
const app = dva();

/** 2) 返回一个React节点，应用程序启动后，会自动渲染该节点 **/
app.router(() => <App/>);


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
