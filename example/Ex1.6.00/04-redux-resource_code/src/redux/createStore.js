///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {getRandomString, isPlainObject} from "./until";


//-------------------------------------------------------------------------------------------------------------------//


export default function (reducer, defaultState) {

    let currentReducer = reducer,
        currentState = defaultState;

    const listeners = [];

    function dispatch(action) {

        if (!isPlainObject(action)) {

            throw new TypeError('action must be a plain object');
        }

        if (action.type === undefined) {

            throw new TypeError('action must has a property of type');
        }

        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {

            listener();
        }
    }

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
