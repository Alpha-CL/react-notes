///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createEffect, effectTypes} from "../effectHelper";
import isPromise from "is-promise";


//-------------------------------------------------------------------------------------------------------------------//


export function call(fn, ...args) {

    let context = null,
        func = fn;

    if (Array.isArray(fn)) {
        context = fn[0];
        func = fn[1];
    }

    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        args
    });
}

export function runCallEffect(env, effect, next) {

    // console.log(env);
    // console.log(effect);
    // console.log(next);

    const {context, fn, args} = effect.payload,
        result = fn.call(context, ...args);

    if (isPromise(result)) {

        result.then(resp => next(resp))
            .catch(err => next(null, err));

    } else {

        next(result);
    }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
