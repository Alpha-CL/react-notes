///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {takeEvery, delay, put} from "redux-saga/effects";
import {increase, decrease, asyncDecrease, asyncIncrease} from "../store/actions";


//-------------------------------------------------------------------------------------------------------------------//


export default function* () {

    yield takeEvery(asyncIncrease, asyncIncreaseEffect);
    yield takeEvery(asyncDecrease, asyncDecreaseEffect);

    console.log('[listener: asyncIncrease, asyncDecrease]')
};

function* asyncIncreaseEffect() {

    yield delay(3000);
    yield put(increase());
}

function* asyncDecreaseEffect() {

    yield delay(3000);
    yield put(decrease());
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
