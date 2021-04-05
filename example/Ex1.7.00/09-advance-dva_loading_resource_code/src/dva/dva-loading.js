///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


const NAMESPACE = 'loading',
    SHOW = '@@DVA_LOADING/SHOW',
    HIDE = '@@DVA_LOADING/HIDE';

export default function (opts = {}) {

    const namespace = opts.namespace || NAMESPACE,
        initialState = {
            global: false,
            models: {},
            effects: {}
        };

    opts.only = [];         // 仅处理
    opts.except = [];       // 除了

    function reducer(state = initialState, action) {

        const {namespace, actionType} = action.payload || {};

        switch (action.type) {

            case SHOW:
                return {
                    ...state,
                    global: true,
                    models: {
                        ...state.models,
                        [namespace]: true
                    },
                    effects: {
                        ...state.effects,
                        [actionType]: true
                    }
                };
            case HIDE:

                const models = {
                        ...state.models,
                        [namespace]: false
                    },
                    effects = {
                        ...state.effects,
                        [actionType]: false
                    },
                    global = Object.keys(models).some(key => models[key]);

                return {
                    ...state,
                    global,
                    models,
                    effects
                };
            default:
                return state;
        }
    }

    function onEffect(oldEffect, sagaEffect, model, actionType) {

        const {put} = sagaEffect;

        return function* (action) {

            yield put({
                type: SHOW,
                payload: {
                    namespace: model.namespace,
                    actionType
                }
            });
            yield oldEffect(action);
            yield put({
                type: HIDE,
                payload: {
                    namespace: model.namespace,
                    actionType
                }
            });
        };
    }

    return {
        namespace,
        extraReducers: {
            [namespace]: reducer
        },
        onEffect
    };
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
