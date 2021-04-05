///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {SETLOGINUSERTYPE} from "../aciton/login-user-action";


//-------------------------------------------------------------------------------------------------------------------//


const setLoginUserInitialState = null;

export default (state = setLoginUserInitialState, {type, payload}) => {

    switch (type) {

        case SETLOGINUSERTYPE:
            return payload;
        default:
            return state;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
