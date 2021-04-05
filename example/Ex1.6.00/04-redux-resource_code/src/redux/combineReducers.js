///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {isPlainObject, actionType} from "./until";


//-------------------------------------------------------------------------------------------------------------------//


export default function (reducers) {

    validateReducers(reducers);

    return function (state = {}, action) {

        const newState = {};

        for (const key in reducers) {

            if (reducers.hasOwnProperty(key)) {

                const reducer = reducers[key];

                newState[key] = reducer(state[key], action);
            }
        }

        return newState;
    }
}


function validateReducers(reducers) {

    if (typeof reducers !== 'object') {

        throw new Error('reducers must be an object');
    }

    if (!isPlainObject(reducers)) {

        throw new Error('reducers must be a plain object');
    }

    for (const key in reducers) {

        if (reducers.hasOwnProperty(key)) {

            const reducer = reducers[key];

            let state = reducer(undefined, {

                type: actionType.INIT()
            });

            if (state === undefined) {

                throw new TypeError('reducers must net return undefined');
            }

            state = reducer(undefined, {

                type: actionType.UNKNOWN()
            });

            if (state === undefined) {

                throw new TypeError('reducers must net return undefined');
            }
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
