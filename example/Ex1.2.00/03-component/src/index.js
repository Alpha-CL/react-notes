///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";

import {FuncCompTransferData, MyFuncComp} from "./myFuncComp"; // 组件首字母( 必须大写)，react 以首字母大写区分是否是组件
import {ClassCompTransferData, MyClassComp} from "./myClassComp"; // 组件首字母( 必须大写)，react 以首字母大写区分是否是组件


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 函数组件
 *
 *
 * 使用组件创建的 JSX 仍然是 React 元素，仅 type 的值不同
 *
 * 1) type: html_label              // 对应所创建的唯一父级别元素的标签名称
 *
 * 2) type: function_component      // 对应组件名称( 导出未命名组件时, <unknown> )
 */

const fnCmp = <MyFuncComp/>;

console.log('[function_component]', fnCmp);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 函数组件的属性
 *
 *
 * 属性会作为一个对象的属性，传递作为 "函数的参数"
 */


/** transfer_data **/

const fnCmpTfDd1 = <FuncCompTransferData num={17}/>;                    // 大括号 传递 数字类型数据
const fnCmpTfDd2 = <FuncCompTransferData num="18"/>;                    // 双引号 传递 字符串类型数据

const fnCmpTfDd3 =
    <FuncCompTransferData
        age={18}                            // number
        name="alpha"                        // string
        isMarry                             // boolean
        firend={['beta', 'omega']}          // array
        private={{                          // object
            play: 'game',
            eat: 'apple'
        }}
        other={<div>any_thing</div>}        // other
    />;


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 类组件
 *
 *
 * 1) 必须继承 React.Component
 *
 * 2) 必须提供 return render(); 用于渲染组件
 */

const clsCmp = <MyClassComp/>;

console.log('[class_component]', clsCmp);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 类组件的属性
 *
 *
 * 属性会作为一个对象的属性，传递作为 "构造函数的参数"
 */


/** transfer_data **/

const clsCmpTfDd1 = <ClassCompTransferData num={17}/>;                  // 大括号 传递 数字类型数据
const clsCmpTfDd2 = <ClassCompTransferData num="18"/>;                  // 双引号 传递 字符串类型数据
const clsCmpTfDd3 =
    <ClassCompTransferData
        age={18}                            // number
        name="alpha"                        // string
        isMarry                             // boolean
        firend={['beta', 'omega']}          // array
        private={{                          // object
            play: 'game',
            eat: 'apple'
        }}
        other={<div>any_thing</div>}        // other
    />;


//-------------------------------------------------------------------------------------------------------------------//


const domRoot = React.createElement(
    'div',
    {},

    (<h3>create function_component</h3>),
    // methods-1                // type: html_label
    (<React.Fragment>{MyFuncComp()}</React.Fragment>),            // 函数形式: 无树形 html 结构，在 react 调试工具中显示为常规 html 标签

    // methods-2                // type: function_component
    (<MyFuncComp/>),                                              // 标签形式: 在 react 调试工具中显示为组件
    (fnCmp),                                                      // 标签赋值形式: 在 react 调试工具中显示为组件
    (<hr/>),

    (<h3>create class_component</h3>),
    // (<React.Fragment>{MyClassComp()}</React.Fragment>),        // class 组件不可用 函数形式，因缺少 new ( 调用类实例子，必须使用 new 关键字 )
    (<MyClassComp/>),
    (clsCmp),
    (<hr/>),

    (<h3>function component transfer_data</h3>),
    (fnCmpTfDd1),
    (fnCmpTfDd2),
    (fnCmpTfDd3),
    (<hr/>),

    (<h3>class component transfer_data</h3>),
    (clsCmpTfDd1),
    (clsCmpTfDd2),
    (clsCmpTfDd3),
    (<hr/>),
);


//-------------------------------------------------------------------------------------------------------------------//


ReactDOM.render(domRoot, document.getElementById('root'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
