///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useReducer} from "react";
import PropTypes from "prop-types";
// import {useReducer} from "../myHooks/useReducer";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Reducer Hook             // 将处理数据处理 提取出来( 便于 阅读，维护等 )
 *
 *
 * reducer();
 *
 * dispatch();
 *
 *
 ** 1) 规定数据流为 "单向流动"
 *
 ** 2) 数据存储存储在 "数据仓库( 目前可以理解为 state )" 中
 *
 ** 3) action 是改变数据的唯一判断原因( 本质为一个对象，action 有两个属性 )
 *
 *      - type: 判断描述                    // 字符串
 *
 *      - payload: 动作触发后的附加信息       // 任意类型
 *
 *
 ** 4) 必须通过 reducer(state, action): changedData; 才可以间接改变数据         // 必须是纯函数，禁止有任何副作用
 *
 *      - state: 表示当前数据仓库中的数据
 *
 *      - action: 描述如何改变数据，以及改变数据的一些附加信息
 *
 *      - changedData: 该函数返回 指定数据 改变后的结果
 *        ( Flux 要求，对象是不可变的，若返回对象，必须创建新对象 )
 *
 *
 ** 5) 若要触发 reducer(); 必须使用 dispatch(action); 间接调用
 *     ( 该函数会间接调用 reducer，以达到改变数据的目的 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function reducer(state, action) {

    switch (action.type) {

        case 'increase':
            return state + 1;
        case 'decrease':
            if (state === 0) {
                return state;
            }
            return state - 1;
        default:
            return state;
    }
}

// function useReducer() {
//
//     const [n, setN] = useState(0);
//
//     function dispatch(action) {
//
//         const newN = reducer(n, action);
//
//         console.log(`[日志记录: n 的值 ${n} => ${newN}]`);
//
//         setN(newN);
//     }
//
//     return [n, dispatch];
// }

function ReducerHook(props) {

    const [n, dispatch] = useReducer(reducer, 0, (nextparam)=>{

        /** nextParam: 第二个参数，返回结果会覆盖初始值( 第二个参数 ) **/
        return nextparam + 1;
    });

    // const [n, dispatch] = useReducer();

    const handleIncrease = () => {
            dispatch({type: 'increase'});
        },
        handleDecrease = () => {
            dispatch({type: 'decrease'});
        };

    // const [n, setN] = useState(0),
    //     handleIncrease = () => {
    //         dispatch({type: 'increase'});
    //     },
    //     handleDecrease = () => {
    //         dispatch({type: 'decrease'});
    //     };
    //
    // function dispatch(action) {
    //
    //     const newN = reducer(n, action);
    //
    //     console.log(`[日志记录: n 的值 ${n} => ${newN}]`);
    //
    //     setN(newN);
    // }

    return (

        <React.Fragment>
            <div>
                <button
                    onClick={handleDecrease}
                >-</button>
                <span> {n} </span>
                <button
                    onClick={handleIncrease}
                >+</button>
            </div>

        </React.Fragment>
    );
}


ReducerHook.defaultProps = {

};

ReducerHook.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ReducerHook
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////