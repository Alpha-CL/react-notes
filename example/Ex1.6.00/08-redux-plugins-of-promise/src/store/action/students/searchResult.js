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




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
