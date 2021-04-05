///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {getAllStudents} from "../../services/fetchStudents";


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


// SetUsers Action

export const SETUSERSTYPE = Symbol('set-users');

export const createSetUsersAction = (users) => ({

    type: SETUSERSTYPE,
    payload: users
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// SetLoading Action

export const SETLOADINGTYPE = Symbol('set-loading');

export const createSetLoadingAction = (isLoading) => ({

    type: SETLOADINGTYPE,
    payload: isLoading
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * thunk 允许 action_fn 返回 "有副作用的异步函数"
 *
 *
 ** 当 dispatch(aciton); 分发 "aciton 返回为 具有副作用函数时( thunk_action_fn )" 时
 ** thunk 会阻止该 action 继续向后 传递，并调用该 aciton 返回的副作用函数( thunk_action_fn )
 */

export function fetchUsers() {

    /**
     * function (dispatch, getState, extra);
     *
     * @dispatch:               // store.dispatch
     * @getState:               // store.getState
     * @extra: 自定义剩余参数     // restParams      利用 thunk.withExtraArgument(params);
     *                          //                 当设置后，应用该中间件的后代都会传递 params
     */

    return async function (dispatch, getState, extra) {

        dispatch(createSetLoadingAction(true));

        const users = await getAllStudents(),
            action = createSetUsersAction(users);

        dispatch(action);
        dispatch(createSetLoadingAction(false));
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
