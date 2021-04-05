///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createSetStudentAndTotalAction, SETSTUDENTANDTOTALTYPE} from "../../action/students/searchResult";
import {searchStudents} from "../../../services/fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


// export function fetchStudents() {
//
//     return async function (dispatch, getState) {
//
//         dispatch(createSetIsLoadingAction(true));
//
//         const condition = getState().students.condition;
//
//         const resp = await searchStudents(condition);
//
//         dispatch(createSetStudentAndTotalAction(resp.datas, resp.cont));
//
//         dispatch(createSetIsLoadingAction(false));
//     }
// }


/**
 * redux-promise
 *
 *
 * 1) 若 action 是 promise，则会等待 promise 完成，将完成的结果作为 aciton 触发
 * 2) 若 action 不是 promise，则判断  payload 是否是 promise若是
 *    则等待 promise 完成，再将结果作为 payload 的值触发
 */


// export function fetchStudents() {
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             const action = createSetStudentAndTotalAction([
//
//                     {id: 1, name: 'user_01'},
//                     {id: 2, name: 'user_02'},
//
//                 ], 2);
//
//             resolve(action);
//
//         }, 1000);
//     });
// }


// export async function fetchStudents(condition) {
//
//     const resp = await searchStudents(condition);
//
//     return createSetStudentAndTotalAction(resp.datas, resp.cont);
// }


export async function fetchStudents(condition) {

    return {

        type: SETSTUDENTANDTOTALTYPE,
        payload: searchStudents(condition).then(resp => ({
            datas: resp.datas,
            total: resp.cont
        }))
    };
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
