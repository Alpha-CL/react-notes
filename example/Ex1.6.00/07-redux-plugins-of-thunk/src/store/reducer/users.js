///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import * as userAction from "../aciton/users-action";
import {v4 as uuid} from "uuid";

//-------------------------------------------------------------------------------------------------------------------//


const usersInitialState = {

    isLoading: false,
    datas: []
};

export default (state = usersInitialState, {type, payload}) => {

    switch (type) {

        case userAction.ADDUSERTYPE:
            return {
                ...state,
                datas: [
                    ...state.datas,
                    payload
                ]
            };

        case userAction.DELETEUSERTYPE:
            return {
                ...state,
                datas: state.datas.filter(it => it.id !== payload)
            };

        case userAction.UPDATEUSERTYPE:
            return {
                ...state,
                datas: state.map(it => it.id === payload.id ? {...it, ...payload} : it)
            };

        case userAction.SETUSERSTYPE:
            return {
                ...state,
                payload
            };
        case userAction.SETLOADINGTYPE:
            return {
                ...state,
                isLoading: payload
            };

        default:
            return state;
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
