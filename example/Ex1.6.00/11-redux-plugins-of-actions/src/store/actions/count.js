///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createAction, createActions,handleAction, handleActions, combineActions} from "redux-actions";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * redux-actions
 *
 *
 * 用于简化 action-types, action-creator, reducer ...
 */

// function createActionCode(type, payloadCreator) {
//
//     return function actionCreator(...args) {
//
//         if (typeof payloadCreator === 'function') {
//
//             const payload = payloadCreator(...args);
//
//             return {
//                 type,
//                 payload
//             };
//
//         } else {
//
//             return {
//                 type
//             };
//         }
//     };
// }

function createActionCode(mapToActionCreators) {

    const result = {};

    for (const prop of mapToActionCreators) {

        const payloadCreator = mapToActionCreators[prop],
            newPropName = toSmallCamel(prop);

        result[newPropName] = function actionCreator(...args) {

            if (typeof payloadCreator === 'function') {

                return {
                    type: prop,
                    payload: payloadCreator(...args)
                };

            } else {

                return {
                    type: prop
                };
            }
        };
    }
}

function toSmallCamel(str) {

    return str.split('_').map((s, i) => {

        s = s.toLowerCase();

        if (i !== 0 && s.length >= 1) {

            s = s[0].toUpperCase() + s.substr(1);
        }

        return s;

    }).join('');
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 ** createAction(s)      // 创建一个多个 action & createActionFn
 *
 *
 * 1) createAction(type);                                           // 单个
 *    createAction(type, payloadCreator);
 *
 * 2) createActions(actionMap[, options]);                          // 多个
 *    createActions(actionMap, ...identityActions[, options]);      // options: 增加独特标识，区分同名 action
 *
 ** createActionFn.toString = actionType;       // toString(); 被重写
 */


/**
 ** handleAction(s)      // 创建一个或多个 reducer
 *
 *
 * 1) handleAction(type, reducer, defaultState);                    // 单个
 *    handleAction(type, reducerMap, defaultState);
 *
 * 2) handleActions(reducerMap. defaultState[, options]);           // 多个
 */


/**
 ** combineActions      // combineActions: 合并 '多个 actionType 对应 相同结构的处理函数'，降低代码耦合
 *                      // redux.combineReducers: 整合 reducer，模块化倒出
 *
 *
 * combineActions(...types);
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

/** of combineActions **/
export const {

    increase,
    decrease,
    asyncIncrease,
    asyncDecrease,
    add,

} = createActions({

    /** UPPER_CASE => smallCamel: '大写下划线连字命名' 会转变为 '小驼峰命名' 作为 actionType **/
    INCREASE: () => 1,                  // 多个 actionType 对应 相同结构的处理函数 耦合
    DECREASE: () => -1,                 // 多个 actionType 对应 相同结构的处理函数 耦合
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: number => number,              // 多个 actionType 对应 相同结构的处理函数 耦合
});


export default handleActions({

    /** [action] === actionType ==== action.toString(); **/
    [combineActions(increase, decrease, add)]: (state, { payload }) => (state + payload)

}, 10);


/** finally version: action + reducer **/
// export const {
//
//     increase,
//     decrease,
//     asyncIncrease,
//     asyncDecrease,
//     add,
//
// } = createActions({
//
//     /** UPPER_CASE => smallCamel: '大写下划线连字命名' 会转变为 '小驼峰命名' 作为 actionType **/
//     INCREASE: null,
//     DECREASE: null,
//     ASYNC_INCREASE: null,
//     ASYNC_DECREASE: null,
//     ADD: number => number,
// });
//
//
// export default handleActions({
//
//     /** [action] === actionType ==== action.toString(); **/
//     [increase]: state => state -1,
//     [decrease]: state => state + 1,
//     [add]: (state, {payload}) => state + payload
//
// }, 10);


/** 2.0 **/
// export const {
//
//     increase,
//     decrease,
//     asyncIncrease,
//     asyncDecrease,
//     add,
//
// } = createActions({
//
//     INCREASE: null,
//     DECREASE: null,
//     ASYNC_INCREASE: null,
//     ASYNC_DECREASE: null,
//     ADD: number => number,
// });


/** 1.0 **/
// export const actionTypes = {
//     increase: 'INCREASE',
//     decrease: 'DECREASE',
//     asyncIncrease: 'ASYNCINCREASE',
//     asyncDecrease: 'ASYNCDECREASE',
//     add: 'ADD',
// };
//
// export const increase = createAction(actionTypes.increase);
// export const decrease = createAction(actionTypes.decrease);
//
// export const asyncIncrease = createAction(actionTypes.asyncIncrease);
// export const asyncDecrease = createAction(actionTypes.asyncDecrease);
//
// export const add = createAction(actionTypes.add, number => number, ()=> ({admin: true}));
//
// export function add(number) {
//     return {
//         type: actionTypes.add,
//         payload: number
//     };
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
