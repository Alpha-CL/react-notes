///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {createActions, handleActions} from "redux-actions";


//-------------------------------------------------------------------------------------------------------------------//


export const {setStudentAndToatal, setIsLoading, fetchStudents} = createActions({

    SET_STUDENT_AND_TOATAL: (arr, total) => ({
        datas: arr,
        total
    }),
    SET_IS_LOADING: isloading => isloading,
    FETCH_STUDENTS: null
});

export default handleActions({

    [setStudentAndToatal]: (state, {payload})=> ({
        ...state,
        ...payload
    }),
    [setIsLoading]: (state, {payload})=> ({
        ...state,
        isLoading: payload
    }),

}, {

    datas: [],
    total: 0,
    isLoading: false
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
