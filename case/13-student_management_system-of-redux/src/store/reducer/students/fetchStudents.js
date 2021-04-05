///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createSetIsLoadingAction, createSetStudentAndTotalAction} from "../../action/students/searchResult";
import {searchStudents} from "../../../services/fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


export function fetchStudents() {

    return async function (dispatch, getState) {

        dispatch(createSetIsLoadingAction(true));

        const condition = getState().students.condition;

        const resp = await searchStudents(condition);

        dispatch(createSetStudentAndTotalAction(resp.datas, resp.cont));

        dispatch(createSetIsLoadingAction(false));
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
