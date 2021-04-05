///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {DECREASETYPE, INCREASETYPE} from "../../action/counter";


//-------------------------------------------------------------------------------------------------------------------//


const counterInitialState = 10;

export default (state = counterInitialState, {type}) => {

    switch (type) {

        case INCREASETYPE:
            return state + 1;
        case DECREASETYPE:
            return state - 1;
        default:
            return state;
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
