///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import * as sagaEffects from "./saga";
import {createHashHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";


//-------------------------------------------------------------------------------------------------------------------//


export default function (opts = {}) {

    const options = getOptions();

    let app = {
        model,
        _models: [],
        router,
        _router: null,
        start,

    },
        sagaMid,
        generatorFuncs;

    function model(modelObj) {

        app._models.push(modelObj);
    }

    function router(routerFunc) {

        app._router = routerFunc;
    }

    function start(selector) {

        const store = getStore();

        runSubscriptions(store.dispatch);

        render(selector, store);
    }

    function render(selector, store) {

        const routerConfig = app._router({
                history: options.history,
                app
            }),
            rout = (<Provider store={store}>
                {routerConfig}
            </Provider>);

        ReactDOM.render(rout, document.querySelector(selector));
    }

    function getStore() {

        let rootReducerObj = {},
            rootReducer;

        for (const model of app._models) {

            let obj = getReducer(model);

            rootReducerObj[obj.name] = obj.reducer;
        }

        rootReducerObj = {...rootReducerObj, ...getExtraReducers()};

        rootReducer = extendRootReducerOfStateChange(rootReducerObj);
        rootReducer = extendRootReducerOfReducer(rootReducer);

        // let rootReducer = combineReducers(rootReducerObj),
        //     oldRootReducer = rootReducer;
        //
        // rootReducer = function (state, action) {
        //
        //     const newState = oldRootReducer(state, action);
        //
        //     options.onStateChange(newState);
        //
        //     return newState;
        // };

        const newCreateStore = extendCreateStore(createStore);

        const store = newCreateStore(
            rootReducer,
            options.initialState,
            getMiddlewares(),
        );

        window.store = store;

        runEffects();
        runSagaMid(store);

        return store;
    }

    function extendCreateStore(createStore) {

        return options.extraEnhancers.reduce((fn1, fn2) => {

            return fn2(fn1);

        }, createStore);
    }

    function extendRootReducerOfStateChange(rootReducerObj) {

        let rootReducer = combineReducers(rootReducerObj),
            oldRootReducer = rootReducer;

        return function (state, action) {

            const newState = oldRootReducer(state, action);

            options.onStateChange(newState);

            return newState;
        };
    }

    function extendRootReducerOfReducer(rootReducer) {

        return options.onReducer(rootReducer);
    }

    function runSubscriptions(dispatch) {

        for (const model of app._models) {

            const newDispatch = function (action) {

                dispatch(getNewAction(action, model));
            };

            if (model.subscriptions) {

                for (const prop in model.subscriptions) {

                    const func = model.subscriptions[prop];

                    func({
                        dispatch: newDispatch,
                        history: options.history
                    });
                }
            }
        }
    }

    function runEffects() {

        generatorFuncs = [];

        for (const model of app._models) {

            if (model.effects) {

                for (const prop in model.effects) {

                    const put = function (action) {

                        return sagaEffects.put(getNewAction(action, model));
                    };

                    generatorFuncs.push({
                        type: `${model.namespace}/${prop}`,
                        generatorfunc: model.effects[prop],
                        put,
                        model,
                    });
                }
            }
        }

        return generatorFuncs;
    }

    function runSagaMid(store) {

        sagaMid.run(function* () {

            for (const item of generatorFuncs) {

                let func = function* (action) {

                    try {

                        yield item.generatorfunc(action, {...sagaEffects, put: item.put});

                    } catch (err) {

                        options.onError(err, store.dispatch);
                    }
                }

                if (options.onEffect) {

                    func = extendFunc(func);
                }

                yield sagaEffects.takeEvery(item.type, func);
            }
        });
    }

    function extendFunc(oldEffect) {

        return options.onEffect(oldEffect, sagaEffects, model);
    }

    function getNewAction(action, model) {

        let newAction = action

        if (!action.type.includes('/')) {
            newAction = {
                ...action,
                type: `${model.namespace}/${action.type}`
            };
        }

        return newAction;
    }

    function getReducer(model) {

        const actionTypes = [];

        if (model.reducers) {

            for (const prop in model.reducers) {

                actionTypes.push({
                    type: `${model.namespace}/${prop}`,
                    reducer: model.reducers[prop]
                });
            }
        }

        return {
            name: model.namespace,
            reducer(state = model.state, action) {

                const temp = actionTypes.find(t => t.type === action.type);

                if (temp) {

                    return temp.reducer(state, action);

                } else {

                    return state;
                }
            }
        };
    }

    function getMiddlewares() {

        sagaMid = createSagaMiddleware();

        const mids = [
            routerMiddleware(options.history),
            sagaMid,
            ...options.onAction
        ];

        return composeWithDevTools(applyMiddleware(...mids));
    }

    function getExtraReducers() {

        return {
            router: connectRouter(options.history),
            ['@@dva'](state = 0, action) {

                return state;
            },
            ...options.extraReducers,
        };
    }

    function getOptions() {

        const options = {
            history: opts.history || createHashHistory(),
            initialState: opts.initialState === undefined ? {} : opts.initialState,
            onError: opts.onError || (()=>{}),
            onStateChange: opts.onStateChange || (()=>{}),
            onReducer: opts.onReducer || (reducer => (state, action) => reducer(state, action)),
            onEffect: opts.onEffect,
            extraReducers: opts.extraReducers || {},
            extraEnhancers: opts.extraEnhancers || [],
        }

        if (opts.onAction) {

            if (Array.isArray(opts.onAction)) {

                options.onAction = opts.onAction;

            } else {

                options.onAction = [opts.onAction];
            }

        } else {

            options.onAction = [];
        }

        return options;
    }

    return app;
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
