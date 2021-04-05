import React from "react";
import ReactDOM from "react-dom";


// /**
//  * 无论是 .js 还是 .jsx 都可以
//  *
//  *
//  *
//  */
//
// let h1 = React.createElement('h1',{},'这是一个h1元素');
//
// ReactDOM.render(h1, document.getElementById('root'));


/**
 * 每个 JSX 表达式，有且仅有一个根节点
 *
 *
 *
 */

const ele = (
    <React.Fragment>
        <h1>element-1</h1>
        <h1>element-2</h1>
    </React.Fragment>
);


ReactDOM.render(ele, document.getElementById('root'));
