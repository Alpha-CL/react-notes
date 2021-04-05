///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


// increase Action

export const INCREASETYPE = Symbol('increase');

export const createIncreaseAction = (payload) => ({

    type: INCREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// decrease Action

export const DECREASETYPE = Symbol('decrease');

export const createDecreaseAction = (payload) => ({

    type: DECREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// Increase Action

export const ASYNCINCREASETYPE = Symbol('async-Increase');

export const asyncIncreaseAction = (payload) => ({

    type: ASYNCINCREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// Decrease Action

export const ASYNCDECREASETYPE = Symbol('async-Decrease');

export const asyncDecreaseAction = (payload) => ({

    type: ASYNCDECREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// autoIncrease Action

export const AUTOINCREASETYPE = Symbol('auto-increase');

export const createAutoIncreaseAction = (payload) => ({

    type: AUTOINCREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// stopAutoIncrease Action

export const STOPAUTOINCREASETYPE = Symbol('stop-auto-increase');

export const createStopAutoIncreaseAction = (payload) => ({

    type: STOPAUTOINCREASETYPE,
    payload: payload
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
