///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore} from 'redux';


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

    /** 若数据描述为 'increase' **/
    if (action.type === 'increase') {

        return state + 1;

    /** 若数据描述为 'decrease' **/
    } else if (action.type === 'decrease') {

        return state - 1;
    }

    /** 若未传入指定数据描述，则返回 原数据 **/
    return state;
}

/** 创建 数据仓库 **/
const store = createStore(reducer, 10);

// 获取数据的当前状态
console.log('[getState]: ', store.getState());

/** 创建 数据描述 **/
const action = {
    type: 'increase'
};

/** 将 数据描述 分发至指定 数据仓库 **/
store.dispatch(action);

// 获取数据的当前状态
console.log('[getState]: ', store.getState());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
