///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {getRandomString, isPlainObject} from "./until";
import {createStore} from "./index";


//-------------------------------------------------------------------------------------------------------------------//


export default function (reducer, defaultState, enhanced) {

    if (typeof defaultState === 'function') {

        enhanced = defaultState;
        defaultState = undefined;
    }

    if (typeof enhanced === 'function') {

        return enhanced(createStore)(reducer, defaultState);
    }

    let currentReducer = reducer,
        currentState = defaultState;

    const listeners = [];

    function getState() {

        return currentState;
    }

    function subscribe(listener) {

        listeners.push(listener);

        let isRemove = false;

        return function () {

            if (isRemove) {

                return;
            }

            const index = listeners.indexOf(listener);

            listeners.splice(index, 1);

            isRemove = true;
        }
    }

    function dispatch(action) {

        // console.log('[旧数据]: ', getState());
        // console.log('[action]: ', action);

        if (!isPlainObject(action)) {

            throw new TypeError('action must be a plain object');
        }

        if (action.type === undefined) {

            throw new TypeError('action must has a property of type');
        }

        currentState = currentReducer(currentState, action);

        // console.log('[新数据]: ', getState());

        for (const listener of listeners) {

            listener();
        }
    }

    dispatch({

        type: `@@redux/INIT${getRandomString(6)}`
    });

    return {
        dispatch,
        getState,
        subscribe
    }
}


// function getRandomString (length) {
//
//     return Math.random().toString(36).substr(2, length).split('').join('.');
// }
//
//
// function isPlainObject(obj) {
//
//     if (typeof obj !== 'object') {
//
//         return false;
//     }
//
//     return Object.getPrototypeOf(obj) === Object.prototype;
// }
//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
