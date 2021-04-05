///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


function createThunkMiddleware(extra) {

    return store => next => action => {

        if (typeof action === 'function') {

            action(store.dispatch, store.getState, extra);

        } else {

            next(action);
        }
    };
}

const thunk = createThunkMiddleware();

export default thunk;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
