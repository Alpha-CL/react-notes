///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Task} from "./Task";
import isGenerator from "is-generator";
import isPromise from "is-promise";
import {isEffect} from "./effectHelper";
import runEffect from "./runEffect";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * runSaga();
 *
 *
 * @generatorFunc: 生成器函数
 * @env: 全局环境数据
 *
 * 管理生成器，使其不断迭代
 */

export default function (env, generatorFunc, ...args) {

    const iterator = generatorFunc(...args);

    if (isGenerator(iterator)) {

        // console.log('[生成器]');
        //
        // next();

        return proc(env, iterator);

    } else {

        console.log('[普通函数]');
    }

    // /**
    //  * next(value, error, isOver);
    //  *
    //  * @value: iterator.next(value);
    //  * @error: iterator.throw(error);
    //  * @isOver: iterator.return();
    //  */
    //
    // function next(nextValue, error, isOver) {
    //
    //     let result;
    //
    //     if (error) {
    //
    //         result = iterator.throw(error);
    //
    //     } else if (isOver) {
    //
    //         result = iterator.return();
    //
    //     } else {
    //
    //         result = iterator.next(nextValue);
    //     }
    //
    //     const {value, done} = result;
    //
    //     if (done) {
    //
    //         console.log('[迭代结束]');
    //
    //         return;
    //     }
    //
    //     if (isEffect(value)) {
    //
    //         // value is not effect
    //
    //         // console.log(`[${value} 是一个 effect]`);
    //
    //         runEffect(env, value, next);
    //
    //     } else if (isPromise(value)) {
    //
    //         // console.log(`[${value} 是一个 promise]`);
    //
    //         // 1) value is promise
    //         value.then(resp => next(resp))
    //             .catch(err => next(null, err));
    //
    //     } else {
    //
    //         // 2) value is other
    //         next(value);
    //     }
    // }
    //
    // return new Task(next);
};

export function proc(env, iterator) {

    let cbObj = {
        callback: null
    };

    next();

    function next(nextValue, error, isOver) {

        let result;

        if (error) {

            result = iterator.throw(error);

        } else if (isOver) {

            cbObj.callback && cbObj.callback();

            result = iterator.return();

        } else {

            result = iterator.next(nextValue);
        }

        const {value, done} = result;

        if (done) {

            console.log('[迭代结束]');

            cbObj.callback && cbObj.callback();

            return;
        }

        if (isEffect(value)) {

            // value is not effect

            // console.log(`[${value} 是一个 effect]`);

            runEffect(env, value, next);

        } else if (isPromise(value)) {

            // console.log(`[${value} 是一个 promise]`);

            // 1) value is promise
            value.then(resp => next(resp))
                .catch(err => next(null, err));

        } else {

            // 2) value is other
            next(value);
        }
    }

    return new Task(next, cbObj);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
