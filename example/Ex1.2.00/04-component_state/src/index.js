///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {Tick} from "./components/Tick";
import {GrandFather} from "./components/ComponentStateTransfer"


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 组件中的数据
 *
 *
 * props: 该数据由调用该组件时从外部传递( 数据使用权归调用者，所属权不属于该组件自身 )，因此组件自身无法改变 props
 *
 * state: 该数据由组件自身创建，所有权属于该组件自身，因此该组件所有者可以改变 state
 *        同文件中，若 Father 向 Son 传递 state 并使用 this.setState() 改变数据, 则 Father.state 会影响 Son.state
 *        但 Son 无权改变 Father.state
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// let num = 10;
//
// function start() {
//
//     const timer = setInterval(() => {
//
//         num--;
//
//         if (num < 0) {
//
//             clearInterval(timer);
//
//             return;
//         }
//
//         ReactDOM.render(<Tick number={num} />, document.getElementById('root'));
//
//     }, 1000);
// }
//
// start();


//-------------------------------------------------------------------------------------------------------------------//


const domRoot = React.createElement(
    'React.Fragment',                       // type
    {},                                     // style
    // children
    <Tick number={8}/>,
    <GrandFather num={100}/>
);


//-------------------------------------------------------------------------------------------------------------------//


ReactDOM.render(domRoot, document.getElementById('root'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
