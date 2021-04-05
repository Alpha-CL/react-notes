///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import * as userAction from "../aciton/users-action";
import {v4 as uuid} from "uuid";

//-------------------------------------------------------------------------------------------------------------------//


const usersInitialState = [
    {id: uuid(), name: 'user_01', age: 10},
    {id: uuid(), name: 'user_02', age: 11},
    {id: uuid(), name: 'user_03', age: 12},
];

export default (state = usersInitialState, {type, payload}) => {

    switch (type) {

        case userAction.ADDUSERTYPE:
            return {...state, payload};
        case userAction.DELETEUSERTYPE:
            return state.filter(it => it.id !== payload);
        case userAction.UPDATEUSERTYPE:
            return state.map(it => it.id === payload.id ? {...it, ...payload} : it);
        default:
            return state;
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
