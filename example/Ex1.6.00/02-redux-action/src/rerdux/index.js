///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore, bindActionCreators} from 'redux';
import {actionTypes} from "./aciton/action-type";
import {numberActions} from "./aciton/number-action";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * reducer(state, action): newState;
 *
 * @state: 当前的数据状态
 * @action: 描述数据该改变的对象
 *
 * return: 返回一个新的数据状态
 */


// example: 假设 store 中存储了一个数字
//          action: {
//              type: '' ,          // 'increase' || 'decrease'
//              payload: {
//                  ...
//              }
//          }
function reducer(state, action) {

    // 根据 action.type( 描述数据该如何改变 ) 改变数据

    // /** 若数据描述为 'increase' **/
    if (action.type === actionTypes.INCREASE) {

        return state + 1;

    // /** 若数据描述为 'decrease' **/
    } else if (action.type === actionTypes.DECREASE) {

        return state - 1;

    }  else if (action.type === actionTypes.SET) {

        return action.payload;
    }

    // /** 若未传入指定数据描述，则返回 原数据 **/
    return state;
}


// /** 创建 数据仓库 **/
const store = createStore(reducer, 10);

// 获取数据的当前状态
console.log('[getState]: ', store.getState());


/**
 * action
 *
 *
 * 1) action must be 'plain_object'         // action.__proto__ 必须指向 object.prototype
 *
 * 2) action 必须包含 type 属性               // action.type( 未规定是否未 字符串 类型 ) 用于描述如何操作数据
 *
 * 3) 大型项目中，由于操作类型繁多，为了避免硬编码( hard_code )
 *    将 action 的类型存放 在一个或一些 单独的文件中( 样板代码 )
 *
 * 4) 为了方便传递 action，通常使用 function actionFn(): action;
 *      - actionFn(); 应为纯函数
 *      1) 不能以任何形式改动参数
 *      2) 不可以有异步
 *      3) 不可以对外部环境中的数据造成影响
 *
 * 5) bindActionCreators(actionsObjOfChildFn, store.dispatch): boundActions;
 *      - @actionsObjOfChildFn: 一个包含多个 acntionFn() 的对象
 *      - @store.dispatch: 用于绑定的 store.dispatch
 *      -
 *      - boundActions: 将传入的 actionObjOfChildFn 中的 ActionFn(); 绑定指定的 store.dispatch
 *      -
 *      - 绑定后，即可通过 boundActions.ActionFn();  调用传入 actionsObjOfChildFn 中的 ActionFn
 */

// class Action {
//
//     constructor(type) {
//
//         this.type = type;
//     }
// }
//
// const action = new Action('increase');


// /** 创建 数据描述 **/
// const action = {
//     type: actionTypes.INCREASE
// };


const boundActions = bindActionCreators(numberActions, store.dispatch);

boundActions.getIncreaseAction();
boundActions.getSetAction(3);


// const action = numberActions.getIncreaseAction();
// const actionSet = numberActions.getSetAction(3);
//
// /** 将 数据描述 分发至指定 数据仓库 **/
// store.dispatch(action);
// store.dispatch(actionSet);


// 获取数据的当前状态
console.log('[getState]: ', store.getState());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
