///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import store from "./index";
import {createSetLoadingAction, createSetUsersAction, fetchUsers} from "./aciton/users-action";
import {v4 as uuid} from "uuid";
import {getAllStudents} from "../services/fetchStudents"


//-------------------------------------------------------------------------------------------------------------------//


store.dispatch(fetchUsers());


// getAllStudents()
//     .then(resp => {
//
//         store.dispatch(createSetLoadingAction(true));
//
//         setTimeout(() => {
//
//             const action = createSetUsersAction(resp);
//             store.dispatch(action);
//             store.dispatch(createSetLoadingAction(false));
//
//         }, 3000);
//     });


// const action = createSetUsersAction([
//
//     {id: uuid(), loginId: 'admiin_01', loginPwd: '111'},
//     {id: uuid(), loginId: 'admiin_02', loginPwd: '222'},
//     {id: uuid(), loginId: 'admiin_03', loginPwd: '333'},
// ]);
//
// store.dispatch(action);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
