///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery, put, call, apply, select} from "redux-saga/effects";

import {
    createSetIsLoadingAction,
    createSetStudentAndTotalAction,
    FETCHSTUDENTSTYPE
} from "../store/action/students/searchResult";
import {getStudents, searchStudents} from "../services/fetchStudents";

//-------------------------------------------------------------------------------------------------------------------//


/**
 * select(callback);
 *
 *
 * @callback: 用于设置返回数据的筛选条件
 *
 * 用于获取当前仓库中的数据
 */

export default function* () {

    yield takeEvery(FETCHSTUDENTSTYPE, fetchStuents);
}


function* fetchStuents() {

    yield put(createSetIsLoadingAction(true));


    // const state = yield select();
    // console.log('[state]: ', state);

    const condition = yield select(state => state.students.searchCondition);
    console.log(condition);


    const resp = yield call(searchStudents, condition);                                       // call(asyncFn);
    yield put(createSetStudentAndTotalAction(resp.datas, resp.cont));
    yield put(createSetIsLoadingAction(false));

    console.log('[resp]: ', resp);
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
