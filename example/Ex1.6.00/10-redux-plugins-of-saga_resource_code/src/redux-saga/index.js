///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import runSaga from "./runSaga";
import {Channel} from "./Channel";


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 *
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default function sagaMiddle(store) {

    function sagaMiddleware(store) {

        const env = {

            store,
            channel: new Channel(),
        };

        sagaMiddleware.run = runSaga.bind(null, env);

        return function (next) {

            return function (action) {

                const result = next(action);            // 直接交给下一个中间件处理

                env.channel.put(action.type, action);

                return result;
            };
        };
    }

    return sagaMiddleware;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
