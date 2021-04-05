///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {SetState_Async} from "./components/SetState_Async";
import {SetState_Synch} from "./components/SetState_Synch";
import {SetState_CallBack} from "./components/SetState_CallBack";
import {SetState_Multi_01} from "./components/SetState_Multi_01";
import {SetState_Multi_02} from "./components/SetState_Multi_02";
import {SetState_Multi_03} from "./components/SetState_Multi_03";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 最佳实践
 *
 *
 * 1) 将所有 setState(); 当作异步执行
 *
 * 2) 永远不要信任 setState(); 调用后的状态
 *
 * 3) 若使用 setState(); 改变后的状态，则需使用回调函数 setState(); 的第二个参数
 *
 * 4) 若新的状态要根据之前的状态进行运算，则使用 setState(fn) 函数的方式改变
 *
 * * React 会对 "异步setState();" 优化，将多次 setState(); 进行合并
 * * ( 将 多次状态 改变完成后，再统一对 state 进行改变，然后触发 render )
 *
 */



//-------------------------------------------------------------------------------------------------------------------//


const root = document.getElementById('root');


ReactDOM.render(
    (
        <React.Fragment>
            <h3>SetState_Async</h3>
            <SetState_Async/>
            <hr/>
            <h3>SetState_Synch</h3>
            <SetState_Synch/>
            <hr/>
            <h3>SetState_CallBack</h3>
            <SetState_CallBack/>
            <hr/>
            <h3>SetState_Multi_01</h3>
            <SetState_Multi_01/>
            <hr/>
            <h3>SetState_Multi_02</h3>
            <SetState_Multi_02/>
            <hr/>
            <h3>SetState_Multi_03</h3>
            <SetState_Multi_03/>
            <hr/>
        </React.Fragment>
    )
    , root);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
