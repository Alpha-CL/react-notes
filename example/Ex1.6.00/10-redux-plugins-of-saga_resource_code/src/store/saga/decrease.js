///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery,delay, put, cancel} from "../../redux-saga/effects";
import {ASYNCDECREASETYPE, createDecreaseAction} from "../action/counter";


//-------------------------------------------------------------------------------------------------------------------//


export default function* () {

    let task = yield takeEvery(ASYNCDECREASETYPE, asyncDecrease);
    // yield delay(5000);
    // yield cancel(task);
};

function* asyncDecrease() {

    yield delay(1000);
    yield put(createDecreaseAction());
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
