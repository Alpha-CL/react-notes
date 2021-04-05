///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createEffect, effectTypes} from "../effectHelper";
import runSaga from "../runSaga";


//-------------------------------------------------------------------------------------------------------------------//


export function fork(generatorFn, ...args) {

    return createEffect(effectTypes.FORK, {
        fn: generatorFn,
        args
    })
}


export function runForkEffect(env, effect, next) {

    let task = runSaga(env, effect.payload.fn, ...effect.payload.args);
    next(task);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
