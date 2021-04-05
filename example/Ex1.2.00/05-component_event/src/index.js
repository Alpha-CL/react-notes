///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {Tick} from "./components/Tick"
import {TickControl} from  "./components/TickControl"


//-------------------------------------------------------------------------------------------------------------------//


/** React_Event: 本质上为一个属性 **/

// 在 React 中创建的 html 标签，本质上也是 React 的内置组件( 所以无法执行 html 的事件 )
// 但 React 中的事件与原生 html 的事件是依依对应的( React 中事件的名称必须使用 小驼峰命名 )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * component_event
 *
 *
 * * 在组件中通过 props 传递事件时
 * *
 * * 1) 在行内使用 箭头函数传递                             // 箭头函数自动绑定 this
 * *
 * * 2）在 类函数 中创建函数，再在行内调用传递                // this 指向 undefined
 *
 *      - 处理方案
 *
 *      - 1) 使用  bind(); 绑定 this 指向
 *
 *      - 2) 使用 箭头函数，自动绑定 外层 this               // 推荐使用
 */


//-------------------------------------------------------------------------------------------------------------------//


function handleClick() {

    console.log('[handle-clicked]');
}

function mouseEnter() {

    console.log('[mouse-entered]');
}

const btn = (
    <button
        onClick={handleClick}
        onMouseEnter={mouseEnter}
    >click</button>
);


//-------------------------------------------------------------------------------------------------------------------//


const root = document.getElementById('root');

ReactDOM.render(
    (
        <React.Fragment>


            {btn}
            <hr/>

            <Tick number={10}/>
            <hr/>

            <TickControl/>
            <hr/>


        </React.Fragment>
    )
    , root);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
