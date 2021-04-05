///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import store from "./index";
import {createChangeAction} from "./action/students/searchCondition";
import {createSetIsLoadingAction} from "./action/students/searchResult";
import {fetchStudents} from "./reducer/students/fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


// console.log(store.getState());
//
// store.dispatch(createChangeAction({
//     key: 'newKey',
//     page: 2
// }));
//
// store.dispatch(createSetIsLoadingAction(true));

store.dispatch(fetchStudents());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
