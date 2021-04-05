///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createDecreaseAction, createIncreaseAction, INCREASETYPE,DECREASETYPE} from "../store/action/counter";
import {fork, call, race} from "redux-saga/effects";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * race(actionObj);
 *
 *
 *
 */

export default function* () {

    const result = yield race({

        action1: yield call(asyncAction),
        action2: yield call(asyncAction)
    });

    console.log('[result]: ', result);
};


function* asyncAction() {

    let duration = Math.floor((Math.random() * 4000 + 1000));

    console.log('[duration]: ', duration);

    return new Promise(resolve => {

        setTimeout(() => {

            if (Math.random() > 0.5) {

                resolve(createIncreaseAction());

            } else {

                resolve(createDecreaseAction());
            }

        }, duration);
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
