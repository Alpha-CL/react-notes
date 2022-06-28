///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


const SETLOGINUSERTYPE = Symbol('set-login-user');

function createSetLoginUserAction(user) {

    return {

        type: SETLOGINUSERTYPE,
        payload: user
    }
}


export const GET_TEST_TYPE = Symbol('getTest');

export const getTestAction = (payload) => ({
    type: GET_TEST_TYPE,
    payload: payload
});


//-------------------------------------------------------------------------------------------------------------------//


export {
    SETLOGINUSERTYPE,
    createSetLoginUserAction
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
