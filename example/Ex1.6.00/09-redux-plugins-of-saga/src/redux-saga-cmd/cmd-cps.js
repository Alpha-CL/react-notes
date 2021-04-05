///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery, put, call, apply, select, cps} from "redux-saga/effects";

import {
    createSetIsLoadingAction,
    createSetStudentAndTotalAction,
    FETCHSTUDENTSTYPE
} from "../store/action/students/searchResult";
import {getStudents, searchStudents} from "../services/fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * cps(callback);       // 可能阻塞
 *
 *
 * 用于调用 传统方式的 异步函数
 */

export default function* () {

    yield takeEvery(FETCHSTUDENTSTYPE, fetchStuents);
}

function* fetchStuents() {

    yield put(createSetIsLoadingAction(true));

    const condition = yield select(state => state.students.searchCondition);


    try {

        const resp = yield cps(mockStudents, condition);

        yield put(createSetStudentAndTotalAction(resp.datas, resp.cont));

    }catch (e) {

        console.log('[err]: ', e);

    }finally {

        yield put(createSetIsLoadingAction(false));
    }

}

function mockStudents(condition, callback) {

    setTimeout(() => {

        /** node.js 风格: callback(err, data) **/

        if (Math.random() < 0.5) {

            callback(null, {

                cont: 78,
                datas: [
                    {id: 1, name: 'a'},
                    {id: 2, name: 'b'},
                    {id: 3, name: 'c'}
                ]
            });

        } else {

            callback(new Error('抛出错误'), null);
        }

    }, 2000);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
