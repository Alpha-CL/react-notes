///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {LOCATION_CHANGE} from "./actionTypes";


//-------------------------------------------------------------------------------------------------------------------//


/** history: 因无法设置 state 的 初始值，所以才需要外部传入 **/
export default function (history) {

    const initial = {

        action: history.action,
        location: history.location
    };

    return function (state = initial, action) {

        switch (action.type) {

            case LOCATION_CHANGE:
                return action.type;
            default:
                return state;
        }
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
