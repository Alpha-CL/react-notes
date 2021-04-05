///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, take, delay, cancel, put} from "redux-saga/effects";
import {AUTOINCREASETYPE, createIncreaseAction, STOPAUTOINCREASETYPE} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


export default function* () {

    yield fork(autoTask);

    console.log('[正在监听 autoIncrease]');
};


function* autoTask() {

    while (true) {

        yield take(AUTOINCREASETYPE);

        const task = yield fork(function* () {

            while (true) {

                yield delay(2000);
                yield put(createIncreaseAction());
            }
        });

        yield take(STOPAUTOINCREASETYPE);
        yield cancel(task);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
