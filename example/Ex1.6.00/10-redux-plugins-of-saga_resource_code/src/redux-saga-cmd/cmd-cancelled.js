///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fork, take, delay, cancel, put, cancelled} from "redux-saga/effects";
import {AUTOINCREASETYPE, createIncreaseAction, STOPAUTOINCREASETYPE} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * cancelled(): bool;
 *
 *
 * 判断当前任务线是否被取消
 */

export default function* () {

    yield fork(autoTask);

    console.log('[正在监听 autoIncrease]');
};


function* autoTask() {

    while (true) {

        yield take(AUTOINCREASETYPE);

        const task = yield fork(function* () {

            try {

                while (true) {

                    yield delay(2000);
                    yield put(createIncreaseAction());
                }

            } finally {

                if (yield cancelled()) {

                    console.log('[cancelled: 当前任务线程被取消]');
                }
            }


        });

        yield take(STOPAUTOINCREASETYPE);
        yield cancel(task);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
