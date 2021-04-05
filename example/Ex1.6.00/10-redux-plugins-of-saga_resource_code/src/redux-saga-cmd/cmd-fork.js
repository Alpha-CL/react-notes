///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, delay, put, takeEvery, take} from "redux-saga/effects";
import {
    INCREASETYPE,
    DECREASETYPE,
    createDecreaseAction,
    ASYNCDECREASETYPE,
    createIncreaseAction, ASYNCINCREASETYPE
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * fork(generatorFn): task;
 *
 *
 * 开启一个新线程的任务，不会阻塞
 */

export default function* () {

    // yield takeEvery(INCREASETYPE, asyncIncrease);
    yield fork(asyncIncrease);          // 模拟 takeEvery(INCREASETYPE, asyncIncrease);

    yield takeEvery(DECREASETYPE, asyncDecrease);

    console.log('[正在监听: increase, decrease]');
    console.log('[fork 会新开启线程，未阻塞其他线程的运行]');
}


function* asyncIncrease() {

    while (true) {

        yield take(INCREASETYPE);
        yield fork(function* () {
            yield delay(3000);
            yield put(createIncreaseAction());
        });
    }
}


function* asyncDecrease() {

    yield delay(3000);
    yield put(createDecreaseAction());
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
