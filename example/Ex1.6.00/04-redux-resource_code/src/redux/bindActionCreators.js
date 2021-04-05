///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


export default function (actionCreators, dispatch) {

    // console.log(typeof actionCreators === 'function');

    if (typeof actionCreators === 'function') {

        return getAutoDispatchActionCreator(actionCreators, dispatch);

    } else if (typeof actionCreators === 'object') {

        const result = {};

        for (const key in actionCreators) {

            if (actionCreators.hasOwnProperty(key)) {

                const actionCreator = actionCreators[key];

                if (typeof actionCreator === 'function') {

                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
                }
            }
        }

        return result;

    } else {

        throw new TypeError("actionCreators must  be an object or funcion which means action creator");
    }
}

function getAutoDispatchActionCreator(actionCrreators, dispatch) {

    return function (...args) {

        const action = actionCrreators(...args);

        dispatch(action);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
