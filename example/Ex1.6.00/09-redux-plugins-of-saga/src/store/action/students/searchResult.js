///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//



// SetStudentAndTotal Action

export const SETSTUDENTANDTOTALTYPE = Symbol('set-student-and-total');

export const createSetStudentAndTotalAction = (arr, total) => ({

    type: SETSTUDENTANDTOTALTYPE,
    payload: {
        datas: arr,
        total
    }
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// SetIsLoading Action

export const SETISLOADINGTYPE = Symbol('set-isLoading');

export const createSetIsLoadingAction = (isLoading) => ({

    type: SETISLOADINGTYPE,
    payload: isLoading
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// FetchStudents Action

export const FETCHSTUDENTSTYPE = Symbol('fetch-students');

export const createFetchStudentsAction = (payload) => ({

    type: FETCHSTUDENTSTYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
