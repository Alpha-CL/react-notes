///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {take, takeEvery} from "redux-saga/effects";
import {asyncDecreaseAction, DECREASETYPE, INCREASETYPE} from "../store/action/counter";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * take
 *
 *
 * 监听某个 action
 * 若 action 发生了，则会进行下一步处理，take 指令仅监听一次
 * action <= yield take(actionType);
 */

export default function* () {

    /** 利用 while 循环持久化监听指定 action **/
    while (true) {
        const action = yield take(INCREASETYPE);
        console.log('[invoked-action]', action);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
