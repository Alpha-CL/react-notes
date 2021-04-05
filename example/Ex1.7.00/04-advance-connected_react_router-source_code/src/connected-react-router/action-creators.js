///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {CALL_HISTORY_METHOD, LOCATION_CHANGE} from "./actionTypes";


//-------------------------------------------------------------------------------------------------------------------//


/** 因无法调用push，则需要利用 中间件 监听另一个 action，从而再调用 history 中的方法 **/

export function push(...args) {

    return {
        type: CALL_HISTORY_METHOD,
        payload: {
            action: 'push',
            args
        }
    };
}

export function replace(args) {

    return {
        type: CALL_HISTORY_METHOD,
        payload: {
            action: 'replace',
            args
        }
    };
}


export function createLocationChangeAction(action, location) {

    return {
        type: LOCATION_CHANGE,
        payload: {
            action,
            location
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
