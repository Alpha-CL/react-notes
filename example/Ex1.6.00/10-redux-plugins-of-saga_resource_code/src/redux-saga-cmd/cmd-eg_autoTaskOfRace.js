///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, take, delay, cancel, put, race, call} from "redux-saga/effects";
import {
    AUTOINCREASETYPE,
    createAutoIncreaseAction,
    createIncreaseAction,
    STOPAUTOINCREASETYPE
} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


export default function* () {

    yield fork(autoTask);

    console.log('[正在监听 autoIncrease]');
};


function* autoTask() {

    while (true) {

        yield take(AUTOINCREASETYPE);

        yield race({

            autoIncrease: call(function* () {

                while (true) {

                    yield delay(2000);
                    yield put(createIncreaseAction());
                }
            }),

            cancel: take(STOPAUTOINCREASETYPE)
        });
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
