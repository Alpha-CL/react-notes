///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import loginUserReducer from "./login-user";
import usersReducer from "./users";

/** redux 提供了方法，可以帮助我们更加方便的合并 reducer **/
// import {combineReducers} from "redux";
import {combineReducers} from "../../redux"


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Reducer
 *
 *
 * 1) "一个" 数据仓库，有切仅有 "一个" reducer
 *    ( 通常情况，一个工程只有一个仓库，因此，一个系统，只有一个 reducer )
 *
 * 2) 为了方便管理，通常将 reducer 放在单独的文件中
 *
 * 3) reducer 何时被调用
 *      - 1> 当 store.dispatch，分发了一个 action，调用 reducer
 *      - 2> 当 创建 store 时，调用 reducer
 *          - 可以利用该创建时机，用 reducer 初始化状态
 *          - 创建仓库时，不传递任何默认状态
 *          - 将 reducer 参数 state 设置 默认值
 *
 * 4) reducer 内部通常使用 switch 判断 type 值
 *
 * 5) reducer 必须是一个没有副作用的纯函数
 *      * 为什么需要 "纯函数"
 *          - 纯函数有利用 测试 和 调试
 *          - 有利于还原数据
 *          - 有利于将来 和 react 结合使用
 *      * 具体要求
 *          - 不能改变参数( 若需要改变状态，则必须获取一个 "新的状态" )
 *          - 不能有 异步操作
 *          - 不能对外部环境造成影响
 *
 * 6) 因中大型项目中，操作比较复杂，数据结构比较复杂，则需要对 reducer 进行细分
 *      - import {combineReducers} from "redux";            // combineReducers({ tarName: tarReducer }): reducerFn;;
 *
 *        ( redux 中提供: 合并 reducer，返回一个新的 reducer
 *          该 reducer 管理一个对象，该对象中每个属性交由对应的 reducer 处理 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// export default (state = {}, action) => {
//
//     const newState = {
//
//         loginuser: loginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action)
//     };
//
//     return newState;
// };


//-------------------------------------------------------------------------------------------------------------------//


/** redux 提供了方法，可以帮助我们更加方便的合并 reducer **/
export default combineReducers({
    loginUser: loginUserReducer,
    users: usersReducer,
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// import {createStore, bindActionCreators} from 'redux';
// import {actionTypes} from "../aciton/action-type";
// import {numberActions} from "../aciton/number-action";
//
//
// //-------------------------------------------------------------------------------------------------------------------//
//
//
// function reducer(state = 10, action) {
//
//     console.log('[invoking reducer]: ', state, action);
//
//     switch (action.type) {
//
//         case actionTypes.INCREASE:
//             return state + 1;
//         case actionTypes.DECREASE:
//             return state - 1;
//         case  actionTypes.SET:
//             return action.payload;
//         default:
//             return state;
//     }
//
//     // // 若数据描述为 'increase'
//     // if (action.type === actionTypes.INCREASE) {
//     //
//     //     return state + 1;
//     //
//     // // 若数据描述为 'decrease'
//     // } else if (action.type === actionTypes.DECREASE) {
//     //
//     //     return state - 1;
//     //
//     // // 若数据描述为 'set'
//     // }  else if (action.type === actionTypes.SET) {
//     //
//     //     return action.payload;
//     // }
//     //
//     // // 若未传入指定数据描述，则返回 原数据
//     // return state;
// }
//
//
// //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
//
//
// export {
//
//     reducer
// };
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////