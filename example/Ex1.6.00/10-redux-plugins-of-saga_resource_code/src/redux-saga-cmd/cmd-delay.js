///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {take, takeEvery, delay} from "redux-saga/effects";
import {
    ASYNCDECREASETYPE,
    ASYNCINCREASETYPE,
    DECREASETYPE,
    INCREASETYPE
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//



/**
 * delay(number, res): res;           // 有阻塞
 *
 *
 * return: 默认返回 true，也可在第二个参数中设定返回值
 *
 * 指定阻塞延迟毫秒
 */

export default function* () {

    yield takeEvery(INCREASETYPE, asyncIncrease);
    yield takeEvery(DECREASETYPE, asyncDecrease);

    console.log('[takeEvery: 可同时持久化监听多个 action, 并阻塞 saga.all(); 结束]');
}

function* asyncIncrease() {

     /** 若这样写，则 saga 无法控制 callback 中的代码 **/
    // setTimeout(() => {
    //
    //     console.log('[asyncIncrease-invoked]');
    //
    // }, 2000);

    yield delay(2000);
    console.log('延迟 2000ms 后调用');
    console.log('[asyncIncrease-invoked]');
}

function* asyncDecrease() {

    yield delay(2000);
    console.log('[asyncDecrease-invoked]');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
