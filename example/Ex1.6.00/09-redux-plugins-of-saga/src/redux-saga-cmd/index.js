///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "./iterator";
import "./generator";
import cmdtake from "./cmd-take";


import {all} from "redux-saga/effects";
import cmdTake from "./cmd-take";
import cmdTakeEvery from "./cmd-takeEvery";
import cmdDelay from "./cmd-delay";
import cmdPut from "./cmd-put";
import cmdCall from "./cmd-call";
import cmdApply from "./cmd-apply";
import cmdSelect from "./cmd-select";
import cmdCps from "./cmd-cps";
import cmdFork from "./cmd-fork";
import cmdCancel from "./cmd-cancel";
import cmdTakeLastest from "./cmd-takeLatest";
import cmdEgAutoTake from "./cmd-eg_autoTask";
import cmdCancelled from "./cmd-cancelled";
import cmdRace from "./cmd-race";
import cmdEgAutoTakeOfRace from "./cmd-eg_autoTaskOfRace";


//-------------------------------------------------------------------------------------------------------------------//


/**
 ** yield generalData;              // yield [普通数据]; 则不做任何特殊处理
 *
 * 在 saga 任务中，若 yield generalData; 则 saga 不做任何处理，仅将 generalData( 普通数据 ) 传递给 yield 表达式
 * ( 因此，在 saga 中 "yield [普通数据]" 没有意义 )
 *
 *
 ** yield effectCommand;            // yield [特殊指令]; 根据指令控制任务流程
 *
 * saga中间件 会根据不同的指令进行特殊处理，以控制整个任务流程
 *
 *
 ** effectCommand
 *
 * 每个指定本质上是一个函数，该函数调用后，会返回一个指令对象
 * saga 接收到该指令对象，进行不同的处理
 */


// function* sagaTask() {
//
//     let prevDatasVal;
//
//     console.log('[sagaTask-start]');
//     console.log('');
//
//     prevDatasVal = yield 1;
//
//     console.log('[saga-effect-command]');
//     prevDatasVal = yield 2;
//     console.log('');
// }
//
// sagaMiddleware.run(sagaTask);


// export {
//     // sagaTask,
//     cmdtake,
// }


/**
 * all( [actionType() ...] );   // 有阻塞
 *
 *
 * saga 会等待数组中所有生成器执行完成后，再进行下一步处理
 */

export default function* () {

    yield all([
        // cmdTake(),
        // cmdTakeEvery(),
        // cmdDelay(),
        // cmdPut(),
        // cmdCall(),
        // cmdApply(),
        // cmdSelect(),
        // cmdCps(),
        // cmdFork(),
        // cmdCancel(),
        // cmdTakeLastest(),
        // cmdEgAutoTake(),
        // cmdCancelled(),
        // cmdRace(),
        cmdEgAutoTakeOfRace(),
    ]);

    console.log('[saga-end]');
}



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
