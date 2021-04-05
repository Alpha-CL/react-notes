///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery, put, call} from "redux-saga/effects";
import {
    createSetIsLoadingAction,
    createSetStudentAndTotalAction,
    FETCHSTUDENTSTYPE
} from "../store/action/students/searchResult";
import {getStudents, searchStudents} from "../services/fetchStudents";

//-------------------------------------------------------------------------------------------------------------------//


/**
 * call();          // 若执行 Promise 则有阻塞
 *
 *
 * 通常用于调用 副作用函数( 通常是异步 )
 */

export default function* () {

   yield takeEvery(FETCHSTUDENTSTYPE, fetchStuents);
}


function* fetchStuents() {

    yield put(createSetIsLoadingAction(true));

    /**
     * resolveData <= yield PromiseFn();
     *
     *
     * yield Promise: 当 saga 发现获取的结果为 Promise 对象，则会 等待 Promise 完成
     * resove: 将完成后的结果的返回值传递到 下一次 next
     * reject: saga 会使用 generator.throw 抛出错误
     */

    // const resp = yield getStudents();            // 可直接放置普通代码，但不便于代码测试

    const resp = yield call(getStudents);                                       // call(asyncFn);

    // const resp = yield call(getStudents, 'param', 'anotherParam');           // call(asyncFn, arg...);

    // const resp = yield call(this,[getStudents], 'param', 'anotherParam');    // call(this, [asyncFn], arg...);

    // 还有不同用法...

    yield put(createSetStudentAndTotalAction(resp.datas, resp.cont));

    yield put(createSetIsLoadingAction(false));

    console.log(resp);
}

// function* fetchStuents() {
//
//     try {
//
//         yield put(createSetIsLoadingAction(true));
//
//         const resp = yield mockStudents();
//
//         console.log(resp);
//
//     } catch (e) {
//
//         console.log(e);
//     }
//
// }
//
//
// function mockStudents() {
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             if (Math.random() > 0.5) {
//
//                 resolve('[获取到了学生数据]');
//
//             } else {
//
//                 reject('[抛出错误!]');
//             }
//
//         }, 2000);
//     });
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
