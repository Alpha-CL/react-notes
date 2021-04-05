///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {take, takeEvery, delay, put} from "redux-saga/effects";
import {
    asyncDecreaseAction,
    createDecreaseAction,
    createIncreaseAction,
    DECREASETYPE,
    INCREASETYPE
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * put(action); === store.diapatch(action);
 *
 *
 * 用于重新触发 action
 */

export default function* () {

    yield takeEvery(INCREASETYPE, asyncIncrease);
    yield takeEvery(DECREASETYPE, asyncDecrease);

    console.log('[takeEvery: INCREASETYPE, DECREASETYPE]')
}

function* asyncIncrease() {

    yield delay(2000);
    console.log('[处理异步操作]');

    yield put(createDecreaseAction());
    console.log('[asyncIncrease-invoked]');
}

function* asyncDecrease() {

    console.log('[asyncDecrease-invoked]');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
