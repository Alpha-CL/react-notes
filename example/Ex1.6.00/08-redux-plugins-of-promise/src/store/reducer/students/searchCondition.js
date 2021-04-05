///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {CHANGETYPE} from "../../action/students/searchCondition";


//-------------------------------------------------------------------------------------------------------------------//


const conditionInitialState = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
};

export default (state = conditionInitialState, {type, payload}) => {

    switch (type) {

        case CHANGETYPE:
            return {...state, ...payload};
        default:
            return state;
    }
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////