///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {actionTypes} from "./action-type";


//-------------------------------------------------------------------------------------------------------------------//


const numberActions = {

    getIncreaseAction,
    getDecreaseAction,
    getSetAction
};


function getIncreaseAction() {

    return {

        type: actionTypes.INCREASE
    }
}


function getDecreaseAction() {

    return {
        type: actionTypes.DECREASE
    }
}


function getSetAction(newNum) {

    return {
        type: actionTypes.SET,
        payload: newNum
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    numberActions
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
