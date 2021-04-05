///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {setIsLoading, setStudentAndToatal} from "../store/actions/searchResult";
import {put, select, call, takeEvery} from "redux-saga/effects";
import {searchStudents} from "../services/fetchStudents";
import {fetchStudents} from "../store/actions/searchResult";


//-------------------------------------------------------------------------------------------------------------------//


function* fetch() {

    yield put(setIsLoading(true));

    const condition = yield select(state => state.searchCondition);

    try {

        const resp = yield call(searchStudents, condition);

        yield put(setStudentAndToatal(resp.datas, resp.cont));


    } catch (err) {

        console.log(err);

    } finally {

        yield put(setIsLoading(false));
    }
}


export default function* () {

    yield takeEvery([fetchStudents], fetch);
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
