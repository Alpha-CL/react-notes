///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {runCallEffect} from "./effects/call";
import {runPutEffect} from "./effects/put";
import {runSelectEffect} from "./effects/select";
import {runTakeEffect} from "./effects/take";
import {runCancelEffect} from "./effects/cancel";

import {effectTypes} from "./effectHelper";
import {runForkEffect} from "./effects/fork";
import {runAllEffect} from "./effects/all";


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * @env: 全局环境变量
 * @effect: effect 对象
 * @next: next(); 用于执行下一个 yield 指令
 */

export default function (env, effect, next) {

    switch (effect.type) {

        case effectTypes.CALL:
            runCallEffect(env, effect, next);
            break;
        case effectTypes.PUT:
            runPutEffect(env, effect, next)
            break;
        case effectTypes.SELECT:
            runSelectEffect(env, effect, next);
            break;

        case effectTypes.TAKE:
            runTakeEffect(env, effect, next);
            break;
        case effectTypes.FORK:
            runForkEffect(env, effect, next)
            break;
        case effectTypes.CANCEL:
            runCancelEffect(env, effect, next);
            break;

        case effectTypes.ALL:
            runAllEffect(env, effect, next);
            break;

        default:
            throw new Error('[无效类型]');
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
