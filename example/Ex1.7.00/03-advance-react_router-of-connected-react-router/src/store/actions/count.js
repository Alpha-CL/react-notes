///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createAction, createActions,handleAction, handleActions, combineActions} from "redux-actions";


//-------------------------------------------------------------------------------------------------------------------//


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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
