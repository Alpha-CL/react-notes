///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {DocumentBubble} from "./components/DocumentBubble";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * React Event              // React 内置 ReactDom 的 Event
 *
 *
 * 1) 几乎所有元素的事件处理，均在 document 事件中处理
 *
 * 2) 在 document 事件处理中，React 依据 "virtual_Dom_Tree" 处理事件函数的调用
 *   ( 而不是依据最终渲染的 "really_Dom_Tree" )
 *
 *    - 部分不冒泡的事件，直接在元素上监听
 *
 *    - 部分 Document 上没有事件，直接在元素上监听
 *
 * 3) ReactDomEvent 事件参数，并非真实的 DOM事件参数，是 React 合成的一个对象，该对象类似于 真实DOM 的事件参数
 *
 *    - ReactDomEvent.stopPropagation();    仅可阻止 虚拟DOM树 中的事件冒泡
 *      ( 原理: 在循环执行事件队列事件时, 若该值为 false 则停止执行后续事件 )
 *
 *    - ReactDomEvent.nativeEvent();        真实DOM 的事件对象
 *
 *    - 为了提高执行效率，React 使用事件对象池处理事件对象
 *
 *
 ** 若给 真实DOM 注册事件，阻止了事件冒泡，则会导致 ReactDomEvent 相应的事件无法触发
 ** 若给 真实DOM 注册事件，事件会优先于 ReactDomEvent 运行
 ** 通过 ReactDomEvent 阻止的事件冒泡，无法影响真实的 DOMEvent
 ** 可以通过 ReactEvent.nativeEvent.stopImmediatePropagation(); 阻止 Document 上剩余事件的执行
 ** 事件处理程序中，不要异步使用事件对象，若一定要使用，需调用 ReactDomEvent.persist(); 将 事件对象持久化
 ** ReactDomEvent 会被重用, 多个事件可能会使用同一个 合成的事件对象, 当事件执行完, 会将该合成事件对象的属性重置为 null
 ** 若有些不冒泡的事件, 则 react 无法在 document 劫持该事件, 则会在真实的 dom 上监听( eg: onFocus )
 */


// reactDom 中获取的是 react 合成后的 event

// addEventListener 等中是真实的 event


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <DocumentBubble/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
