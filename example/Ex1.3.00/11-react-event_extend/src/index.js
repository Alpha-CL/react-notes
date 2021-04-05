///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App"


//-------------------------------------------------------------------------------------------------------------------//





//-------------------------------------------------------------------------------------------------------------------//


const root = document.getElementById('root');

ReactDOM.render(
    (
        <React.Fragment>
            <App/>
        </React.Fragment>
    )
    , root);

document.querySelector('#root').onclick = function (e) {

    console.log('[Really_HtmlDom-Clicked]');

    /** 若阻止事件冒泡，则 无法监听冒泡到 Document 的事件，从而导致 无法触发 ReactDomEvent **/
    // e.stopPropagation();
};

document.querySelector('#root').onFocus = function (e) {

    console.log('[stop_HtmlDom_Focused]');

    /** 无法阻止 input.focus 事件，input.focus 是在 input 元素本上上监听 **/
    e.stopPropagation();
};



document.addEventListener("click", function (e) {

    /** 阻止剩余事件处理程序运行( 多用于阻止第三方库给 Document 绑定的事件 ) **/
    e.stopImmediatePropagation();
});

document.addEventListener("click", function (e) {

    console.log('[该事件，不会被执行，因为已经运行了 e.stopImmediatePropagation();]');
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
