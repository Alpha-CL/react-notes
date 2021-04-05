///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


/**
 * dva.modal(mixReduxObj);
 *
 * mixReduxObj: {
 *
 **    namespace: 'modal-name',             // must
 **    state: 'default-data',               // must
 *
 *     reducers: {                          // Optional
 **                                         // 方法名称及为匹配的 actionType
 *          reducer() {}
 *     },
 *
 *     effects: {                           // Optional
 **                                         // 方法名称及为匹配的 actionType
 *          reduxSaga() {}
 *     },
 *
 *     subscriptions: {                     // Optional
 *                                          // 加入到仓库后会立即，仅执行一次
 *
 *          singleListenr() {}
 *     }
 * }
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase: (state, action) => {

            // console.log('[reducer.method(state, action)]: state', state);
            // console.log('[reducer.method(state, action)]: action', action);

            return state + 1;
        },
        decrease: (state, action) => state - 1,
        add: (state, {payload}) => state + payload
    },
    effects: {
        * asyncIncrease(action, obj) {

            // console.log('[effect.method(action, obj)]: action', action);
            // console.log('[effect.method(action, obj)]: obj', obj);

            const {call, put} = obj;

            yield call(delay, 2000);
            console.log('[asyncIncrease]');
            yield put({type: 'increase'});

        },
        * asyncDecrease(action, {call, put}) {

            yield call(delay, 2000);
            console.log('[asyncDecrease]')
            yield put({type: 'decrease'});
        }
    },
    subscriptions: {

        // resizeIncrease(obj) {
        //
        //     // console.log('[subscriptions.method(obj)]: ', obj);
        //     // dispatch: ƒ (action)
        //     // history: {length: 2, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
        //     // __proto__: Object
        //
        //     const {dispatch} = obj;
        //
        //     window.onresize = () => {
        //
        //         dispatch({type: 'increase'});
        //     };
        // },
        // resizeDecrease({dispatch, history}) {
        //
        //     history.listen(() => {
        //
        //         /** 触发多次push ，因 routerRedux of connected-react-router 库中的 bug**/
        //         dispatch({type: 'decrease'})
        //     });
        // }
    }
};


function delay(duration) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve();

        }, duration);
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
