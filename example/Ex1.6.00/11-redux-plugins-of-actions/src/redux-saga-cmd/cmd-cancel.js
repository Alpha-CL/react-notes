///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, delay, put, takeEvery, take, cancel} from "redux-saga/effects";
import {
    INCREASETYPE,
    DECREASETYPE,
    createDecreaseAction,
    ASYNCDECREASETYPE,
    createIncreaseAction,
    ASYNCINCREASETYPE,
    AUTOINCREASETYPE,
    createAutoIncreaseAction
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * cancel(taskArr);                 // 实现原理: generator.return;
 *
 *
 * @taskArr: 一个或多个 任务
 *
 * 取消一个或多个任务
 *
 ** cancel(); 若不传参，则取消当前任务线
 */

// export default function* () {
//
//     yield fork(asyncIncrease);
//     yield takeEvery(DECREASETYPE, asyncDecrease);
//
//     console.log('[正在监听: increase, decrease]');
// }
//
// function* asyncIncrease() {
//
//     let task;
//
//     while (true) {
//
//         yield take(INCREASETYPE);
//
//         if (task) {
//             yield cancel(task);
//             console.log('[之前的任务被取消]');
//         }
//
//         task = yield fork(function* () {
//             yield delay(3000);
//             yield put(createIncreaseAction());
//         });
//     }
// }
//
// function* asyncDecrease() {
//
//     yield delay(2000);
//     yield put(createDecreaseAction());
// }


export default function* () {

    // yield takeEvery(INCREASETYPE, asyncIncrease);
    // yield takeEvery(DECREASETYPE, asyncDecrease);

    // yield takeEvery(AUTOINCREASETYPE, autoIncrease);

    yield fork(autoIncrease);

    console.log('[正在监听: autoIncrease]');
}

let task;

function* autoIncrease() {

    while (true) {

        yield take(AUTOINCREASETYPE);

        if (task) {

            yield cancel(task);
        }

        task = yield fork(function* () {

            while (true) {

                yield delay(2000);
                yield put(createIncreaseAction());
            }
        });
    }
}

// let task;
//
// function* autoIncrease() {
//
//     if (task) {
//
//         yield cancel(task);
//     }
//
//     console.log('[监听到了 autoIncrease]');
//
//     while (true) {
//
//         yield delay(3000);
//         yield put(createIncreaseAction());
//     }
// }

// function* takeEvery() {
//
//     return fork(function* (actionType,  saga) {
//
//         while (true) {
//
//             const action = yield task(actionType);
//
//             fork(saga);
//         }
//     });
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
