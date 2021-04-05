///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {take, takeEvery} from "redux-saga/effects";
import {asyncDecreaseAction, DECREASETYPE, INCREASETYPE} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * takeEvery(action, generator);
 *
 *
 * 不断监听某个 action
 * 当某个 action 到达之后，运行指定 生成器函数
 * takeEvery 永远不会结束当前的生成器
 *
 ** takeEvery("*");     // 监听任意 action( 此时 action类型必须是 string )
 */

export default function* () {

    yield takeEvery(INCREASETYPE, asyncIncrease);
    yield takeEvery(DECREASETYPE, asyncDecrease);

    console.log('[takeEvery: 可同时持久化监听多个 action, 并阻塞 saga.all(); 结束]');
}

function* asyncIncrease() {

    console.log('[asyncIncrease-invoked]');
}

function* asyncDecrease() {

    console.log('[asyncDecrease-invoked]');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
