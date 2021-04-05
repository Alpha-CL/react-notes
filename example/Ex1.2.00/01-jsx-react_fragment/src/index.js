import React from "react";
import ReactDOM from "react-dom";

/**
 * 每个 JSX 表达式，有且仅有一个根节点
 *
 *
 * JSX 会转换为 React.createElement(); 虚拟DOM
 */


// 此时会报错
//
// const ele = (
//     <h1>element-1</h1>
//     <h1>element-2</h1>
// );


// 可以添加空标签，作为唯一的根节点
//
// const ele = (
//     <>
//         <h1>element-1</h1>
//         <h1>element-2</h1>
//     </>
// );


// React.Fragment 语法糖
//
const ele = (
    <React.Fragment>
        <h1>element-1</h1>
        <h1>element-2</h1>
    </React.Fragment>
);


ReactDOM.render(ele, document.getElementById('root'));