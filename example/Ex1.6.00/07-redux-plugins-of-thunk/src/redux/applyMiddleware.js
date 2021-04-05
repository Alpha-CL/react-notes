///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import compose from "./compose";


//-------------------------------------------------------------------------------------------------------------------//


export default function (...middlewares) {

    return function (createStore) {

        return function (reducer, defaultState) {

            const store = createStore(reducer, defaultState);

            let dispatch = () => { throw new Error('目前 dispatch 还不能使用') };

            const simpleDispatch = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            };

            const dispatchProducers = middlewares.map(mid => mid(simpleDispatch));

            dispatch = compose(...dispatchProducers)(store.dispatch);

            return {

                ...store,
                dispatch
            };
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
