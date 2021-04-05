///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, delay, put, takeEvery, take, cancel, takeLatest} from "redux-saga/effects";
import {
    INCREASETYPE,
    DECREASETYPE,
    createDecreaseAction,
    ASYNCDECREASETYPE,
    createIncreaseAction,
    ASYNCINCREASETYPE,
    AUTOINCREASETYPE,
    createAutoIncreaseAction, STOPAUTOINCREASETYPE
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * takeLastest(action, generator);
 *
 *
 * 于 takeEvery(); 用法一致，但会清除之前线程的任务
 */

export default function* () {

    yield fork(autoIncrease);
    yield takeEvery(STOPAUTOINCREASETYPE, stopAutoIncrease);

    console.log('[正在监听: autoIncrease]');
}

let task;

function* autoIncrease() {

    while (true) {

        yield take(AUTOINCREASETYPE);

        yield* stopTask();

        task = yield fork(function* () {

            while (true) {

                yield delay(2000);
                yield put(createIncreaseAction());
            }
        });
    }
}

function* stopAutoIncrease() {

    yield* stopTask();
}

function* stopTask() {

    if (task) {

        yield cancel(task);
    }
}



// export default function* () {
//
//     // yield fork(autoIncrease);
//
//     yield takeLatest(AUTOINCREASETYPE, autoIncrease);
//
//     console.log('[正在监听: autoIncrease]');
// }
//
// let isStop = false;
//
// function* autoIncrease() {
//
//     while (true) {
//
//         if (isStop) {
//             break;
//         }
//
//         yield delay(3000);
//         yield put(createIncreaseAction());
//     }
// }
//
// function* stopAutoIncrease() {
//
//     isStop = true;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
