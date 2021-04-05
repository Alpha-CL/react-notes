///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createEffect, effectTypes} from "../effectHelper";


//-------------------------------------------------------------------------------------------------------------------//


export function take(actionType) {

    return createEffect(effectTypes.TAKE, {
        actionType
    });
}

export function runTakeEffect(env, effect, next) {

    const actionType = effect.payload.actionType;

    env.channel.take(actionType, action => {

        next(action);
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
