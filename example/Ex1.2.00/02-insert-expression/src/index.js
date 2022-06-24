///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";


import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * JSX 中嵌入表达式
 *
 *
 * 1) JSX注释: "command + /"
 *
 * 2) 插入不同的表达式
 *
 *      - varExpression: 双打括号中的值 即为变量
 *
 *      - hideValue: null, false, undefined 仅会插入，但不会在 html 中显示
 *
 *      - object:
 *
 *          - 普通对象: "普通对象" 不可以作为 rootDom 的子元素
 *
 *          - react对象: "react对象" 可以作为 rootDom 的子元素
 *
 *      - array: 数组的每一项会被遍历到 html 中，但 null, false, undefined 依然不会被显出来
 *
 * 3) 表达式作为元素属性
 *
 * 4) 属性使用小驼峰命名
 *
 * 5) 防止注入攻击
 *
 *      - 自动编码: 为了防止代码来自用户的代码攻击，react 非常保守的将数据仅作为字符串处理
 *
 *      - 注入攻击-dangerouslySetInnerHTML: 有切仅当数据需要当作 html 被解析时使用该处理方式
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 元素的不可变性
 *
 *
 * 1) JSX 元素是一个对象，该对象中所有属性不可更改( 原理: 利用 Object.freeze(targetDom); 冻结了 dom 对象 )
 *
 * 2) 若要更改元素属性，需重新创建 JSX 元素( 创建新的 ReactJSDOM 后，可利用 setInterval(); 重新渲染页面 )
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


/** 插入变量表达式 **/

const num1 = 1234,
    num2 = 4321;

const varExpression = (
    // "js注释" 仅在 中显示，html 中不会显示
    <div>
        {num1} * {num2} = {num1 * num2}
        <hr/>
    </div>
);

// const varableExpression = React.createElement('div', {}, `${num1} * ${num2} = ${num1 * num2}`);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** null, false, undefined 仅会添加，但不会在 html 页面中显示 **/

const hideValue = (
    <div>
        <p>null, false, undefined 不会显出</p>
        {null}
        {false}
        {undefined}
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 普通对象无法作为 rootDom 的子元素 **/


// const obj1 = {
//     a: 1,
//     b: 2
// };

// const ordinaryArr = (
//     <div>{obj1}</div>
// );


/** react 对象可以作为 rootDom 的子元素 **/

const reactObj = (
    <div>
        这是一个 reactObj
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 数组的每一项会被遍历到 html 中，但 null, false, undefined 依然不会被显出来 **/

const arr1 = [1, 2, 3, 4, 5, 6, null, false, undefined];


const arrExpression = (
    <div>
        {arr1} ( null, false, undefined 作为数组子项依然不会被显示出来 )
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 元素嵌入表达式 **/

const numbers = new Array(6);

numbers.fill(0);

const lis = numbers.map((val, idx, arr) => {
    return (
        <li key={idx}>{idx}</li>
    );
});

const ulDom = React.createElement(
    'ul',
    {},
    lis,
);

const ulExpress = React.createElement(
    'div',
    {},
    '元素嵌入表达式',
    ulDom,
    <hr/>
);


//-------------------------------------------------------------------------------------------------------------------//


/** 属性使用小驼峰命名 **/


const url = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604938274&di=d530eae31acc7a63dc9c8ce6aceaa989&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg',
    cls = 'border',
    sty = {
        width: '200px',
        height: '200px',
    },
    camelCasePropName = (
        <div>
            <h2>性使用小驼峰命名</h2>
            <img
                src={url}                       // 属性值不需要使用 双引号
                className={cls}                 // 和 html 的 class 冲突，所以使用 className
                style={sty}                     // 属性值可以是 对象
                alt="二哈"
            />
            <hr/>
        </div>
    );


//-------------------------------------------------------------------------------------------------------------------//


/** 防止注入攻击-自动编码( 为了防止代码来自用户的代码攻击，react 非常保守的将数据仅作为字符串处理 ) **/


const content = "<h1>just do it<br/><span>hello world</span></h1>";

const autoCoding = (
    <div>
        <h2>防止注入攻击-自动编码( 为了防止代码来自用户的代码攻击，react 非常保守的将数据仅作为字符串处理 ) </h2>
        {content}
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 防止注入攻击-dangerouslySetInnerHTML( 有切仅当数据需要当作 html 被解析时，使用该处理方式 ) **/


const setInnerHTML = (
    <React.Fragment>
        <h2>防止注入攻击-dangerouslySetInnerHTML( 有切仅当数据需要当作 html 被解析时，使用该处理方式 )</h2>
        <div
            dangerouslySetInnerHTML={{
                __html: content
            }}
        >
        </div>
        <hr/>
    </React.Fragment>
);


//-------------------------------------------------------------------------------------------------------------------//


/** 元素的不可变性 **/

let num = 0;

const UnchangeableReactDom = (
    <React.Fragment>
        <div>
            {num}
        </div>
        <hr/>
    </React.Fragment>

);

// UnchangeableReactDom.props.children = 2;             // 无法改变任意 JSX 已创建 ReactDom 的属性及值


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 元素的不可变性-仅可通过重新创建 ReactDom，并重新渲染页面改变 ReactDom **/


// 因无法创建多个根元素绑定渲染，故无法看到展示效果
//
// let num = 0;
//
// setInterval(() => {
//
//     num++;
//
//     const UnchangeableReactDom2 = (
//         <div>
//             {num}
//         </div>
//     );
//
//     ReactDOM.render(UnchangeableReactDom2, document.getElementById('root'));
//
//
// }, 500);


//-------------------------------------------------------------------------------------------------------------------//


const domRoot = React.createElement(
    'React.Fragment',
    {},
    varExpression,
    hideValue,
    // ordinaryArr,             // 普通对象无法作为 rootDom 的子元素
    reactObj,
    arrExpression,
    ulExpress,
    camelCasePropName,
    autoCoding,
    setInnerHTML,
    UnchangeableReactDom,
    // UnchangeableReactDom2
);


//-------------------------------------------------------------------------------------------------------------------//


ReactDOM.render(domRoot, document.getElementById('root'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////