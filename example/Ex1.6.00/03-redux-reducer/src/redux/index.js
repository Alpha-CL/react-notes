///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createStore} from "../../../04-redux-resource_code/src/redux";
// import reducer from "./reducer";
// import {createAddUserAction} from "./aciton/users-action";
// import {v4 as uuid} from "uuid";
// import {combineReducers} from "redux";

// import {actionTypes} from "./aciton/action-type";
// import {numberActions} from "./aciton/number-action";


//-------------------------------------------------------------------------------------------------------------------//


/** 一个数据仓库，有且仅有一个 reducer，
 * 并且通常情况下，一个工程只有一个仓库
 * ( 因此一个系统，只有一个 reducer )**/
// // /** 创建 数据仓库 **/
// /** reducer 第一次运行: 初始化 **/
// const store = createStore(reducer);
//
// // 获取数据的当前状态
// console.log('[getState]: ', store.getState());
//
// // const boundActions = bindActionCreators(numberActions, store.dispatch);
// // boundActions.getIncreaseAction();
//
// /** reducer 第二次运行 **/
// store.dispatch(numberActions.getIncreaseAction());
//
// // 获取数据的当前状态
// console.log('[getState]: ', store.getState());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * store
 *
 *
 * dispatch: action 分发器
 * getState: 获取数据仓库中的 当前状态
 * replaceReducer: 替换当前的 reducer
 *
 ** subscribe(fn): unListenFn: 监听器，当分发 action 后，运行该监听器( 可以是一个或多个 )
 *
 *                             const unListen = store.subscribe(()=>{});
 */


const store = createStore(reducer);
console.log('[store]: ', store);
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()
// __proto__: Object


console.log(store.getState());


const unListen = store.subscribe(() => {

    console.log('[state changed]');
});


store.dispatch(createAddUserAction({
    id: uuid(),
    name: 'abc',
    age: 10,
}));


console.log(store.getState());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////