///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {SETSTUDENTANDTOTALTYPE, SETISLOADINGTYPE} from "../../action/students/searchResult";


//-------------------------------------------------------------------------------------------------------------------//


const resultInitialState = {
    datas: [],
    total: 0,
    isLoading: false
};

export default (state = resultInitialState, {type, payload}) => {

    switch (type) {

        case SETSTUDENTANDTOTALTYPE:
            return {
                ...state,
                ...payload
            };
        case SETISLOADINGTYPE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
