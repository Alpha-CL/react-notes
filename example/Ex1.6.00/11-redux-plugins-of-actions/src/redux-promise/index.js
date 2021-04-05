///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {isPlainObject, isString} from "lodash";
import isPromise from "is-promise";


//-------------------------------------------------------------------------------------------------------------------//


export default ({dispatch}) => next => action => {

    if (!isFSA(action)) {

        return isPromise(action) ? action.then(dispatch) : next(action);
    }

    return isPromise(action.payload) ?
        action.payload
            .then(payload => dispatch({...action, payload}))
            .catch(error => dispatch({...action, payload: error, error: true})) :
        next(action);
};


function isFSA(action) {

    return isPlainObject(action)
        &&
        isString(action.type)
        &&
        Object.keys(action).every(key => ['type', 'payload', 'error', 'meta'].indexOf(key) > -1);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
