///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery,delay, put, cancel} from "../../redux-saga/effects";
import {ASYNCINCREASETYPE, createIncreaseAction} from "../action/counter";


//-------------------------------------------------------------------------------------------------------------------//


export default function* () {

    let task = yield takeEvery(ASYNCINCREASETYPE, asyncIncrease);
    // yield delay(5000);
    // yield cancel(task);
};

function* asyncIncrease() {

    yield delay(1000);
    yield put(createIncreaseAction());
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
