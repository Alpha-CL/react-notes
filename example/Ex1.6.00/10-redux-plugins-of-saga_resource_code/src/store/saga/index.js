///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {delay, put, select, take, fork, cancel, all, takeEvery} from "../../redux-saga/effects";
import {ASYNCDECREASETYPE, ASYNCINCREASETYPE, createIncreaseAction, INCREASETYPE} from "../action/counter";
import decrease from "./decrease";
import increase from "./increase";


//-------------------------------------------------------------------------------------------------------------------//


/** test all **/
export default function* () {

    yield all([increase(), decrease()]);
    console.log('[all end]');
};

/** test takeEvery **/
// export default function* () {
//
//     let task = yield takeEvery(ASYNCINCREASETYPE, test);
//     console.log('[未阻塞其他任务]');
//     yield delay(8000);
//     yield cancel(task);
//     console.log('[当前任务被取消]');
// };
//
// function* test() {
//
//     yield delay(1000);
//     yield put(createIncreaseAction());
// }

/** test cancel **/
// export default function* () {
//
//     let task = yield fork(test);
//     yield delay(10000);
//     yield cancel(task);
//     console.log('[task 任务已被取消]');
// };
//
// function* test() {
//
//     while (true) {
//         yield take(ASYNCINCREASETYPE);
//         yield delay(1000);
//         yield put(createIncreaseAction());
//     }
// }

/** test fork **/
// export default function* () {
//
//     let taks = yield fork(test);
//     console.log('[saga 任务运行结束]', taks);
// };
//
// function* test() {
//
//     while (true) {
//         yield take(ASYNCINCREASETYPE);
//         yield delay(1000);
//         yield put(createIncreaseAction());
//     }
// }

/** test take **/
// export default function* () {
//
//     while (true) {
//
//         console.log('[监听]: ', ASYNCINCREASETYPE);
//         const action = yield take(ASYNCINCREASETYPE);
//         // console.log('[完整 action]:', action);
//
//         yield delay(1000);
//         yield put(createIncreaseAction());
//     }
// };

/** test  put, select **/
// export default function* () {
//
//     while (true) {
//
//         yield delay(3000);
//         yield put(createIncreaseAction());
//         const state = yield select();
//         console.log(state);
//     }
// };

/** test delay, call **/
// export default function* () {
//
//     const result = yield call(['that', test], 'params');
//
//     console.log(result);
//
//     yield delay(1000);
//
//     console.log('[delay end]');
// };
//
//
// function test(params) {
//
//     console.log('[ this ->', this, ']');
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             resolve(params);
//
//         }, 3000);
//     });
// }

/** test saga basic **/
// export default function* (a, b, c) {
//
//     console.log('[saga 开始执行]', '[args]: ',a, b, c)
//
//     let result;
//
//     try {
//
//         result = yield test();
//         console.log(result);
//
//         result = yield '[successed]';
//         console.log(result);
//
//     } catch (err) {
//
//         console.log(err);
//
//         result = yield '[failed]';
//         console.log(result);
//     }
// };
//
// function test() {
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             if (Math.random() > 0.5) {
//
//                 resolve('[promise.reject]');
//
//             } else {
//
//                 reject('[promise.resolve]');
//             }
//
//         }, 3000);
//     });
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
