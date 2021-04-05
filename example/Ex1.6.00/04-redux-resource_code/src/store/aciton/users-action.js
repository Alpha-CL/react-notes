///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


// AddUser Action

export const ADDUSERTYPE = Symbol('add-user');

export const createAddUserAction = (user) => ({

    type: ADDUSERTYPE,
    payload: user
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// DeleteUser Action

export const DELETEUSERTYPE = Symbol('delete-user');

export const createDeleteUserAction = (id) => ({

    type: DELETEUSERTYPE,
    payload: id
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// UpdateUser Action

export const UPDATEUSERTYPE = Symbol('update-user');

export const createUpdateUserAction = (id, newUserData) => ({

    type: UPDATEUSERTYPE,
    payload: {
        ...newUserData,
        id
    }
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//-------------------------------------------------------------------------------------------------------------------//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
